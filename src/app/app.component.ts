import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  user: any;
  technologies: any[];
  experiences: any[];
  technologiesShow: boolean;
  expToggle: boolean;
  projToggle: boolean;
  isNavbarShow: boolean;

  isSummarySelected: boolean = true;
  isTechnologiesSelected: boolean;
  isExperienceSelected: boolean;
  isProjectSelected: boolean;

  ngOnInit() {
    this.user = {
      name: 'Gopal Sharma',
      email: '01gopal@gmail.com',
      phone: '0451046283',
      address: '8 Tanino Rd, Cranbourne West, Victoria - 3977'
    }

    this.technologies = [
      {
        name: 'Java',
        experience: '8.5 Years',
        substack: [
          'Java 1.6',
          'Java 1.7',
          'Java 8',
          'Java 9'
        ]
      },
      {
        name: 'Spring-Framework',
        experience: "6 Years",
        substack: [
          'Spring-IOC',
          'Spring-BATCH',
          'Spring-DATA',
          'Spring-BOOT'
        ]
      },
      {
        name: 'JavaScript-Framework',
        experience: "3 Years",
        substack: [
          'AngularJS',
          'Angular2/4',
          'ReactJS',
          'NodeJS'
        ]
      },
      {
        name: 'Database',
        experience: '7 Months',
        substack: [
          'Oracle',
          'MySql',
          'MongoDB'
        ]
      }
    ];
    this.experiences = [
      {
        company: 'Cognizant Technology Solution',
        shortName: 'Cognizant',
        location: 'Melbourne, Australia',
        address: '15 William St, Melbourne, Victoria - 3000',
        start: '2 July 2018',
        end: '',
        description: '',
        projects: [
        ]
      },
      {
        company: 'Sydac',
        shortName: 'Sydac',
        location: 'Adelaide, Australia',
        address: '153 Wakefield St, Adelaide, South Australia - 5000',
        start: '10 Jan 2018',
        end: '28 Jun 2018',
        description: '',
        projects: [
          {
            name: 'Freight Sim Simulator',
            short: 'FSS',
            start: '',
            end: '',
            technologies: [
              '', ''
            ],
            description: ''
          }
        ]
      },
      {
        company: 'The Royal Bank of Scotland',
        shortName: 'RBS',
        location: 'Gurugram, India',
        address: 'Infospace, Sector - 21, Gurugram, Haryana, India',
        start: '01 Sep 2014',
        end: '28 Dec 2017',
        description: '',
        projects: [
          {
            name: 'Ignite Batch Orchestrator',
            short: 'IBO',
            start: '',
            end: '',
            technologies: [
              '', ''
            ],
            description: ''
          },
          {
            name: 'Feeds Manager - Revamp',
            short: 'FMR',
            start: '',
            end: '',
            technologies: [
              '', ''
            ],
            description: ''
          },
          {
            name: 'Fx Rates',
            short: 'FxR',
            start: '',
            end: '',
            technologies: [
              '', ''
            ],
            description: ''
          }
        ]
      },
      {
        company: 'Aricent Technologies',
        shortName: 'Aricent',
        location: 'Gurugram, India',
        address: 'Infotech, Sector - 21, Gurugram, Haryana, India',
        start: '16 Nov 2009',
        end: '29 Aug 2014',
        description: '',
        projects: [
          {
            name: 'Smart Metering Management',
            short: 'SMM',
            start: '',
            end: '',
            technologies: [
              '', ''
            ],
            description: 'Copernicuslaan 50 2018 Antwerp, Belgium'
          }
        ]
      }
    ];
  }

  toggleNavbar(): void {
    this.isNavbarShow = !this.isNavbarShow;
  }

  navbarClicked(selection: string): void {
    this.isSummarySelected = false;
    this.isTechnologiesSelected = false;
    this.isExperienceSelected = false;
    this.isProjectSelected = false;

    switch (selection) {
      case 'summary':
        this.isSummarySelected = true;
        this.technologiesShow = false;
        this.expToggle = false;
        this.projToggle = false;
        break;
      case 'technologies':
        this.isTechnologiesSelected = true;
        this.technologiesShow = !this.technologiesShow;
        this.expToggle = false;
        this.projToggle = false;
        break;
      case 'experience':
        this.isExperienceSelected = true;
        this.expToggle = !this.expToggle;
        this.technologiesShow = false;
        this.projToggle = false;
        break;
      case 'project':
        this.isProjectSelected = true;
        this.projToggle = !this.projToggle;
        this.technologiesShow = false;
        this.expToggle = false;
        break;
    }
  }

  clickedOutside(selection: string) : void {
    switch (selection) {
      case 'technologies':
        this.technologiesShow = false;
        break;
      case 'experience':
        this.expToggle = false;
        break;
      case 'project':
        this.projToggle = false;
        break;
    }
  }
}
