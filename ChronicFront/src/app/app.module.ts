import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { KnowMoreComponent } from './pages/know-more/know-more.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { Dashboard1Component } from './pages/dashboard1/dashboard1.component';
import { Dashboard2Component } from './pages/dashboard2/dashboard2.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Dashboard3Component } from './pages/dashboard3/dashboard3.component';
import { DocdashboardComponent } from './pages/docdashboard/docdashboard.component';
import { NearestComponent } from './pages/nearest/nearest.component';
import { WeeklyComponent } from './pages/weekly/weekly.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { WeeklyGraphComponent } from './pages/weekly-graph/weekly-graph.component';
import { NgChartsModule } from 'ng2-charts';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { SymptomsComponent } from './pages/symptoms/symptoms.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DocappointmentComponent } from './pages/docappointment/docappointment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    KnowMoreComponent,
    LoginComponent,
    AboutusComponent,
    Dashboard1Component,
    Dashboard2Component,
    ContactComponent,
    Dashboard3Component,
    DocdashboardComponent,
    NearestComponent,
    WeeklyComponent,
    WeeklyGraphComponent,
    AppointmentComponent,
    SymptomsComponent,
    DocappointmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    NgChartsModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
