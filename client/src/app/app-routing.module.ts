import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SkillsComponent } from "./skills/skills.component";

const routes: Routes = [
	{path:"", pathMatch: "full", component:MainComponent},
	{path:"about", component:MainComponent},
	{path:"projects", component:ProjectsComponent},
	{path:"skills", component:SkillsComponent},
	{path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
