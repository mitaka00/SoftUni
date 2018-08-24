export class CarCreate {
    constructor(
      public name : string,
      public imagePath : string,
      public price: number,
      public description : string
    ) { }
  }