import { Component, OnInit } from '@angular/core';
import {WebcamImage} from 'ngx-webcam';
import {Observable, Subject} from 'rxjs';
import {AuthResponse, BluffService} from '../bluff.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  private trigger: Subject<void> = new Subject<void>();
  private token: string;
  private user_id: string;
  private success = false;

  constructor(private route: ActivatedRoute, private bluffService: BluffService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.token = params['token'];
      this.user_id = params['user_id'];
    });
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.bluffService.verifyImage(this.token, this.user_id, webcamImage.imageAsBase64).subscribe(
      (response: AuthResponse) => this.success = response.success);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public triggerAuthentication(): void {
    this.trigger.next();
  }
}
