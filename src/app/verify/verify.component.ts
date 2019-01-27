import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {WebcamImage} from 'ngx-webcam';
import {Observable, Subject} from 'rxjs';
import {BluffService} from '../bluff.service';
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
  private camEnabled: boolean;


  constructor(private route: ActivatedRoute, private router: Router, private bluffService: BluffService) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.token = params['token'];
      this.user_id = params['user_id'];
    });

    this.camEnabled = false;


    // if (navigator.getUserMedia) {

    //   navigator.getUserMedia(

    //     {video: true}, 

    //     function(media) {
    //       // debugger;
    //       this.camEnabled = true;
    //        console.info('good to go');
    //     }.bind(this),

    //     function(err) {
    //       // debugger;
    //       this.camEnabled = false;
    //       console.error('enable plsss');
    //     }.bind(this)
    //     );
    // }
  }



  public handleImage(webcamImage: WebcamImage): void {
    this.bluffService.verifyImage(this.token, this.user_id, webcamImage.imageAsBase64).subscribe(
      (response: Object) => {
        console.info('response:', response);
      }
    );
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public triggerAuthentication(): void {
    this.trigger.next();
  }

}
