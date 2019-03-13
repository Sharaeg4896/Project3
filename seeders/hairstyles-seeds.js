'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Hairstyles', [{
        hairstyle: 'Twistout',
        products: 'Camille Rose Naturals Fresh Curls Hair Lotion, Camille Rose Naturals Curlaide Moisture Butter, Camille Rose Naturals Algae Renew Deep Conditioner, Sweet Ginger Cleansing Rinse',
        youtuberName: 'Cool Calm Curly',
        youtubeURL: 'https://www.youtube.com/channel/UCIt142KdHUVyZzq5E9i6Avg/featured',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {  
        hairstyle: 'Twistout',
        products: 'CURLS Blueberry Bliss Reparative Hair Wash, CURLS Blueberry Bliss Reparative Hair Mask, CURLS Blueberry Bliss Reparative Leave In Conditioner, CURLS Blueberry Bliss Twist N Shout Cream, CURLS Blueberry Bliss Curl Control Paste',
        youtuberName: 'NaturalNeiicey',
        youtubeURL: 'https://www.youtube.com/user/PGneiicey',
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