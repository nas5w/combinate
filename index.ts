function combinate<O extends Record<string | number, any>>(obj: O) {
  var combos: { [k in keyof O]: O[k][number] }[] = [];
  for (var key in obj) {
    var k = key as keyof O;
    var values = obj[k];
    var all = [];
    for (var i = 0; i < values.length; i++) {
      for (var j = 0; j < (combos.length || 1); j++) {
        var newCombo = { ...combos[j], [k]: values[i] };
        all.push(newCombo);
      }
    }
    combos = all;
  }
  return combos;
}

export default combinate;
