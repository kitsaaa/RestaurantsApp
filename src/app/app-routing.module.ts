import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NewpostComponent } from './components/newpost/newpost.component';
import { AboutComponent } from './components/about/about.component';
import { ModifypostComponent } from './components/modifypost/modifypost.component';
import { EditapostComponent } from './components/editapost/editapost.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserCommentManagerComponent } from './components/user-comment-manager/user-comment-manager.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'admin', component:AdminloginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'dashboard/addpost', component:NewpostComponent},
  {path:'dashboard/addadmin', component:AddAdminComponent},
  {path:'about', component:AboutComponent},
  {path:'dashboard/editpost', component:ModifypostComponent},
  {path: 'dashboard/editapost/:id', component:EditapostComponent},
  { path: "post/:_id", component: PostPageComponent},
  {path:'user', component:UserDashboardComponent},
  {path:'user/comments', component:UserCommentManagerComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
