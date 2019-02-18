function panggilRegexp(value) {
  //var ambilData = value.match(/\W/g) // char W(besar): mengambil semua karekter kecuali huruf dan angka
  //var ambilData = value.match(/\D/g) // char D(besar): mengambil semua karakter dan spasi kecuali angka
    var ambilData = value.match(/\S/g) // char S(besar): mengambil semua karakter huruf dan angka kecuali spasi
  console.log(ambilData);

}

panggilRegexp("Bulan ke 1 sd ke 4")
