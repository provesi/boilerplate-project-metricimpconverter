function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    let index;
    
    index = /[a-z]/i.exec(input).index;
    result = input.split(input.charAt(index));
    
    return result[0];
  };
  
  this.getUnit = function(input) {
    let result;
    let index;
    
    index = /[a-z]/i.exec(input).index;
    result = input.slice(index, input.length);
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    const conversions = {
      gal: 'L',
      L: 'gal',
      mi: 'km',
      km: 'mi',
      lbs: 'kg',
      kg: 'lbs'
    }
    
    let result;
    
    result = conversions[initUnit]; 
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
