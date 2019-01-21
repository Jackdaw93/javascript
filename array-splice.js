function panggilSplice() {
  var kota = ['Jakarta','Medan','Padang','Malang'];
  console.log(kota)
  // kota.splice(2,0,'Palembang') //Kita ingin menambahkan kota palembang diantara kota 'medan' dan 'padang'
                                  //array splice perbedaan apabila angka 0 diganti dengan angka 1 maka kota 'padang' akan hilah dan berganti kota 'palembang'

    kota.splice(1,2) //Hapus dengan Splice: Index 1 adalah lokasi Index nya ex: 'Jakarta', Index 2 adalah jumlah yang akan kita hapus ex: 'Medan'&'Padang'
  return kota;
}

console.log(panggilSplice())
