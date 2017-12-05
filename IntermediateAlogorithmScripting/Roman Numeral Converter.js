function convertToRoman(num) {
  //array with roman Numerals  
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  //Array with corsponding numerals
  var number= [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];

  var container = [];
  //loop through the number array and subtract the the current number i from num. if number[i] is less than num we push a roman number inside the container array
  //3999 will push in 1000(M) 1000(M) 1000(M) then 900 (CM) then 90 (XC) then 9(IX)
  for(var i = 0; i < number.length; i++) {
    while (number[i] <= num) {
      container.push(romanNumeral[i]);
      num -= number[i];
    }
  }  
  
  
 return container.join("");
}