var Spaceship = (function() {
  return class {
    constructor(object) {
      this.id = object.id;
      this.name = object.name;
      this.phasers = object.phasers;
      this.phasersCharge = "uncharged";
      this.shields = object.shields;
      this.cloaked = false;
      this.warpDrive = "disengaged";
      this.docked = true;
      Store.data.spaceships.push(this);
    }
    cloaked() {

    }
    warpDrive() {

    }
    docked() {

    }
    // phasersCharge() {
    //   if (this.docked === false) {
    //     return "charged!";
    //   }
    // }
  }
})();
