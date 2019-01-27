import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class BluffService {
  // private bluffBae = 'http://35.234.145.74:8080/';
  private bluffBae = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  verifyImage(token: string, user_id: string, image: string) {
    log(token);
    const body = {'token': token, 'user_id': user_id, 'image': image};
    return this.http.post(this.bluffBae + 'authenticate/', body);
  }

  enrollImage(user_id: string, image: string) {
    const body = {'user_id': user_id, 'image': image};
    return this.http.post(this.bluffBae + 'enroll/', body);
  }
}
