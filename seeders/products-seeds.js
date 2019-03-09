'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
   return queryInterface.bulkInsert('Products', [
     {
      brand: 'Shea Moisture',
      productName: 'Deep Treatment Masque',
      ingredients: 'Water, Cetyl Alcohol, Butyrospermum Parkii (Shea) Butter*♥...',
      category: 'Coditioner',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      brand: 'Add info',
      productName: 'Add info',
      ingredients: 'Add info',
      category: 'Add info',
      createdAt: new Date(),
      updatedAt: new Date()
    }
], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};