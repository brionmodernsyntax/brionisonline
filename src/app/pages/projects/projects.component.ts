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

}


