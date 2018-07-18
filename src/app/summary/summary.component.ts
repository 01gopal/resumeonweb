import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  showExecutiveSummary: boolean = false;
  executiveSummary: string[];
  constructor() { }

  ngOnInit() {
    this.executiveSummary = [
      'Strong experience in JDK 1.6/1.7/1.8 - Framework design with Generics & Thread Programming.',
      'Strong experience in developing MicroServices architecture using SpringBoot 1.5.',
      'Strong experience in Finance domain with multithreaded J2EE applications.',
      'Strong experience in Spring IOC/MVC, Spring-batch and Spring-data.',
      'Strong experience in SOA based application development.',
      'Strong experience with repository services like Git, BitBucket(jira/confluence), SVN & Clearcase.',
      'Good experience in creating builds piplines / chains using Teamcity/Jenkins.',
      'Good experience in building web services using REST and SOAP.',
      'Good experience in UI development with AngularJS, JS, CSS, HTML and JavaFX.',
      'Good experience on mapping framework Hibernate 3.0',
      'Good experience in Oracle (10g/11g) PL/SQL programming and no-sql db (Mongo-dB)',
      'Good experience of Design Pattern (Circuit Breaker, Singleton, Factory, Observer, Builder, Visitor etc.)',
      'Well versed in Junit testing framework using Mockito, PowerMock and WireMockService.',
      'Well versed in log4j and logback logging.',
      'Well versed with Agile Methodology and Scrum implementation of Software development.',
      'Hands on experience on IDE like Eclipse and IntelliJ IDEA development tool.',
      'Ability to quickly master new software tools and applies its full range of capabilities',
      'Good interpersonal and communication skills.',
    ];
  }

  toggleExecutiveSummary(): void {
    this.showExecutiveSummary = !this.showExecutiveSummary;
  }
}
