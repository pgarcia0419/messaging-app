var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { HttpService } from "../http/http.service";
export var MessagePageComponent = (function () {
    function MessagePageComponent(fb, http) {
        this.fb = fb;
        this.http = http;
        this.messages = [];
        this.sendMessage = this.fb.group({
            'message': ['', Validators.required]
        });
    }
    MessagePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.fetchMessages()
            .subscribe(function (data) {
            var messages = [];
            for (var item in data) {
                messages.push(data[item]);
            }
            _this.messages = messages;
        });
    };
    MessagePageComponent.prototype.onSubmit = function () {
        this.http.storeMessage(this.sendMessage.value)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        // this.http.addMessage(this.sendMessage.value);
        this.messages.push(this.sendMessage.value);
    };
    MessagePageComponent.prototype.onDeleteMessage = function (message) {
        this.http.deleteMessage(message);
        this.messages.splice(this.messages.indexOf(message), 1);
    };
    MessagePageComponent.prototype.onEditMessage = function (message) {
    };
    MessagePageComponent = __decorate([
        Component({
            selector: 'pa-message-page',
            templateUrl: './message-page.component.html',
            styleUrls: ['./message-page.component.css'],
            animations: [
                trigger('list', [
                    state('in', style({
                        opacity: 1,
                        transform: 'translateX(0)'
                    })),
                    transition('void => *', [
                        style({
                            opacity: 0,
                            transform: 'translateX(-100px)'
                        }),
                        animate(300)
                    ]),
                    transition('* => void', [
                        animate(300, style({
                            transform: 'translateX(100px)',
                            opacity: 0
                        }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [FormBuilder, HttpService])
    ], MessagePageComponent);
    return MessagePageComponent;
}());
//# sourceMappingURL=C:/Users/REEKOH INC/Desktop/Reekoh/patricka-app/src/app/message-page/message-page.component.js.map