import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';
import { ProgrammingLanguage } from '../../enums/programming-language.enum';

@Component({
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      name: 'kabanyok-artyom.fun',
      text: 'This is my portfolio where my pet-projects are presented.',
      languages: [ProgrammingLanguage.JAVA, ProgrammingLanguage.TYPE_SCRIPT],
      sources: [
        {title: 'Backend (Java)', url: 'https://github.com/wmaykit/portfolio-api'},
        {title: 'Frontend (Angular)', url: 'https://github.com/wmaykit/portfolio-frontend'},
        {title: 'Jenkins pipelines', url: 'https://github.com/wmaykit/portfolio-jenkins-pipelines'},
        {title: 'K8s configs & Dockerfiles', url: 'https://github.com/wmaykit/portfolio-docker'}
      ],
      articleLink: '/projects/kabanyok-artyom_fun'
    },
    {
      name: 'Fanfic',
      text: 'FanFiction reading app. Including web and android version.',
      languages: [ProgrammingLanguage.JAVA, ProgrammingLanguage.KOTLIN, ProgrammingLanguage.TYPE_SCRIPT],
      sources: [
        {title: 'Backend (Java)', url: 'https://github.com/wmaykit/fan-fiction-api'},
        {title: 'Frontend (React)', url: 'https://github.com/wmaykit/fanfic_web_app'},
        {title: 'Android (Kotlin)', url: 'https://github.com/wmaykit/fan-fiction-mobile'}
      ],
      articleLink: '/projects/fanfic'
    },
    {
      name: 'Auth demo',
      text: 'Application where user authentication is implemented.',
      languages: [ProgrammingLanguage.JAVA, ProgrammingLanguage.JAVA_SCRIPT],
      sources: [
        {title: 'Backend (Java)', url: 'https://github.com/wmaykit/authdemo/tree/master/Backend/authdemo'},
        {title: 'Frontend (React)', url: 'https://github.com/wmaykit/authdemo/tree/master/Frontend'}
      ],
      articleLink: '/projects/auth_demo'
    },
    {
      name: 'Tic Tac Toe',
      text: 'Classic Tic-Tac-Toe game.',
      languages: [ProgrammingLanguage.JAVA, ProgrammingLanguage.JAVA_SCRIPT],
      sources: [
        {title: 'Backend (Java)', url: 'https://github.com/wmaykit/tic-tac-toe/tree/main/backend'},
        {title: 'Frontend (React)', url: 'https://github.com/wmaykit/tic-tac-toe/tree/main/frontend'}
      ],
      articleLink: '/projects/tic_tac_toe'
    },
    {
      name: 'Rock paper scissors',
      text: 'Rock paper scissors game.',
      languages: [ProgrammingLanguage.JAVA],
      sources: [{title: 'Java CLI app', url: 'https://github.com/wmaykit/rock_paper_scissors'}],
      articleLink: '/projects/rock_paper_scissors'
    },
    {
      name: 'Sokoban',
      text: 'Implementation of the legendary game "Sokoban" using swing.',
      languages: [ProgrammingLanguage.JAVA],
      sources: [{title: 'Java desktop game (Swing)', url: 'https://github.com/wmaykit/sokoban'}],
      articleLink: '/projects/sokoban'
    },
    {
      name: 'Push swap',
      text: 'Sort data using two stacks, using the lowest possible number of actions.',
      languages: [ProgrammingLanguage.C],
      sources: [{title: 'CLI program', url: 'https://github.com/wmaykit/push_swap'}],
      articleLink: '/projects/push_swap',
      demoLink: {
        title: 'Push swap demo',
        url: '/push-swap',
        isExternal: false
      }
    },
    {
      name: 'Corewar',
      text: 'Implementation of the programming game "Corewar".',
      languages: [ProgrammingLanguage.C],
      sources: [{title: 'CLI program', url: 'https://github.com/wmaykit/corewar'}],
      articleLink: '/projects/corewar',
      demoLink: {
        title: 'Corewar demo',
        url: '/corewar',
        isExternal: false
      }
    },
    {
      name: 'Fillit',
      text: 'This is text about push swap project',
      languages: [ProgrammingLanguage.C],
      sources: [{title: 'CLI program', url: 'https://github.com/wmaykit/fillit'}],
      articleLink: '/projects/fillit'
    },
    {
      name: 'Lem-in',
      text: 'This is text about push swap project',
      languages: [ProgrammingLanguage.C],
      sources: [{title: 'CLI program', url: 'https://github.com/wmaykit/lem-in'}],
      articleLink: '/projects/lem-in'
    },
    {
      name: 'ft_printf',
      text: 'This is text about push swap project',
      languages: [ProgrammingLanguage.C],
      sources: [{title: 'CLI program', url: 'https://github.com/wmaykit/ft_printf'}],
      articleLink: '/projects/ft_printf'
    }
  ];

  columns: Observable<number>;

  constructor(breakpointObserver: BreakpointObserver) {
    this.columns = breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall, Breakpoints.Medium])
      .pipe(map(this.defineColumns));
  }

  ngOnInit(): void {
  }

  containOneElement(arr: unknown[]) {
    return arr?.length === 1;
  }

  private defineColumns = (breakpointState: BreakpointState): number => {
    if (breakpointState.matches) {
      if (breakpointState.breakpoints[Breakpoints.Medium]) {
        return 2;
      }
      return 1;
    }
    return 3;
  };

}
