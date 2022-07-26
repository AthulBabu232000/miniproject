import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router, Routes } from '@angular/router';
import { BackEndService } from '../backend.service';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-detailentry',
  templateUrl: './detailentry.component.html',
  styleUrls: ['./detailentry.component.css'],
})
export class DetailentryComponent implements OnInit {
  userData = {
    aaAge: '0',
    abSugar: '0',
    acMaxHR: '0',
    adHeartDisease: '0',
    aeSex_F: '0',
    afSex_M: '0',
    agBPrange: '0',
    ahBPrange: '0',
    aiBPrange: '0',
    ajBPrange: '0',
    akBPrange: '0',
    alBPrange: '0',
    amBPrange: '0',
    anBPrange: '0',
    aoBPrange: '0',
    apBPrange: '0',
    aqBPrange: '0',
    arBPrange: '0',
    asBPrange: '0',
    atBPrange: '0',
    auBPrange: '0',
    avBPrange: '0',
    awBPrange: '0',
    axBPrange: '0',
    ayBPrange: '0',
    azBPrange: '0',
    baBPrange: '0',
    bbBPrange: '0',
  };
 
  userModel = new User('22', false, '0', false, '0', '0');
  constructor(
    private formBuilder: FormBuilder,
    private userDetails: UserService,
    private backEndService: BackEndService,
    private router:Router
  ) {}
  ngOnInit(): void {}
  onSubmit(): void {
   
    if (this.userModel.selection.toString() in this.userData) {
      console.log(this.userModel);
      Object.keys(this.userData).forEach((k) => {
        if (k == this.userModel.selection || k == this.userModel.gender) {
          this.userData[k as keyof typeof this.userData] = '1';
        } else {
          this.userData[k as keyof typeof this.userData] = '0';
        }
      });
    }

    this.userData.aaAge = this.userModel.aaAge;
    this.userData.acMaxHR = this.userModel.acMaxHR;
    if (this.userModel.abSugar == true) {
      this.userData.abSugar = '1';
    } else {
      this.userData.abSugar = '0';
    }

    if (this.userModel.adHeartDisease == true) {
      this.userData.adHeartDisease = '1';
    } else {
      this.userData.adHeartDisease = '0';
    }
    this.backEndService.saveUser(this.userData);
    this.router.navigateByUrl('');

  }

}
