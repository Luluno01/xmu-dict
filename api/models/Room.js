/**
 * Room.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoPK: true,

  attributes: {
    campusID: {
      type: 'string',
      size: 5, // e.g. 09
      unique: false
    },
    dormID: {
      type: 'string',
      size: 5, // e.g. 07
      unique: false
    },
    roomID: {
      type: 'string',
      size: 10, // e.g. 0427
      unique: false
    },
    electricityBill: {
      type: 'json'
    }
  }
};

