'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Products', [
            {
                brand: 'Shea Moisture',
                productName: 'Manuka Honey & Mafura Oil Intensive Hydration Masque',
                ingredients: 'Water, Coconut Oil, Shea Butter, Mafura Seed Oil, Honey, Hydrolyzed Rice Protein, Baobab Seed Oil, Avocado Oil, Fig Extract, Mango Seed Butter, Aloe Leaf Extract',
                category: 'Conditioner',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Shea Moisture',
                productName: 'Jamaican Black Castor Oil Strengthen & Restore Styling Lotion',
                ingredients: 'Water, Apricot Kernel Oil, Olive Fruit Oil, Castor Seed Oil, Shea Butter, Vinegar, Jojoba Seed Oil, Peppermint Leaf Extract, Citric Acid Granular, Mauritia Flexuosa Fruit Oil, Hydrolyzed Kerati',
                category: 'Styling Cream',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Camille Rose Naturals',
                productName: 'Fresh Curls Hair Lotion',
                ingredients: 'Deionized water, castor seed oil, dl panthenol, glycerin, avocado oil, sodium pca, btms, peach guave, optiphen',
                category: 'Styling Cream',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Camille Rose Naturals',
                productName: 'Curlaid Moisture Butter',
                ingredients: 'Deionized water, rice milk, coconut oil, shea butter fruit oil, olive oil, green tea leaf extract, sesame seed oil, soybean oil, aloe vera extract, castor seed oil, rice bran oil, macadamia seed oil, avocado oil, aloe leaf juice, jojoba seed oil, vitamin C acid, vitamin E',
                category: 'Moisturizer',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Camille Rose Naturals',
                productName: 'Algae Renew Deep Conditioner',
                ingredients: 'Deoinized water, aloe vera juice, shea butter, coconut oil, cocoa butter,mango seed butter, hemp seed oil,manuka honey, green tea extract, jojoba seed oil, rose hip fruit oil, grape seed oil, evening primrose oil,, blue green algae, biotin, vitamin E, peppermint oil',
                category: 'Conditioner',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Camille Rose Naturals',
                productName: 'Sweet Ginger Cleansing Rinse',
                ingredients: 'Water, Infused Ginger Root, Aniseed Oil, Cassia Oil, Cocamidopropyl Betaine (Derived from Coconuts), Sodium Cocoyl Isethionates (Coconut Cleanser), Glycol Distearate (Cream Emollient), Disodium Cocoamphodipropionate (Derived from Coconuts), Castor Seed Oil',
                category: 'Cleanser',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Camille Rose Naturals',
                productName: 'Buritti Nectar Repair Hair Oil',
                ingredients: 'SUNFLOWER SEED OIL, SWEET ALMOND OIL, LINSEED SEED OIL, SAFFLOWER SEED OIL, CASTOR SEED OIL, ORANGE PEEL OIL, BURITI FRUIT, ROSEMARY LEAF EXTRACT, FRAGANCE',
                category: 'Oil',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Camille Rose Naturals',
                productName: 'Oud Rich Infusion Hair Oil',
                ingredients: 'OLIVE FRUIT OIL, RICE BRAN OIL, JOJOBA SEED OIL, COCONOUT OIL, OUD OIL, ROSEMARY OIL, ROSEMARY LEAF EXTRACT',
                category: 'Oil',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'CURLS Blueberry Bliss Curl Collection',
                productName: 'Reparative Hair Wash',
                ingredients: 'Certified Organic Blueberry Fruit Extract, Certified Organic Aloe Barbadensis Leaf Juice, Certified Organic Anthemis Nobilis Flower (Chamomile) Extract',
                category: 'Cleanser',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'CURLS Blueberry Bliss Curl Collection',
                productName: 'Reparative Hair Mask',
                ingredients: 'Purified Water, Soybean Oil, Certified Organic Blueberry Fruit Extract, Certified Organic Anthemis Nobilis (Chamomile) Flower Extract, Certified Organic Hydrolyzed Soy Protein, Certified Organic Coconut Oil, Certified Organic Aloe Barbadensis Leaf Juice',
                category: 'Conditioner',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'CURLS Blueberry Bliss Curl Collection',
                productName: 'Reparative Leave In Conditioner',
                ingredients: 'Purified Water, Behentrimonium Methosulfate, Cetearyl Alcohol, Cetyl Alcohol, Certified Organic Blueberry Fruit Extract, Certified Organic Coconut Oil, Glycereth-26, Sorbitol, Certified Organic Aloe Barbadensis Leaf Juice, Hydrolyzed Quinoa, Silk Amino Acids, Certified Organic Chamomile Flower Extract, Fragrance, Phenoxyethanol, Caprylyl Glycol',
                category: 'Conditoner',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'CURLS Blueberry Bliss Curl Collection',
                productName: 'Twist N Shout Cream',
                ingredients: 'purified water, certified organic blueberry extract, certified organic coconut oil, certified organic safflower oil, certified organic grape seed oil, certified organic mango seed butter, certifid organic shea butter',
                category: 'Styling Cream',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'CURLS Blueberry Bliss Curl Collection',
                productName: 'CURL Control Paste',
                ingredients: 'Water, Castor Oil, Keratin, Hydrolyzed Quinoa, Silk Amino Acids, Vaccinium Angustifolium (Blueberry) Fruit Extract, Shea Butter, Mango Seed Butter,Argan Kernel Oil, Evening Primrose Oil',
                category: 'Gel',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'CURLS Blueberry Bliss Curl Collection',
                productName: 'Hair Growth Oil',
                ingredients: ' Certified Organic Soybean Oil, Certified Organic Sunflower Seed Oil, Castor Seed Oil, Certified Organic Blueberry Seed Oil, Certified Organic Olive Fruit Oil, Certified Organic Pomegranate Seed Oil, Certified Organic Coconut Oil, Certified Organic Gardenia Flower, Certified Organic Shea Butter, Certified Organic Jojoba Seed Oil, Certified Organic Argan Oil, Avocado Oil, Certified Organic Grape Seed Oil',
                category: 'Oil',
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