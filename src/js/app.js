class Team {
  constructor() {
    this.members = [];
    this.currentIndex = 0;
  }

  add(character) {
    this.members.push(character);
  }

  * [Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}
