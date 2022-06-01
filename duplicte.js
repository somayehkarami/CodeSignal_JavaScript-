function firstDuplicate(a) {
  let len = a.lengh;
  let duplicate = -1;
  let dupeIndex = len;

  for (let i = 0; i < len; i++) {
    const num = a[i];
    for (let j = i + 1; j < len; j++) {
      const otherNum = a[j];
      if (num === otherNum && j < dupeIndex) {
        duplicate = num;
        dupeIndex = j;
      }
    }
  }
  return duplicate;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
