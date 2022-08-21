import { Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/AuthService";

@Injectable()

export class ServerGuards implements CanActivate{
    // route: any;
    constructor(private authService:AuthService,private route:Router){}
    // canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //     return this.canActivate(childRoute,state);
    // }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any>  {
        //this function will return a promise
        // return this.authService.isAuthenticated()
        // .then(
        //     (authenticated:boolean)=>{
        //         if(authenticated){
        //             return true;
        //         } else{
        //             this.route.navigate(['/']);
        //         }
        //     }
        // );
        if(await this.authService.isAuthenticated()){
            return true;
        } else{
            this.route.navigate(['/']);
        }
    }

}