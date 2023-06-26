import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  dataPath: string = "../../assets/data/data.json"

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.dataPath)
  }
}
