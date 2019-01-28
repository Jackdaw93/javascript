function panggilBilanganKelipatan() {
  var data = []
  for (var i = 0; i < 50; i++) {
    if (i%5 === 0) {
      data.push(i)
    }
  }
  return data;
}

console.log(panggilBilanganKelipatan());
