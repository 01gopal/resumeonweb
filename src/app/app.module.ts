import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
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
import { SecondsToTimePipe } from './pipe/seconds-to-time.pipe';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
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
    ProjectComponent,
    SecondsToTimePipe,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    ClickOutsideModule,
    HttpModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    ChartsModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(
      routesMap
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
