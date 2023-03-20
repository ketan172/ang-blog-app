import { SubscribersService } from './../services/subscribers.service';
import { Component } from '@angular/core';
import { Sub } from '../models/sub';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {
  

  isEmailError:boolean =false;
  isSubscribed:boolean=false;

  constructor(private subService:SubscribersService){

  }
  onSubmit(formVal: any) {
    const subData: Sub ={
      name:formVal.name,
      email: formVal.email
    }
    // this.subService.addSubs(subData)
    this.subService.checkSubs(subData.email).then(val => {
      console.log(val);
      if(val.empty ){
        this.subService.addSubs(subData)
        this.isSubscribed=true;
      }else {
        console.log('Email Address already in use.');
        this.isEmailError=true;
      }
    })
  }
}
