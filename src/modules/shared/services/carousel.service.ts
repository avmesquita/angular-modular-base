import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICarousel } from '../interrfaces/icarousel.interface';
import { IWebappResponse } from '../interrfaces/iwebapp-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  private controllerName: string = 'carousel';

  constructor(private http: HttpClient) { }

  getAllFake(): Observable<ICarousel[]> {
    return this.http.get<ICarousel[]>('/assets/data/carousel.json');    
  }

  getAll(): Observable<any> {    
    return this.http.get<any>(environment.apiUrl + this.controllerName + '/');    
  }

  lookupAll(): Observable<any> {    
    return this.http.get<any>(environment.apiUrl + this.controllerName + '/lookupAll/');    
  }

  getById(id: number): Observable<IWebappResponse> {    
    return this.http.get<IWebappResponse>(environment.apiUrl + this.controllerName + '/getById/' + id.toString());
  }

  delete(obj: ICarousel): Observable<any> {
    const params = new HttpParams().set('uuid', obj.uuid ? obj.uuid : '');
    return this.http.delete(environment.apiUrl + this.controllerName + '/', { observe: 'response', params: params });
  }

  save(obj: ICarousel): Observable<any> {
    return this.http.post(environment.apiUrl + this.controllerName + '/', obj, {observe: 'response'});
  }

  update(obj: ICarousel): Observable<any> {
    const params = new HttpParams().set('uuid', obj.uuid ? obj.uuid : '');
    return this.http.put<ICarousel>(environment.apiUrl + this.controllerName + '/', obj, { params: params, observe: 'response' });
  }
}
