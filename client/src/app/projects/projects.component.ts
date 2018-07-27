import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$(document).ready(function(){

  		var description = {
  			"spirit" : "Cultivate a colorful garden while managing harvested resources in Spirit Gardener! " + 
  			"Harvesting and siphoning plants yields various materials which can be used to trade for higher tier plants. " + 
  			"How fast can you reach 200 points and win?<br><ul>" +
  			"<li>Created all art and code assets from scratch with an emphasis on " + 
  			"maintaining an easily extendable and consistent code base.</li>" + 
  			"<li>Designed to be easily accessible with intuitive gameplay requiring nothing more than a mouse.</li>" + 
  			"<li>Developed using C# and Unity.</li></ul>" + 
  			"Interested? <span style='font-style: oblique;color: rgb(138,23,184,0.65);'>"+
  			"<a href='https://yuripiano.itch.io/spirit-gardener' target='_blank' style='color: inherit;text-decoration: none;'>"+
  			"Click here to play!</a></span>",

  			"spooky" : "Traverse through the ominous darkness in Spooky the Scared Ghost! " + 
  			"Take control of Spooky as you run and jump between beams of light to recharge your energy.<br><ul>" + 
  			"<li>Co-developed in a small team as part of the Ludum Dare Game Jam weekend.</li>" + 
  			"<li>Synthesized common platformer gameplay with third party theme specifications in a time-limited environment.</li>" + 
  			"<li>Created with compatibility in mind, available for play via Android and PC downloads as well as directly in-browser with Unity WebGL.</li>" + 
  			"<li>Developed using C# and Unity.</li></ul>" + 
  			"Wanna take a peek? <span style='font-style: oblique;color: rgb(138,23,184,0.65);'>" + 
  			"<a href='https://skiastra.itch.io/spooky-the-scared-ghost' target='_blank' style='color: inherit;text-decoration: none;'>" + 
  			"Try it yourself!</a></span>",

  			"pet" : "Simulate a pet adoption center's site on Pet Shelter! Developed from scratch in only 5 hours, this site " + 
  			"incorporates a nonrelational database back-end with a multi-component Angular front-end " + 
  			"for a seamless single-page application experience. Do you enjoy pets? Do you enjoy <em>adopting</em> pets? And, " + 
  			"most importantly, do you enjoy snarky validation messages? If so, look no further than Pet Shelter!<br><ul>" + 
  			"<li>Allowed users to anonymously list, like, and adopt pets that others put up for adoption whilst ensuring " +
  			"site stability through a variety of front and back-end input validations.</li>" + 
  			"<li>Coded front and back-end from start to finish in under 5 hours.</li>" + 
  			"<li>Developed using MongoDB, Express.js, Angular, Node.js, HTML, CSS, and JavaScript.</li>",

  			"travel" : "Plan your next vacation and join others' itineraries with Travel Buddy! Coded entirely from start to finish in just " + 
  			"5 hours, this site features full user login and registration functionality along with the ability to create, read, update, and delete (CRUD) " + 
  			"trips. Data is neatly and securely managed in a SQLite database with password encryption and input validations in place. " + 
  			"If you're looking to plan your next vacation destination, Travel Buddy may be the right tool for you!<br><ul>" + 
  			"<li>Managed multiple users registering and interacting with one another’s planned travels via relational SQL connections " + 
  			"and intuitive, user friendly web pages.</li>" + 
  			"<li>Features full CRUD operations with various safety checks in place to prevent data insecurities.</li>" + 
  			"<li>Developed using Python, Django, SQLite, HTML, CSS, and JavaScript.</li></ul>"
  		}


	    var jankyfunction = function(){
	    	if($("#projectname").text() != $(".active > img").attr("alt")){
	    		$("#projectname").text($(".active > img").attr("alt"));
	    		$("#projectdescription").html(description[$(".active > img").attr("simple")]);
	    	}
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

