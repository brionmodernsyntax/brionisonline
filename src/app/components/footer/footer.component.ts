import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import projectsData from '../../projects.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  projects = projectsData;
  techs = <any>[];
  @Output() filter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    projectsData.map(project => {
      project.tech.map((tech: any) => {
        if (!this.techs.find((item: any) => item.name === tech.name)) {
          this.techs.push(tech);
        }
      })
    });
  }

}
