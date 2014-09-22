// Example model


module.exports = function (sequelize, DataTypes) {

  var Colour = sequelize.define('Colour', {
    colour:      DataTypes.STRING,
    url:         DataTypes.STRING,
    text:        DataTypes.STRING,
    reference:   DataTypes.INTEGER
  });

  return Colour;
};

