import { Data } from "./program7_1";


class MercedesBenz implements Identity{
    id: number;
    name: string;

    constructor(id: number,  name: string){
      this.id = id;
      this.name = name;
    }
  }

let data = new Data<MercedesBenz>();

let MercedesBenz1= new MercedesBenz(15, 'CLA 200')
let MercedesBenz2= new MercedesBenz(10, 'GLE 250')

data.add(MercedesBenz1)
data.add(MercedesBenz2)

console.log(data.get(1))

data.update(23, {name: 'GT 63s'})
console.log(data.get(1))

data.delete(MercedesBenz2)
console.log(data.get(2))