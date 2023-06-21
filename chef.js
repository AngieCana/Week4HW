class Dinner {
  constructor(appetizer, entree, dessert){
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }
}

class Chef {
  static createDinner(appetizer, entree, dessert){
    return new Dinner(appetizer, entree, dessert);
  }
}

//create chef

const chef = new Chef();

//creating dinners

const dinner1 = chef.constructor.createDinner("Salad", "Steak", "Chocolate Cake");
const dinner2 = chef.constructor.createDinner("Soup", "Fish", "Cheesecake");
const dinner3 = chef.constructor.createDinner("Alfredo", "Pasta", "Tiramasu");

//logging dinners

console.log("Dinner 1:", dinner1);
console.log("Dinner 2:", dinner2);
console.log("Dinner 3:", dinner3);

