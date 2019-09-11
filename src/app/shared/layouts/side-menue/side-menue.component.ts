import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menue',
  templateUrl: './side-menue.component.html',
  styleUrls: ['./side-menue.component.scss']
})
export class SideMenueComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


}
