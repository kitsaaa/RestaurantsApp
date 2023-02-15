import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list'
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostComponent } from './components/post/post.component';
import { NewpostComponent } from './components/newpost/newpost.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { NewAdminComponent } from './components/new-admin/new-admin.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { AboutComponent } from './components/about/about.component';
import { SortFilterComponent } from './components/sort-filter/sort-filter.component';
import { ModifypostComponent } from './components/modifypost/modifypost.component';
import { AnimationLoginComponent } from './components/animation-login/animation-login.component';
import { TableComponent } from './components/table/table.component';
import { EditapostComponent } from './components/editapost/editapost.component';
import { EditonepostComponent } from './components/editonepost/editonepost.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminloginComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    NavigateComponent,
    PostComponent,
    NewpostComponent,
    AddAdminComponent,
    NewAdminComponent,
    AddPostComponent,
    HomeHeaderComponent,
    AboutComponent,
    SortFilterComponent,
    ModifypostComponent,
    AnimationLoginComponent,
    TableComponent,
    EditapostComponent,
    EditonepostComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
