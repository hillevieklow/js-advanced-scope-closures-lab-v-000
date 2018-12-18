function produceDrivingRange (blockRange) {
  return function (startLoc, endLoc) {
    const start = startLoc.slice(0, -2);
    const end = endLoc.slice(0, -2);
    const distance = end - start;
    const difference = distance - blockRange

    if (difference > 0) {
      return `${Math.abs(difference)} blocks out of range`
    } else {
      return `within range by ${Math.abs(difference)}`
    }
  }
}

function produceTipCalculator (percentTip) {
  return function (billAmount) {
    return (billAmount * percentTip)
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
