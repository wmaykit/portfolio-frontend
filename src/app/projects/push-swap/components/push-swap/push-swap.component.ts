import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import Two from "two.js";
import { Stack } from './classes/stack/stack';
import { BehaviorSubject, Subject } from 'rxjs';
import { StackConfigModel } from './models/push-swap-rectangle.model';
import { PushSwapApiService } from '../../http/push-swap-api.service';

@Component({
  selector: 'push-swap',
  templateUrl: './push-swap.component.html',
  styleUrls: ['./push-swap.component.css']
})
export class PushSwapComponent implements AfterViewInit {
  @ViewChild('drawContainer', {}) private readonly drawContainer: ElementRef | undefined;
  private readonly two = new Two({
    type: Two.Types.canvas,
    width: window.innerWidth - 20,
    autostart: true,
    height: 600
  });
  stackA: Stack | undefined;
  stackB: Stack | undefined;
  private stackCount = new BehaviorSubject<number>(0);
  commands: string[] = []
  private cmdHandlers: Map<string, () => void> = new Map();
  private frames = new Subject();
  currentIndex = 0;

  constructor(private readonly pushSwapApiService: PushSwapApiService) { }

  ngAfterViewInit(): void {
    this.two.appendTo(this.drawContainer?.nativeElement);
    const commonConfig = {
      stackCount: this.stackCount,
      two: this.two,
      xRatios: [] as number[]
    } as StackConfigModel;
    this.stackCount.next(2)
    this.stackA = new Stack(Object.assign(commonConfig, { name: 'A', xRatio: 0.25 } as StackConfigModel));
    this.stackB = new Stack(Object.assign(commonConfig, { name: 'B', xRatio: 0.75, xRatios: [] as number[] } as StackConfigModel));
    this.two.bind('update', this.update)
    this.cmdHandlers = new Map(Object.entries({
      'ra': this.stackA.rotate,
      'rra': this.stackA.reverseRotate,
      'rb': this.stackB.rotate,
      'rrb': this.stackB.reverseRotate,
      'rrr': this.twoReverseRotate,
      'rr': this.twoRotate,
      'pa': this.pushToA,
      'pb': this.pushToB,
      'sa': this.stackA.swap
    }))
  }

  private readonly update = () => {
    this.stackB?.test()
    this.stackB?.test()
    this.frames.next(undefined);
  }

  playAnimation(): void {
    this.currentIndex = 0
    this.frames.subscribe(() => {
      if (!(this.stackA?.changed || this.stackB?.changed)) {
        const cmd = this.commands[this.currentIndex++]
        console.log(cmd, this.commands);
        if (cmd) {
          const fn = cmd && this.cmdHandlers.get(cmd)
          fn && fn();
        }
      }
    })
  }

  solveInput(numbers: string) {
    console.log(numbers);
    let parsedNumbers: number[] = numbers.split(' ').map((val) => parseInt(val))
    console.log(parsedNumbers);
    console.log(parsedNumbers);
    this.pushSwapApiService.getSortCommandsForStack(parsedNumbers).subscribe((data) => {
      this.currentIndex = 0;
      this.commands = data;
      let subscription = this.frames.subscribe(() => {
        if (!(this.stackA?.changed || this.stackB?.changed)) {
          const cmd = this.commands[this.currentIndex++]
          console.log(cmd, this.commands);
          if (cmd) {
            const fn = cmd && this.cmdHandlers.get(cmd)
            fn && fn();
          }
        }
        if (this.currentIndex == this.commands.length) {
          subscription.unsubscribe()
        }
      })
    })
  }

  updateStackA(str: string) {
    let parsedNumbers: number[] = str.split(' ').filter((val) => val.trim() !== '').map((val) => parseInt(val))
    this.stackA?.refreshRect(parsedNumbers)
  }


  readonly pushToB = (): void => {
    this.stackB && this.stackA?.pushTo(this.stackB);
  }

  readonly pushToA = (): void => {
    this.stackA && this.stackB?.pushTo(this.stackA);
  }

  twoRotate = (): void => {
    this.stackA?.rotate();
    this.stackB?.rotate();
  }

  twoReverseRotate = (): void => {
    this.stackA?.reverseRotate();
    this.stackB?.reverseRotate();
  }


  @HostListener('window:resize')
  handleWindowResize(): void {
    this.two.width = window.innerWidth - 20;
    this.stackA?.updateWidthAndPosition()
    this.stackB?.updateWidthAndPosition()
  }

}
