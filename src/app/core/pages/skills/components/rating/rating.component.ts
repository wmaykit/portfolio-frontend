import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() maxRating = 5
  @Input() rating = 0

  constructor() { }

  ngOnInit(): void {
  }

  setIcon(rating: number): string {
    if (rating > this.maxRating) throw Error(`Current rating(${rating}) greater than the maximum(${this.maxRating}).`);
    console.log(rating);
    if (rating <= this.rating) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
