import { Component } from '@angular/core';
import { ResumeDataService } from './services/resume-data.service';

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

  contactHideShowText: string = "-";
  showContacts: boolean = true;

  isSummarySelected: boolean = true;
  isTechnologiesSelected: boolean;
  isExperienceSelected: boolean;
  isProjectSelected: boolean;
  isMoreSelected: boolean;

  data: any;

  constructor(private dataService: ResumeDataService) {
  }

  ngOnInit() {
    this.dataService.getUserData().subscribe(data => {
      this.user = data.user;
      this.technologies = data.technologies;
      this.experiences = data.experiences;
    }, error => console.log(error));
  }

  toggleNavbar(): void {
    this.isNavbarShow = !this.isNavbarShow;
  }

  navbarClicked(selection: string): void {
    this.isSummarySelected = false;
    this.isTechnologiesSelected = false;
    this.isExperienceSelected = false;
    this.isProjectSelected = false;
    this.isMoreSelected = false;

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
      case 'more':
        this.isMoreSelected = true;
        this.technologiesShow = false;
        this.expToggle = false;
        this.projToggle = false;
    }
  }

  clickedOutside(selection: string): void {
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

  toggleShowContacts(): void{
    this.showContacts = !this.showContacts;
    if (this.showContacts) {
      this.contactHideShowText = "-";
    } else {
      this.contactHideShowText = "+";
    }
  }
}
