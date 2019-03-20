'use strict';

module.exports ={
	up: (queryInterface, Sequelize) => {

		return queryInterface.bulkInsert('HairTips', [
		
			{
				
				tips : "1. Hair Steaming",
				summary : "This treatment is finally gaining the attention it deserves. Just like our bodies, our hair thrives when being supplied with water. To maintain a clumped curl, lasting hairstyles, retain moisture, overall health, and manageability, every Natural should be steaming.You can conduct hair steaming by going under a hair steamer with your conditioner for 20 to 30 minutes. Add steaming to your hair regimen by going under the hair steamer every two weeks.",
				image : "hair-steaming.jpg",
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "2. Hygral Fatigue",
				summary : "Believe it or not, there is such a thing as too much water. Many Naturals wet their hair every day or every other day to restyle or refresh their hair. If you are someone that has a habit of spraying your hair often and you are noticing your hair is just different, this could be why.Hygral Fatigue is the constant expansion and contraction of the cuticle when it opens to take in water and closes to dry the water out. Overworking your cuticle will cause damage and could make the hair feel rigid. Your hair may not react to products like it used to and it also may seem like it is not retaining moisture.Correcting this problem takes weeks but can be done. You would have to avoid wetting your hair many times in a week and get your water from water-based creams like moisturizers. Try achieving styles that will last you about five days to a week so that you do not have to wet your hair to restyle. You would then use a creamy moisturizer to refresh.",
				image : "moisturize-hair.jpg",
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "3. Pre Detangle",
				summary : "99.9% of Naturals do not detangle their hair every day. Hundreds of strands try to shed off freely but they are getting caught in our natural styles.On wash day, it may be easier to detangle your hair before you shampoo it. Detangling before shampooing will get rid of most of the tangles.You can spray your hair with a leave-in conditioner or use a moisturizer to soften up your hair and protect your ends so that it does not break while detangling. You should not detangle your hair without applying a product to soften it up and give it elasticity.",
				image : "detangled-hair.jpg",
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "4. Breakage vs. Shedding",
				summary : "Breakage is the imbalance of moisture and protein (strength). Without either or, your hair will easily break. Too much of one will also make your hair do the same.Breakage comes from anywhere on the hair strand from the root all the way to the ends. Having a regimen will keep you on the right track of having a healthy balance of moisture and protein.Shedding happens because of what is going on within the body. Diseases, disorders, hormone imbalances, stress, lack of nutrition, lack of water intake, and the actual natural shedding phase of hair (telogen) are all culprits.Hair that is shedding will have a white bulb on the tip, indicating it came from the follicle within the scalp skin. With shedding you would have to figure out what your body is going through and correct it if possible.",
				image : "shedding-hair-on-comb.jpg",
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "5. A True Moisturizer",
				summary : "A moisturizer will have water as the first ingredient. If you look at the definition of moisture, water is present; water opens up the cuticle to allow the other ingredients to penetrate and work on a deeper level.Using oils and butter as moisturizers are not going to be as effective. Oils will nourish, seal and even soften the hair temporarily and so will butter. Using oils and butter daily will repel the moisture your hair is craving, which you can get from your hair steamer as mentioned in tip 1.If you use a water-based, creamy moisturizer daily or as needed this will be more effective. Using a moisturizer will give you long lasting moisture, even after you cleanse your hair.",
				image : "natural-oils.jpg",
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "6. Cut, Trim, Shape",
				summary : "I know you’re tired of hearing this, but you have to! Sometimes the only thing holding your hair back from being as healthy as possible is getting a professional trim or by cutting off what is damaged. Keeping your hair shaped is important too if you wear your hair out often. Split ends will happen to the best of us which is why trimming your hair 4-6 times a year is recommended for healthy hair.You want to get your hair trimmed by a professional for two reasons, their shears, and attention to detail. If you trim your hair with scissors, you are already setting your hair up to split because scissors are not sharp enough for a clean cut and if it isn’t a clean cut it will split right after the cut.Professional hair cutting shears are best for trimming and cutting. You want to cut above where your hair has split, and a good hair stylist can show you exactly where that is. A professional hair stylist will use different angles to get all of the split ends for an even cut.",
				image : "hair-cut-trim.jpg",
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "7. Treat Before You Protect",
				summary : "If you are thinking about doing a protective style, doing the proper treatments will ensure your hair health coming out of the style. A steam hydration treatment and a protein treatment are a great start to prepping your hair for a style that will last longer than two weeks. You want to protect healthy hair not damaged hair.",
				image : "Deep-condition.jpg",
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "8. Coloring Your Hair",
				summary : "Before coloring your hair, you want to prep it as mentioned in tip 7. You also want to go to a Salon that uses a treatment called Olaplex in the color formula and as a step after the color is applied to ensure the integrity of your hair.Olaplex is a professional treatment that is a service in most salons that offer color. Using this treatment in your color and lighteners (bleach) has given Naturals confidence to try something different!Olaplex is a 2 part system, with step one going into the actual chemical mixture, and step 2 is applied after the chemical is rinsed out. The second step of the treatment can be used alone as an express post-treatment as well.",
				image : "mixing-hair-dye.jpg",
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "9. Take A Break From Wash n Go’s",
				summary : "Say what? Yes, you read right! Taking a break is a tip for those that wear this style often. The reason you should take a break from wash n go’s is because this is a style where your ends are always exposed, and it’s nearly impossible to moisturize every strand.You can not visibly see when your hair is breaking. Hair that is trying to shed off freely gets caught in the curls stealing moisture. Try twists or other styles that are more controlled and that you can moisturize efficiently.",
				image : "Moisturizing-Natural-Hair.jpg",
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "10. Inside Out",
				summary : "We all know that keeping yourself healthy will translate into your skin, scalp, and hair. If you don’t eat a healthy diet, your hair could suffer.It’s important to mention and know that your hair doesn’t contain vitamins since it’s not a living structure. If you’re eating a balanced, nutritious diet there is very little benefit gained from taking hair vitamins and supplements.If you focus on eating proteins, dairy products, fruits, vegetables and whole grains you can help your hair reach its full potential without the supplements. However, if you aren’t eating a balanced, nutritious diet, or even have a medical condition, you might need vitamins and supplements to help your hair.Don’t be afraid to consult with your doctor to determine if a multivitamin is right for you.",
				image : "vitamin-e.jpg",
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "11. Product Junkie",
				summary : "As exciting as it may be to try all the latest products, your hair takes a hit if the ingredients aren’t what’s best for your hair. Although it is best to use vegan and organic hair products, even those can pack some heavy components that are hard to shampoo out.To get the most out of hair products, you try on wash day, your hair has to be cleansed and already healthy enough to react to the products the way it is supposed to. Use a deep cleanser before switching products and try the other tips mentioned to make sure your hair is healthy.Many styling products work best on healthy hair. Therefore it will not give you the results you want if your hair is unhealthy.",
				image : "hair-products.jpg",
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "12. Using Bonnets and Shower Caps",
				summary : "Protecting your hair is as important as what you put on your hair. You want to use a silk or satin head covering that is not too tight around the hairline. Silk and satin lock in moisture, whereas cotton or other fibers steal the moisture from your hair.Even protecting your hair in the shower with a shower cap is essential if your bathroom gets steamy and you take hot showers. The water particles from the steam your hair takes in from daily showers can be a form of hygral fatigue mentioned in tip 2.",
				image : "bonnet.jpg",
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "13. Straight Natural",
				summary : "If you are a Natural but prefer your hair to be straight or blown out it’s all good! Wearing your hair straight does not mean you aren’t a real Natural or that your hair is damaged. Just like your hair can be trained to curl it can be trained to be straight making your silk press last longer and not requiring much heat to achieve your styles.A heat protectant in the form of a leave-in or a blowout cream will help avoid damage but most of all it is the technique and the tool. You want to go over your hair once or twice with a flat iron. Use a flat iron that is not only ceramic (because most ceramic plates are just a coating, and that layer comes off overtime exposing the metal plate) but also has tourmaline or titanium plates that will protect your cuticle.",
				image : "dry-shampoo-on-natural-hair.jpg",
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "14. Hair Typing",
				summary : "Don’t lose sleep over what curl type you have. There are three hair types you need to remember straight, wavy, and curly. How curly or how wavy your hair is, is its own identity that does not need to be defined.Just learn what your hair likes and treat it right!",
				image : "protective-style.jpg",
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "15. Curl Training",
				summary : "Curl training is the process your hair goes through to gain its full curl potential. With consistent wear of your natural hair with no added heat from a blow dryer or flat iron your journey to natural curls begins.Along with steaming your hair and using lighter products to ensure the cuticle will not clog, you can try wash n go’s or give your curls a boost by twirling them individually. At first, your curls may not last a day, but training is ongoing.Stick with no heat, no chemicals, light products and natural styles, and you will see your curls slowly start to form.",
				image : "natural-hair-style.jpg",
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "16. Hair Butters",
				summary : "Some natural hair girls don’t realize that natural hair butter can help keep their hair naturally soft, silky and healthy. Using natural butter allows you to avoid the hard to pronounce and unknown chemicals in most popular hair-care products.Hair butter can help with the following, but not limited to:and much more!",
				image : null,
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "17. Proper Maintenance of Styles",
				summary : "Pineappling is a quick nighttime styling method to preserve your curls allowing them to still be great another day. There are a few things to consider when doing this technique to properly maintain your style. Before doing so, it’s best to use a silk material to hold it in place.",
				image : null,
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "18. Drying Techniques",
				summary : "There are a few things you can incorporate in your hair care routine or cut out to properly dry natural hair by air drying. Check them out below and see the benefits of air drying your natural hair.",
				image : null,
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "19. Learn Hair Texture",
				summary : "To make sure you’re providing all the proper care for your natural hair, it is vital to learn your hair texture.When coming to learn your hair texture, you must also embrace it. Essentially, your hair texture is your curl pattern for those who aren’t familiar. How you even detangle your hair can either benefit or damage your hair texture.You may be more aware of the impact that heat contact has on your hair texture. This is also a major factor to consider when caring for your hair texture specifically. It’s also important to remember that what may work for someone else’s hair texture may not work for yours.So, learning more about your hair texture will allow you to become more tailored according to your texture.“Certain hair textures are better than others”This false and stereotypical idea has, unfortunately, fueled the lack of proper hair care since it makes it seem other textures aren’t as valued as others. We believe each unique hair texture is beautiful in its own way. There is no such thing as “good hair vs bad hair”; we only care about healthy vs. unhealthy hair!“Most people just have one type of hair texture”This is simply not true! It’s completely normal to have two to three different types of textures.",
				image : null,
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "20. Stretch Hair for Length",
				summary : "The technique of stretching your natural hair allows for more retaining of length. There are various ways to stretch your hair, but most opt for the heatless way.Stretching your hair before styling can result in a totally different look. But the problem most women fear is heat damage! Which is totally understandable considering that heat damage isn’t reversible. It’s important to know that minimizing heat styling is essential to keeping your coils going strong.We’d like to share with you several different ways you can begin stretching your natural hair.This method consists of placing a hair tie or stretchable hair band along sections of your hair to extend your curls. This method is best done while the hair is still wet since your hair is in a state where it can be easily manipulated.The braidout method is a huge favorite for many reasons. It gives more curl definition compared to a twist-out and has the potential to last longer. This method is also a style most women can do without seeming too complicated.The plates from CWK Girls offers multiple ways to stretch your hair and curls without heat.Going for big hair? The bantu knot method for stretching your hair is great for full, voluminous hair. You can rock this method as a style for as long as you want.These different methods to stretching your hair without heat weigh heavily on the style you’re looking to achieve.",
				image : null,
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "21. Learn Growing Phases",
				summary : "Learning the stages of natural hair growth can allow you to weigh in on the determining rate of how it grows and how fast it grows.The most important thing to consider is time. It’s important to know however that hair will grow according to its natural process, regardless of the supplements you take or foods you eat. It goes according to what your hair may respond to best. There are some people whose hair happens to naturally grow faster or slower than others. We can thank genetics!But always remember, regardless of your hair growth rate, your hair is always in the growing process on a 24-hour basis. Let’s briefly check out the different hair growth stages within a cycle:This is considered to be the growth stage.This is considered the regression stage.This is the resting stage.This occurs throughout the hair growth cycle and is known as the shedding stage.",
				image : null,
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "22. Create Personal Hair Regimen",
				summary : "There are many benefits to creating a detailed hair care regimen.One of the biggest benefits is tailoring proper hair care according to what your natural hair needs. With just a few steps and points, you will be able to create the perfect regimen for your hair.It’s important to know that your hair care regimen can and will evolve over time as does your hair. The regimen will change depending on the qualities of your own hair. It’s all about going with the flow according to your hair needs, as mentioned before. The main objective of a hair regimen is to maintain healthy, strong hair.To avoid wasting money and time, here are a few pointers for creating and maintaining a healthy hair regimen. Please feel free to tailor it as you need to!A shampoo is meant to lift your hair cuticles, break up oil and dirt, and loosen it to be rinsed away.The goal is to remove debris, buildup from products, and production of oil. When we use shampoo, our focus should be on our scalps considering that’s where the dirt is. Apply the shampoo to your roots and scalp, scrub thoroughly with your fingertips, and the lather will automatically make its way down your hair.Conditioning after shampooing is vital to having healthy, shiny hair. This product smooths the hair cuticle and adds body.Avoiding conditioning your hair makes it more prone to breakage, which can lead to the appearance of thin hair. Yikes! Conditioning helps restore your hair and keep it protected from damage.No matter your hair type, hair texture or length, conditioning on a regular basis can improve the look and feel of your hair.Detangling your hair prevents disasters like the thinning of your hair and limiting hair breakage. There are a few tips you can apply when it comes to detangling your hair such as:Including a moisturizer into your hair regimen is as simple as applying a water spray bottle to your hair. You can never go wrong with water!When searching for any moisturizing product, water should be the number one thing you see pretty high up in the ingredients list. Many moisturizers also contain vitamins and oils that your hair and scalp can soak up.Sealing and moisture go hand in hand! In order to seal, you have to have that proper moisture. It ensures that the moisture actually stays put and is locked into your hair keeping it soft and hydrated. Great products for sealing include hair butters and oils.",
				image : null,
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "23. Avoid Becoming a Product Junkie",
				summary : "Being a product junkie can inhibit proper care for your natural hair.Even though you may think raking up on the latest products can help your hair, too much can cause more of a hindrance. Being a product junkie means you overhaul in hair care products even allowing them to collect dust over time. Keep it simple when it comes to the products you incorporate into your hair care regimen.Natural products such as water, coconut oil, jojoba oil, DIY conditioners, and homemade butters are great to have and should be used according to the progression of your hair.",
				image : null,
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
				
				tips : "24. Invest in Safe Coloring",
				summary : "A major concern, besides heat damage, is the damage you can cause by coloring your hair.Rest assured that such damage can be avoided when you decide to switch up your hair color. This is as long as your follow proper steps to safe coloring. Safe coloring includes taking proper precautions and learning about your hair to tailor it to the right coloring products.",
				image : null,
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
			
				tips : "25. Learn the Truth about Hair Shedding",
				summary : "You must know that hair shedding is completely normal and required for the hair growth cycle.It’s also important to know that certain factors can contribute to excessive shedding such as stress, heavy manipulation of your hair, and health. Even if you try to limit the number of times you brush or comb your hair, because this is a part of the hair growth cycle, you may notice a higher number of shed hairs.This is why it’s important to detangle and thoroughly comb and brush hair, but not too much.",
				image : null,
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
			
				tips : "26. Determine Your Hair Density",
				summary : "Your hair has various characteristics, from a visible curl pattern and hair length to porosity and density. This is what makes natural hair diverse.Hair density is how much hair you have on your head, or how densely packed your hair follicles are on your scalp. It impacts the volume and shape of your hair, so it can affect what products you should use and how best to style your hair.Hair density is a measurement of how much hair you have on your head, or how densely packed your hair follicles are on your scalp. Density impacts the volume and shape of your hair as a whole, so it affects what products you should use and how best to style your hair.",
				image : null,
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
			
				tips : "27. Limit Chemicals",
				summary : "Women are constantly exposed to thousands of chemicals considering the products we use for hair care. Surprisingly, a lot of these chemicals interfere with our body’s hormones such as estrogen.Following the tips below can help promote great health for your hair:Carefully read product labelsChoose plant products versus petroleumLimit use of chemical straightenersInvest in organic or natural shampoos and conditionersChoose eco-friendly hair salons",
				image : null,
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
			
				tips : "28. Invest in Hair Treatments",
				summary : "Hair treatments do a lot for natural far beyond what one basic deep conditioner product can do.One major benefit when it comes to hair treatments is that you can actually make your own by using products you have at home. Various types of hair treatments can provide the benefits of moisturizing, hair growth, restoration, hydration and so much more! Certain treatments can be used for any hair issues you may be facing even during certain seasons.Check out a few staple ingredients for creating endless types of hair treatments:…and so much more!",
				image : null,
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
			
				tips : "29. Use Protein",
				summary : "Protein is very necessary for hair growth. Keratin, a protein your hair is made out of, provides structure to your hair.This gives it shape and strength. Without it, your hair would be weak, limp and fragile. Protein balances the moisture in your hair to keep it healthy and strong. If you have enough protein but not enough moisture, your hair will be dry, brittle, and lifeless. Moisture and protein are both needed simultaneously.You need both moisture and protein to maintain healthy hair. A great way to maintain a moisture and protein balance is by investing in certain treatments according to your hair type and texture.",
				image : null,
				createdAt : new Date (),
				updatedAt : new Date ()
			},
			{
			
				tips : "30. Visit a Professional",
				summary : "Making the time to visit a professional for the care of your natural hair is a great thing.Building a relationship with a stylist who can learn your hair and is better equipped with the knowledge of what your hair may need can do a lot of good for your hair health. Plus, when going to a professional, you limit the possibility of hair damage that may not be reversible.Look into natural hair salons that cater to the needs you may have and one that can also educate you for your own hair.",
				image : null,
				createdAt : new Date (),
				updatedAt : new Date ()
			}
		])
	},

	down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
    
          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
    }
}

