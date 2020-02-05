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
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
