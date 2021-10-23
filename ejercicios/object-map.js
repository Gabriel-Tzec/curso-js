const animal = new Map();

animal.set('name', 'spanki');
animal.set('age', 3);
animal.set('race', 'chihuahua');
// Map(3) {'name' => 'spanki', 'age' => 3, 'race' => 'chihuahua'}

animal.delete('name');
// true o false

animal.clear();
//Map(0) {size: 0}

const iterator1 = animal.entries();
//MapIterator {'age' => 3, 'race' => 'chihuahua'}
iterator1.next().value
// ['age', 3]

animal.forEach((value, key, map) => {
 console.log(value, '-' , key, '-', map);
});
//age - race - Map(2)  {'age' => 3, 'race' => 'chihuahua'}
// ...

animal.get('age');
// 3

animal.get('race');
// true o falte

const iterator1 = animal.keys();
iterator1.next().value;
// age
//...

animal.set('name', 'spanki');
// Map(3) {'age' => 3, 'race' => 'chihuahua', 'name' => 'spanki'}

animal.has('name');
// true o false


const iterator1 = animal.values();
iterator1.next().value;
// age
//...

animal.size;
// 3 