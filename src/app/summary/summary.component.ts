import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ResumeDataService } from '../services/resume-data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  user: any;
  showExecutiveSummary: boolean = false;
  showDetaiText: string = "more";
  showVideo: boolean = false;
  executiveSummary: string[];
  videoURL: string = "https://www.youtube.com/embed/wR3giskE8vk";
  safeURL: any;
  constructor(private _sanitizer: DomSanitizer, private dataService: ResumeDataService){
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
 }

  ngOnInit() {
    this.dataService.getUserData().subscribe(data => {
      this.user = data.user;
    }, error => console.log(error));
  }

  toggleExecutiveSummary(): void {
    this.showExecutiveSummary = !this.showExecutiveSummary;
    if (this.showExecutiveSummary) {
      this.showDetaiText = "less";
    } else {
      this.showDetaiText = "more";
    }
  }

  toggleShowVideo(): void {
    this.showVideo = !this.showVideo;
  }
}
