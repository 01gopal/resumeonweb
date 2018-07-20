import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { ClickOutsideModule } from 'ng-click-outside';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { MatExpansionModule } from '@angular/material';
const routesMap: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: 'technologies/:name', component: TechnologiesComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'project', component: ProjectComponent },
  { path: '', redirectTo: 'summary', pathMatch: 'full' },
  { path: '**', component: SummaryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    TechnologiesComponent,
    ExperienceComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    ClickOutsideModule,
    HttpModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(
      routesMap
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
