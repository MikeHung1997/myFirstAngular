import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() ratingPoint = 0;

  overFunction(inputRating:number){
    this.ratingPoint = inputRating;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
