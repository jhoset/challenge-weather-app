import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WeatherResponse} from "./interfaces/req-response";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseApiUrl: string = 'https://api.weather.gov/gridpoints';
  private defaultGridPoints: string = '31,80';

  constructor(private _http: HttpClient) {
  }

  public getWeatherForecastDataByOfficeId(officeId: string) {
    return this._http.get<WeatherResponse>(`${this.baseApiUrl}/${officeId}/${this.defaultGridPoints}/forecast`)
      .pipe(
        map(response => response.properties)
      );
  }
}
