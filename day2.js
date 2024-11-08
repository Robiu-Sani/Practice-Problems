function getTargetSum(items, sum) {
  for (let i = 0; i < items.length; i++) {
    for (let x = 0; x < items.length; x++) {
      if (i + x == sum) {
        return [i, x];
      }
    }
  }
}
