import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,  Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, Resolve<any> {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return false;
    let role = 1;
    //admin = 1
    //student 2
    // staff 3
    if(role == 1 || role == 3){
      return true;
    }
    else return false;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("This is resolver");
    return false;
  }


  // CanDeactivate(route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot){
  //     alert("Are u sure u want to remove");
  //   }
  
}
