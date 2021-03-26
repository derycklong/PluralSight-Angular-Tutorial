import { Component, Input,Output, OnChanges,EventEmitter } from "@angular/core";


@Component({
  selector:'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  @Input() rating: number = 1;
  cropWidth: number = 62.25;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.cropWidth = this.rating * 62.25/5;
  }

  onClick(): void{
    this.ratingClicked.emit(`The rating you have click is ${this.rating}`)
  }




}