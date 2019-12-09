const tugas25 = () => {
  var deret = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  console.log("Seberlumnya : ", deret);

  let asc = deret.sort();
  console.log("Ascending : ", asc);

  let dsc = deret.reverse();
  console.log("Descending : ", dsc);

  let flt = deret.filter(deret => deret > 10);
  console.log("Filter > 10 : ", flt);

}

tugas25();