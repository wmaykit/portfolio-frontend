import { Component, OnInit } from '@angular/core';
import { Skill } from './skill.interface';
import { ProgrammingLanguage } from '../../enums/programming-language.enum';
import { FrameworkEnum } from '../../enums/framework.enum';
import { DevToolsEnum } from '../../enums/dev-tools.enum';

@Component({
  selector: 'portfolio-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [
    {
      name: ProgrammingLanguage.JAVA,
      level: 5
    },
    {
      name: ProgrammingLanguage.KOTLIN,
      level: 3
    },
    {
      name: FrameworkEnum.SPRING,
      level: 5
    },
    {
      name: FrameworkEnum.SPRING_BOOT,
      level: 5
    },
    {
      name: FrameworkEnum.JUNIT,
      level: 5
    },
    {
      name: FrameworkEnum.MOCKITO,
      level: 5
    },
    {
      name: ProgrammingLanguage.SQL,
      level: 4
    },
    {
      name: ProgrammingLanguage.TYPE_SCRIPT,
      level: 5
    },
    {
      name: ProgrammingLanguage.JAVA_SCRIPT,
      level: 5
    },
    {
      name: FrameworkEnum.ANGULAR,
      level: 5
    },
    {
      name: FrameworkEnum.NGRX,
      level: 5
    },
    {
      name: FrameworkEnum.ANGULAR_MATERIAL,
      level: 5
    },
    {
      name: DevToolsEnum.JENKINS,
      level: 5
    },
    {
      name: DevToolsEnum.K8S,
      level: 3
    },
    {
      name: DevToolsEnum.DOCKER,
      level: 4
    },
    {
      name: DevToolsEnum.GIT,
      level: 5
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
