import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../services/resume-data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  experiences: any[];
  constructor(private dataService: ResumeDataService) { }

  ngOnInit() {
    this.dataService.getUserData().subscribe(data => {
      this.experiences = data.experiences;
    }, error => console.log(error));
  }

}
