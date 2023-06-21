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

const dinner1 = chef.constructor.createDinner("Ceasar Salad", "T-Bone Steak", "Fudge Lava Cake");
const dinner2 = chef.constructor.createDinner("Chicken Soup", "Catfish", "Strawberry Cheesecake");
const dinner3 = chef.constructor.createDinner("Chicken Alfredo", "Pasta a la Pene", "Key Lime Pie");

//logging dinners

console.log("Dinner 1:", dinner1);
console.log("Dinner 2:", dinner2);
console.log("Dinner 3:", dinner3);

