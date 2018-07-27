import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  about(){
  	this.router.navigate(["/about"]);
  }

  skills(){
  	this.router.navigate(["/skills"]);
  }

  projects(){
  	this.router.navigate(["/projects"]);
  }

}
