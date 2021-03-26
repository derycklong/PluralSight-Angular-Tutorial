import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector:'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  @Input() rating: number = 1;
  cropWidth: number = 62.25;

  ngOnChanges(): void {
    this.cropWidth = this.rating * 62.25/5;
  }



}