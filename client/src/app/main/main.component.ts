import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  	$(document).ready(function(){
  		var jankyfunction = function(){
	    	var vpw = $(window).width();
	  		var vph = $(window).height();
	  		var textscaling;
	  		if(vpw > vph){
	  			textscaling = "vh";
	  		}
	  		else{
	  			textscaling = "vw";
	  		}
	  		$("h1").css("font-size", "5" + textscaling);
	  		$("p").css("font-size", "2.5" + textscaling);
	  		$("i").css("font-size", "10" + textscaling);

	    };
  		setInterval(jankyfunction, 250);
  	});
  }

}
