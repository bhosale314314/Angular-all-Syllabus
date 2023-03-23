import { expectFileMatchToExist, expectFileToMatch, writeMultipleFiles } from '../../utils/fs';
import { ng } from '../../utils/process';
import { updateJsonFile, updateTsConfig } from '../../utils/project';

function getScriptsFilename(): Promise<string> {
  return expectFileMatchToExist('dist/test-project/', /external-module\.[0-9a-f]{16}\.js/);
}

export default async function () {
  // verify content hash is based on code after optimizations
  await writeMultipleFiles({
    'src/script.js': 'try { console.log(); } catch {}',
  });
  await updateJsonFile('angular.json', (configJson) => {
    const build = configJson.projects['test-project'].architect.build;
    build.options['scripts'] = [
      {
        input: 'src/script.js',
        inject: true,
        bundleName: 'external-module',
      },
    ];
    build.configurations['production'].outputHashing = 'all';
    configJson['cli'] = { cache: { enabled: 'false' } };
  });
  await updateTsConfig((json) => {
    json['compilerOptions']['target'] = 'es2017';
    json['compilerOptions']['module'] = 'es2020';
  });
  await ng('build', '--configuration=production');
  const filenameBuild1 = await getScriptsFilename();
  await expectFileToMatch(`dist/test-project/${filenameBuild1}`, 'try{console.log()}catch(c){}');

  await updateTsConfig((json) => {
    json['compilerOptions']['target'] = 'es2019';
  });
  await ng('build', '--configuration=production');
  const filenameBuild2 = await getScriptsFilename();
  await expectFileToMatch(`dist/test-project/${filenameBuild2}`, 'try{console.log()}catch{}');
  if (filenameBuild1 === filenameBuild2) {
    throw new Error(
      'Contents of the built file changed between builds, but the content hash stayed the same!',
    );
  }
}
