function panggilPerulangan() {
  var dataKota = ['Jakarta','Balikpapan','Medan']
  /* //Perulangan FOR
  for (var i =0; i < dataKota.length; i++)
  {
    console.log(dataKota[i]);
    console.log(i);
    console.log(dataKota);
  }
  */

  /* //Perulangan ForEach
  dataKota.forEach((item, index, array) =>
  {
    console.log(item);
    console.log(index);
    console.log(array);
  });
  */

  dataKota.map((item, index, array) =>
  {
    console.log(item);
    console.log(index);
    console.log(array);
  });
}
panggilPerulangan()
