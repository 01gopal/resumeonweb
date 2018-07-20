import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../services/resume-data.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  technologies: any;
  expandAll: boolean;
  expandText: string = "+";
  selection: string = "Backend-Java";
  constructor(private dataService: ResumeDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selection = params['name'];
    });

    this.dataService.getUserData().subscribe(data => {
        this.technologies = data.technologies;
      }, error => console.log(error));
  }

  toggleExpandAll(): void {
    this.expandAll = !this.expandAll;
    this.selection = null;
    if (this.expandAll) {
      this.expandText = "-";
    } else {
      this.expandText = "+";
    }
  }

}
