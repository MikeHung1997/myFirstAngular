import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  getProduct(){
    return [{
      imgURL:"https://picsum.photos/100/200?random=5",
      title:"title",
      description:"description",
      ratingPoint:4
    },
    {
      imgURL:"https://picsum.photos/100/200?random=1",
      title:"title2",
      description:"description2",
      ratingPoint:5
    },
    {
      imgURL:"https://picsum.photos/100/200?random=2",
      title:"title3",
      description:"description3",
      ratingPoint:4
    },
    {
      imgURL:"https://picsum.photos/100/200?random=3",
      title:"title4",
      description:"description4",
      ratingPoint:2
    },
    {
      imgURL:"https://picsum.photos/100/200?random=4",
      title:"title5",
      description:"description5",
      ratingPoint:2
    }];

  }
  constructor() { }
}
