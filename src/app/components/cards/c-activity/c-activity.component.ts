import {Component, Input, OnDestroy, OnInit} from '@angular/core';
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

  constructor(private activityService: ActivityService) {
  }

  ngOnInit() {
    this.subscription = this.activityService.getAll().subscribe((res) => {
      this.activities = res
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  get getCurrentTime() {
    return this.activityService.currentTimeFrame
  }
}
