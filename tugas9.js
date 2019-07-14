function panggilObject() {
  var warnaPakaian = {
    baju: "merah",
    celana: "hitam",
    jaket: "putih"
  };
  for (var x in warnaPakaian) {
    console.log(warnaPakaian[x]);
  }
}

panggilObject();
