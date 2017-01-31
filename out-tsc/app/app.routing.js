import { RouterModule } from "@angular/router";
import { MessagePageComponent } from "./message-page/message-page.component";
import { LandingComponent } from "./landing/landing.component";
import { LoginComponent } from "./user/login/login.component";
import { SignUpComponent } from "./user/sign-up/sign-up.component";
import { AuthGuard } from "./guard/auth.guard";
var APP_ROUTES = [
    { path: 'login', component: LoginComponent },
    { path: 'message', component: MessagePageComponent, canActivate: [AuthGuard] },
    { path: 'signup', component: SignUpComponent },
    { path: 'landing', component: LandingComponent },
    { path: '', component: LandingComponent, pathMatch: 'full' },
    { path: '**', redirectTo: 'landing', pathMatch: 'full' }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=C:/Users/REEKOH INC/Desktop/Reekoh/patricka-app/src/app/app.routing.js.map