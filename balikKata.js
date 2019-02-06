function balikKata(kata) {
  var msg = '';
  for (var i = kata.length-1; i >= 0; i--)
  {
    msg = msg + kata[i]
  }

  return msg;

/* Balik Kata Dengan Split dll
 return kata.split('').reverse().join('')
*/

}

console.log(balikKata("Niomic!"));
console.log(balikKata("JavaScript"));
console.log(balikKata("alohahola"));
console.log(balikKata("Jawa_Barat"));
