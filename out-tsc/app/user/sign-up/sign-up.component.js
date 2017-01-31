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
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../auth/auth.service";
export var SignUpComponent = (function () {
    function SignUpComponent(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.signUpForm = this.fb.group({
            'username': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.onSignUp = function () {
        this.authService.signUp(this.signUpForm.value);
    };
    SignUpComponent = __decorate([
        Component({
            selector: 'pa-sign-up',
            templateUrl: './sign-up.component.html',
            styleUrls: ['./sign-up.component.css']
        }), 
        __metadata('design:paramtypes', [FormBuilder, AuthService])
    ], SignUpComponent);
    return SignUpComponent;
}());
//# sourceMappingURL=C:/Users/REEKOH INC/Desktop/Reekoh/patricka-app/src/app/user/sign-up/sign-up.component.js.map