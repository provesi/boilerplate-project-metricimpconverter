'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(
      function(req, res){
        let number = convertHandler.getNum(req.query.input);
        let unit = convertHandler.getUnit(req.query.input);
        let returnUnit = convertHandler.getReturnUnit(unit);
    res.json({initNum: number, initUnit: unit, returnUnit: returnUnit});
  });

};
