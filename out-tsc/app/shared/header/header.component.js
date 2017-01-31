var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AuthService } from "../../auth/auth.service";
import { Router } from "@angular/router";
export var HeaderComponent = (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.signOut = function () {
        this.authService.signOut();
        console.log('signed out!');
    };
    HeaderComponent.prototype.isAuthenticated = function () {
        return this.authService.isAuthenticated();
    };
    HeaderComponent.prototype.signIn = function () {
        this.router.navigate(['login']);
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'pa-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }), 
        __metadata('design:paramtypes', [AuthService, Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=C:/Users/REEKOH INC/Desktop/Reekoh/patricka-app/src/app/shared/header/header.component.js.map