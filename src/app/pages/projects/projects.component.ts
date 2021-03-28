import { Component, OnInit } from '@angular/core';
import projectsData from '../../projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = projectsData;
  constructor() {

   }

  ngOnInit(): void {
  }
  filterFun(techName: string){
    if(techName === "all"){
    this.projects = projectsData;
    return;
    }
    this.projects = projectsData.filter(function(project){
      if(project.tech.find(tech => tech.name === techName) ){
        return true;
      }else{
        return false;
      }
    })
  }

}


