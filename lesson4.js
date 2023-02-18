"use strict"; 

let totalWatt = 0;
function equipment(nameOfEq, watt, isSwitched) {
  
  this.nameOfEq = nameOfEq;
  this.watt = watt;
  this.isSwitched = isSwitched;
  
}

equipment.prototype.wattCalc = function(nameOfEq, watt) {
  console.log(`${this.nameOfEq} - за сутки потребляет ${this.watt * 24} Ватт`);
};


function laptop(nameOfEq, watt, isSwitched, hasModuleOfFingerprint) {
  equipment.call(this, nameOfEq, watt, isSwitched);
  this.hasModuleOfFingerprint = true;
  
};

function boiler(nameOfEq, watt, isSwitched, hasEcoMode) {
  equipment.call(this, nameOfEq, watt, isSwitched);
  this.hasEcoMode = true;
  
  this.switchEcoMode = function() {
    if (hasEcoMode) {
      return console.log(watt - (watt * .1));
    } else {
      return console.log(`${this.nameOfEq} - Эконом режим отсутствует !`)
    }
  };
  
};

laptop.prototype = new equipment();
boiler.prototype = new equipment();

const notebook = new laptop("Acer", 19, true, true);
const kettle = new boiler('Mega', 1200, false, false);

notebook.wattCalc();
kettle.wattCalc();
kettle.switchEcoMode();

const equips = [notebook, kettle];

function calcWattSwitchedEqs(equips) {
  
  for (let item of equips) {
  
    if (item.isSwitched) {
      totalWatt += item.watt;
    };
  };
  return console.log(`Общая потребляемость подключенных оборудований - ${totalWatt} Ватт`);
};

calcWattSwitchedEqs(equips);
