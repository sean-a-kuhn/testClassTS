

export default class Square {
   height = 0;
   width = 0;

   constructor(height, width) {
      this.height = height;
      this.width = width;
   }

   getArea() {
      return this.calcArea;
   }

   calcArea() {
      return this.height * this.width;
   }
}