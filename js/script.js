var triangle1Area = getTriangleArea(10, 21);
var triangle2Area = getTriangleArea(39, 1);
var triangle3Area = getTriangleArea(40, 0);

function getTriangleArea(a,h) {
    if (a > 0 && h > 0) {
         return a*h/2;
    }
else {
  console.log("Nieprawidłowe dane");
}
   
}

console.log(getTriangleArea(10, 6));



