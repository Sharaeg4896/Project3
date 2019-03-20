'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Products', [
            {
                brand: 'Shea Moisture',
                productName: 'Manuka Honey & Mafura Oil Intensive Hydration Masque',
                ingredients: 'Water, Coconut Oil, Shea Butter, Mafura Seed Oil, Honey, Hydrolyzed Rice Protein, Baobab Seed Oil, Avocado Oil, Fig Extract, Mango Seed Butter, Aloe Leaf Extract',
                category: 'Moisturizer',
                image: 'SMmanuka.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Shea Moisture',
                productName: 'Jamaican Black Castor Oil Strengthen & Restore Styling Lotion',
                ingredients: 'Water, Apricot Kernel Oil, Olive Fruit Oil, Castor Seed Oil, Shea Butter, Vinegar, Jojoba Seed Oil, Peppermint Leaf Extract, Citric Acid Granular, Mauritia Flexuosa Fruit Oil, Hydrolyzed Kerati',
                category: 'Styling Cream',
                image: 'SMjam.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Camille Rose Naturals',
                productName: 'Fresh Curls Hair Lotion',
                ingredients: 'Deionized water, castor seed oil, dl panthenol, glycerin, avocado oil, sodium pca, btms, peach guave, optiphen',
                image: 'CMfreshcurl.jpg',
                category: 'Moisturizer',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Camille Rose Naturals',
                productName: 'Curlaid Moisture Butter',
                ingredients: 'Deionized water, rice milk, coconut oil, shea butter fruit oil, olive oil, green tea leaf extract, sesame seed oil, soybean oil, aloe vera extract, castor seed oil, rice bran oil, macadamia seed oil, avocado oil, aloe leaf juice, jojoba seed oil, vitamin C acid, vitamin E',
                category: 'Moisturizer',
                image: 'CMcurlaid.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Camille Rose Naturals',
                productName: 'Algae Renew Deep Conditioner',
                ingredients: 'Deoinized water, aloe vera juice, shea butter, coconut oil, cocoa butter,mango seed butter, hemp seed oil,manuka honey, green tea extract, jojoba seed oil, rose hip fruit oil, grape seed oil, evening primrose oil,, blue green algae, biotin, vitamin E, peppermint oil',
                category: 'Conditioner',
                image: 'CMalgae.png',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Camille Rose Naturals',
                productName: 'Sweet Ginger Cleansing Rinse',
                ingredients: 'Water, Infused Ginger Root, Aniseed Oil, Cassia Oil, Cocamidopropyl Betaine (Derived from Coconuts), Sodium Cocoyl Isethionates (Coconut Cleanser), Glycol Distearate (Cream Emollient), Disodium Cocoamphodipropionate (Derived from Coconuts), Castor Seed Oil',
                category: 'Cleanser',
                image: 'CMginger.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Camille Rose Naturals',
                productName: 'Buritti Nectar Repair Hair Oil',
                ingredients: 'Sunflower seed oil, sweet almond oil, linseed seed oil, safflower seed oil, castor seed oil, orange peel oil, buriti fruit, rosemary leaf extract, fragance',
                category: 'Oil',
                image: 'CMboil.png',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Camille Rose Naturals',
                productName: 'Oud Rich Infusion Hair Oil',
                ingredients: 'Olive fruit oil, rice bran oil, jojoba seed oil, coconout oil, oud oil, rosemary oil, rosemary leaf extract',
                category: 'Oil',
                image: 'CMoud.png',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'CURLS Blueberry Bliss Curl Collection',
                productName: 'Reparative Hair Wash',
                ingredients: 'Certified Organic Blueberry Fruit Extract, Certified Organic Aloe Barbadensis Leaf Juice, Certified Organic Anthemis Nobilis Flower (Chamomile) Extract',
                image: 'BBwash.jpg',
                category: 'Cleanser',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'CURLS Blueberry Bliss Curl Collection',
                productName: 'Reparative Hair Mask',
                ingredients: 'Purified Water, Soybean Oil, Certified Organic Blueberry Fruit Extract, Certified Organic Anthemis Nobilis (Chamomile) Flower Extract, Certified Organic Hydrolyzed Soy Protein, Certified Organic Coconut Oil, Certified Organic Aloe Barbadensis Leaf Juice',
                category: 'Moisturizer',
                image: 'BBmask.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'CURLS Blueberry Bliss Curl Collection',
                productName: 'Reparative Leave In Conditioner',
                ingredients: 'Purified Water, Behentrimonium Methosulfate, Cetearyl Alcohol, Cetyl Alcohol, Certified Organic Blueberry Fruit Extract, Certified Organic Coconut Oil, Glycereth-26, Sorbitol, Certified Organic Aloe Barbadensis Leaf Juice, Hydrolyzed Quinoa, Silk Amino Acids, Certified Organic Chamomile Flower Extract, Fragrance, Phenoxyethanol, Caprylyl Glycol',
                category: 'Leave In Conditoner',
                image: 'BBleave.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'CURLS Blueberry Bliss Curl Collection',
                productName: 'Twist N Shout Cream',
                ingredients: 'purified water, certified organic blueberry extract, certified organic coconut oil, certified organic safflower oil, certified organic grape seed oil, certified organic mango seed butter, certifid organic shea butter',
                category: 'Styling Cream',
                image: 'BBcream.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'CURLS Blueberry Bliss Curl Collection',
                productName: 'CURL Control Paste',
                ingredients: 'Water, Castor Oil, Keratin, Hydrolyzed Quinoa, Silk Amino Acids, Vaccinium Angustifolium (Blueberry) Fruit Extract, Shea Butter, Mango Seed Butter,Argan Kernel Oil, Evening Primrose Oil',
                category: 'Gel',
                image: 'BBpaste.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'CURLS Blueberry Bliss Curl Collection',
                productName: 'Hair Growth Oil',
                ingredients: ' Certified Organic Soybean Oil, Certified Organic Sunflower Seed Oil, Castor Seed Oil, Certified Organic Blueberry Seed Oil, Certified Organic Olive Fruit Oil, Certified Organic Pomegranate Seed Oil, Certified Organic Coconut Oil, Certified Organic Gardenia Flower, Certified Organic Shea Butter, Certified Organic Jojoba Seed Oil, Certified Organic Argan Oil, Avocado Oil, Certified Organic Grape Seed Oil',
                category: 'Oil',
                image: 'BBoil.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'ECO Style',
                productName: 'Black Castor & Flaxseed Oil Styling Gel',
                ingredients: 'Water/Aqua/Eau, Castor Seed Oil, Linseed Seed Oil, Hydrolyzed Wheat Protein, PVP, Glycerin, Tetrasodum EDTA, Fragrance (Parfum), d-Limonene,',
                category: 'Gel',
                image: 'ECOflax.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                brand: 'Mielle Organics',
                productName: 'Pomegranate & Honey Curl Smoothie',
                ingredients: 'Water, Coconut Oil, Soybean Oil, Babassu Oil, *Mauritia Flexuosa (Buriti) Fruit Oil, *Copaiferi Officianalis (Balsam Copaiba) Resin, *Astrocaryum Murumuru Seed Butter, Panthenol, Punica Granatum (Pomegranate) Extract, Hydrolyzed Soy Protein, Honey (Mel, Miel), Propanediol, Polyquaternium-37, Carbomer, Phenoxyethanol, Propylene Glycol Dicaprate Dicaprylate, Steareth-2, Oleth-10, Aminomethyl Propaol, Benzoic Acid, Dehydroacetic Acid, PPG-1 Trideceth-6, Disodium EDTA, Limonene, Linolool, Benzyl Alcohol',
                category: 'Styling Cream',
                image: 'pomSmoot.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                brand: 'Mielle Organics',
                productName: 'Pomegranate & Honey Curl Coil Sculpting Custard',
                ingredients: 'Water (aqua, eau), glycerin, pectin, hydrolyzed corn starch, polysorbate-20, xanthan gum, hydroxyethylcellulose, carrageenan, fragrance (parfum), *orbignya oleifera (babassu) oil, *mauritia flexuosa (buriti) fruit oil, *copaiferi officinalis (balsam copaiba) resin, *astrocaryum murumuru seed butter, cocos nucifera (coconut) oil, punica granatum (pomegranate) extract, prunus amygdalus dulcis (sweet almond) oil, honey (mel, miel), persea gratissima (avocado) oil, phenoxyethanol, benzoic acid, ethylhexylglycerin, glycereth-2 cocoate',
                category: 'Gel',
                image: 'pomCustard.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Mielle Organics',
                productName: 'Pomegranate & Honey Leave-In Conditioner',
                ingredients: 'Water (aqua, eau), behentrimonium methosulfate, cetyl alcohol, butylene glycol, cetyl alcohol, glycerin, *orbignya oleifera (babassu) oil, *mauritia flexuosa (buriti) fruit oil, *copaiferi officinalis (balsam copaiba) resin, *astrocaryum murumuru seed butter, vaccinium myrtillus fruit extract, saccharum officinarum (sugar cane) extract, acer saccharinum (sugar maple) extract, citrus aurantium dulcis (orange) fruit extract, citrus medica limonum citrus medica limonum (lemon) fruit extract, punica granatum (pomegranate) extract, betaine, hexylene glycol, honey (mel, miel), pyrus malus (apple) fruit extract, camellia sinensis leaf extract, hexapeptide-11, citric acid, fragrance (parfum), phenoxyethanol, benzoic acid, ethylhexylglycerin, glycereth-2 cocoate',
                category: 'Conditioner',
                image: 'pomLI.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Mielle Organics',
                productName: 'Pomegranate & Honey Twisting Souffle',
                ingredients: 'Water (aqua, eau), behentrimonium methosulfate, cetearyl alcohol, aloe barbadensis leaf juice (decolorized), prunus amygdalus dulcis (sweet almond) oil, olea europaea (olive) fruit oil, sesamum indicum (sesame) seed oil, helianthus annuus seed oil, polysorbate-20, *orbignya oleifera (babassu) oil, *mauritia flexuosa (buriti) fruit oil, *copaiferi officinalis (balsam copaiba) resin, *astrocaryum murumuru seed butter, macadamia integrifolia seed oil, glyceryl stearate, butyrospermum parkii (shea) butter, punica granatum (pomegranate) extract, tocopheryl acetate, fragrance (parfum), honey (mel, miel), simmondsia chinensis (jojoba) seed oil, ricinus communis (castor) seed oil, cetrimonium chloride, phenoxyethanol, benzoic acid, ethylhexylglycerin, glycereth-2 cocoate',
                category: 'Styling Cream',
                image: 'pomSouffle.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Mielle Organics',
                productName: 'Pomegranate & Honey Moisturizing and Detangling Shampoo',
                ingredients: 'Water (Aqua, Eau), Sodium C14-16 Olefin Sulfonate, Cocamidopropyl Betaine, Polyquaternium-7, Disodium Cocoamphodipropionate, Cocamide Mea, Glycol Stearate, Disodium Lauryl Sulfosuccinate, Fragrance, Honey, Peg-150 Distearate, Panthenol, Hydrolyzed Wheat Protein, Punica Granatum (Pomegranate) Seed Oil, Euterpe Oleracea Fruit Extract, Glycerin, Silk Protein, Organic Orbignya Oleifera (Babassu) Oil, Organic Mauritia Flexuosa (Buriti) Fruit Oil, Organic Copaiferi Officinalis (Balsam Copaiba), Organic Astrocaryum Murumuru Seed Butter, Sodium Chloride, Citric Acid, Phenoxyethanol, Benzoic Acid, Ethylhexylglycerin, Glycereth-2 Cocoate',
                category: 'Cleanser',
                image: 'pomShampoo.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Mielle Organics',
                productName: 'Pomegranate & Honey Moisturizing and Detangling Conditioner',
                ingredients: 'Water (Aqua, Eau), Prunus Amygdalus Dulcis (Sweet Almond) Oil, Cyclopentasiloxane, Cetearyl Alcohol, Behentrimonium Methosulfate, Cocos Nucifera (Coconut) Oil, Stearalkonium Chloride,Fragrance, Honey, Glycerin, Euterpe Oleracea Fruit Extract, Punica Granatum (Pomegranate) Seed Oil, Organic Orbignya Oleifera (Babassu) Oil, Organic Mauritia Flexuosa (Buriti) Fruit Oil, Organic Copaiferi Officinalis (Balsam Copaiba), Organic Astrocaryum Murumuru Seed Butter, Disodium Edta, Aminomethyl Propanol, Phenoxyethanol, Benzoic Acid, Ethylhexyl Glycerin, Glycereth-2 Cocoate',
                category: 'Conditioner',
                image: 'pomCondit.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'ECO Style',
                productName: 'Moroccan Argan Oil Styling Gel',
                ingredients: 'Water, Carbomer, Hydrolyzed Wheat Protein, PVP, Glycerin, Trithanolamine, Sodium Hydrxymethylglycnate, Plysorbate 20, Tetrasodim EDTA, Argan oil, Fragrance, Yellow #11',
                category: 'Gel',
                image: 'ECOargan.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Creme Of Nature',
                productName: 'Strength & Shine Leave-in Conditioner',
                ingredients: 'Aqua (Water) (Eau), Cyclopentasiloxane, Dimethicone, Peg-12 Dimethicone, Polyquaternium-6, Disiloxane, Lactic Acid, Dimethiconol, Phenyl Trimethicone, Argania Spinosa Kernel Oil, Polyquaternium-16, Cocodimonium Hydroxypropyl Hydrolyzed Keratin, Cocodimonium Hydroxypropyl Hydrolyzed Wheat Protein, Hydrolyzed Wheat Protein Pg-Propyl Silanetriol, Panthenol, Benzophenone-4, Parfum (Fragrance), Hydroxyisohexyl 3-Cyclohexene Carboxaldehyde, Imidazolidinyl Urea, Ci 19140 (Yellow 5), Ci 14700 (Red 4)',
                category: 'Conditioner',
                image: 'CofNat.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'DevaCurl',
                productName: 'SuperCream Coconut Curl Styler',
                ingredients: 'Water (Aqua, Eau), Cetearyl Alcohol, Cocos Nucifera (Coconut) Oil, Glycerin, Hydroxpropyl Starch Phosphate, Cetrimonium Chloride, Behentrimonium Chloride, PPG-3 Benzyl Ether Myristate, Ethyl Macadamiate, Laureth-4, Hydrolyzed Jojoba Protein, Panthenol, Rosmarinus Officinalis (Rosemary) Extract, Chamomilla Recutita (Matricaria) Extract, Humulus Lupulus (Hops) Extract, Melissa Officinalis Extract, Cymbopogon Schoenanthus Extract, Achillea Millefolium Extract, Lauryldimonium Hydroxypropyl Hydrolyzed Wheat Protein, Lauryldimonium Hydroxypropyl Wheat Starch, Propylene Glycol, Ceteareth-20, Disodium EDTA, Aminomethyl Propanol, Diazolidinyl Urea, Iodopropynyl Butylcarbamate, Fragrance (Parfum)',
                category: 'Styling Cream',
                image: 'DevaCurl.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Design Essentials',
                productName: 'Oat Protein & Henna Deep Cleansing Shampoo',
                ingredients: 'Water, Sodium Lauryl Sulfate, Sodium Laureth Sulfate, Cocaminopropylamine Oxide, Glycol Distearate (and) Laureth-4 (and) Cocamidopropyl Betaine, Propylene Glycol (and) Diazolidinyl Urea (and) Methylparaben (and) Propylparaben, Gylcol Stearate, Fragrance (Parfum), Propylene Glycol, PEG 75 Lanolin, Hydroxymethylcellulose, Hydrolyzed Oat Protein, Citric Acid, Disodium EDTA, Calendula Officinalis Flower Extract, Goldenseal, Henna Extract, Hops Extract, Horsetail Extract, Prunus Serotina Bark Extract, Quillaia Saponaria Bark Extract, Chamomile Oil',
                category: 'Cleanser',
                image: 'DEoat.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Design Essentials',
                productName: 'Almond & Avocado Moisturizing & Detangling Sulfate-Free Shampoo',
                ingredients: 'Aqua/Water/Eau, Sodium Lauroyl Methyl Isethionate, Cocamidopropyl Betaine, Sodium Methyl Oleoyl Taurate, Sodium Cocoyl Isethionate, Sodium Methyl Cocoyl Taurate, Glycol Distearate, Laureth-4, Polyquaternium 7, Acrylamidopropyl Trimonium Chloride, Cetrimonium Chloride, Phenoxyethanol, Capryl Glycol, Polyquaternium 10, Panthenol, Tocopheryl Acetate, Persea Gratissima (Avocado) Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Hydrolyzed Wheat Protein, Polysorbate 20, Acrylamidopropyltrimonium Chloride/Acrylamide Copolymer, Fragrance (Parfum), Benzyl Benzoate, Citral, Geraniol, Lyral, Limonene, Linalool, Lilial',
                category: 'Cleanser',
                image: 'DEshampoo.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Design Essentials',
                productName: 'Bamboo & Silk HCO Leave In Conditioner',
                ingredients: 'Aqua/Water/Eau, Polyquaternium-11, PEG-12 Dimethicone, Amodimethicone, Cetrimonium Chloride, Trideceth-12, Phenoxyethanol, Benzoic Acid, Ethylhexyglycerin, Glycereth-2 Cocoate, Glycerin, PEG-8 Dimethicone Meadowfoamate, Panthenol, Polysorbate 20, PEG-75 Lanolin, Hydrolyzed Wheat Protein, Fragrance (Parfum), Hydrolyzed Silk Protein, Bambusa Vulgaris (Bamboo) Extract, Red 33 (CI 17200), Amyl Cinnamal, Benzyl Alcohol, Benzyl Salicylate, Citronellol, Eugenol, Geraniol, Hexyl Cinnamal, Hydroxycitronellal, Lilial, Lyral',
                category: 'Conditioner',
                image: 'HCOleav.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Shea Moisture',
                productName: 'Coconut & Hibiscus Frizz-free Curl Mousse',
                ingredients: 'Deionized Water, Cocomidroprpyl Betaine (Coconut ) Oil, Vegetable Gylcerine, Olea Europaea (Olive) Fruit Oil*, Butyrospermum Parkii (Shea Butter) Oil*,Moringa Oleifera Seed Oil, Vegetable Glycerin, Keratin, Polyquaternium-7, Hibiscus Sabdariffa Extract, Silk Protien, Polyquaternium-10, Sucrose Laurate (and) Alcohol (non-drying), Melia Azadiratcha (Neem) Seed Oil, Proprietary Essential Oil Blend,Potassium Sorbate, Citric Acid',
                category: 'Moisturizer',
                image: 'mousse.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'NOW Solutions',
                productName: 'Organic Jojoba Oil',
                ingredients: 'Organic Simmondsia Chinensis (Jojoba) Seed Oil',
                category: 'Oil',
                image: 'NOWjojoba.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'One N Only',
                productName: 'Argan Oil Treatment',
                ingredients: 'Dimethicone, Cyclopentasiloxane, Dimethiconol, C12-15 Alkyl Benzoate, Fragrance (Parfum), Argania Spinosa Kernel Oil, Yellow 11 (CI 47000), Red 17 (CI 26100)',
                category: 'Oil',
                image: 'oneonly.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Mielle Organics',
                productName: 'Detangling Co-Wash',
                ingredients: 'Water (Aqua, Eau), Cocos Nucifera (Coconut) Oil, Stearalkonium Chloride Butyrosperum parkii (Shea) Butter, Cetyk Alcohol, Cetearyl Alcohol, *Simmondsia Chinensis (Jojoba) Seed Oil, *Crambe Abyssinica (Abyssinian) Seed Oil, *Sclerocarya Birrea (Marula) Seed Oil, *Tocopheryl Acetate, Silk Amino Acids, Phenoxyethanol, Fragrance (Parfum), Benzoic Acid, Ethylhexylglycerin, Glycereth-2 Cocoate',
                category: 'Cleanser',
                image: 'MOcowash.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Mielle Organics',
                productName: 'Avocado Moisturizing Hair Milk',
                ingredients: 'Aqua (water), Aloe Barbadensis Leave Juice * (Decolorized), Glycerin, Persea Gratissima (Organic Avocado) oil, Behentromonium Methosulfate, Cetyl Alcohol, Caprylic/Capric Triglycerides, Cetyl Esters, Cetearyl Alcohol, Phenoxyethanol, Butyrospermum Parkii (Shea) Butter, Polyquaternium-7, Fragrance (Parfum), Hydroxpropyltrimonium Honey, Panthenol, Oryza Sativa (Rice) Bran Oil, Simmondsia Chinensis *(Organic Jojoba) Seed Oil, Hydroloyzed Wheat Protein, *Achiellea Millefolium(Yarrow) Extract, *Urtica Dioica(Nettle) Leaf Extract, *Salvia Officinalis (Sage) Extract, *Equisetum Arvense (Horsetail) Extract, *Lavandula Angustifolia( Lavendar) Flower/Leaf/Stem Extract, Benzoic Acid, Ethylhexylglycerine, Glyereth-2 Cocoate',
                category: 'Moisturizer',
                image: 'MOavocado.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Macadamia Natural Oil',
                productName: 'Macadamia Healing Oil Spray',
                ingredients: 'Cyclopentasiloxane, Isopropyl Myristate , Macadamia Seed Oil, Argan Kernel Oil, Tocopheryl Acetate, Fragrance (Parfum), Benzyl Benzoate, Butylphenyl Methylpropional, Coumarin, Linalool, Hexyl Cinnamal, Eugenol',
                category: 'Oil',
                image: 'macadamia.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Eden Bodyworks',
                productName: 'Coconut Shea Control Edge Glaze',
                ingredients: 'Water, Ceteareth-20, PEG-7 Glyceryl Cocoate, Aloe Vera Leaf Juice, PEG-50 Shea Butter, Propanediol, Coconut Oil, Coconut Milk, Fragrance (Parfum), Phenoxyethanol, Caprylyl Glycol, Sorbic Acid',
                category: 'Gel',
                image: 'eden.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Wet Line',
                productName: 'Xtreme Pro Styling Gel',
                ingredients: 'Water, Triethanolamine, Polyacrylic Acid, Carbomer, Glycerin, Sodium Polyacrylate, Fragrance, Benzyl Alcohol, Tetrasodium Edta, Methylchloroisothiazolinone, Methylisothiazolinone, Panthenol, Methoxycinnamidopropyl Hydroxysultaine, Ext. Violet 2 (Ci 60730), Aloe Barbadensis Leaf Juice',
                category: 'Gel',
                image: 'xtreme.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Karens Body Beautiful',
                productName: 'Super Duper Hydrating Hair Cream',
                ingredients: 'Shea Butter, Aloe Vera Gel, Argan Oil, Allantoin, Lecithin, Potassium Sorbate, Acai Powder, Vegetable Wax, Vegetable Glycerin, Essential and/or Fragrance Oils & Vitamin E',
                category: 'Styling Cream',
                image: 'karen.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Mane Choice',
                productName: 'Do It Fro The Culture Accomplished Leave In',
                ingredients: 'Water, Glycerin, Castor Seed Oil, Aloe Vera Leaf Juice, Vitamin C, Biotin, Caprylic/Capric Triglyceride, Chamomile Flower Extract, Vitamin D, Horsetail Extract, Tea Tree Leaf Oil, Black Cumin Oil, Evening Primrose Oil, Vitamin B5, Vitamin A, Saw Palmetto Fruit Oil, Silk Amino Acids, Vitamin E, Nettle Extract, Charcoal Powder, Limonene',
                category: 'Conditioner',
                image: 'MCleavin.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Mane Choice',
                productName: 'Do It Fro The Culture Magnificent Mask',
                ingredients: 'Water, Glycerin, Coconut Oil, Black Cumin Oil, Castor Seed Oil, Rapeseed Oil, Aloe Vera Leaf Juice, Vitamin C, Biotin, Chamomile Flower Extract, Vitamin D, Citric Acid, Horsetail Extract, Tea Tree Leaf Oil, Evening Primrose Oil, Panthenol, Vitamin B5, Vitamin A, Saw Palmetto Fruit Oil, Silk Amino Acids, Vitamin E, Nettle Extract, Charcoal Powder',
                category: 'Moisturizer',
                image: 'MCmask.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Mane Choice',
                productName: 'Do It Fro The Culture Bold Buttery Gel',
                ingredients: 'Water, Glycerin, Aloe Vera Leaf Juice, Black Cumin Oil, Vitamin C, Biotin, Chamomile Flower Extract, Vitamin D, Horsetail Extract, Tea Tree Leaf Oil, Evening Primrose Oil, Vitamin B5, Vitamin A, Saw Palmetto Fruit Oil, Silk Amino Acids, Vitamin E, Nettle Extract, Charcoal Powder, Castor Oil, Limonene',
                category: 'Gel',
                image: 'MCgel.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                brand: 'Mane Choice',
                productName: 'Do It Fro The Culture Sophisticated Sheen Spray',
                ingredients: 'Sweet Almond Oil, Black Cumin Seed Oil, Soybean Oil, Safflower Seed Oil, Aloe Vera Leaf Juice, Vitamin C, Biotin, Chamomile Flower Extract, Vitamin D, Horsetail Extract, Glycerin, Sunflower Seed Extract, TeaTree Leaf Oil, Evening Primrose Oil, Charcoal Powder, Rice Bran Extract, Vitamin B5, Vitamin A, Rosemary Extract, Saw Palmetto Fruit Oil, Silk Amino Acids, Vitamin E, Nettle Extract, Water, Limonene',
                category: 'Oil',
                image: 'MCsheen.jpg',
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