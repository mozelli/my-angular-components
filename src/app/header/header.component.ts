import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	content = [{
  		title: "Your Site Name",
  		subtitle: "This is a subtitle about your site!",
  	}];

  constructor() { }

  ngOnInit(): void {
  }

}
