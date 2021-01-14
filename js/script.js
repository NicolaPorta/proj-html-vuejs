var app = new Vue(
    {
        el: "#root",
        data: {
            jumbotron:"",
            headerLogo:"",
            footerLogo:"",
            popularRecipesBigBanner:{

            },
            farmToTableBigBanner:{

            },
            socialIcons: [
                {
                    "name": "Facebook",
                    "style": "fab fa-facebook-f",
                    "href": "https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2FThemeFusion-101565403356430%2F"
                },
                {
                    "name": "Instagram",
                    "style": "fab fa-instagram",
                    "href": "https://www.instagram.com/themefusion/"
                },
                {
                    "name": "Twitter",
                    "style": "fab fa-twitter",
                    "href": "https://twitter.com/theme_fusion"
                },
                {
                    "name": "YouTube",
                    "style": "fab fa-youtube",
                    "href": "https://www.youtube.com/channel/UC_C7uAOAH9RMzZs-CKCZ62w"
                }
            ],
            navLinks: [
                {
                    "title": "Recipes",
                    "href": "https://avada.theme-fusion.com/food/all-recipes/"
                },
                {
                    "title": "Places",
                    "href": "https://avada.theme-fusion.com/food/places/"
                },
                {
                    "title": "Blog",
                    "href": "https://avada.theme-fusion.com/food/blog/"
                },
                {
                    "title": "About",
                    "href": "https://avada.theme-fusion.com/food/about-us/"
                },
                {
                    "title": "Contact",
                    "href": "https://avada.theme-fusion.com/food/contact-us/"
                }
            ],
            foodieJournal: [
                {
                    "img_src": "img/single-post-img3-400x263.jpg",
                    "title": "Food Corner: Top Japanese Restaurants for Sushi",
                    "href": "https://avada.theme-fusion.com/food/featured/food-corner-top-japanese-restaurants-for-sushi/"
                },
                {
                    "img_src": "img/fi-roundup-400x263.jpg",
                    "title": "Roundup: My New Favourite Recipes For Healthy Living",
                    "href": "https://avada.theme-fusion.com/food/featured/roundup-my-new-favourite-recipes-for-healthy-living/"
                },
                {
                    "img_src": "img/fi-toasts-400x263.jpg",
                    "title": "Why These Toasts with Tea are My New Favorite",
                    "href": "https://avada.theme-fusion.com/food/featured/why-these-toasts-with-tea-are-my-new-favorite/"
                }
            ],
            popularRecipes: [
                {
                    "img_src": "img/Mixed-fruits-400x263.jpg",
                    "title": "Fruit Platter with Banana Mango Berries and Orange",
                    "href": "https://avada.theme-fusion.com/food/recipes/fruit-platter-with-banana-mango-berries-and-orange/"
                },
                {
                    "img_src": "img/r-rachel-park-366508-unsplash-min-400x263.jpg",
                    "title": "Breakfast Delight With Strawberry, Egg And Fruit",
                    "href": "https://avada.theme-fusion.com/food/recipes/breakfast-delight-with-strawberry-egg-and-fruit/"
                },
                {
                    "img_src": "img/r-michelle-tsang-500721-unsplash-min-400x263.jpg",
                    "title": "Ice Cream Heaven With Vanilla, Chocolate And Pistachio",
                    "href": "https://avada.theme-fusion.com/food/recipes/ice-cream-heaven-with-vanilla-chocolate-and-pistachio/"
                },
                {
                    "img_src": "img/quick-summer-drink-460x295.jpg",
                    "title": "Video Recipe: How to Make a Cool Summer Drink",
                    "href": "https://avada.theme-fusion.com/food/recipes/video-recipe-how-to-make-a-cool-summer-drink/"
                },
                {
                    "img_src": "img/r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg",
                    "title": "Ketogenic Diet Recipe with Avocado",
                    "href": "https://avada.theme-fusion.com/food/recipes/ketogenic-diet-recipe-with-avocado/"
                },
                {
                    "img_src": "img/perfect-cosmopolitan-460x295.jpg",
                    "title": "Video Recipe: The Perfect Cosmopolitan",
                    "href": "https://avada.theme-fusion.com/food/recipes/video-recipe-the-perfect-cosmopolitan/"
                },
                {
                    "img_src": "img/fi2x-6-460x295.jpg",
                    "title": "Summer Cheese Platter with Berries, Crackers and Wine",
                    "href": "https://avada.theme-fusion.com/food/recipes/summer-cheese-platter-with-berries-crackers-and-wine/"
                },
                {
                    "img_src": "img/r-brooke-lark-96398-unsplash-min-460x295.jpg",
                    "title": "Strawberry Fruit Pies Served With Tea",
                    "href": "https://avada.theme-fusion.com/food/recipes/strawberry-fruit-pies-served-with-tea/"
                }
            ],
            culinaryCollection: [
                {
                    "img_src": "img/drinks-recipes.png",
                    "title": "Drinks",
                    "href": "https://avada.theme-fusion.com/food/recipe-category/drinks/"
                },
                {
                    "img_src": "img/soups-recipes.png",
                    "title": "Soups",
                    "href": "https://avada.theme-fusion.com/food/recipe-category/soups/"
                },
                {
                    "img_src": "img/baking-recipes.png",
                    "title": "Bakery",
                    "href": "https://avada.theme-fusion.com/food/recipe-category/bakery/"
                },
                {
                    "img_src": "img/dinner-recipes.png",
                    "title": "Dinner",
                    "href": "https://avada.theme-fusion.com/food/recipe-category/dinner/"
                },
                {
                    "img_src": "img/healthy-recipes.png",
                    "title": "Healthy",
                    "href": "https://avada.theme-fusion.com/food/recipe-category/healthy/"
                },
                {
                    "img_src": "img/staff-picks.png",
                    "title": "Staff Picks",
                    "href": "https://avada.theme-fusion.com/food/recipe-category/staff-picks/"
                },
                {
                    "img_src": "img/premium-recipes.png",
                    "title": "Appetisers",
                    "href": "https://avada.theme-fusion.com/food/recipe-category/appetisers/"
                },
                {
                    "img_src": "img/quick-easy-recipes.png",
                    "title": "Quick & Easy",
                    "href": "https://avada.theme-fusion.com/food/recipe-category/quick-easy/"
                }
            ],
            farmToTable: [
                {
                    "img_src": "img/fi-roundup-600x395.jpg",
                    "title": "Roundup: My New Favourite Recipes For Healthy Living",
                    "href": "https://avada.theme-fusion.com/food/featured/roundup-my-new-favourite-recipes-for-healthy-living/"
                },
                {
                    "img_src": "img/fi-korean-food-600x395.jpg",
                    "title": "Meal Prep: Korean Bibimbap with Kimchi",
                    "href": "https://avada.theme-fusion.com/food/street-food/meal-prep-korean-bibimbap-with-kimchi/"
                },
                {
                    "img_src": "img/fi-toasts-600x395.jpg",
                    "title": "Why These Toasts with Tea are My New Favorite",
                    "href": "https://avada.theme-fusion.com/food/featured/why-these-toasts-with-tea-are-my-new-favorite/"
                },
                {
                    "img_src": "img/fi-street-food-600x395.jpg",
                    "title": "Exploring Street Food in Bangkok",
                    "href": "https://avada.theme-fusion.com/food/restaurants/exploring-street-food-in-bangkok/"
                },
                {
                    "img_src": "img/fi-organic-breakfast-600x395.jpg",
                    "title": "Organic Choices For Healthier Living",
                    "href": "https://avada.theme-fusion.com/food/street-food/organic-choices-for-healthier-living/"
                },
                {
                    "img_src": "img/fi-water-side-rest-600x395.jpg",
                    "title": "5 Waterside Restaurants in Istanbul for Special Events",
                    "href": "https://avada.theme-fusion.com/food/featured/5-waterside-restaurants-in-istanbul-for-special-events/"
                }
            ],
            asideLinks: [
                {
                    "img_src": "img/single-post-img3-66x66.jpg",
                    "title": "Roundup: My New Favourite Recipes For Healthy Living",
                    "href": "https://avada.theme-fusion.com/food/featured/roundup-my-new-favourite-recipes-for-healthy-living/",
                    "date": "March 25th, 2019"
                },
                {
                    "img_src": "img/singapore-featured-image-66x66.jpg",
                    "title": "Meal Prep: Korean Bibimbap with Kimchi",
                    "href": "https://avada.theme-fusion.com/food/street-food/meal-prep-korean-bibimbap-with-kimchi/",
                    "date": "March 25th, 2019"
                },
                {
                    "img_src": "img/slide1-bg-66x66.jpg",
                    "title": "Why These Toasts with Tea are My New Favorite",
                    "href": "https://avada.theme-fusion.com/food/featured/why-these-toasts-with-tea-are-my-new-favorite/",
                    "date": "March 25th, 2019"
                }
            ],
            bottomImgBanner: [
                {
                    "img_src": "img/Yogurt-Nan-400x263.jpg",
                    "title": "Lunch Favourite with Salad, Naan And Beans",
                    "href": "https://avada.theme-fusion.com/food/recipes/lunch-favourite-with-salad-naan-and-beans/"
                },
                {
                    "img_src": "img/Mixed-fruits-400x263.jpg",
                    "title": "Fruit Platter with Banana, Mango, Berries and Orange",
                    "href": "https://avada.theme-fusion.com/food/recipes/fruit-platter-with-banana-mango-berries-and-orange/"
                },
                {
                    "img_src": "img/r-rachel-park-366508-unsplash-min-400x263.jpg",
                    "title": "Breakfast Delight With Strawberry, Egg And Fruit",
                    "href": "https://avada.theme-fusion.com/food/recipes/breakfast-delight-with-strawberry-egg-and-fruit/"
                },
                {
                    "img_src": "img/r-michelle-tsang-500721-unsplash-min-400x263.jpg",
                    "title": "Ice Cream Heaven With Vanilla, Chocolate And Pistachio",
                    "href": "https://avada.theme-fusion.com/food/recipes/ice-cream-heaven-with-vanilla-chocolate-and-pistachio/"
                }
            ]
        }
        
    }
  );
  