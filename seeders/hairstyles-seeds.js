'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Hairstyles', [{
        hairstyle: 'twistout',
        products: 'product1, product2,...',
        youtuberName: 'Super YouTuber',
        youtubeURL: 'https://youtuber.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        hairstyle: 'Add info',
        products: 'Add info',
        youtuberName: 'Add info',
        youtubeURL: 'Add info',
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