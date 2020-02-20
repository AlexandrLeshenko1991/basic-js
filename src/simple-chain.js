const chainMaker = {

  chainValue: [],

  getLength() {
    return this.chainValue.length;
  },
  addLink(value) {
    this.chainValue.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    const real_pos = position - 1;
    if(real_pos < 0 || real_pos >= this.getLength() || position === `${position}`) {
      this.chainValue = [];
      throw new Error();
    }
    this.chainValue.splice(real_pos, 1);
    return this;
  },
  reverseChain() {
    this.chainValue.reverse();
    return this;
  },
  finishChain() {
    const finished = this.chainValue.join('~~');
    this.chainValue = [];
    return finished;
  }
};

module.exports = chainMaker;
