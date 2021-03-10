import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  imgPath = "/assets/images/profile.svg";
  phoneIcon = "/assets/images/phoneIcon.svg";
  usrName = "brionis.online";
  phnNum = "2092708001";

  constructor() { }

  ngOnInit(): void {
  }

}
