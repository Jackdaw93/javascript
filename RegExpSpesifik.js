function panggilRegexp(value) {
  //var ambilData = value.match(/ke/g) // [ke] mengambil semua kareakter ke 'dipisah per huruf'
  //var ambilData = value.match(/[keaB]/g) // [keaB] mengmabil semua karakter didalam kurung '[]''
  //var ambilData = value.match(/[^ke]/g) // [^ke] mengambil semua kareakter kecuali 'ke'
    var ambilData = value.match(/[a-i]/g) // [a-i] mengambil karakater antara huruf a sampai huruf i
  console.log(ambilData);

}

panggilRegexp("Bulan ke 1 sd ke 4")
