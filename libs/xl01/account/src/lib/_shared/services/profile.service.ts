import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ManagerServiceModule } from './maneger-service.module';
import { RouteApiService } from './route-api.service';
import {UserProfileDto} from '../_interfaces/user-profileDto.model'
import {UserManagerService} from '@x01-v1/xl01/auth-service'






@Injectable({
  providedIn: ManagerServiceModule
})
export class ProfileService {
  readonly _controller: string = 'Account';
  readonly _action = 'Profile';

  constructor(
    private http: HttpClient,
    private userManager:UserManagerService,
    private url: RouteApiService
  ) {
    url.Controller = this._controller;
    url.Action = this._action;
  }

  public Get(): Observable<UserProfileDto> {
    this.url.Controller=this._controller;
    this.url.Action = 'Profile';
    this.url.ID=null;

    let headers: HttpHeaders = new HttpHeaders({
      Accept: 'application/json',
      Authorization: 'Bearer ' + this.userManager.AccessToken,
    });

    return this.http.get<UserProfileDto>(this.url.Url, {
      headers
    }); //
  }

/*   public Create(user: User): Observable<any> {
    // throw new Error("Not implict");
    this.url.Action = 'Register';

    return this.http.post<any>(this.url.Url, user);
  } */
  public Update(user: UserProfileDto): Observable<any> {
     throw new Error("Not implict");
    this.url.Action = 'Edit';
    let headers: HttpHeaders = new HttpHeaders({
      Accept: 'application/json',
      Authorization: 'Bearer ' + this.userManager.AccessToken,
    });
    return this.http.put(this.url.Url, user, { headers });
  }

  public Delete(id: string): Observable<any> {
    throw new Error("Not implict");
    this.url.Action = 'delete';
    let headers: HttpHeaders = new HttpHeaders({
      Accept: 'application/json',
      Authorization: 'Bearer ' + this.userManager.AccessToken,
    });
    let url = this.url.Url + '/' + id;
    return this.http.delete(url, { headers });
  }
}
