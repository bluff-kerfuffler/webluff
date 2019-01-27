import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class BluffService {
  private bluffBae = 'IP OF BLUFF';

  constructor(private http: HttpClient) { }

  verifyImage(token: string, user_id: string, image: string) {
    log(token);
    const body = {'token': token, 'user_id': user_id, 'image': image};
    return this.http.post<AuthResponse>(this.bluffBae + 'authenticate/', body);
  }
}

export interface AuthResponse {
  success: boolean;
}
