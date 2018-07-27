import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

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
	  		$("ul").css("font-size", "2.5" + textscaling);
	  		$("li").css("font-size", "2.5" + textscaling);
	  		$("i").css("font-size", "10" + textscaling);

	    };
  		setInterval(jankyfunction, 250);
  	});
  }

}
