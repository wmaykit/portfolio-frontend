import { PushSwapRectangle, StackConfigModel } from '../../models/push-swap-rectangle.model';
import { BehaviorSubject } from 'rxjs';
import Two from 'two.js';
import { Vector } from 'two.js/src/vector';



export class Stack {
  private readonly _stackCount: BehaviorSubject<number>;
  private readonly two: Two;
  name = '';
  xRatio = 0;
  rects: PushSwapRectangle[] = []
  maxRectangleWidth = 0;
  x = 0;
  changed = false;

  constructor(config: StackConfigModel) {
    this.xRatio = config.xRatio;
    this._stackCount = config.stackCount;
    this.name = config.name;
    this.two = config.two
    this.two.bind('update', this.test);
    this.rects = this.createRectangles(config.xRatios);
    this.updateMax();
    this.updateWidthAndPosition();
  }

  get framesToStopAnimation(): number {
    let maxFrames = 0;
    this.rects.forEach((rect) => {
      const dist = new Vector(rect.target.position.x - rect.translation.x, rect.target.position.y - rect.translation.y)
      const step = new Vector(dist.x * 0.125, dist.y * 0.125)
      maxFrames = Math.max(maxFrames, Math.max(dist.x / step.x, dist.y / step.y));
    });
    return maxFrames
  }

  public refreshRect(numbers: number[]) {
    this.rects.forEach((rect) => rect.remove())
    this.rects = this.createRectangles(numbers);
    this.updateMax();
    this.updateWidthAndPosition();
  }

  public updateWidthAndPosition(): void {
    this.rects.forEach((rect: PushSwapRectangle) => {
      rect.target.position.x = Stack.maxAvailableWindowWidth * this.xRatio;
      rect.target.width = this.calcWidth(rect.customWidthRatio);
    });
  }

  readonly test = (): void => {
    let changed = false;
    this.rects.forEach((rect) => {
      const previousX = rect.translation.x;
      const previousY = rect.translation.y;
      rect.translation.x += (rect.target.position.x - rect.translation.x) * 0.125;
      rect.translation.y += (rect.target.position.y - rect.translation.y) * 0.125;
      rect.width += (rect.target.width - rect.width) * 0.125;
      changed = Math.floor(previousX) !== Math.floor(rect.translation.x) || Math.floor(previousY) !== Math.floor(rect.translation.y) || changed
    })
    this.changed = changed;
  }

  add(rect: PushSwapRectangle | undefined): void {
    if (rect !== undefined) {
      rect.target.position.y = this.rects.length ? (this.rects[0]?.target.position.y) : 86;
      this.rects.forEach((rect) => rect.target.position.y += 6);
      this.rects.unshift(rect);
      this.updateMax();
      this.updateWidthAndPosition();
    }
  }

  readonly swap = (): void => {
    const first = this.rects.shift();
    const second = this.rects.shift();
    first && this.rects.unshift(first);
    second && this.rects.unshift(second);
    this.updateY();
  }

  pushTo(stack: Stack): void {
    stack.add(this.rects.shift());
    this.updateY();
    this.updateMax();
  }

  readonly reverseRotate = (): void => {
    const first = this.rects.pop();
    first && this.rects.unshift(first);
    this.updateY();
  }



  readonly rotate = (): void => {
    const first = this.rects.shift();
    first && this.rects.push(first);
    this.updateY();
  }

  private get stackCount(): number {
    return this._stackCount.value;
  }

  private static get maxAvailableWindowWidth(): number {
    return window.innerWidth - 20;
  }

  private rectFactory(index: number, x: number, width: number): PushSwapRectangle {
    const rect = this.two.makeRectangle(x, 80 + ((5 + 1) * index), width, 5) as PushSwapRectangle;
    rect.fill = 'orange';
    rect.noStroke();
    return rect;
  }

  private updateMax(): void {
    const previousMaxRectangleWidth = this.maxRectangleWidth;
    this.maxRectangleWidth = Math.max(...this.rects.map((rect) => rect.customWidthRatio));
    previousMaxRectangleWidth !== this.maxRectangleWidth && this.updateWidthAndPosition();
  }

  private readonly calcWidth = (ratio: number): number => {
    return (Stack.maxAvailableWindowWidth / this.stackCount  - 20) * (ratio / (this.maxRectangleWidth || 1));
  }

  private createRectangles(ratios: number[]): PushSwapRectangle[] {
    return ratios.map((ratio, index) => {
      console.log(ratio);
        this.maxRectangleWidth = Math.max(this.maxRectangleWidth, ratio)
        const test = this.rectFactory(index + 1, Stack.maxAvailableWindowWidth * this.xRatio, this.calcWidth(ratio));
        test.customWidthRatio = ratio;
        test.target = {width: this.calcWidth(ratio), position: new Vector(test.position.x, test.position.y) }
        return test
      }
    );
  }

  private updateY(): void {
    const first = this.rects[0];
    first.target.position.y = 80;
    this.rects.reduce((previousValue, currentValue) => {
      currentValue.target.position.y = previousValue.target.position.y + 6;
      return currentValue;
    }, first)
  }
}