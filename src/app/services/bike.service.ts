import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bike, BikeSearchResponse } from '../models/bike.model';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private readonly _API_URL = 'https://bikeindex.org/api/v3';

  public constructor(private _http: HttpClient ) {}


  public searchBikes(location: string): Observable<BikeSearchResponse> {
    return this._http.get<BikeSearchResponse>(`${this._API_URL}/search`, {
      params: {
        location,
        distance: '10',
        stolenness: 'proximity',
        per_page: '100'
      }
    });
    }

  public getBikeDetails(id: number): Observable<{ bike: Bike }> {
    return this._http.get<{ bike: Bike }>(`${this._API_URL}/bikes/${id}`);
  }
}
