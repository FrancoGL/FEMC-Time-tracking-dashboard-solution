import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivityService} from "../../../common/services/activity.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-c-activity',
  templateUrl: './c-activity.component.html',
  styleUrls: ['./c-activity.component.scss']
})
export class CActivityComponent implements OnInit, OnDestroy{

  subscription!: Subscription;
  activities!: any;
  currentTimeFrame: string = 'Daily'
  timeFrameData: any;

  constructor(private activityService: ActivityService) {
  }

  ngOnInit() {
    this.subscription = this.activityService.getAll().subscribe((res) => {
      this.activities = res
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
