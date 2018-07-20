import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../services/resume-data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: any[];
  constructor(private dataService: ResumeDataService) { }

  ngOnInit() {
    this.dataService.getUserData().subscribe(data => {
      this.experiences = data.experiences;
    }, error => console.log(error));
  }

}
