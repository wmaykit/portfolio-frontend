import { Rectangle } from 'two.js/src/shapes/rectangle';
import { BehaviorSubject } from 'rxjs';
import Two from 'two.js';
import { Vector } from 'two.js/src/vector';

export interface PushSwapRectangle extends Rectangle {
  customWidthRatio: number;
  target: { position: Vector; width: number };
}

export type CreateRectFn = (x: number, y: number, width: number, height: number) => Rectangle;

export interface StackConfigModel {
  stackCount: BehaviorSubject<number>;
  name: string;
  xRatio: number;
  two: Two;
  xRatios: number[];
}