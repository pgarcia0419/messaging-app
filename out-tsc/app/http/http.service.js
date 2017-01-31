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
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
export var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.messages = [];
    }
    HttpService.prototype.addMessage = function (message) {
        // this.messages.push(message);
    };
    HttpService.prototype.fetchMessages = function () {
        return this.http.get('https://patrick-app-8ff3c.firebaseio.com/messages.json')
            .map(function (response) { return response.json(); });
    };
    HttpService.prototype.storeMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post('https://patrick-app-8ff3c.firebaseio.com/messages.json', body, {
            headers: headers
        });
    };
    HttpService.prototype.deleteMessage = function (message) {
        // return this.http.remove('')
    };
    HttpService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], HttpService);
    return HttpService;
}());
//# sourceMappingURL=C:/Users/REEKOH INC/Desktop/Reekoh/patricka-app/src/app/http/http.service.js.map