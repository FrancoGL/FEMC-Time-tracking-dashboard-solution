import {Component, Output} from '@angular/core';
import {ActivityService} from "../../../common/services/activity.service";

@Component({
  selector: 'app-c-profile',
  templateUrl: './c-profile.component.html',
  styleUrls: ['./c-profile.component.scss']
})
export class CProfileComponent {

  constructor(private activityService: ActivityService) {
  }

  changeTimeFrame(timeFrame: string) {
    this.activityService.changeCurrentTimeFrame(timeFrame)
  }

  get getCurrentTime() {
    return this.activityService.currentTimeFrame
  }
}
