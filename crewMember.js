var CrewMember = (function() {
  return class {
    constructor(object) {
      this.id = object.id;
      this.position = object.position;
      this.currentShip = "Looking for a Rig";
      this.spaceshipId = null;
      Store.data.crewMembers.push(this);
    }
    assignShip(ship) {
      this.currentShip = ship;
      ship.docked = false;
      this.spaceshipId = ship.id;
    }
    //
    // currentShip() {
    //
    // }

    engageWarpDrive() {
      if (this.currentShip === "Looking for a Rig") {
        return "had no effect"
      }
      if (this.position === "Pilot") {
        this.currentShip.warpDrive = "engaged!"
      }
    }
    setsInvisibility() {
      if (this.currentShip === "Looking for a Rig") {
        return "had no effect"
      }
      if (this.position === "Defender") {
        this.currentShip.cloaked = true;
      }
    }
    chargePhasers() {
      if (this.currentShip === "Looking for a Rig") {
        return "had no effect"
      }
      if (this.position === "Gunner") {
        this.currentShip.phasersCharge = "charged!";
      }
    }
  }
})();
