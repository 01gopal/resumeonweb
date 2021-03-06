import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ResumeDataService } from '../services/resume-data.service';
import { moment } from '../../../node_modules/ngx-bootstrap/chronos/test/chain';
import { SecondsToTimePipe } from '../pipe/seconds-to-time.pipe';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  user: any;
  technologies: any[];
  experiences: any[];
  showExecutiveSummary: boolean = false;
  showDetaiText: string = "more";
  showVideo: boolean = false;
  executiveSummary: string[];
  dateFormat: string = "d MMM, y";
  videoURL: string = "https://www.youtube.com/embed/wR3giskE8vk";
  safeURL: any;

  constructor(private _sanitizer: DomSanitizer, private dataService: ResumeDataService) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
  }

  ngOnInit() {
    this.dataService.getUserData().subscribe(data => {
      this.user = data.user;
      this.technologies = data.technologies;
      this.experiences = data.experiences;
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

  calculationDuration(start: string, end: string): number {
    var startDate = moment(start, 'DD-MM-YYYY');
    var endDate = moment();
    if (end != null && end.length > 0) {
      endDate = moment(end, 'DD-MM-YYYY');
    }
    if (endDate > startDate) {
      return endDate.diff(startDate, "seconds");
    }
    return 0;
  }

  toDate(date: string): any {
    return moment(date, 'DD-MM-YYYY');
  }

  secondsToMonths(secs: number): number {
    return Math.floor(secs / 60);
  }
}
