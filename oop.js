class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduceItSelf() {
    if (this.age < 1) {
      console.log("uuaaa uaaa");
    } else {
      console.log("Hi. I am " + this.name);
    }
  }
  growUpOneYear() {
    this.age++;
  }
}

let firstPersonOnEarth = new ("adam", 0, "male")();
firstPersonOnEarth.introduceItSelf();
firstPersonOnEarth.growUpOneYear();
firstPersonOnEarth.growUpOneYear();
firstPersonOnEarth.growUpOneYear();
firstPersonOnEarth.introduceItSelf();
