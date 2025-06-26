import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlippingApiService {

  constructor(private http: HttpClient) {}

  getFeaturesForProduct(backendUrl: string): Observable<Record<string, boolean>> {
    return this.http.get<Record<string, boolean>>(`${backendUrl}/v1/features`);
  }

  updateFeaturesForProduct(backendUrl: string, payload: Record<string, boolean>): Observable<void> {
    return this.http.put<void>(`${backendUrl}/v1/features`, payload);
  }
}
