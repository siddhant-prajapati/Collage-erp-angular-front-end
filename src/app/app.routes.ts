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
import { ComputerComponent } from './pages/department/computer/computer.component';
import { ItComponent } from './pages/department/it/it.component';
import { CivilComponent } from './pages/department/civil/civil.component';
import { ChemicalComponent } from './pages/department/chemical/chemical.component';
import { MechanicalComponent } from './pages/department/mechanical/mechanical.component';
import { DepartmentComponent } from './pages/department/department.component';
import { FacultyProfileComponent } from './components/staffs/faculty-profile/faculty-profile.component';
import { StudentProfileComponent } from './components/students/student-profile/student-profile.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AllDepartmentInfoComponent } from './pages/department/all-department-info/all-department-info.component';
import { ElectricalComponent } from './pages/department/electrical/electrical.component';
import { authGuard } from './guards/auth.guard';
import { UpdateStaffFormComponent } from './components/staffs/update-staff-form/update-staff-form.component';
import { UpdateStudentFormComponent } from './components/students/update-student-form/update-student-form.component';
import { FillStudentAttendanceComponent } from './components/fill-attendance/fill-student-attendance/fill-student-attendance.component';
import { FillStaffAttendanceComponent } from './components/fill-attendance/fill-staff-attendance/fill-staff-attendance.component';
import { StudentErpComponent } from './components/students/student-erp/student-erp.component';
import { StudentsComponent } from './components/students/students.component';
import { AddStudentComponent } from './components/students/add-student/add-student.component';
import { StudentFormComponent } from './components/students/student-erp/student-form/student-form.component';
import { StaffErpComponent } from './components/staffs/staff-erp/staff-erp.component';
import { StaffsComponent } from './components/staffs/staffs.component';
import { ForgetPasswordComponent } from './pages/login/forget-password/forget-password.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { staffAuthGuard } from './guards/staff-auth.guard';
import { adminAuthGuard } from './guards/admin-auth.guard';
import { UpdateAdminFormComponent } from './components/admins/update-admin-form/update-admin-form.component';
import { CreateAdminFormComponent } from './components/admins/create-admin-form/create-admin-form.component';
import { ExamsComponent } from './components/exams/exams.component';

export const routes: Routes = [
    { path: '', component: FirstPageComponent, title: "V.V.P. Engineering Collage" },
    {
        path: 'layout',
        component: AppLayoutComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
                title: "V.V.P. Engineering Collage-Home"
            },
            {
                path: 'about',
                //component : AboutComponent,
                loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent),
                children: [
                    {
                        path: '',
                        component: DefaultTextComponent
                    },
                    {
                        path: 'governing-body',
                        component: GoverningBodyComponent
                    },
                    {
                        path: 'message-chairman',
                        component: MessageChairmanComponent
                    },
                    {
                        path: 'message-principal',
                        component: MessagePrincipalComponent
                    }
                ],
                title: "V.V.P. Engineering Collage-About"
            },
            {
                path: 'admission',
                component: AdmissionFormComponent,
                title: "V.V.P. Engineering Collage-Admission"
            },
            {
                path: 'alumni',
                component: AlumniComponent,
                title: "V.V.P. Engineering Collage-Alumni"
            },
            {
                path: 'contact',
                component: ContactComponent,
                title: "V.V.P. Engineering Collage-Contact",
                canActivate: [authGuard]
            },
            {
                path: 'department',
                //component : DepartmentComponent ,
                loadComponent: () => import('./pages/department/department.component').then(c => c.DepartmentComponent),
                children: [
                    {
                        path: '',
                        component: AllDepartmentInfoComponent,
                    },
                    {
                        path: 'computer',
                        //component : ComputerComponent, 
                        loadComponent: () => import('./pages/department/computer/computer.component').then(c => c.ComputerComponent),
                        title: "V.V.P. Engineering Collage-Computer",
                        children: [
                            {
                                path: 'faculties',
                                component: StaffsComponent,
                                children: [
                                    { path: 'all', component: FacultyProfileComponent },
                                    { path: 'erp', component: StaffErpComponent, canActivate: [authGuard, adminAuthGuard], }
                                ]
                            },
                            {
                                path: 'students',
                                component: StudentsComponent,
                                canActivate: [authGuard, staffAuthGuard],
                                children: [
                                    { path: 'all', component: StudentProfileComponent },
                                    { path: 'erp', component: StudentErpComponent },
                                    { path: 'exam', component: ExamsComponent, canActivate: [authGuard, staffAuthGuard], },
                                ]
                            },
                            {
                                path: 'attendance',
                                canActivate: [authGuard],
                                children: [
                                    {
                                        path: 'student', component: FillStudentAttendanceComponent, canActivate: [authGuard, staffAuthGuard],
                                    },
                                    {
                                        path: 'staff', component: FillStaffAttendanceComponent, canActivate: [authGuard, adminAuthGuard],
                                    }
                                ]
                            },

                        ]
                    },
                    {
                        path: 'it',
                        //component : ItComponent,
                        loadComponent: () => import('./pages/department/it/it.component').then(c => c.ItComponent),
                        title: "V.V.P. Engineering Collage-IT",
                        children: [
                            {
                                path: 'faculties',
                                component: StaffsComponent,
                                children: [
                                    { path: 'all', component: FacultyProfileComponent },
                                    { path: 'erp', component: StaffErpComponent, canActivate: [authGuard, adminAuthGuard], }
                                ]
                            },
                            {
                                path: 'students',
                                component: StudentsComponent,
                                canActivate: [authGuard, staffAuthGuard],
                                children: [
                                    { path: 'all', component: StudentProfileComponent },
                                    { path: 'erp', component: StudentErpComponent },
                                    { path: 'exam', component: ExamsComponent, canActivate: [authGuard, staffAuthGuard], },
                                ]
                            },
                            {
                                path: 'attendance/student',
                                canActivate: [authGuard, staffAuthGuard],
                                component: FillStudentAttendanceComponent,

                            },
                            {
                                path: 'attendance/staff',
                                canActivate: [authGuard, adminAuthGuard],
                                component: FillStaffAttendanceComponent
                            }
                        ]
                    },
                    {
                        path: 'civil',
                        //component : CivilComponent,
                        loadComponent: () => import('./pages/department/civil/civil.component').then(c => c.CivilComponent),
                        title: "V.V.P. Engineering Collage-Civil",
                        children: [
                            {
                                path: 'faculties',
                                component: StaffsComponent,
                                children: [
                                    { path: 'all', component: FacultyProfileComponent },
                                    { path: 'erp', component: StaffErpComponent, canActivate: [authGuard, adminAuthGuard], }
                                ]
                            },
                            {
                                path: 'students',
                                component: StudentsComponent,
                                canActivate: [authGuard, staffAuthGuard],
                                children: [
                                    { path: 'all', component: StudentProfileComponent },
                                    { path: 'erp', component: StudentErpComponent },
                                    { path: 'exam', component: ExamsComponent, canActivate: [authGuard, staffAuthGuard], },
                                ]
                            },
                            {
                                path: 'attendance/student',
                                canActivate: [authGuard, staffAuthGuard],
                                component: FillStudentAttendanceComponent
                            },
                            {
                                path: 'attendance/staff',
                                canActivate: [authGuard, adminAuthGuard],
                                component: FillStaffAttendanceComponent
                            }
                        ]
                    },
                    {
                        path: 'chemical',
                        //component : ChemicalComponent, 
                        loadComponent: () => import('./pages/department/chemical/chemical.component').then(c => c.ChemicalComponent),
                        title: "V.V.P. Engineering Collage-Chemical",
                        children: [
                            {
                                path: 'faculties',
                                component: StaffsComponent,
                                children: [
                                    { path: 'all', component: FacultyProfileComponent },
                                    { path: 'erp', component: StaffErpComponent, canActivate: [authGuard, adminAuthGuard], }
                                ]
                            },
                            {
                                path: 'students',
                                component: StudentsComponent,
                                canActivate: [authGuard, staffAuthGuard],
                                children: [
                                    { path: 'all', component: StudentProfileComponent },
                                    { path: 'erp', component: StudentErpComponent },
                                    { path: 'exam', component: ExamsComponent, canActivate: [authGuard, staffAuthGuard], },
                                ]
                            },
                            {
                                path: 'attendance/student',
                                canActivate: [authGuard, staffAuthGuard],
                                component: FillStudentAttendanceComponent
                            },
                            {
                                path: 'attendance/staff',
                                canActivate: [authGuard, adminAuthGuard],
                                component: FillStaffAttendanceComponent
                            }
                        ]
                    },
                    {
                        path: 'mechanical',
                        //component : MechanicalComponent,
                        loadComponent: () => import('./pages/department/mechanical/mechanical.component').then(c => c.MechanicalComponent),
                        title: "V.V.P. Engineering Collage-Mechanical",
                        children: [
                            {
                                path: 'faculties',
                                component: StaffsComponent,
                                children: [
                                    { path: 'all', component: FacultyProfileComponent },
                                    { path: 'erp', component: StaffErpComponent, canActivate: [authGuard, adminAuthGuard], }
                                ]
                            },
                            {
                                path: 'students',
                                component: StudentsComponent,
                                canActivate: [authGuard, staffAuthGuard],
                                children: [
                                    { path: 'all', component: StudentProfileComponent },
                                    { path: 'erp', component: StudentErpComponent },
                                    { path: 'exam', component: ExamsComponent, canActivate: [authGuard, staffAuthGuard], },
                                ]
                            },
                            {
                                path: 'attendance/student',
                                canActivate: [authGuard, staffAuthGuard],
                                component: FillStudentAttendanceComponent,

                            },
                            {
                                path: 'attendance/staff',
                                canActivate: [authGuard, adminAuthGuard],
                                component: FillStaffAttendanceComponent
                            }
                        ]
                    },
                    {
                        path: 'electrical',
                        //component :ElectricalComponent,
                        loadComponent: () => import('./pages/department/electrical/electrical.component').then(c => c.ElectricalComponent),
                        title: "V.V.P. Engineering Collage-Electrical",
                        children: [
                            {
                                path: 'faculties',
                                component: StaffsComponent,
                                children: [
                                    { path: 'all', component: FacultyProfileComponent },
                                    { path: 'erp', component: StaffErpComponent, canActivate: [authGuard, adminAuthGuard], },
                                ]
                            },
                            {
                                path: 'students',
                                component: StudentsComponent,
                                canActivate: [authGuard, staffAuthGuard],
                                children: [
                                    { path: 'all', component: StudentProfileComponent },
                                    { path: 'erp', component: StudentErpComponent },
                                    { path: 'exam', component: ExamsComponent, canActivate: [authGuard, staffAuthGuard], },
                                ]
                            },
                            {
                                path: 'attendance/student',
                                canActivate: [authGuard, staffAuthGuard],
                                component: FillStudentAttendanceComponent
                            },
                            {
                                path: 'attendance/staff',
                                canActivate: [authGuard, adminAuthGuard],
                                component: FillStaffAttendanceComponent
                            }
                        ]
                    }
                ]
            },
            {
                path: 'account',
                //component : UserProfileComponent,
                loadComponent: () => import('./pages/user-profile/user-profile.component').then(c => c.UserProfileComponent),
                children: [
                    {
                        path: 'student/update',
                        component: UpdateStudentFormComponent
                    },
                    {
                        path: 'staff/update',
                        component: UpdateStaffFormComponent
                    },
                    {
                        path: 'admin/update',
                        component: UpdateAdminFormComponent
                    },
                    {
                        path: 'admin/create',
                        component: UpdateAdminFormComponent
                    }
                ],
                canActivate: [authGuard]
            }

        ],
        title: "V.V.P. Engineering Collage"
    },
    {
        path: 'layout',
        redirectTo: 'layout/dashboard'
    },
    {
        path: 'login',
        //component : LoginComponent ,
        loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent),
        title: "V.V.P. Engineering Collage -Login",
    },
    {
        path: 'forget',
        loadComponent: () => import('./pages/login/forget-password/forget-password.component').then(c => c.ForgetPasswordComponent),
        //component : ForgetPasswordComponent 
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: "V.V.P. Engineering Collage -SignUp"
    },
    {
        path: '**',
        //component : PageNotFoundComponent,
        loadComponent: () => import('./pages/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent),
    }

];
