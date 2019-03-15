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
                category: 'Leave In Conditoner',
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
            },
            {
              brand: 'ECO Style',
              productName: 'Black Castor & Flaxseed Oil Styling Gel',
              ingredients: 'Water/Aqua/Eau, Carbomer, Triethanolamine, Ricinus Communis (Castor) Seed Oil, Linum usitatissimum (Linseed) Seed Oil, Hydrolyzed Wheat Protein, PVP, Glycerin, Phenoxyethanol, Polysorbate 20, Tetrasodum EDTA, Fragrance (Parfum), d-Limonene,',
              category: 'Gel',
              createdAt: new Date(),
              updatedAt: new Date()
          },{
            brand: 'Mielle Organics',
            productName: 'Pomegranate & Honey Curl Smoothie',
            ingredients: 'Water (Aqua, Eau), Cocos Nucifera (Coconut ) Oil, Glycerin, Isoprpyl Myristate, Caprylic/Capric Triglyceride, Stearyl Alcohol, Polyquaternium-11, Fragrance (Parfum), Ceteareth-20, Dimethicone, Glycine Soja (Soybean) Oil, *Orbignya Oleifera (Babassu) Oil, *Mauritia Flexuosa (Buriti) Fruit Oil, *Copaiferi Officianalis (Balsam Copaiba) Resin, *Astrocaryum Murumuru Seed Butter, Panthenol, Punica Granatum (Pomegranate) Extract, Hydrolyzed Soy Protein, Honey (Mel, Miel), Propanediol, Polyquaternium-37, Carbomer, Phenoxyethanol, Propylene Glycol Dicaprate Dicaprylate, Steareth-2, Oleth-10, Aminomethyl Propaol, Benzoic Acid, Dehydroacetic Acid, PPG-1 Trideceth-6, Disodium EDTA, Limonene, Linolool, Benzyl Alcohol',
            category: 'Styling Cream',
            createdAt: new Date(),
            updatedAt: new Date()
        },{
            brand: 'Mielle Organics',
            productName: 'Pomegranate & Honey Curl Coil Sculpting Custard',
            ingredients: 'WATER (AQUA, EAU), GLYCERIN, PECTIN, HYDROLYZED CORN STARCH, POLYSORBATE-20, XANTHAN GUM, HYDROXYETHYLCELLULOSE, CARRAGEENAN, FRAGRANCE (PARFUM), *ORBIGNYA OLEIFERA (BABASSU) OIL, *MAURITIA FLEXUOSA (BURITI) FRUIT OIL, *COPAIFERI OFFICINALIS (BALSAM COPAIBA) RESIN, *ASTROCARYUM MURUMURU SEED BUTTER, COCOS NUCIFERA (COCONUT) OIL, PUNICA GRANATUM (POMEGRANATE) EXTRACT, PRUNUS AMYGDALUS DULCIS (SWEET ALMOND) OIL, HONEY (MEL, MIEL), PERSEA GRATISSIMA (AVOCADO) OIL, PHENOXYETHANOL, BENZOIC ACID, ETHYLHEXYLGLYCERIN, GLYCERETH-2 COCOATE',
            category: 'Gel',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            brand: 'Mielle Organics',
            productName: 'Pomegranate & Honey Leave-In Conditioner',
            ingredients: 'WATER (AQUA, EAU), BEHENTRIMONIUM METHOSULFATE, CETYL ALCOHOL, BUTYLENE GLYCOL, CETYL ALCOHOL, GLYCERIN, *ORBIGNYA OLEIFERA (BABASSU) OIL, *MAURITIA FLEXUOSA (BURITI) FRUIT OIL, *COPAIFERI OFFICINALIS (BALSAM COPAIBA) RESIN, *ASTROCARYUM MURUMURU SEED BUTTER, VACCINIUM MYRTILLUS FRUIT EXTRACT, SACCHARUM OFFICINARUM (SUGAR CANE) EXTRACT, ACER SACCHARINUM (SUGAR MAPLE) EXTRACT, CITRUS AURANTIUM DULCIS (ORANGE) FRUIT EXTRACT, CITRUS Medica Limonum CITRUS MEDICA LIMONUM (LEMON) FRUIT EXTRACT, PUNICA GRANATUM (POMEGRANATE) EXTRACT, BETAINE, HEXYLENE GLYCOL, HONEY (MEL, MIEL), PYRUS MALUS (APPLE) FRUIT EXTRACT, CAMELLIA SINENSIS LEAF EXTRACT, HEXAPEPTIDE-11, CITRIC ACID, FRAGRANCE (PARFUM), PHENOXYETHANOL, BENZOIC ACID, ETHYLHEXYLGLYCERIN, GLYCERETH-2 COCOATE',
            category: 'Conditioner',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            brand: 'Mielle Organics',
            productName: 'Pomegranate & Honey Twisting Souffle',
            ingredients: 'WATER (AQUA, EAU), BEHENTRIMONIUM METHOSULFATE, CETEARYL ALCOHOL, ALOE BARBADENSIS LEAF JUICE (DECOLORIZED), PRUNUS AMYGDALUS DULCIS (SWEET ALMOND) OIL, OLEA EUROPAEA (OLIVE) FRUIT OIL, SESAMUM INDICUM (SESAME) SEED OIL, HELIANTHUS ANNUUS SEED OIL, POLYSORBATE-20, *ORBIGNYA OLEIFERA (BABASSU) OIL, *MAURITIA FLEXUOSA (BURITI) FRUIT OIL, *COPAIFERI OFFICINALIS (BALSAM COPAIBA) RESIN, *ASTROCARYUM MURUMURU SEED BUTTER, MACADAMIA INTEGRIFOLIA SEED OIL, GLYCERYL STEARATE, BUTYROSPERMUM PARKII (SHEA) BUTTER, PUNICA GRANATUM (POMEGRANATE) EXTRACT, TOCOPHERYL ACETATE, FRAGRANCE (PARFUM), HONEY (MEL, MIEL), SIMMONDSIA CHINENSIS (JOJOBA) SEED OIL, RICINUS COMMUNIS (CASTOR) SEED OIL, CETRIMONIUM CHLORIDE, PHENOXYETHANOL, BENZOIC ACID, ETHYLHEXYLGLYCERIN, GLYCERETH-2 COCOATE',
            category: 'Styling Cream',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            brand: 'Mielle Organics',
            productName: 'Pomegranate & Honey Moisturizing and Detangling Shampoo',
            ingredients: 'Water (Aqua, Eau), Sodium C14-16 Olefin Sulfonate, Cocamidopropyl Betaine, Polyquaternium-7, Disodium Cocoamphodipropionate, Cocamide Mea, Glycol Stearate, Disodium Lauryl Sulfosuccinate, Fragrance, Honey, Peg-150 Distearate, Panthenol, Hydrolyzed Wheat Protein, Punica Granatum (Pomegranate) Seed Oil, Euterpe Oleracea Fruit Extract, Glycerin, Silk Protein, Organic Orbignya Oleifera (Babassu) Oil, Organic Mauritia Flexuosa (Buriti) Fruit Oil, Organic Copaiferi Officinalis (Balsam Copaiba), Organic Astrocaryum Murumuru Seed Butter, Sodium Chloride, Citric Acid, Phenoxyethanol, Benzoic Acid, Ethylhexylglycerin, Glycereth-2 Cocoate',
            category: 'Cleanser',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            brand: 'Mielle Organics',
            productName: 'Pomegranate & Honey Moisturizing and Detangling Conditioner',
            ingredients: 'Water (Aqua, Eau), Prunus Amygdalus Dulcis (Sweet Almond) Oil, Cyclopentasiloxane, Cetearyl Alcohol, Behentrimonium Methosulfate, Cocos Nucifera (Coconut) Oil, Stearalkonium Chloride,Fragrance, Honey, Glycerin, Euterpe Oleracea Fruit Extract, Punica Granatum (Pomegranate) Seed Oil, Organic Orbignya Oleifera (Babassu) Oil, Organic Mauritia Flexuosa (Buriti) Fruit Oil, Organic Copaiferi Officinalis (Balsam Copaiba), Organic Astrocaryum Murumuru Seed Butter, Disodium Edta, Aminomethyl Propanol, Phenoxyethanol, Benzoic Acid, Ethylhexyl Glycerin, Glycereth-2 Cocoate',
            category: 'Conditioner',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            brand: 'ECO Style',
            productName: 'Moroccan Argan Oil Styling Gel',
            ingredients: 'Water, Carbomer, Hydrolyzed Wheat Protein, PVP, Glycerin, Trithanolamine, Sodium Hydrxymethylglycnate, Plysorbate 20, Tetrasodim EDTA, Argan oil, Fragrance, Yellow #11',
            category: 'Gel',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            brand: 'Creme Of Nature',
            productName: 'Strength & Shine Leave-in Conditioner',
            ingredients: 'Aqua (Water) (Eau), Cyclopentasiloxane, Dimethicone, Peg-12 Dimethicone, Polyquaternium-6, Disiloxane, Lactic Acid, Dimethiconol, Phenyl Trimethicone, Argania Spinosa Kernel Oil, Polyquaternium-16, Cocodimonium Hydroxypropyl Hydrolyzed Keratin, Cocodimonium Hydroxypropyl Hydrolyzed Wheat Protein, Hydrolyzed Wheat Protein Pg-Propyl Silanetriol, Panthenol, Benzophenone-4, Parfum (Fragrance), Hydroxyisohexyl 3-Cyclohexene Carboxaldehyde, Imidazolidinyl Urea, Ci 19140 (Yellow 5), Ci 14700 (Red 4)',
            category: 'Conditioner',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            brand: 'DevaCurl',
            productName: 'SuperCream Coconut Curl Styler',
            ingredients: 'Water (Aqua, Eau), Cetearyl Alcohol, Cocos Nucifera (Coconut) Oil, Glycerin, Hydroxpropyl Starch Phosphate, Cetrimonium Chloride, Behentrimonium Chloride, PPG-3 Benzyl Ether Myristate, Ethyl Macadamiate, Laureth-4, Hydrolyzed Jojoba Protein, Panthenol, Rosmarinus Officinalis (Rosemary) Extract, Chamomilla Recutita (Matricaria) Extract, Humulus Lupulus (Hops) Extract, Melissa Officinalis Extract, Cymbopogon Schoenanthus Extract, Achillea Millefolium Extract, Lauryldimonium Hydroxypropyl Hydrolyzed Wheat Protein, Lauryldimonium Hydroxypropyl Wheat Starch, Propylene Glycol, Ceteareth-20, Disodium EDTA, Aminomethyl Propanol, Diazolidinyl Urea, Iodopropynyl Butylcarbamate, Fragrance (Parfum)',
            category: 'Styling Cream',
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