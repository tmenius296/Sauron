//  Legolas Stats
let LegolasAttack = 25;
let LegolasHealth = 100;
let LegolasDefense = 0;

//gimli stats

let GimliAttack = 35;

if (LegolasAttack > GimliAttack) {
  console.log("You shall die before your sword falls");
} else if (LegolasAttack < GimliAttack) {
  console.log("All die as equals");
} else {
  console.log("We dwarves are deadly over short distances");
}

if (LegolasHealth <= GimliAttack) {
  console.log("Legolas Dies");
} else {
  LegolasHealth -= GimliAttack;
  console.log(`Legolas' Health is down to ${LegolasHealth}`);
}
