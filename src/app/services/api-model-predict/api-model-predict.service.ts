import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiModelPredictService {

  baseUrl = environment.apiURL;

  constructor(private http: HttpClient) {}

  public PredictWithImage(objImage: any): Observable<{class_name: string, confidence_score: number}> {
    return this.http.post<{class_name: string, confidence_score: number}>(`${this.baseUrl}/predict`, objImage);
  }
}
