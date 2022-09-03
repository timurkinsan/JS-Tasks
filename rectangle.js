class Point {
    constructor(x, y) {
      this.x = x
      this.y = y
    }
}

const pointOne = new Point(-5, 0);
const pointTwo = new Point(1, 3);
const pointThree = new Point(4, -3);
const pointFour = new Point(-2, -6);

function sideLenght(pointOne, pointTwo) {
  return Math.sqrt((Math.abs(pointTwo.x - pointOne.x))**2 + (Math.abs(pointTwo.y - pointOne.y))**2);
}
const sideLenghtA = sideLenght(pointOne, pointTwo);
const sideLenghtB = sideLenght(pointTwo, pointThree);
const sideLenghtC = sideLenght(pointThree, pointFour);
const sideLenghtD = sideLenght(pointOne, pointFour);
const diagonalLengthAC = sideLenght(pointOne, pointThree);
const diagonalLengthBD = sideLenght(pointTwo, pointFour);

function rectangleIsTrue (sideLenghtA, sideLenghtB, sideLenghtC, sideLenghtD, diagonalLengthAC, diagonalLengthBD) {
if((sideLenghtA === sideLenghtC) && (sideLenghtB === sideLenghtD) && (diagonalLengthAC === diagonalLengthBD) ) {
  return true;
} else {
    return false;
}}

function cosineTeorem(sideLenghtOne, sideLenghtTwo, sideLenghtThree) {
   return Math.acos(((sideLenghtOne)**2 + (sideLenghtTwo)**2 - (sideLenghtThree)**2)/(2*sideLenghtOne*sideLenghtTwo));
}

const cornerA = cosineTeorem(sideLenghtA, sideLenghtB, diagonalLengthAC);
const cornerB = cosineTeorem(sideLenghtB, sideLenghtC, diagonalLengthBD);
const cornerC = cosineTeorem(sideLenghtC, sideLenghtD, diagonalLengthAC);
const cornerD = cosineTeorem(sideLenghtD, sideLenghtA, diagonalLengthBD);

function cosineTeoremRectangleIsTrue (cornerOne, cornerTwo, cornerThree) {
  if(cornerOne === cornerTwo && cornerTwo === cornerThree && cornerOne === cornerThree) {
    return true;
  } else {
      return false;
  }
}
// console.log(sideLenghtA);
// console.log(sideLenghtB);
// console.log(sideLenghtC);
// console.log(sideLenghtD);

// console.log(cornerA);
// console.log(cornerB);
// console.log(cornerC);
// console.log(cornerD);
console.log(cosineTeoremRectangleIsTrue (cornerA, cornerB, cornerC));
