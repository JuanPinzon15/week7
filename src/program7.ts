function isNumber(value: any): value is number {
    return typeof value === 'number';
  }
  
  function isString(value: any): value is string {
    return typeof value === 'string';
  }
  
  let mixedArray: (string | number) [] = []
  mixedArray.push("Audi", "McClaren", "Toyota", "Lexus", "Tesla")
  mixedArray.push(1, 2, 3, 4, 5)

  for(const item of mixedArray){
    if (isString(item)) {
    console.log(`string: ${item}`);
  } else if (isNumber(item)) {
    console.log(`number: ${item}`);
  } else {
    console.log("Unknown type");
  }
}