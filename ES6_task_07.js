'use strict';

const sum = (...args) => {
    let a = args;
    let res = 0;
    for (let elem = 0; elem < a.length; elem++) {
      res += Number(a[elem]);
    }
    return res;  
  }