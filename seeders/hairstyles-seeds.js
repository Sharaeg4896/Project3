'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Hairstyles', [{
        hairstyle: 'Twistout',
        products: 'Camille Rose Naturals Fresh Curls Hair Lotion, Camille Rose Naturals Curlaide Moisture Butter, Camille Rose Naturals Algae Renew Deep Conditioner, Sweet Ginger Cleansing Rinse',
        youtuberName: 'Cool Calm Curly',
        youtubeURL: 'https://www.youtube.com/watch?v=uYXgMR1Ouks',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {  
        hairstyle: 'Twistout',
        products: 'CURLS Blueberry Bliss Reparative Hair Wash, CURLS Blueberry Bliss Reparative Hair Mask, CURLS Blueberry Bliss Reparative Leave In Conditioner, CURLS Blueberry Bliss Twist-N-Shout Cream, CURLS Blueberry Bliss Curl Control Paste',
        youtuberName: 'NaturalNeiicey',
        youtubeURL: 'https://www.youtube.com/watch?v=tPGiPucEsW0',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        hairstyle: 'Wash and Go',
        products: 'ECO Style Black Castor & Flaxseed Oil Styling Gel, Shea Moisture Jamaican Black Castor Oil Strengthen & Restore Styling Lotion',
        youtuberName: 'Mini Marley',
        youtubeURL: 'https://www.youtube.com/watch?v=4CyvvCx6Us0',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        hairstyle: 'Wash and Go',
        products: 'Mielle Organics Pomegranate & Honey Curl Smoothie, Mielle Organics Pomegranate & Honey Curl Coil Sculpting Custard, Mielle Organics Pomegranate & Honey Curl Leave-In Conditioner, Mielle Organics Pomegranate & Honey Curl Twisting Souffle',
        youtuberName: 'Lavishly Britt',
        youtubeURL: 'https://www.youtube.com/watch?v=ly2QcV0DY44&t=221s',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        hairstyle: 'Braidout',
        products: 'Mielle Organics Pomegranate & Honey Curl Leave-In Conditioner, Mielle Organics Pomegranate & Honey Curl Twisting Souffle',
        youtuberName: 'JasColoredCurls',
        youtubeURL: 'https://www.youtube.com/watch?v=6187TewvzJM',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        hairstyle: 'Braidout',
        products: 'ECO Style Moroccan Argan Oil Styling Gel, Creme Of Nature Strength & Shine Leave-in Conditioner',
        youtuberName: 'OKae Kaela',
        youtubeURL: 'https://www.youtube.com/watch?v=SQOD9yJw3r4&t=149s',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        hairstyle: 'Bantu Knots',
        products: 'Mane Choice Do It Fro The Culture Magnificent Mask, Mane Choice Do It Fro The Culture Accomplished Leave In, Mane Choice Do It Fro The Culture Bold Buttery Gel, Mane Choice Do It Fro The Culture Sophisticated Sheen Spray',
        youtuberName: 'Daye La Soul',
        youtubeURL: 'https://www.youtube.com/watch?v=1nQnpdjo2DU',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        hairstyle: 'Bantu Knots',
        products: 'Karens Body Beautiful Super Duper Hydrating Hair Cream, Organic Jojoba Oil',
        youtuberName: 'Samirah Gilli',
        youtubeURL: 'https://www.youtube.com/watch?v=asIr9rU5z34',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        hairstyle: 'Silk Press',
        products: 'Its a 10 Miracle Silk Leave in Conditioner, Macadamia Healing Oil Spray, One n Only Argan Oil, 24 Hour Edge Control',
        youtuberName: 'Danni Jadore',
        youtubeURL: 'https://www.youtube.com/watch?v=paOptxzBRnI&t=476s',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        hairstyle: 'Silk Press',
        products: 'Design Essentials Oat Protein & Henna Deep Cleansing Shampoo, Design Essentials Almond & Avocado Moisturizing & Detangling Sulfate-Free Shampoo, Bamboo & Silk HCO Leave In Conditioner',
        youtuberName: 'Tierra J Beauty',
        youtubeURL: 'https://www.youtube.com/watch?v=7V8fM1NQ7WE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        hairstyle: 'Flexi Rods',
        products: 'Mielle Organics Detangling Co-wash, Mielle Organics Avocado Moisturizing Hair Milk',
        youtuberName: 'JasColoredCurls',
        youtubeURL: 'https://www.youtube.com/watch?v=TTgjdNdQ2Oo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {  
        hairstyle: 'Flexi Rods',
        products: 'Shea Moisture Coconut & Hibiscus Frizz-free Curl Mousse, CURLS Blueberry Bliss Twist-N-Shout Cream',
        youtuberName: 'NaturallyChea',
        youtubeURL: 'https://www.youtube.com/watch?v=RlsyoEEchU0&t=20s',
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