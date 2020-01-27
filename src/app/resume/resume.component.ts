import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  workEvents = [
    {
      id: 0,
      period: 'NOV 2020 - present',
      role: 'Consultant',
      company: 'Deloitte',
      details: [
        ` - Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et 
        dolore magna aliquyam erat, sed diam voluptua.`,
        ` - At vero eos et accusam et justo duo dolores et ea rebum. 
        Stet clita kasd gubergren, no sea takimata sanctus est 
        Lorem ipsum dolor sit amet. `,
        ` - Ea quis iuvaret expetendis his, te elit voluptua 
          dignissim per, habeo iusto primis ea eam.`
      ]
    },
    {
      id: 1,
      period: 'SEP 2015 - NOV 2020',
      role: 'Software Engineer',
      company: 'Finastra',
      details: [
        ` - Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et 
        dolore magna aliquyam erat, sed diam voluptua.`,
        ` - At vero eos et accusam et justo duo dolores et ea rebum. 
        Stet clita kasd gubergren, no sea takimata sanctus est 
        Lorem ipsum dolor sit amet. `,
        ` - Ea quis iuvaret expetendis his, te elit voluptua 
          dignissim per, habeo iusto primis ea eam.`
      ]
    },
    {
      id: 2,
      period: 'FEB 2015 - SEP 2015',
      role: 'Software Engineer',
      company: 'TIM & Knight Solutions',
      details: [
        ` - Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et 
        dolore magna aliquyam erat, sed diam voluptua.`,
        ` - At vero eos et accusam et justo duo dolores et ea rebum. 
        Stet clita kasd gubergren, no sea takimata sanctus est 
        Lorem ipsum dolor sit amet. `,
        ` - Ea quis iuvaret expetendis his, te elit voluptua 
          dignissim per, habeo iusto primis ea eam.`
      ]
    }
  ];

  educationEvents = [
    {
      id: 0,
      period: 'OCT 2015 - JULY 2017',
      role: 'Master of Economic Informatics',
      location: 'Faculty of Economic Cybernetics, Statistics and Informatics, ASE – Bucharest',
      details: 
        ` - Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et `
    },
    {
      id: 1,
      period: 'OCT 2012 - JULY 2015',
      role: 'Bachelor’s Degree in Economic Informatics',
      location: 'Faculty of Economic Cybernetics, Statistics and Informatics, ASE – Bucharest',
      details:
        ` - Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et 
        dolore ma `
    }
  ];

  codeSkills = [
    {
      id: 0,
      name: 'HTML',
      level: 100,
      icon: '<i aria-label="HTML" class="fab fa-html5"></i>'
    },
    {
      id: 1,
      name: 'CSS',
      level: 80,
      icon: '<i class="fab fa-css3-alt"></i>'
    },
    {
      id: 2,
      name: 'SASS',
      level: 100,
      icon: '<i class="fab fa-sass"></i>'
    },
    {
      id: 3,
      name: 'Docker',
      level: 80,
      icon: '<i class="fab fa-docker"></i>'
    },
    {
      id: 4,
      name: 'Jenkins',
      level: 40,
      icon: '<i class="fab fa-jenkins"></i>'
    },
    {
      id: 5,
      name: 'JavaScript',
      level: 100,
      icon: '<i class="fab fa-js-square"></i>'
    },
    {
      id: 6,
      name: 'Angular',
      level: 100,
      icon: '<i class="fab fa-angular"></i>'
    },
    {
      id: 6,
      name: 'Java',
      level: 40,
      icon: '<i class="fab fa-java"></i>'
    },
    {
      id: 7,
      name: 'Node',
      level: 90,
      icon: '<i class="fab fa-node"></i>'
    },
    {
      id: 8,
      name: 'MongoDb',
      level: 60,
      icon: '<i class="fas fa-database"></i>'
    },
    {
      id: 9,
      name: 'Vue',
      level: 30,
      icon: '<i class="fab fa-vuejs"></i>'
    },
    {
      id: 10,
      name: 'Git',
      level: 50,
      icon: '<i class="fab fa-git"></i>'
    },
    {
      id: 11,
      name: 'Jira',
      level: 60,
      icon: '<i class="fab fa-jira"></i>'
    },
    {
      id:12,
      name: 'Bootstrap',
      level: 80,
      icon: '<i class="fab fa-bootstrap"></i>'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
