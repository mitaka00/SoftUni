export class Furniture{
    constructor(
        public model : string,
        public make : string,
        public year : number,
        public description : string,
        public price : number,
        public image : string,
        public material? : string
      ) { }
}