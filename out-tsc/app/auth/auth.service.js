var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
export var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.signUp = function (user) {
        firebase.auth().createUserWithEmailAndPassword(user.username, user.password).catch(function (error) {
            // Handle Errors here.
            console.log(error);
            // ...
        });
    };
    AuthService.prototype.login = function (user) {
        firebase.auth().signInWithEmailAndPassword(user.username, user.password).catch(function (error) {
            // Handle Errors here.
            console.log(error);
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // ...
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        var user = firebase.auth().currentUser;
        if (user) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.signOut = function () {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
        }, function (error) {
            // An error happened.
        });
    };
    AuthService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
}());
//# sourceMappingURL=C:/Users/REEKOH INC/Desktop/Reekoh/patricka-app/src/app/auth/auth.service.js.map