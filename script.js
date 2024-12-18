// Complete the js code
const Car = function (make, model) {
  this.make = make;
  this.model = model;
};

const SportsCar = function (make, model, topSpeed) {
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
};

Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};



// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
