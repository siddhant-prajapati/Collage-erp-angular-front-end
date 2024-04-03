import { Routes } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AlumniComponent } from './pages/alumni/alumni.component';
import { AdmissionFormComponent } from './pages/admission-form/admission-form.component';
import { GoverningBodyComponent } from './pages/about/governing-body/governing-body.component';
import { MessageChairmanComponent } from './pages/about/message-chairman/message-chairman.component';
import { MessagePrincipalComponent } from './pages/about/message-principal/message-principal.component';
import { DefaultTextComponent } from './pages/about/default-text/default-text.component';

export const routes: Routes = [
    { path : '' , component : FirstPageComponent},
    { 
        path : 'layout', 
        component : AppLayoutComponent,
        children : [
            { path : '', component : DashboardComponent, title : "V.V.P. Engineering Collage-Home"},
            { 
                path : 'about', 
                component : AboutComponent, 
                children : [
                    { path : '', component : DefaultTextComponent },
                    { path : 'governing-body', component : GoverningBodyComponent},
                    { path : 'message-chairman', component : MessageChairmanComponent},
                    { path : 'message-principal', component : MessagePrincipalComponent}
                ],
                title : "V.V.P. Engineering Collage-About"
            },
            { path : 'admission', component : AdmissionFormComponent, title :"V.V.P. Engineering Collage-Admission"},
            { path : 'alumni', component : AlumniComponent, title : "V.V.P. Engineering Collage-Alumni"},
            { path : 'contact', component : ContactComponent, title : "V.V.P. Engineering Collage-Contact"}
        ],
        title : "V.V.P. Engineering Collage"
    },
    {
        path : 'layout', redirectTo : 'layout/dashboard'
    },
    {
        path : 'login', component : LoginComponent , title : "V.V.P. Engineering Collage -Login"
    },
    {
        path : 'signup', component : SignupComponent, title : "V.V.P. Engineering Collage -SignUp"
    }
    
];
