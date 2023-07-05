import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  currentTimeFrame: string = 'Daily'

  private changeTimeFrame: Subject<string> = new Subject<string>()

  dataPath: string = "../../assets/data/data.json"

  constructor(private http: HttpClient) {
    this.changeTimeFrame.subscribe((value) => {
      this.currentTimeFrame = value
    })
  }

  getAll() {
    return this.http.get(this.dataPath)
  }

  changeCurrentTimeFrame(newTimeFrame: string) {
    this.changeTimeFrame.next(newTimeFrame)
  }
}
