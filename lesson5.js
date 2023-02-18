"use strict"; 

let totalWatt = 0;

class Equipment {
    constructor(nameOfEq, watt, isSwitched = true) {
        this.nameOfEq = nameOfEq;
        this.watt = watt;
        this.isSwitched = isSwitched;
    };
    wattCalc() {
        console.log(`${this.nameOfEq} - за сутки потребляет ${this.watt * 24} Ватт`);
      };
};

class Laptop extends Equipment {
    constructor (nameOfEq, watt, isSwitched, hasModuleOfFingerprint = true) {
    super(nameOfEq, watt, isSwitched);
    this.hasModuleOfFingerprint = hasModuleOfFingerprint;
    };
};

class Boiler extends Equipment {
    constructor(nameOfEq, watt, isSwitched, hasEcoMode = true) {
    super(nameOfEq, watt, isSwitched);
    this.hasEcoMode = hasEcoMode;
    };
    switchEcoMode() {
        if (this.hasEcoMode) {
            return console.log(watt - (watt * .1));
        } else {
            return console.log(`${this.nameOfEq} - Эконом режим отсутствует !`)
        }
    };
};


const notebook = new Laptop("Acer", 19, true, true);
const kettle = new Boiler('Mega', 1200, false, false);

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
