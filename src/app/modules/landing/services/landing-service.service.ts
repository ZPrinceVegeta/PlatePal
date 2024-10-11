import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LandingServiceService {
  constructor(private http: HttpClient) {}


 headers = new HttpHeaders({
    'X-Rapidapi-Key': 'cd2d3af89dmshf0c679291c77752p1845fbjsn079977aa0cdd',
    'X-Rapidapi-Host': 'tasty.p.rapidapi.com',
  });


  getTypeList() {
    return this.http.get('assets/json/taglist.json');
  }
    setRecipeData( tags: string) {
    const params = new HttpParams()
      .set('from', String(0))
      .set('size', String(10))
      .set('tags', tags)
      console.log(params);

//    return this.http
//       .get('https://tasty.p.rapidapi.com/recipes/list', {
//         headers: this.headers,
//         params: params,
//       })
  return of ({
    "count": 10107,
    "results": [
        {
            "approved_at": 1553195044,
            "aspect_ratio": "1:1",
            "beauty_url": null,
            "brand": null,
            "brand_id": null,
            "buzz_id": null,
            "canonical_id": "recipe:4704",
            "compilations": [
                {
                    "approved_at": 1553197578,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:848",
                    "country": "US",
                    "created_at": 1546890391,
                    "description": "Whether you’re trying to be healthy, pulling an all-nighter, or just trying to get through the day, protein-packed snacks are your best friends. That’s because protein can give you an energy boost and help you stay fuller longer. From <a href=\"https://tasty.co/recipe/avocado-deviled-eggs\">avocado deviled eggs</a> to <a href=\"https://tasty.co/recipe/cacao-chia-pudding\">cacao chia pudding</a>, these snacks are full of protein-packed ingredients like Greek yogurt and almond butter, which will ensure you don’t get hangry anytime soon.",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 848,
                    "is_shoppable": true,
                    "keywords": null,
                    "language": "eng",
                    "name": "Protein-Packed Snacks",
                    "promotion": "partial",
                    "show": [
                        {
                            "id": 34,
                            "name": "Goodful"
                        }
                    ],
                    "slug": "protein-packed-snacks",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/199563.jpg",
                    "video_id": 73153,
                    "video_url": "https://vid.tasty.co/output/121934/hls24_1546897597.m3u8"
                },
                {
                    "approved_at": 1578330513,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:1353",
                    "country": "US",
                    "created_at": 1578291052,
                    "description": null,
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 1353,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "5 Easy & Healthy Avocado Recipes",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 34,
                            "name": "Goodful"
                        }
                    ],
                    "slug": "5-easy-healthy-avocado-recipes",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/250396.jpg",
                    "video_id": 98266,
                    "video_url": "https://vid.tasty.co/output/156634/hls24_1578291102.m3u8"
                },
                {
                    "approved_at": 1582859703,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:1403",
                    "country": "US",
                    "created_at": 1582700418,
                    "description": null,
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 1403,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Healthy And Delicious Appetisers ",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 34,
                            "name": "Goodful"
                        }
                    ],
                    "slug": "healthy-and-delicious-appetisers",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/256517.jpg",
                    "video_id": 101158,
                    "video_url": "https://vid.tasty.co/output/161151/hls24_1582700566.m3u8"
                },
                {
                    "approved_at": 1599571488,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:1675",
                    "country": "US",
                    "created_at": 1598634358,
                    "description": "Can't sleep? Want to snack? These delicious snacks are a quick and easy fix to all your after-midnight hunger pangs. Chomp down on some <a href= \"https://tasty.co/recipe/hummus-and-carrot-sticks\">hummus and carrot sticks</a> or devour a couple handfuls of delicious <a href= \"https://tasty.co/recipe/spicy-roasted-chickpeas\">oven-roasted chickpeas</a>. And once you're full and satisfied, sail softly back into dreamland!",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 1675,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Healthy Snacks For Late-night Cravings",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "healthy-snacks-for-late-night-cravings",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/280958.jpg",
                    "video_id": 111496,
                    "video_url": "https://vid.tasty.co/output/177500/hls24_1598874098.m3u8"
                },
                {
                    "approved_at": 1622033473,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:2455",
                    "country": "US",
                    "created_at": 1621947459,
                    "description": "Planning a trip to the beach to celebrate the coming of summer? These easy snacks will make sure you're fueled and ready for the next game of water polo. From <a href=\"https://tasty.co/recipe/garlic-parmesan-and-herb-pita-chips\">parmesan garlic & herb pita chips</a> to super easy to make <a href=\"https://tasty.co/recipe/after-school-banana-roll-ups\">banana roll-ups</a>, these treats are beach-friendly and hassle free. So what are you waiting for? Pack up your picnic basket with these goodies: summer's here! ",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 2455,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Easy Snacks To Pack For Your Next Beach Trip",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "easy-snacks-to-pack-for-your-next-beach-trip",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/322976.jpg",
                    "video_id": 132618,
                    "video_url": "https://vid.tasty.co/output/203549/hls24_1621588827.m3u8"
                },
                {
                    "approved_at": 1622729093,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:2471",
                    "country": "US",
                    "created_at": 1622179434,
                    "description": "Looking for low-carb options? We've got plenty for you! The crispy <a href=\"https://tasty.co/recipe/easy-chicken-piccata\">Chicken Piccata</a> and the saucy <a href=\"https://tasty.co/recipe/ratatouille\">Ratatouille Lasagna</a> each pack tons of flavor without going overboard on carbs — and they pair well with just about anything. The hardest part? Choosing which dish to make first!",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 2471,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Low Carb Meals For A Healthy You",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "low-carb-meals-for-a-healthy-you",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/324268.jpg",
                    "video_id": 131584,
                    "video_url": "https://vid.tasty.co/output/204325/hls24_1622182197.m3u8"
                },
                {
                    "approved_at": 1630615490,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:2741",
                    "country": "US",
                    "created_at": 1628697577,
                    "description": " You can never go wrong with avocado, and these easy mouthwatering recipes can enjoyed at any time of the day. Start your day with a wholesome <a href=\"https://tasty.co/recipe/radish-avocado-toast\">Raddish Avocado Toast</a> or enjoy a <a href=\"https://tasty.co/recipe/salmon-crab-stack\">Salmon Crab Seafood Stack</a> on a lunch date with your special someone. But why settle for one when you have 31 options to try from? Avo-fun for the whole month! ",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 2741,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "31 Days 31 Avocado Recipes ",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "31-days-31-avocado-recipes",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/340641.jpg",
                    "video_id": 138926,
                    "video_url": "https://vid.tasty.co/output/214898/hls24_1630573823.m3u8"
                },
                {
                    "approved_at": 1632837818,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:2823",
                    "country": "US",
                    "created_at": 1631878927,
                    "description": null,
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 2823,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Make Healthy Snacks Tasty With These Recipes",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "make-healthy-snacks-tasty-with-these-recipes",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/342984.jpg",
                    "video_id": 141660,
                    "video_url": "https://vid.tasty.co/output/216394/hls24_1631879337.m3u8"
                },
                {
                    "approved_at": 1633453142,
                    "aspect_ratio": null,
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:2850",
                    "country": "US",
                    "created_at": 1632478266,
                    "description": "We've all had those days when you just don't feel like working out. Regardless of whether or not you make it to the gym, these recipes will keep you feeling engaged, alert, and fueled up for whatever comes your way. From <a href=\"https://tasty.co/recipe/keto-caprese-avocado-bowls\">caprese avocado bowls</a> to <a href=\"https://tasty.co/recipe/spinach-pasta\">spinach pasta</a>, these meals are nutritious, delicious, and nourishing.",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 2850,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Recipes For When You Don't Feel Like Working Out",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "recipes-for-when-you-don-t-feel-like-working-out",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://s3.amazonaws.com/video-api-prod/assets/5aadea18cb1043cda94b0b830f660c55/FB1.jpg",
                    "video_id": 142328,
                    "video_url": "https://vid.tasty.co/output/217137/hls24_1632478454.m3u8"
                },
                {
                    "approved_at": 1670282994,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:3382",
                    "country": "US",
                    "created_at": 1669724060,
                    "description": "With so many health benefits, you ought to use yogurt wisely and creatively! It is easy to digest, packed with vitamins, and a rich source of protein as well. Make the <a href=\"https://tasty.co/recipe/honey-granola-yogurt-bark\">Honey Granola Yogurt Bark</a> for your on-the-go meals. <a href=\"https://tasty.co/recipe/paprika-spiced-chicken-with-lemon-yogurt-and-crispy-potatoes\">Paprika-Spiced Chicken With Lemon Yogurt And Crispy Potatoes</a> is the perfect dinner recipe as it is delicious, easy and healthy, all at the same time!",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 3382,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Use Your Yogurt Wisely!",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "use-your-yogurt-wisely",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/413697.jpg",
                    "video_id": 175189,
                    "video_url": "https://vid.tasty.co/output/264265/hls24_1669784196.m3u8"
                }
            ],
            "cook_time_minutes": 0,
            "country": "US",
            "created_at": 1546890315,
            "credits": [
                {
                    "name": "Isabel Castillo",
                    "type": "internal"
                },
                {
                    "name": "Karlee Rotoly",
                    "type": "internal"
                }
            ],
            "description": "This chicken salad is a lunchtime delight! Packed with creamy avocado, tender chicken, and crunchy veggies, it's a healthy and satisfying meal that won't weigh you down. Tossed in a tangy yogurt dressing with a hint of spice, it's a flavor explosion that's perfect for a light meal.",
            "draft_status": "published",
            "facebook_posts": [],
            "id": 4704,
            "inspired_by_url": null,
            "instructions": [
                {
                    "appliance": null,
                    "display_text": "In a blender or food processor, combine the yogurt, lime juice, pepper, and chili powder and pulse to combine. Add ½ of the avocado and blend until creamy.",
                    "end_time": 26500,
                    "id": 43381,
                    "position": 1,
                    "start_time": 7000,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "In a medium bowl, combine the chicken, yogurt sauce, celery, the remaining ½ avocado, onion, and salt. Mix until well combined.",
                    "end_time": 43500,
                    "id": 43382,
                    "position": 2,
                    "start_time": 29000,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Serve on low-carb bread and garnish with cilantro, or as desired.",
                    "end_time": 0,
                    "id": 43383,
                    "position": 3,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Enjoy!",
                    "end_time": 47166,
                    "id": 43384,
                    "position": 4,
                    "start_time": 44666,
                    "temperature": null
                }
            ],
            "is_app_only": false,
            "is_one_top": false,
            "is_shoppable": true,
            "is_subscriber_content": false,
            "keywords": "avocado, chia pudding, chicken salad, chickpea chips, deviled eggs, easy, healthy, keto, protein, snacks, vegan, vegetarian",
            "language": "eng",
            "name": "Low-Carb Avocado Chicken Salad",
            "num_servings": 4,
            "nutrition": {
                "calories": 249,
                "carbohydrates": 13,
                "fat": 8,
                "fiber": 3,
                "protein": 29,
                "sugar": 8,
                "updated_at": "2024-05-01T08:06:38+02:00"
            },
            "nutrition_visibility": "auto",
            "original_video_url": "https://s3.amazonaws.com/video-api-prod/assets/a0e1b07dc71c4ac6b378f24493ae2d85/FixedFBFinal.mp4",
            "prep_time_minutes": 15,
            "price": {
                "consumption_portion": 150,
                "consumption_total": 650,
                "portion": 600,
                "total": 2400,
                "updated_at": "2024-10-08T07:15:37+02:00"
            },
            "promotion": "partial",
            "renditions": [
                {
                    "aspect": "square",
                    "bit_rate": 1491,
                    "container": "mp4",
                    "content_type": "video/mp4",
                    "duration": 217498,
                    "file_size": 40535808,
                    "height": 720,
                    "maximum_bit_rate": null,
                    "minimum_bit_rate": null,
                    "name": "mp4_720x720",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/121934/square_720/1546897597_00001.png",
                    "url": "https://vid.tasty.co/output/121934/square_720/1546897597",
                    "width": 720
                },
                {
                    "aspect": "square",
                    "bit_rate": 526,
                    "container": "mp4",
                    "content_type": "video/mp4",
                    "duration": 217498,
                    "file_size": 14280746,
                    "height": 320,
                    "maximum_bit_rate": null,
                    "minimum_bit_rate": null,
                    "name": "mp4_320x320",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/121934/square_320/1546897597_00001.png",
                    "url": "https://vid.tasty.co/output/121934/square_320/1546897597",
                    "width": 320
                },
                {
                    "aspect": "square",
                    "bit_rate": 1490,
                    "container": "mp4",
                    "content_type": "video/mp4",
                    "duration": 217498,
                    "file_size": 40496760,
                    "height": 720,
                    "maximum_bit_rate": null,
                    "minimum_bit_rate": null,
                    "name": "mp4_720x720",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/121934/landscape_720/1546897597_00001.png",
                    "url": "https://vid.tasty.co/output/121934/landscape_720/1546897597",
                    "width": 720
                },
                {
                    "aspect": "square",
                    "bit_rate": 862,
                    "container": "mp4",
                    "content_type": "video/mp4",
                    "duration": 217498,
                    "file_size": 23426496,
                    "height": 480,
                    "maximum_bit_rate": null,
                    "minimum_bit_rate": null,
                    "name": "mp4_480x480",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/121934/landscape_480/1546897597_00001.png",
                    "url": "https://vid.tasty.co/output/121934/landscape_480/1546897597",
                    "width": 480
                },
                {
                    "aspect": "square",
                    "bit_rate": null,
                    "container": "ts",
                    "content_type": "application/vnd.apple.mpegurl",
                    "duration": 217509,
                    "file_size": null,
                    "height": 1080,
                    "maximum_bit_rate": 2684,
                    "minimum_bit_rate": 273,
                    "name": "low",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/121934/1445289064805-h2exzu/1546897597_00001.png",
                    "url": "https://vid.tasty.co/output/121934/hls24_1546897597.m3u8",
                    "width": 1080
                }
            ],
            "sections": [
                {
                    "components": [
                        {
                            "extra_comment": "",
                            "id": 50242,
                            "ingredient": {
                                "created_at": 1495053532,
                                "display_plural": "plain greek yogurts",
                                "display_singular": "plain greek yogurt",
                                "id": 428,
                                "name": "plain greek yogurt",
                                "updated_at": 1509035261
                            },
                            "measurements": [
                                {
                                    "id": 731945,
                                    "quantity": "⅔",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 731942,
                                    "quantity": "190",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 1,
                            "raw_text": "⅔ cup plain Greek yogurt"
                        },
                        {
                            "extra_comment": "",
                            "id": 50243,
                            "ingredient": {
                                "created_at": 1494878288,
                                "display_plural": "lime juices",
                                "display_singular": "lime juice",
                                "id": 330,
                                "name": "lime juice",
                                "updated_at": 1509035269
                            },
                            "measurements": [
                                {
                                    "id": 731940,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "tbsp",
                                        "display_plural": "tablespoons",
                                        "display_singular": "tablespoon",
                                        "name": "tablespoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 2,
                            "raw_text": "1 tablespoon lime juice"
                        },
                        {
                            "extra_comment": "to taste",
                            "id": 50244,
                            "ingredient": {
                                "created_at": 1493314935,
                                "display_plural": "peppers",
                                "display_singular": "pepper",
                                "id": 29,
                                "name": "pepper",
                                "updated_at": 1509035287
                            },
                            "measurements": [
                                {
                                    "id": 731943,
                                    "quantity": "0",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 3,
                            "raw_text": "Pepper, to taste"
                        },
                        {
                            "extra_comment": "",
                            "id": 50245,
                            "ingredient": {
                                "created_at": 1493307101,
                                "display_plural": "chili powders",
                                "display_singular": "chili powder",
                                "id": 7,
                                "name": "chili powder",
                                "updated_at": 1509035289
                            },
                            "measurements": [
                                {
                                    "id": 731949,
                                    "quantity": "⅛",
                                    "unit": {
                                        "abbreviation": "tsp",
                                        "display_plural": "teaspoons",
                                        "display_singular": "teaspoon",
                                        "name": "teaspoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 4,
                            "raw_text": "⅛ teaspoon chili powder"
                        },
                        {
                            "extra_comment": "cubed, divided",
                            "hacks": [
                                {
                                    "end_index": 15,
                                    "id": 5,
                                    "match": "cubed",
                                    "start_index": 11
                                }
                            ],
                            "id": 50246,
                            "ingredient": {
                                "created_at": 1496185911,
                                "display_plural": "avocados",
                                "display_singular": "avocado",
                                "id": 1005,
                                "name": "avocado",
                                "updated_at": 1509035215
                            },
                            "measurements": [
                                {
                                    "id": 731941,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 5,
                            "raw_text": "1 avocado, cubed, divided"
                        },
                        {
                            "extra_comment": "cooked and shredded",
                            "id": 50247,
                            "ingredient": {
                                "created_at": 1493430237,
                                "display_plural": "chicken breasts",
                                "display_singular": "chicken breast",
                                "id": 50,
                                "name": "chicken breast",
                                "updated_at": 1509035286
                            },
                            "measurements": [
                                {
                                    "id": 731944,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 6,
                            "raw_text": "2 chicken breasts, cooked and shredded"
                        },
                        {
                            "extra_comment": "diced",
                            "hacks": [
                                {
                                    "end_index": 20,
                                    "id": 3,
                                    "match": "diced",
                                    "start_index": 16
                                }
                            ],
                            "id": 50248,
                            "ingredient": {
                                "created_at": 1495082620,
                                "display_plural": "celeries",
                                "display_singular": "celery",
                                "id": 458,
                                "name": "celery",
                                "updated_at": 1509035259
                            },
                            "measurements": [
                                {
                                    "id": 731946,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "stalk",
                                        "display_plural": "stalks",
                                        "display_singular": "stalk",
                                        "name": "stalk",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 7,
                            "raw_text": "1 celery stalk, diced"
                        },
                        {
                            "extra_comment": "diced",
                            "hacks": [
                                {
                                    "end_index": 18,
                                    "id": 3,
                                    "match": "diced",
                                    "start_index": 14
                                }
                            ],
                            "id": 50249,
                            "ingredient": {
                                "created_at": 1681493252,
                                "display_plural": "diced red onions",
                                "display_singular": "diced red onion",
                                "id": 11117,
                                "name": "diced red onion",
                                "updated_at": 1681493252
                            },
                            "measurements": [
                                {
                                    "id": 731951,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "tbsp",
                                        "display_plural": "tablespoons",
                                        "display_singular": "tablespoon",
                                        "name": "tablespoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 8,
                            "raw_text": "2 tablespoons diced red onion"
                        },
                        {
                            "extra_comment": "to taste",
                            "id": 50250,
                            "ingredient": {
                                "created_at": 1493307153,
                                "display_plural": "kosher salts",
                                "display_singular": "kosher salt",
                                "id": 11,
                                "name": "kosher salt",
                                "updated_at": 1509035289
                            },
                            "measurements": [
                                {
                                    "id": 731947,
                                    "quantity": "0",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 9,
                            "raw_text": "Kosher salt, to taste"
                        },
                        {
                            "extra_comment": "for serving (optional)",
                            "id": 50251,
                            "ingredient": {
                                "created_at": 1682530849,
                                "display_plural": "low-carb breads",
                                "display_singular": "low-carb bread",
                                "id": 11182,
                                "name": "low-carb bread",
                                "updated_at": 1682530849
                            },
                            "measurements": [
                                {
                                    "id": 731948,
                                    "quantity": "0",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 10,
                            "raw_text": "Low-carb bread, for serving, optional"
                        },
                        {
                            "extra_comment": "for garnish",
                            "id": 50252,
                            "ingredient": {
                                "created_at": 1527199111,
                                "display_plural": "fresh cilantro leaves",
                                "display_singular": "fresh cilantro leaf",
                                "id": 4163,
                                "name": "fresh cilantro leaves",
                                "updated_at": 1527199111
                            },
                            "measurements": [
                                {
                                    "id": 731950,
                                    "quantity": "0",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 11,
                            "raw_text": "Fresh cilantro leaves, for garnish"
                        }
                    ],
                    "name": null,
                    "position": 1
                }
            ],
            "seo_path": "9295813,64486,9299514",
            "seo_title": "",
            "servings_noun_plural": "servings",
            "servings_noun_singular": "serving",
            "show": {
                "id": 34,
                "name": "Goodful"
            },
            "show_id": 34,
            "slug": "low-carb-avocado-chicken-salad",
            "tags": [
                {
                    "display_name": "North American",
                    "id": 64444,
                    "name": "north_american",
                    "parent_tag_name": "cuisine",
                    "root_tag_type": "cuisine",
                    "type": "cuisine"
                },
                {
                    "display_name": "Comfort Food",
                    "id": 64462,
                    "name": "comfort_food",
                    "parent_tag_name": "cooking_style",
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "Gluten-Free",
                    "id": 64465,
                    "name": "gluten_free",
                    "parent_tag_name": "dietary",
                    "root_tag_type": "dietary",
                    "type": "dietary"
                },
                {
                    "display_name": "Healthy",
                    "id": 64466,
                    "name": "healthy",
                    "parent_tag_name": null,
                    "root_tag_type": "healthy",
                    "type": "healthy"
                },
                {
                    "display_name": "Low-Carb",
                    "id": 64467,
                    "name": "low_carb",
                    "parent_tag_name": "healthy",
                    "root_tag_type": "healthy",
                    "type": "healthy"
                },
                {
                    "display_name": "Easy",
                    "id": 64471,
                    "name": "easy",
                    "parent_tag_name": "difficulty",
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "Under 30 Minutes",
                    "id": 64472,
                    "name": "under_30_minutes",
                    "parent_tag_name": "difficulty",
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "Brunch",
                    "id": 64484,
                    "name": "brunch",
                    "parent_tag_name": "meal",
                    "root_tag_type": "meal",
                    "type": "meal"
                },
                {
                    "display_name": "Lunch",
                    "id": 64489,
                    "name": "lunch",
                    "parent_tag_name": "meal",
                    "root_tag_type": "meal",
                    "type": "meal"
                },
                {
                    "display_name": "Snacks",
                    "id": 64491,
                    "name": "snacks",
                    "parent_tag_name": "meal",
                    "root_tag_type": "meal",
                    "type": "meal"
                },
                {
                    "display_name": "Blender",
                    "id": 65838,
                    "name": "blender",
                    "parent_tag_name": "appliance",
                    "root_tag_type": "appliance",
                    "type": "appliance"
                },
                {
                    "display_name": "Food Processor",
                    "id": 65842,
                    "name": "food_processor",
                    "parent_tag_name": null,
                    "root_tag_type": "appliance",
                    "type": "appliance"
                },
                {
                    "display_name": "Meal Prep",
                    "id": 65853,
                    "name": "meal_prep",
                    "parent_tag_name": "cooking_style",
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "Spatula",
                    "id": 1247788,
                    "name": "spatula",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Chef's Knife",
                    "id": 1280501,
                    "name": "chefs_knife",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Cutting Board",
                    "id": 1280503,
                    "name": "cutting_board",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Dry Measuring Cups",
                    "id": 1280507,
                    "name": "dry_measuring_cups",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Measuring Spoons",
                    "id": 1280508,
                    "name": "measuring_spoons",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Mixing Bowl",
                    "id": 1280510,
                    "name": "mixing_bowl",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Under 15 Minutes",
                    "id": 8091744,
                    "name": "under_15_minutes",
                    "parent_tag_name": "difficulty",
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "Under 45 Minutes",
                    "id": 8091747,
                    "name": "under_45_minutes",
                    "parent_tag_name": "difficulty",
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "Under 1 Hour",
                    "id": 8091748,
                    "name": "under_1_hour",
                    "parent_tag_name": "difficulty",
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "Low-Calorie",
                    "id": 8091916,
                    "name": "low_calorie",
                    "parent_tag_name": "healthy",
                    "root_tag_type": "healthy",
                    "type": "healthy"
                },
                {
                    "display_name": "High-Protein",
                    "id": 8091917,
                    "name": "high_protein",
                    "parent_tag_name": "healthy",
                    "root_tag_type": "healthy",
                    "type": "healthy"
                },
                {
                    "display_name": "Low-Sugar",
                    "id": 8091918,
                    "name": "low_sugar",
                    "parent_tag_name": "healthy",
                    "root_tag_type": "healthy",
                    "type": "healthy"
                },
                {
                    "display_name": "High-Fiber",
                    "id": 8091920,
                    "name": "high_fiber",
                    "parent_tag_name": "healthy",
                    "root_tag_type": "healthy",
                    "type": "healthy"
                },
                {
                    "display_name": "Cuisine",
                    "id": 8757513,
                    "name": "cuisine",
                    "parent_tag_name": null,
                    "root_tag_type": "cuisine",
                    "type": "cuisine"
                },
                {
                    "display_name": "Appliance",
                    "id": 9295811,
                    "name": "appliance",
                    "parent_tag_name": null,
                    "root_tag_type": "appliance",
                    "type": "appliance"
                },
                {
                    "display_name": "Meal",
                    "id": 9295813,
                    "name": "meal",
                    "parent_tag_name": null,
                    "root_tag_type": "meal",
                    "type": "meal"
                },
                {
                    "display_name": "Dietary",
                    "id": 9295814,
                    "name": "dietary",
                    "parent_tag_name": null,
                    "root_tag_type": "dietary",
                    "type": "dietary"
                },
                {
                    "display_name": "Difficulty",
                    "id": 9295816,
                    "name": "difficulty",
                    "parent_tag_name": null,
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "Sandwiches",
                    "id": 9299494,
                    "name": "sandwiches",
                    "parent_tag_name": "lunch",
                    "root_tag_type": "meal",
                    "type": "lunch"
                },
                {
                    "display_name": "Salads",
                    "id": 9299495,
                    "name": "salads",
                    "parent_tag_name": "lunch",
                    "root_tag_type": "meal",
                    "type": "lunch"
                },
                {
                    "display_name": "Chicken",
                    "id": 9299514,
                    "name": "chicken",
                    "parent_tag_name": "dinner",
                    "root_tag_type": "meal",
                    "type": "dinner"
                },
                {
                    "display_name": "Dairy",
                    "id": 10623608,
                    "name": "dairy",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                },
                {
                    "display_name": "Kosher",
                    "id": 10742775,
                    "name": "kosher",
                    "parent_tag_name": "dietary",
                    "root_tag_type": "dietary",
                    "type": "dietary"
                }
            ],
            "thumbnail_alt_text": "",
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/45b4efeb5d2c4d29970344ae165615ab/FixedFBFinal.jpg",
            "tips_and_ratings_enabled": true,
            "topics": [
                {
                    "name": "Bread Lovers",
                    "slug": "bread"
                },
                {
                    "name": "Sunday Brunch",
                    "slug": "brunch"
                },
                {
                    "name": "Healthy Eating",
                    "slug": "healthy"
                },
                {
                    "name": "Low Carb Meals",
                    "slug": "low-carb-meals"
                },
                {
                    "name": "Weekend Meal Prep",
                    "slug": "meal-prep"
                },
                {
                    "name": "Romantic Dinners",
                    "slug": "romantic-dinners"
                },
                {
                    "name": "Lunch",
                    "slug": "lunch"
                },
                {
                    "name": "Snacks",
                    "slug": "snacks"
                },
                {
                    "name": "American",
                    "slug": "american"
                }
            ],
            "total_time_minutes": 15,
            "total_time_tier": {
                "display_tier": "Under 15 minutes",
                "tier": "under_15_minutes"
            },
            "updated_at": 1683237600,
            "user_ratings": {
                "count_negative": 74,
                "count_positive": 825,
                "score": 0.917686318131257
            },
            "video_ad_content": "none",
            "video_id": 73153,
            "video_url": "https://vid.tasty.co/output/121934/hls24_1546897597.m3u8",
            "yields": "Servings: 4"
        },
        {
            "approved_at": 1574872807,
            "aspect_ratio": "16:9",
            "beauty_url": null,
            "brand": null,
            "brand_id": null,
            "buzz_id": null,
            "canonical_id": "recipe:5814",
            "compilations": [],
            "cook_time_minutes": 20,
            "country": "US",
            "created_at": 1574456610,
            "credits": [
                {
                    "name": "Kaleb Mayer",
                    "type": "community"
                }
            ],
            "description": "",
            "draft_status": "published",
            "facebook_posts": [],
            "id": 5814,
            "inspired_by_url": null,
            "instructions": [
                {
                    "appliance": null,
                    "display_text": "In a mixing bowl, beat eggs. Gradually add sugar. While beating slowly pour in oil. Add vanilla.",
                    "end_time": 0,
                    "hacks": [
                        {
                            "end_index": 21,
                            "id": 23,
                            "match": "beat",
                            "start_index": 18
                        }
                    ],
                    "id": 52137,
                    "position": 1,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Combine the dry ingredients.",
                    "end_time": 0,
                    "id": 52138,
                    "position": 2,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Add dry ingredients alternately with sour cream to the egg mixture.",
                    "end_time": 0,
                    "id": 52139,
                    "position": 3,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Gently add blueberries.",
                    "end_time": 0,
                    "id": 52140,
                    "position": 4,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Spoon into the greased muffin tin or paper liners",
                    "end_time": 0,
                    "id": 52141,
                    "position": 5,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": "oven",
                    "display_text": "Bake at 400°F (200°C) for 20 minutes.",
                    "end_time": 0,
                    "id": 52142,
                    "position": 6,
                    "start_time": 0,
                    "temperature": 400
                },
                {
                    "appliance": null,
                    "display_text": "Enjoy!",
                    "end_time": 0,
                    "id": 52697,
                    "position": 7,
                    "start_time": 0,
                    "temperature": null
                }
            ],
            "is_app_only": false,
            "is_one_top": false,
            "is_shoppable": true,
            "is_subscriber_content": false,
            "keywords": "",
            "language": "eng",
            "name": "Blueberry Cream Muffins",
            "num_servings": 24,
            "nutrition": {
                "calories": 273,
                "carbohydrates": 33,
                "fat": 13,
                "fiber": 1,
                "protein": 3,
                "sugar": 14,
                "updated_at": "2024-09-03T03:10:44+02:00"
            },
            "nutrition_visibility": "auto",
            "original_video_url": null,
            "prep_time_minutes": 15,
            "price": {
                "consumption_portion": 50,
                "consumption_total": 700,
                "portion": 100,
                "total": 2400,
                "updated_at": "2024-10-08T07:19:21+02:00"
            },
            "promotion": "partial",
            "renditions": [],
            "sections": [
                {
                    "components": [
                        {
                            "extra_comment": "",
                            "id": 63062,
                            "ingredient": {
                                "created_at": 1493314622,
                                "display_plural": "eggs",
                                "display_singular": "egg",
                                "id": 19,
                                "name": "egg",
                                "updated_at": 1509035288
                            },
                            "measurements": [
                                {
                                    "id": 652620,
                                    "quantity": "4",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 1,
                            "raw_text": "4 eggs"
                        },
                        {
                            "extra_comment": "",
                            "id": 63063,
                            "ingredient": {
                                "created_at": 1494989637,
                                "display_plural": "granulated sugars",
                                "display_singular": "granulated sugar",
                                "id": 419,
                                "name": "granulated sugar",
                                "updated_at": 1509035262
                            },
                            "measurements": [
                                {
                                    "id": 652619,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 652618,
                                    "quantity": "400",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 2,
                            "raw_text": "2 cups granulated sugar"
                        },
                        {
                            "extra_comment": "",
                            "id": 63064,
                            "ingredient": {
                                "created_at": 1493314628,
                                "display_plural": "vegetable oils",
                                "display_singular": "vegetable oil",
                                "id": 20,
                                "name": "vegetable oil",
                                "updated_at": 1509035288
                            },
                            "measurements": [
                                {
                                    "id": 652624,
                                    "quantity": "240",
                                    "unit": {
                                        "abbreviation": "mL",
                                        "display_plural": "mL",
                                        "display_singular": "mL",
                                        "name": "milliliter",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 652622,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 3,
                            "raw_text": "1 cup vegetable oil"
                        },
                        {
                            "extra_comment": "",
                            "id": 63065,
                            "ingredient": {
                                "created_at": 1493745620,
                                "display_plural": "vanilla extracts",
                                "display_singular": "vanilla extract",
                                "id": 103,
                                "name": "vanilla extract",
                                "updated_at": 1509035284
                            },
                            "measurements": [
                                {
                                    "id": 652621,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "tsp",
                                        "display_plural": "teaspoons",
                                        "display_singular": "teaspoon",
                                        "name": "teaspoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 4,
                            "raw_text": "1 teaspoon vanilla extract"
                        },
                        {
                            "extra_comment": "",
                            "id": 63066,
                            "ingredient": {
                                "created_at": 1493314654,
                                "display_plural": "flours",
                                "display_singular": "flour",
                                "id": 25,
                                "name": "flour",
                                "updated_at": 1509035288
                            },
                            "measurements": [
                                {
                                    "id": 652629,
                                    "quantity": "500",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 652628,
                                    "quantity": "4",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 5,
                            "raw_text": "4 cups flour"
                        },
                        {
                            "extra_comment": "",
                            "id": 63067,
                            "ingredient": {
                                "created_at": 1494297371,
                                "display_plural": "baking sodas",
                                "display_singular": "baking soda",
                                "id": 247,
                                "name": "baking soda",
                                "updated_at": 1509035276
                            },
                            "measurements": [
                                {
                                    "id": 652623,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "tsp",
                                        "display_plural": "teaspoons",
                                        "display_singular": "teaspoon",
                                        "name": "teaspoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 6,
                            "raw_text": "1 teaspoon baking soda"
                        },
                        {
                            "extra_comment": "",
                            "id": 63068,
                            "ingredient": {
                                "created_at": 1493314647,
                                "display_plural": "baking powders",
                                "display_singular": "baking powder",
                                "id": 23,
                                "name": "baking powder",
                                "updated_at": 1509035288
                            },
                            "measurements": [
                                {
                                    "id": 652625,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "tsp",
                                        "display_plural": "teaspoons",
                                        "display_singular": "teaspoon",
                                        "name": "teaspoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 7,
                            "raw_text": "2 teaspoons baking powder"
                        },
                        {
                            "extra_comment": "",
                            "id": 63069,
                            "ingredient": {
                                "created_at": 1495154479,
                                "display_plural": "sour creams",
                                "display_singular": "sour cream",
                                "id": 496,
                                "name": "sour cream",
                                "updated_at": 1509035256
                            },
                            "measurements": [
                                {
                                    "id": 652631,
                                    "quantity": "490",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 652630,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 8,
                            "raw_text": "2 cups (16oz) sour cream"
                        },
                        {
                            "extra_comment": "",
                            "id": 63070,
                            "ingredient": {
                                "created_at": 1494983257,
                                "display_plural": "blueberries",
                                "display_singular": "blueberry",
                                "id": 400,
                                "name": "blueberry",
                                "updated_at": 1509035263
                            },
                            "measurements": [
                                {
                                    "id": 652627,
                                    "quantity": "200",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 652626,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 9,
                            "raw_text": "2 cups blueberries"
                        }
                    ],
                    "name": null,
                    "position": 1
                }
            ],
            "seo_path": "9295813,64485,9299665,9299686",
            "seo_title": "Blueberry Cream Muffins Recipe | Tasty",
            "servings_noun_plural": "servings",
            "servings_noun_singular": "serving",
            "show": {
                "id": 17,
                "name": "Tasty"
            },
            "show_id": 17,
            "slug": "blueberry-cream-muffins",
            "tags": [
                {
                    "display_name": "Vegetarian",
                    "id": 64469,
                    "name": "vegetarian",
                    "parent_tag_name": "dietary",
                    "root_tag_type": "dietary",
                    "type": "dietary"
                },
                {
                    "display_name": "Easy",
                    "id": 64471,
                    "name": "easy",
                    "parent_tag_name": "difficulty",
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "Breakfast",
                    "id": 64483,
                    "name": "breakfast",
                    "parent_tag_name": "meal",
                    "root_tag_type": "meal",
                    "type": "meal"
                },
                {
                    "display_name": "Desserts",
                    "id": 64485,
                    "name": "desserts",
                    "parent_tag_name": "meal",
                    "root_tag_type": "meal",
                    "type": "meal"
                },
                {
                    "display_name": "Kid-Friendly",
                    "id": 64488,
                    "name": "kid_friendly",
                    "parent_tag_name": "cooking_style",
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "Snacks",
                    "id": 64491,
                    "name": "snacks",
                    "parent_tag_name": "meal",
                    "root_tag_type": "meal",
                    "type": "meal"
                },
                {
                    "display_name": "Baking",
                    "id": 64492,
                    "name": "baking",
                    "parent_tag_name": "appliance",
                    "root_tag_type": "appliance",
                    "type": "appliance"
                },
                {
                    "display_name": "Big Batch",
                    "id": 65851,
                    "name": "big_batch",
                    "parent_tag_name": "cooking_style",
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "Bakery Goods",
                    "id": 65857,
                    "name": "bakery_goods",
                    "parent_tag_name": "appliance",
                    "root_tag_type": "appliance",
                    "type": "appliance"
                },
                {
                    "display_name": "Under 45 Minutes",
                    "id": 8091747,
                    "name": "under_45_minutes",
                    "parent_tag_name": "difficulty",
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "Under 1 Hour",
                    "id": 8091748,
                    "name": "under_1_hour",
                    "parent_tag_name": "difficulty",
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "Breads & Pastries",
                    "id": 9299369,
                    "name": "breads_pastries",
                    "parent_tag_name": "breakfast",
                    "root_tag_type": "meal",
                    "type": "breakfast"
                },
                {
                    "display_name": "Cupcakes",
                    "id": 9299686,
                    "name": "cupcakes",
                    "parent_tag_name": "cakes",
                    "root_tag_type": "meal",
                    "type": "cakes"
                },
                {
                    "display_name": "Eggs",
                    "id": 10623588,
                    "name": "eggs",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                },
                {
                    "display_name": "Gluten",
                    "id": 10623589,
                    "name": "gluten",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                },
                {
                    "display_name": "Dairy",
                    "id": 10623608,
                    "name": "dairy",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                }
            ],
            "thumbnail_alt_text": "",
            "thumbnail_url": "https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/4e9524578f544c888af761e10630593b.jpeg",
            "tips_and_ratings_enabled": true,
            "topics": [
                {
                    "name": "Baked Goods",
                    "slug": "baked-goods"
                },
                {
                    "name": "Best Vegetarian",
                    "slug": "best-vegetarian"
                },
                {
                    "name": "Bread Lovers",
                    "slug": "bread"
                },
                {
                    "name": "Community Recipes",
                    "slug": "community"
                },
                {
                    "name": "Kid Friendly",
                    "slug": "kid-friendly"
                },
                {
                    "name": "Breakfast",
                    "slug": "breakfast"
                },
                {
                    "name": "Desserts",
                    "slug": "desserts"
                },
                {
                    "name": "Snacks",
                    "slug": "snacks"
                }
            ],
            "total_time_minutes": 35,
            "total_time_tier": {
                "display_tier": "Under 45 minutes",
                "tier": "under_45_minutes"
            },
            "updated_at": 1628114400,
            "user_ratings": {
                "count_negative": 14,
                "count_positive": 225,
                "score": 0.9414225941422594
            },
            "video_ad_content": null,
            "video_id": null,
            "video_url": null,
            "yields": "Servings: 24"
        },
        {
            "approved_at": 1562857615,
            "aspect_ratio": "16:9",
            "beauty_url": null,
            "brand": null,
            "brand_id": null,
            "buzz_id": null,
            "canonical_id": "recipe:5431",
            "compilations": [
                {
                    "approved_at": 1592314202,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:1510",
                    "country": "US",
                    "created_at": 1590754985,
                    "description": null,
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 1510,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "For Cinnamon Lovers Only",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "for-cinnamon-lovers-only",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/267705.jpg",
                    "video_id": 105362,
                    "video_url": "https://vid.tasty.co/output/168737/hls24_1590755050.m3u8"
                },
                {
                    "approved_at": 1599657884,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:1586",
                    "country": "US",
                    "created_at": 1595236483,
                    "description": "Whether you're in the mood for chocolate or for cinnamon, we've got you covered. These easy and tasty sweet treats cover all the bases for the season. Start with crowd-pleasing classics like <a href=\"https://tasty.co/recipe/cinnamon-roll-cheesecake\">cinnamon roll cheesecake</a> or try a modern and Instagram-ready treat like this <a href=\"https://tasty.co/recipe/magic-chocolate-ball\">magic chocolate ball</a>. Whatever you choose, just know that these recipes are loved by all.\n \n",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 1586,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Chocolate vs Cinnamon Lover",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "chocolate-vs-cinnamon-lover",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/274823.jpg",
                    "video_id": 108662,
                    "video_url": "https://vid.tasty.co/output/173566/hls24_1595237041.m3u8"
                },
                {
                    "approved_at": 1599139266,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:1665",
                    "country": "US",
                    "created_at": 1598246765,
                    "description": "Hey there! You look like you've had a long day. How about taking a break and spending some time drooling over some stunning & delicious cheesecakes? Try an assortment of quick & easy no bake cheesecakes and or test your baking skills with this super fancy <a href=\"https://tasty.co/recipe/triple-decker-cheesecake-tower\n\">cheesecake tower!</a> Turn up that microwave and let's start baking!",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 1665,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Ultimate Cheesecake Marathon",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "ultimate-cheesecake-marathon",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/279749.jpg",
                    "video_id": 110914,
                    "video_url": "https://vid.tasty.co/output/176795/hls24_1598247165.m3u8"
                },
                {
                    "approved_at": 1604587937,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:1776",
                    "country": "US",
                    "created_at": 1603993767,
                    "description": "Every special occasion feels incomplete without the wonderful smell of cinnamon wafting through the air. But why settle for regular cinnamon rolls when you can take it up a notch! From everyone's favorite classic <a href=\"https://tasty.co/recipe/cinnamon-roll-apple-pie\">Cinnamon Roll Apple Pie</a> to Instagram-worthy <a href=\"https://tasty.co/recipe/cinnamon-roll-waffles\">Cinnamon Roll Waffle</a>, these recipes are sure to make every celebration unforgettable!",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 1776,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Cinnamon Roll Recipes",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "cinnamon-roll-recipes",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/290441.jpg",
                    "video_id": 117119,
                    "video_url": "https://vid.tasty.co/output/183423/hls24_1603994619.m3u8"
                },
                {
                    "approved_at": 1608213512,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:1938",
                    "country": "US",
                    "created_at": 1608011997,
                    "description": "Everything tastes better with cinnamon! Spice up your mornings with some <a href=\"https://tasty.co/recipe/apple-cinnamon-steel-cut-oatmeal\">Apple Cinnamon Steel Cut Oatmeal</a> or indulge in a stack of delicious <a href=\"https://tasty.co/recipe/cinnamon-roll-pancakes-with-chloe-coscarelli\">Cinnamon Roll Pancakes</a>. Make yourself a jar of <a href=\"https://tasty.co/recipe/cinnamon-honey-almond-butter\">Cinnamon Honey Almond Butter</a> to pair with toast or your favorite fruits for lunch and bake some <a href=\"https://tasty.co/recipe/sheet-tray-maple-cinnamon-trail-mix\">Sheet Tray Maple Cinnamon Trail Mix</a> to munch on through the day! ",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 1938,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Recipes For Cinnamon Lovers",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "recipes-for-cinnamon-lovers",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/295898.jpg",
                    "video_id": 118160,
                    "video_url": "https://vid.tasty.co/output/186479/hls24_1606377164.m3u8"
                },
                {
                    "approved_at": 1662751164,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:3282",
                    "country": "US",
                    "created_at": 1660553111,
                    "description": "These recipes all prove one fact: not all sins are bad. It’s time to dive deep into the delicious world of gluttony. If you choose to partake in this culinary crime, make sure you do it in the most delicious way; the guilty pleasure of <a href=\"https://tasty.co/recipe/cinnamon-roll-cheesecake\">Cinnamon Roll Cheesecake</a> or <a href=\"https://tasty.co/recipe/chocolate-pancakes\">Chocolate Pancakes</a> is the one to remember for ages!",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 3282,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Dangerously Delicious Desserts!",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "dangerously-delicious-desserts",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/393612.jpg",
                    "video_id": 165006,
                    "video_url": "https://vid.tasty.co/output/250173/hls24_1660553080.m3u8"
                }
            ],
            "cook_time_minutes": 0,
            "country": "US",
            "created_at": 1562853218,
            "credits": [
                {
                    "name": null,
                    "type": "internal"
                }
            ],
            "description": "Get ready for a dessert extravaganza with this cinnamon roll cheesecake! Creamy cheesecake filling is baked atop a cinnamon roll crust with a swirl of cinnamon sugar and a final icing glaze for an extra-sweet touch. With all the flavors of a classic cinnamon roll in a decadent cheesecake form, it's a showstopper that'll have everyone asking for seconds!",
            "draft_status": "published",
            "facebook_posts": [],
            "id": 5431,
            "inspired_by_url": null,
            "instructions": [
                {
                    "appliance": "oven",
                    "display_text": "Preheat oven to 325°F/160°C.",
                    "end_time": 0,
                    "id": 48855,
                    "position": 1,
                    "start_time": 0,
                    "temperature": 325
                },
                {
                    "appliance": null,
                    "display_text": "In a bowl, beat the cream cheese and sugar until smooth.",
                    "end_time": 0,
                    "hacks": [
                        {
                            "end_index": 14,
                            "id": 23,
                            "match": "beat",
                            "start_index": 11
                        }
                    ],
                    "id": 48856,
                    "position": 2,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Add the sour cream and vanilla, and beat until there are no lumps.",
                    "end_time": 0,
                    "hacks": [],
                    "id": 48857,
                    "position": 3,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Add the eggs one at a time, mixing completely after each one.  Set aside.",
                    "end_time": 0,
                    "id": 48858,
                    "position": 4,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "In another bowl, mix the butter, brown sugar, and cinnamon until fully combined.  Set aside.",
                    "end_time": 0,
                    "id": 48859,
                    "position": 5,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "In a greased springform pan, press all of the cinnamon rolls flat, until they completely cover the bottom of the pan.",
                    "end_time": 0,
                    "id": 48860,
                    "position": 6,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Evenly spread the cheesecake batter, then drop spoonfuls of the butter mixture onto the cheesecake batter.",
                    "end_time": 0,
                    "id": 48861,
                    "position": 7,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Swirl the butter mixture into the cheesecake using a knife (try to keep it away from the edges!).",
                    "end_time": 0,
                    "id": 48862,
                    "position": 8,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Bake for 30-35 minutes, until the cheesecake is firm around the edges but still slightly jiggly in the middle.",
                    "end_time": 0,
                    "id": 48863,
                    "position": 9,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Remove from oven and cool completely.",
                    "end_time": 0,
                    "id": 48864,
                    "position": 10,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Top with frosting from the cinnamon rolls.",
                    "end_time": 0,
                    "id": 48865,
                    "position": 11,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Refrigerate at least 4 hours.",
                    "end_time": 0,
                    "id": 48866,
                    "position": 12,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Enjoy!",
                    "end_time": 0,
                    "id": 48867,
                    "position": 13,
                    "start_time": 0,
                    "temperature": null
                }
            ],
            "is_app_only": false,
            "is_one_top": false,
            "is_shoppable": true,
            "is_subscriber_content": false,
            "keywords": "",
            "language": "eng",
            "name": "Cinnamon Roll Cheesecake",
            "num_servings": 8,
            "nutrition": {
                "calories": 501,
                "carbohydrates": 42,
                "fat": 34,
                "fiber": 1,
                "protein": 7,
                "sugar": 30,
                "updated_at": "2024-05-01T08:05:39+02:00"
            },
            "nutrition_visibility": "auto",
            "original_video_url": null,
            "prep_time_minutes": 0,
            "price": {
                "consumption_portion": 100,
                "consumption_total": 700,
                "portion": 300,
                "total": 2350,
                "updated_at": "2024-10-08T07:18:01+02:00"
            },
            "promotion": "partial",
            "renditions": [],
            "sections": [
                {
                    "components": [
                        {
                            "extra_comment": "softened",
                            "id": 58220,
                            "ingredient": {
                                "created_at": 1494297000,
                                "display_plural": "cream cheeses",
                                "display_singular": "cream cheese",
                                "id": 242,
                                "name": "cream cheese",
                                "updated_at": 1509035276
                            },
                            "measurements": [
                                {
                                    "id": 789885,
                                    "quantity": "16",
                                    "unit": {
                                        "abbreviation": "oz",
                                        "display_plural": "oz",
                                        "display_singular": "oz",
                                        "name": "ounce",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 789884,
                                    "quantity": "450",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 1,
                            "raw_text": "16 ounces cream cheese, softened"
                        },
                        {
                            "extra_comment": "",
                            "id": 58221,
                            "ingredient": {
                                "created_at": 1493314650,
                                "display_plural": "sugars",
                                "display_singular": "sugar",
                                "id": 24,
                                "name": "sugar",
                                "updated_at": 1509035288
                            },
                            "measurements": [
                                {
                                    "id": 789892,
                                    "quantity": "100",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 789891,
                                    "quantity": "½",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 2,
                            "raw_text": "½ cup sugar"
                        },
                        {
                            "extra_comment": "",
                            "id": 58222,
                            "ingredient": {
                                "created_at": 1495154479,
                                "display_plural": "sour creams",
                                "display_singular": "sour cream",
                                "id": 496,
                                "name": "sour cream",
                                "updated_at": 1509035256
                            },
                            "measurements": [
                                {
                                    "id": 789888,
                                    "quantity": "120",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 789887,
                                    "quantity": "½",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 3,
                            "raw_text": "½ cup sour cream"
                        },
                        {
                            "extra_comment": "",
                            "id": 58223,
                            "ingredient": {
                                "created_at": 1493745620,
                                "display_plural": "vanilla extracts",
                                "display_singular": "vanilla extract",
                                "id": 103,
                                "name": "vanilla extract",
                                "updated_at": 1509035284
                            },
                            "measurements": [
                                {
                                    "id": 789889,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "tsp",
                                        "display_plural": "teaspoons",
                                        "display_singular": "teaspoon",
                                        "name": "teaspoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 4,
                            "raw_text": "1 teaspoon vanilla extract"
                        },
                        {
                            "extra_comment": "",
                            "id": 58224,
                            "ingredient": {
                                "created_at": 1493314622,
                                "display_plural": "eggs",
                                "display_singular": "egg",
                                "id": 19,
                                "name": "egg",
                                "updated_at": 1509035288
                            },
                            "measurements": [
                                {
                                    "id": 789897,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 5,
                            "raw_text": "2 eggs"
                        },
                        {
                            "extra_comment": "melted",
                            "id": 58225,
                            "ingredient": {
                                "created_at": 1493314940,
                                "display_plural": "butters",
                                "display_singular": "butter",
                                "id": 30,
                                "name": "butter",
                                "updated_at": 1509035287
                            },
                            "measurements": [
                                {
                                    "id": 789894,
                                    "quantity": "115",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 789893,
                                    "quantity": "½",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 6,
                            "raw_text": "⅓ cup butter, melted"
                        },
                        {
                            "extra_comment": "",
                            "id": 58226,
                            "ingredient": {
                                "created_at": 1495671124,
                                "display_plural": "light brown sugars",
                                "display_singular": "light brown sugar",
                                "id": 707,
                                "name": "light brown sugar",
                                "updated_at": 1509035239
                            },
                            "measurements": [
                                {
                                    "id": 789896,
                                    "quantity": "100",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 789895,
                                    "quantity": "½",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 7,
                            "raw_text": "½ cup light brown sugar"
                        },
                        {
                            "extra_comment": "",
                            "id": 58227,
                            "ingredient": {
                                "created_at": 1493906374,
                                "display_plural": "cinnamons",
                                "display_singular": "cinnamon",
                                "id": 152,
                                "name": "cinnamon",
                                "updated_at": 1509035283
                            },
                            "measurements": [
                                {
                                    "id": 789886,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "tbsp",
                                        "display_plural": "tablespoons",
                                        "display_singular": "tablespoon",
                                        "name": "tablespoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 8,
                            "raw_text": "2 tablespoon. cinnamon"
                        },
                        {
                            "extra_comment": "with frosting",
                            "id": 58228,
                            "ingredient": {
                                "created_at": 1562853343,
                                "display_plural": "refrigerated cinnamon rolls",
                                "display_singular": "refrigerated cinnamon roll",
                                "id": 5581,
                                "name": "refrigerated cinnamon rolls",
                                "updated_at": 1562853343
                            },
                            "measurements": [
                                {
                                    "id": 789890,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "package",
                                        "display_plural": "packages",
                                        "display_singular": "package",
                                        "name": "package",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 9,
                            "raw_text": "1 pack refrigerated cinnamon rolls with frosting (8 regular sized)"
                        }
                    ],
                    "name": null,
                    "position": 1
                }
            ],
            "seo_path": "9295812,9299134,188967",
            "seo_title": "",
            "servings_noun_plural": "servings",
            "servings_noun_singular": "serving",
            "show": {
                "id": 17,
                "name": "Tasty"
            },
            "show_id": 17,
            "slug": "cinnamon-roll-cheesecake",
            "tags": [
                {
                    "display_name": "Comfort Food",
                    "id": 64462,
                    "name": "comfort_food",
                    "parent_tag_name": "cooking_style",
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "Desserts",
                    "id": 64485,
                    "name": "desserts",
                    "parent_tag_name": "meal",
                    "root_tag_type": "meal",
                    "type": "meal"
                },
                {
                    "display_name": "Baking",
                    "id": 64492,
                    "name": "baking",
                    "parent_tag_name": "appliance",
                    "root_tag_type": "appliance",
                    "type": "appliance"
                },
                {
                    "display_name": "Indulgent Sweets",
                    "id": 65850,
                    "name": "indulgent_sweets",
                    "parent_tag_name": null,
                    "root_tag_type": "occasion",
                    "type": "occasion"
                },
                {
                    "display_name": "Mashup",
                    "id": 65852,
                    "name": "mashup",
                    "parent_tag_name": null,
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "No Bake Desserts",
                    "id": 65854,
                    "name": "no_bake_desserts",
                    "parent_tag_name": "cooking_style",
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "Special Occasion",
                    "id": 188967,
                    "name": "special_occasion",
                    "parent_tag_name": "occasion",
                    "root_tag_type": "seasonal",
                    "type": "occasion"
                },
                {
                    "display_name": "Under 1 Hour",
                    "id": 8091748,
                    "name": "under_1_hour",
                    "parent_tag_name": "difficulty",
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "Cheesecakes",
                    "id": 9299685,
                    "name": "cheesecakes",
                    "parent_tag_name": "cakes",
                    "root_tag_type": "meal",
                    "type": "cakes"
                },
                {
                    "display_name": "Gluten",
                    "id": 10623589,
                    "name": "gluten",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                },
                {
                    "display_name": "Dairy",
                    "id": 10623608,
                    "name": "dairy",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                }
            ],
            "thumbnail_alt_text": "",
            "thumbnail_url": "https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/858de8a1025d44a69641254e25bde14a.png",
            "tips_and_ratings_enabled": true,
            "topics": [
                {
                    "name": "No Bake Desserts",
                    "slug": "no-bake-desserts"
                },
                {
                    "name": "Desserts",
                    "slug": "desserts"
                }
            ],
            "total_time_minutes": 0,
            "total_time_tier": null,
            "updated_at": 1683237600,
            "user_ratings": {
                "count_negative": 16,
                "count_positive": 277,
                "score": 0.9453924914675768
            },
            "video_ad_content": null,
            "video_id": null,
            "video_url": null,
            "yields": "8 Servings"
        },
        {
            "approved_at": 1564773077,
            "aspect_ratio": "1:1",
            "beauty_url": null,
            "brand": null,
            "brand_id": null,
            "buzz_id": null,
            "canonical_id": "recipe:5466",
            "compilations": [
                {
                    "approved_at": 1580777476,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:1372",
                    "country": "US",
                    "created_at": 1579848969,
                    "description": null,
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 1372,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Tangy & Saucy Spaghetti Recipes",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "tangy-saucy-spaghetti-recipes",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/252931.jpg",
                    "video_id": 99286,
                    "video_url": "https://vid.tasty.co/output/158499/hls24_1579849394.m3u8"
                },
                {
                    "approved_at": 1600108969,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:1684",
                    "country": "US",
                    "created_at": 1598896707,
                    "description": "Having trouble deciding what you should make next? Take a look at a few of the best pasta recipes we have to offer! From a <a href=\"https://tasty.co/recipe/vegan-mac-n-cheese\">vegan version of mac 'n' cheese</a> to delicious <a href=\"https://tasty.co/recipe/spaghetti-meatball-bake\">baked meatballs and spaghetti</a>, these ideas will satisfy every craving. Pair your pasta with a salad, dessert, and glass of wine — and you've got a restaurant-quality menu right at home!",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 1684,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Tasty's Best Pasta Recipes",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "tasty-s-best-pasta-recipes",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/281005.jpg",
                    "video_id": 112179,
                    "video_url": "https://vid.tasty.co/output/177582/hls24_1598903165.m3u8"
                },
                {
                    "approved_at": 1617195181,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:2219",
                    "country": "US",
                    "created_at": 1615809320,
                    "description": "We've curated a special assortment of pasta recipes just for you. From our unique <a href=\"https://tasty.co/recipe/tomato-and-anchovy-pasta\">tomato anchovy pasta</a> to mouth-watering <a href=\"https://tasty.co/recipe/one-pot-chicken-bacon-and-goat-cheese\">chicken, bacon and goat cheese pasta</a>, these recipes are made to impress! We're going to go eat our hearts out now: time to get cooking!",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 2219,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Make The Perfect Bowl Of Pasta With These Recipes",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "make-the-perfect-bowl-of-pasta-with-these-recipes",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/314886.jpg",
                    "video_id": 127253,
                    "video_url": "https://vid.tasty.co/output/198051/hls24_1617121116.m3u8"
                }
            ],
            "cook_time_minutes": 0,
            "country": "US",
            "created_at": 1564516706,
            "credits": [
                {
                    "name": "Rie McClenny",
                    "type": "internal"
                }
            ],
            "description": "Savor the bold flavors of this Tomato and Anchovy Pasta, a perfect weeknight meal that's both simple and satisfying. With a zesty tomato sauce and umami-packed anchovies, this dish will have your taste buds dancing in no time!",
            "draft_status": "published",
            "facebook_posts": [],
            "id": 5466,
            "inspired_by_url": null,
            "instructions": [
                {
                    "appliance": null,
                    "display_text": "Melt the butter in a large skillet over medium heat. Add 4 of the chopped anchovy filets and cook for 1 minute, until they begin to melt.",
                    "end_time": 18833,
                    "hacks": [
                        {
                            "end_index": 72,
                            "id": 1,
                            "match": "chopped",
                            "start_index": 66
                        }
                    ],
                    "id": 49183,
                    "position": 1,
                    "start_time": 9000,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Add the panko bread crumbs and cook for 3 minutes, stirring frequently, until golden brown. Transfer the bread crumbs to a medium bowl and let cool to room temperature. Once cooled, toss with the Parmigiano-Reggiano cheese.",
                    "end_time": 37833,
                    "id": 49184,
                    "position": 2,
                    "start_time": 20000,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Heat ¼ cup (60 ml) of olive oil in a medium saucepan over medium-high heat. Once the oil begins to shimmer, add the remaining 6 anchovies and cook for 2 minutes, stirring frequently, until the anchovies begin to melt into the oil.",
                    "end_time": 48833,
                    "id": 49185,
                    "position": 3,
                    "start_time": 40000,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Add the garlic and red pepper flakes and cook for 30 seconds, until fragrant.",
                    "end_time": 66969,
                    "id": 49186,
                    "position": 4,
                    "start_time": 51000,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Add the tomatoes and stir to coat in the oil. Season with 1 teaspoon of salt and cook for 5 minutes, or until the tomatoes just begin to soften.",
                    "end_time": 88666,
                    "id": 49187,
                    "position": 5,
                    "start_time": 69000,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Add the white wine and reduce the heat to low. Cook for 5 minutes, or until the sauce is reduced by half.",
                    "end_time": 98333,
                    "id": 49188,
                    "position": 6,
                    "start_time": 89000,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Add cooked pasta and reserved cooking water to the pot with the tomatoes and stir to combine. Cook for 1 minute, until the pasta is well coated and saucy. Drizzle with the remaining tablespoon of olive oil and season with salt. Toss to coat.",
                    "end_time": 128466,
                    "id": 49189,
                    "position": 7,
                    "start_time": 102500,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Serve the pasta topped with the anchovy bread crumbs and lemon zest",
                    "end_time": 147333,
                    "id": 49190,
                    "position": 8,
                    "start_time": 131166,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Enjoy!",
                    "end_time": 164466,
                    "id": 49191,
                    "position": 9,
                    "start_time": 157166,
                    "temperature": null
                }
            ],
            "is_app_only": false,
            "is_one_top": false,
            "is_shoppable": true,
            "is_subscriber_content": false,
            "keywords": "family dinner, jonah peretti, secret ingredient pasta, tasty, tasty_contains_alcohol, tomato and anchovy pasta recipe, umami pasta",
            "language": "eng",
            "name": "Tomato And Anchovy Pasta",
            "num_servings": 4,
            "nutrition": {
                "calories": 677,
                "carbohydrates": 109,
                "fat": 13,
                "fiber": 6,
                "protein": 24,
                "sugar": 9,
                "updated_at": "2024-05-01T08:05:34+02:00"
            },
            "nutrition_visibility": "auto",
            "original_video_url": "https://s3.amazonaws.com/video-api-prod/assets/85b5dc4294914e6b80ba2f128aaaa023/FB.mp4",
            "prep_time_minutes": 0,
            "price": {
                "consumption_portion": 350,
                "consumption_total": 1450,
                "portion": 550,
                "total": 2250,
                "updated_at": "2024-10-08T07:18:11+02:00"
            },
            "promotion": "partial",
            "renditions": [
                {
                    "aspect": "square",
                    "bit_rate": 2773,
                    "container": "mp4",
                    "content_type": "video/mp4",
                    "duration": 181348,
                    "file_size": 62859318,
                    "height": 720,
                    "maximum_bit_rate": null,
                    "minimum_bit_rate": null,
                    "name": "mp4_720x720",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/132757/square_720/1557860941_00001.png",
                    "url": "https://vid.tasty.co/output/132757/square_720/1557860941",
                    "width": 720
                },
                {
                    "aspect": "square",
                    "bit_rate": 979,
                    "container": "mp4",
                    "content_type": "video/mp4",
                    "duration": 181348,
                    "file_size": 22171380,
                    "height": 320,
                    "maximum_bit_rate": null,
                    "minimum_bit_rate": null,
                    "name": "mp4_320x320",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/132757/square_320/1557860941_00001.png",
                    "url": "https://vid.tasty.co/output/132757/square_320/1557860941",
                    "width": 320
                },
                {
                    "aspect": "square",
                    "bit_rate": 2774,
                    "container": "mp4",
                    "content_type": "video/mp4",
                    "duration": 181348,
                    "file_size": 62880105,
                    "height": 720,
                    "maximum_bit_rate": null,
                    "minimum_bit_rate": null,
                    "name": "mp4_720x720",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/132757/landscape_720/1557860941_00001.png",
                    "url": "https://vid.tasty.co/output/132757/landscape_720/1557860941",
                    "width": 720
                },
                {
                    "aspect": "square",
                    "bit_rate": 1640,
                    "container": "mp4",
                    "content_type": "video/mp4",
                    "duration": 181348,
                    "file_size": 37172083,
                    "height": 480,
                    "maximum_bit_rate": null,
                    "minimum_bit_rate": null,
                    "name": "mp4_480x480",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/132757/landscape_480/1557860941_00001.png",
                    "url": "https://vid.tasty.co/output/132757/landscape_480/1557860941",
                    "width": 480
                },
                {
                    "aspect": "square",
                    "bit_rate": null,
                    "container": "ts",
                    "content_type": "application/vnd.apple.mpegurl",
                    "duration": 181348,
                    "file_size": null,
                    "height": 1080,
                    "maximum_bit_rate": 4619,
                    "minimum_bit_rate": 273,
                    "name": "low",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/132757/1445289064805-h2exzu/1557860941_00001.png",
                    "url": "https://vid.tasty.co/output/132757/hls24_1557860941.m3u8",
                    "width": 1080
                }
            ],
            "sections": [
                {
                    "components": [
                        {
                            "extra_comment": "",
                            "id": 58744,
                            "ingredient": {
                                "created_at": 1494806355,
                                "display_plural": "unsalted butters",
                                "display_singular": "unsalted butter",
                                "id": 291,
                                "name": "unsalted butter",
                                "updated_at": 1509035272
                            },
                            "measurements": [
                                {
                                    "id": 789898,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "tbsp",
                                        "display_plural": "tablespoons",
                                        "display_singular": "tablespoon",
                                        "name": "tablespoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 1,
                            "raw_text": "1 tablespoon unsalted butter"
                        },
                        {
                            "extra_comment": "finely chopped, divided",
                            "hacks": [
                                {
                                    "end_index": 32,
                                    "id": 1,
                                    "match": "chopped",
                                    "start_index": 26
                                }
                            ],
                            "id": 58745,
                            "ingredient": {
                                "created_at": 1533328440,
                                "display_plural": "anchovies",
                                "display_singular": "anchovy",
                                "id": 4540,
                                "name": "anchovies",
                                "updated_at": 1533328440
                            },
                            "measurements": [
                                {
                                    "id": 789903,
                                    "quantity": "10",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 2,
                            "raw_text": "10 anchovy filets, finely chopped, divided"
                        },
                        {
                            "extra_comment": "",
                            "id": 58746,
                            "ingredient": {
                                "created_at": 1494124470,
                                "display_plural": "panko breadcrumbs",
                                "display_singular": "panko breadcrumb",
                                "id": 195,
                                "name": "panko breadcrumbs",
                                "updated_at": 1509035280
                            },
                            "measurements": [
                                {
                                    "id": 789911,
                                    "quantity": "25",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 789909,
                                    "quantity": "½",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 3,
                            "raw_text": "½ cup panko bread crumbs"
                        },
                        {
                            "extra_comment": "",
                            "id": 58747,
                            "ingredient": {
                                "created_at": 1528724613,
                                "display_plural": "freshly grated parmigiano-reggiano cheeses",
                                "display_singular": "freshly grated parmigiano-reggiano cheese",
                                "id": 4310,
                                "name": "freshly grated parmigiano-reggiano cheese",
                                "updated_at": 1528724613
                            },
                            "measurements": [
                                {
                                    "id": 789910,
                                    "quantity": "½",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 789908,
                                    "quantity": "55",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 4,
                            "raw_text": "½ cup grated Parmigiano-Reggiano cheese"
                        },
                        {
                            "extra_comment": "plus 1 tablespoon, divided",
                            "id": 58748,
                            "ingredient": {
                                "created_at": 1495076759,
                                "display_plural": "extra virgin olive oils",
                                "display_singular": "extra virgin olive oil",
                                "id": 452,
                                "name": "extra virgin olive oil",
                                "updated_at": 1509035259
                            },
                            "measurements": [
                                {
                                    "id": 789900,
                                    "quantity": "60",
                                    "unit": {
                                        "abbreviation": "mL",
                                        "display_plural": "mL",
                                        "display_singular": "mL",
                                        "name": "milliliter",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 789899,
                                    "quantity": "¼",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 5,
                            "raw_text": "¼ cup plus 1 tablespoon extra-virgin olive oil, divided"
                        },
                        {
                            "extra_comment": "minced",
                            "hacks": [
                                {
                                    "end_index": 22,
                                    "id": 2,
                                    "match": "minced",
                                    "start_index": 17
                                }
                            ],
                            "id": 58749,
                            "ingredient": {
                                "created_at": 1493744766,
                                "display_plural": "garlics",
                                "display_singular": "garlic",
                                "id": 95,
                                "name": "garlic",
                                "updated_at": 1509035285
                            },
                            "measurements": [
                                {
                                    "id": 789914,
                                    "quantity": "6",
                                    "unit": {
                                        "abbreviation": "clove",
                                        "display_plural": "cloves",
                                        "display_singular": "clove",
                                        "name": "clove",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 6,
                            "raw_text": "6 cloves garlic, minced"
                        },
                        {
                            "extra_comment": "",
                            "id": 58750,
                            "ingredient": {
                                "created_at": 1494885083,
                                "display_plural": "red pepper flakes",
                                "display_singular": "red pepper flake",
                                "id": 351,
                                "name": "red pepper flakes",
                                "updated_at": 1509035267
                            },
                            "measurements": [
                                {
                                    "id": 789915,
                                    "quantity": "½",
                                    "unit": {
                                        "abbreviation": "tsp",
                                        "display_plural": "teaspoons",
                                        "display_singular": "teaspoon",
                                        "name": "teaspoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 7,
                            "raw_text": "½ teaspoon red pepper flakes"
                        },
                        {
                            "extra_comment": "halved",
                            "id": 58751,
                            "ingredient": {
                                "created_at": 1495156049,
                                "display_plural": "cherry tomatoes",
                                "display_singular": "cherry tomato",
                                "id": 498,
                                "name": "cherry tomato",
                                "updated_at": 1509035255
                            },
                            "measurements": [
                                {
                                    "id": 789902,
                                    "quantity": "400",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 789901,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "pt",
                                        "display_plural": "pt",
                                        "display_singular": "pt",
                                        "name": "pint",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 8,
                            "raw_text": "2 pints cherry tomatoes, halved"
                        },
                        {
                            "extra_comment": "plus more to taste",
                            "id": 58752,
                            "ingredient": {
                                "created_at": 1493307153,
                                "display_plural": "kosher salts",
                                "display_singular": "kosher salt",
                                "id": 11,
                                "name": "kosher salt",
                                "updated_at": 1509035289
                            },
                            "measurements": [
                                {
                                    "id": 789907,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "tsp",
                                        "display_plural": "teaspoons",
                                        "display_singular": "teaspoon",
                                        "name": "teaspoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 9,
                            "raw_text": "1 teaspoon kosher salt, plus more to taste"
                        },
                        {
                            "extra_comment": "",
                            "id": 58753,
                            "ingredient": {
                                "created_at": 1494989810,
                                "display_plural": "white wines",
                                "display_singular": "white wine",
                                "id": 422,
                                "name": "white wine",
                                "updated_at": 1509035262
                            },
                            "measurements": [
                                {
                                    "id": 789913,
                                    "quantity": "240",
                                    "unit": {
                                        "abbreviation": "mL",
                                        "display_plural": "mL",
                                        "display_singular": "mL",
                                        "name": "milliliter",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 789912,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 10,
                            "raw_text": "1 cup white wine"
                        },
                        {
                            "extra_comment": "cooked al dente, 1/4 cup (60 ml) cooking water reserved",
                            "id": 58754,
                            "ingredient": {
                                "created_at": 1495414450,
                                "display_plural": "spaghettis",
                                "display_singular": "spaghetti",
                                "id": 589,
                                "name": "spaghetti",
                                "updated_at": 1509035249
                            },
                            "measurements": [
                                {
                                    "id": 789905,
                                    "quantity": "455",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 789904,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "lb",
                                        "display_plural": "lb",
                                        "display_singular": "lb",
                                        "name": "pound",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 11,
                            "raw_text": "1 pound spaghetti, cooked al dente, ¼ cup cooking water reserved"
                        },
                        {
                            "extra_comment": "to taste",
                            "id": 58755,
                            "ingredient": {
                                "created_at": 1497026395,
                                "display_plural": "lemon  zests",
                                "display_singular": "lemon  zest",
                                "id": 1743,
                                "name": "lemon  zest",
                                "updated_at": 1509035168
                            },
                            "measurements": [
                                {
                                    "id": 789906,
                                    "quantity": "0",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 12,
                            "raw_text": "Lemon zest, to taste"
                        }
                    ],
                    "name": null,
                    "position": 1
                }
            ],
            "seo_path": "8757513,9295874,64453",
            "seo_title": "",
            "servings_noun_plural": "servings",
            "servings_noun_singular": "serving",
            "show": {
                "id": 17,
                "name": "Tasty"
            },
            "show_id": 17,
            "slug": "tomato-and-anchovy-pasta",
            "tags": [
                {
                    "display_name": "North American",
                    "id": 64444,
                    "name": "north_american",
                    "parent_tag_name": "cuisine",
                    "root_tag_type": "cuisine",
                    "type": "cuisine"
                },
                {
                    "display_name": "Italian",
                    "id": 64453,
                    "name": "italian",
                    "parent_tag_name": "european",
                    "root_tag_type": "cuisine",
                    "type": "european"
                },
                {
                    "display_name": "Seafood",
                    "id": 64459,
                    "name": "seafood",
                    "parent_tag_name": "dinner",
                    "root_tag_type": "meal",
                    "type": "dinner"
                },
                {
                    "display_name": "Easy",
                    "id": 64471,
                    "name": "easy",
                    "parent_tag_name": "difficulty",
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "Under 30 Minutes",
                    "id": 64472,
                    "name": "under_30_minutes",
                    "parent_tag_name": "difficulty",
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "Dinner",
                    "id": 64486,
                    "name": "dinner",
                    "parent_tag_name": "meal",
                    "root_tag_type": "meal",
                    "type": "meal"
                },
                {
                    "display_name": "Stove Top",
                    "id": 65848,
                    "name": "stove_top",
                    "parent_tag_name": null,
                    "root_tag_type": "appliance",
                    "type": "appliance"
                },
                {
                    "display_name": "Big Batch",
                    "id": 65851,
                    "name": "big_batch",
                    "parent_tag_name": "cooking_style",
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "Pan Fry",
                    "id": 65859,
                    "name": "pan_fry",
                    "parent_tag_name": "cooking_style",
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "Special Occasion",
                    "id": 188967,
                    "name": "special_occasion",
                    "parent_tag_name": "occasion",
                    "root_tag_type": "seasonal",
                    "type": "occasion"
                },
                {
                    "display_name": "Cheese Grater",
                    "id": 1247769,
                    "name": "cheese_grater",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Pyrex",
                    "id": 1247785,
                    "name": "pyrex",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Saute Pan",
                    "id": 1247787,
                    "name": "saute_pan",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Tongs",
                    "id": 1247790,
                    "name": "tongs",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Liquid Measuring Cup",
                    "id": 1280506,
                    "name": "liquid_measuring_cup",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Dry Measuring Cups",
                    "id": 1280507,
                    "name": "dry_measuring_cups",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Measuring Spoons",
                    "id": 1280508,
                    "name": "measuring_spoons",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Mixing Bowl",
                    "id": 1280510,
                    "name": "mixing_bowl",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Pescatarian",
                    "id": 3801552,
                    "name": "pescatarian",
                    "parent_tag_name": "dietary",
                    "root_tag_type": "dietary",
                    "type": "dietary"
                },
                {
                    "display_name": "High-Protein",
                    "id": 8091917,
                    "name": "high_protein",
                    "parent_tag_name": "healthy",
                    "root_tag_type": "healthy",
                    "type": "healthy"
                },
                {
                    "display_name": "High-Fiber",
                    "id": 8091920,
                    "name": "high_fiber",
                    "parent_tag_name": "healthy",
                    "root_tag_type": "healthy",
                    "type": "healthy"
                },
                {
                    "display_name": "Meal",
                    "id": 9295813,
                    "name": "meal",
                    "parent_tag_name": null,
                    "root_tag_type": "meal",
                    "type": "meal"
                },
                {
                    "display_name": "Pasta",
                    "id": 9299522,
                    "name": "pasta",
                    "parent_tag_name": "dinner",
                    "root_tag_type": "meal",
                    "type": "dinner"
                },
                {
                    "display_name": "Gluten",
                    "id": 10623589,
                    "name": "gluten",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                },
                {
                    "display_name": "Dairy",
                    "id": 10623608,
                    "name": "dairy",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                }
            ],
            "thumbnail_alt_text": "",
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216182.jpg",
            "tips_and_ratings_enabled": true,
            "topics": [
                {
                    "name": "Easy Dinner",
                    "slug": "easy-dinner"
                },
                {
                    "name": "Dinner",
                    "slug": "dinner"
                },
                {
                    "name": "Pasta",
                    "slug": "pasta"
                },
                {
                    "name": "American",
                    "slug": "american"
                },
                {
                    "name": "Italian",
                    "slug": "italian"
                }
            ],
            "total_time_minutes": 0,
            "total_time_tier": {
                "display_tier": "Under 30 minutes",
                "tier": "under_30_minutes"
            },
            "updated_at": 1683237600,
            "user_ratings": {
                "count_negative": 27,
                "count_positive": 209,
                "score": 0.885593220338983
            },
            "video_ad_content": "none",
            "video_id": 81004,
            "video_url": "https://vid.tasty.co/output/132757/hls24_1557860941.m3u8",
            "yields": "Servings: 4"
        },
        {
            "approved_at": 1576267466,
            "aspect_ratio": "1:1",
            "beauty_url": null,
            "brand": null,
            "brand_id": null,
            "buzz_id": null,
            "canonical_id": "recipe:5929",
            "compilations": [
                {
                    "approved_at": 1580403760,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:1385",
                    "country": "US",
                    "created_at": 1580403654,
                    "description": null,
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 1385,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Vegan Browned \"Butter\" Chocolate Chip Cookies And Vanilla Cashew Milk",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 34,
                            "name": "Goodful"
                        }
                    ],
                    "slug": "vegan-browned-butter-chocolate-chip-cookies-and-vanilla-cashew-milk",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/249914.jpg",
                    "video_id": 95031,
                    "video_url": "https://vid.tasty.co/output/156307/hls24_1577151257.m3u8"
                },
                {
                    "approved_at": 1587574037,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:1430",
                    "country": "US",
                    "created_at": 1583826081,
                    "description": null,
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 1430,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "6 Must-Try Vegan Desserts",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 34,
                            "name": "Goodful"
                        }
                    ],
                    "slug": "6-must-try-vegan-desserts",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/257932.jpg",
                    "video_id": 101197,
                    "video_url": "https://vid.tasty.co/output/162137/hls24_1583826167.m3u8"
                },
                {
                    "approved_at": 1608562520,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:1991",
                    "country": "US",
                    "created_at": 1608502003,
                    "description": null,
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 1991,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Vegan Holiday Desserts",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 34,
                            "name": "Goodful"
                        }
                    ],
                    "slug": "vegan-holiday-desserts",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/300520.jpg",
                    "video_id": 120215,
                    "video_url": "https://vid.tasty.co/output/189075/hls24_1608502241.m3u8"
                },
                {
                    "approved_at": 1609343019,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:2015",
                    "country": "US",
                    "created_at": 1608843423,
                    "description": null,
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 2015,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Goodful's Top Ten Vegan Recipes of 2020",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 34,
                            "name": "Goodful"
                        }
                    ],
                    "slug": "goodful-s-top-ten-vegan-recipes-of-2020",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/301575.jpg",
                    "video_id": 121909,
                    "video_url": "https://vid.tasty.co/output/189684/hls24_1608844177.m3u8"
                }
            ],
            "cook_time_minutes": 25,
            "country": "US",
            "created_at": 1576265764,
            "credits": [
                {
                    "name": "Rachel Gaewski",
                    "type": "internal"
                },
                {
                    "name": "Karlee Rotoly",
                    "type": "internal"
                }
            ],
            "description": "Don’t worry if you’re skipping the eggs and butter–these vegan chocolate chip cookies are out of this world! Make them for friends and family, or just for yourself. You won’t be sorry you did!",
            "draft_status": "published",
            "facebook_posts": [],
            "id": 5929,
            "inspired_by_url": null,
            "instructions": [
                {
                    "appliance": null,
                    "display_text": "Add the pecans to a large, high-walled skillet. Toast over medium heat for 5–8 minutes, until fragrant and beginning to darken slightly, stirring continuously to prevent burning.",
                    "end_time": 0,
                    "id": 52902,
                    "position": 1,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Pour in the melted coconut oil and stir to combine. Bring to a low simmer and steep the pecans for 8–10 minutes, until the coconut oil is tinted brown and there is a strong nutty aroma. Stir occasionally to prevent burning. Remove the pan from the heat and let cool for 5–10 minutes, until warm to the touch but cool enough to handle. Strain out the pecans and reserve for another use. You should have about ½ cup of infused coconut oil.",
                    "end_time": 0,
                    "hacks": [
                        {
                            "end_index": 72,
                            "id": 17,
                            "match": "simmer",
                            "start_index": 67
                        }
                    ],
                    "id": 52903,
                    "position": 2,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Add the warm coconut oil to a large microwave-safe bowl, along with the brown and granulated sugars, non-dairy milk, and vanilla. Whisk well to combine. Microwave for 20 seconds, just until the sugars have begun to dissolve.",
                    "end_time": 0,
                    "id": 52904,
                    "position": 3,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "In a medium bowl, combine the flour, baking soda, and salt. Mix with a fork to combine.",
                    "end_time": 0,
                    "id": 52905,
                    "position": 4,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Sift the flour mixture into the wet ingredients and fold with a spatula to combine, being careful not to over-mix.",
                    "end_time": 0,
                    "id": 52906,
                    "position": 5,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Fold in the chopped chocolate and chocolate chunks until evenly distributed.",
                    "end_time": 0,
                    "hacks": [
                        {
                            "end_index": 18,
                            "id": 1,
                            "match": "chopped",
                            "start_index": 12
                        }
                    ],
                    "id": 52907,
                    "position": 6,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Scoop the dough with a 2-ounce scoop onto 2 parchment-lined baking sheets, spacing at least 2 inches apart. Chill in the refrigerator for 30–60 minutes.",
                    "end_time": 0,
                    "id": 52908,
                    "position": 7,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Preheat the oven to 375°F (190°C).",
                    "end_time": 0,
                    "id": 52909,
                    "position": 8,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Bake the cookies for 15–18 minutes, until browned. Let cool for 10 minutes on the pans, then transfer to a wire rack to cool completely.",
                    "end_time": 0,
                    "hacks": [
                        {
                            "end_index": 48,
                            "id": 13,
                            "match": "browned",
                            "start_index": 42
                        }
                    ],
                    "id": 52910,
                    "position": 9,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Enjoy!",
                    "end_time": 0,
                    "id": 52911,
                    "position": 10,
                    "start_time": 0,
                    "temperature": null
                }
            ],
            "is_app_only": false,
            "is_one_top": false,
            "is_shoppable": true,
            "is_subscriber_content": false,
            "keywords": "",
            "language": "eng",
            "name": "Browned “Butter” Chocolate Chip Cookies",
            "num_servings": 8,
            "nutrition": {
                "calories": 443,
                "carbohydrates": 49,
                "fat": 27,
                "fiber": 2,
                "protein": 2,
                "sugar": 33,
                "updated_at": "2024-05-01T08:04:53+02:00"
            },
            "nutrition_visibility": "auto",
            "original_video_url": "https://s3.amazonaws.com/video-api-prod/assets/a47a5576451941b591b50f38d051da8a/VeganBrownedButterCHocolateChipCookiesFBFinal.mp4",
            "prep_time_minutes": 10,
            "price": {
                "consumption_portion": 100,
                "consumption_total": 750,
                "portion": 350,
                "total": 2600,
                "updated_at": "2024-10-08T07:19:40+02:00"
            },
            "promotion": "partial",
            "renditions": [
                {
                    "aspect": "square",
                    "bit_rate": 2111,
                    "container": "mp4",
                    "content_type": "video/mp4",
                    "duration": 212092,
                    "file_size": 55963490,
                    "height": 720,
                    "maximum_bit_rate": null,
                    "minimum_bit_rate": null,
                    "name": "mp4_720x720",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/156307/square_720/1577151257_00001.png",
                    "url": "https://vid.tasty.co/output/156307/square_720/1577151257",
                    "width": 720
                },
                {
                    "aspect": "square",
                    "bit_rate": 710,
                    "container": "mp4",
                    "content_type": "video/mp4",
                    "duration": 212092,
                    "file_size": 18813783,
                    "height": 320,
                    "maximum_bit_rate": null,
                    "minimum_bit_rate": null,
                    "name": "mp4_320x320",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/156307/square_320/1577151257_00001.png",
                    "url": "https://vid.tasty.co/output/156307/square_320/1577151257",
                    "width": 320
                },
                {
                    "aspect": "square",
                    "bit_rate": 2113,
                    "container": "mp4",
                    "content_type": "video/mp4",
                    "duration": 212092,
                    "file_size": 55994281,
                    "height": 720,
                    "maximum_bit_rate": null,
                    "minimum_bit_rate": null,
                    "name": "mp4_720x720",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/156307/landscape_720/1577151257_00001.png",
                    "url": "https://vid.tasty.co/output/156307/landscape_720/1577151257",
                    "width": 720
                },
                {
                    "aspect": "square",
                    "bit_rate": 1201,
                    "container": "mp4",
                    "content_type": "video/mp4",
                    "duration": 212092,
                    "file_size": 31816461,
                    "height": 480,
                    "maximum_bit_rate": null,
                    "minimum_bit_rate": null,
                    "name": "mp4_480x480",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/156307/landscape_480/1577151257_00001.png",
                    "url": "https://vid.tasty.co/output/156307/landscape_480/1577151257",
                    "width": 480
                },
                {
                    "aspect": "square",
                    "bit_rate": null,
                    "container": "ts",
                    "content_type": "application/vnd.apple.mpegurl",
                    "duration": 212087,
                    "file_size": null,
                    "height": 1080,
                    "maximum_bit_rate": 3723,
                    "minimum_bit_rate": 274,
                    "name": "low",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/156307/1445289064805-h2exzu/1577151257_00001.png",
                    "url": "https://vid.tasty.co/output/156307/hls24_1577151257.m3u8",
                    "width": 1080
                }
            ],
            "sections": [
                {
                    "components": [
                        {
                            "extra_comment": "finely chopped",
                            "hacks": [
                                {
                                    "end_index": 22,
                                    "id": 1,
                                    "match": "chopped",
                                    "start_index": 16
                                }
                            ],
                            "id": 64081,
                            "ingredient": {
                                "created_at": 1495678111,
                                "display_plural": "chopped pecans",
                                "display_singular": "chopped pecan",
                                "id": 734,
                                "name": "chopped pecans",
                                "updated_at": 1509035237
                            },
                            "measurements": [
                                {
                                    "id": 832511,
                                    "quantity": "3",
                                    "unit": {
                                        "abbreviation": "oz",
                                        "display_plural": "oz",
                                        "display_singular": "oz",
                                        "name": "ounce",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 1,
                            "raw_text": "3 ounces finely chopped pecans (about 1 cup)"
                        },
                        {
                            "extra_comment": "melted",
                            "id": 64082,
                            "ingredient": {
                                "created_at": 1517250145,
                                "display_plural": "refined coconut oils",
                                "display_singular": "refined coconut oil",
                                "id": 3579,
                                "name": "refined coconut oil",
                                "updated_at": 1517250145
                            },
                            "measurements": [
                                {
                                    "id": 832512,
                                    "quantity": "¾",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 2,
                            "raw_text": "¾ cup refined coconut oil, melted"
                        },
                        {
                            "extra_comment": "",
                            "id": 64083,
                            "ingredient": {
                                "created_at": 1495763910,
                                "display_plural": "dark brown sugars",
                                "display_singular": "dark brown sugar",
                                "id": 824,
                                "name": "dark brown sugar",
                                "updated_at": 1509035230
                            },
                            "measurements": [
                                {
                                    "id": 832515,
                                    "quantity": "¾",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 3,
                            "raw_text": "¾ cup dark brown sugar"
                        },
                        {
                            "extra_comment": "",
                            "id": 64084,
                            "ingredient": {
                                "created_at": 1494989637,
                                "display_plural": "granulated sugars",
                                "display_singular": "granulated sugar",
                                "id": 419,
                                "name": "granulated sugar",
                                "updated_at": 1509035262
                            },
                            "measurements": [
                                {
                                    "id": 832514,
                                    "quantity": "½",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 4,
                            "raw_text": "½ cup granulated sugar"
                        },
                        {
                            "extra_comment": "of choice",
                            "id": 64085,
                            "ingredient": {
                                "created_at": 1506477002,
                                "display_plural": "unsweetened non-dairy milks",
                                "display_singular": "unsweetened non-dairy milk",
                                "id": 3017,
                                "name": "unsweetened non-dairy milk",
                                "updated_at": 1509035094
                            },
                            "measurements": [
                                {
                                    "id": 832518,
                                    "quantity": "¼",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 5,
                            "raw_text": "¼ cup unsweetened non-dairy milk of choice"
                        },
                        {
                            "extra_comment": "",
                            "id": 64086,
                            "ingredient": {
                                "created_at": 1493745620,
                                "display_plural": "vanilla extracts",
                                "display_singular": "vanilla extract",
                                "id": 103,
                                "name": "vanilla extract",
                                "updated_at": 1509035284
                            },
                            "measurements": [
                                {
                                    "id": 832516,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "tsp",
                                        "display_plural": "teaspoons",
                                        "display_singular": "teaspoon",
                                        "name": "teaspoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 6,
                            "raw_text": "1 teaspoon vanilla extract"
                        },
                        {
                            "extra_comment": "",
                            "id": 64087,
                            "ingredient": {
                                "created_at": 1494122348,
                                "display_plural": "all-purpose flours",
                                "display_singular": "all-purpose flour",
                                "id": 185,
                                "name": "all-purpose flour",
                                "updated_at": 1509035280
                            },
                            "measurements": [
                                {
                                    "id": 832517,
                                    "quantity": "1 ½",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 7,
                            "raw_text": "1½ cups all-purpose flour"
                        },
                        {
                            "extra_comment": "",
                            "id": 64088,
                            "ingredient": {
                                "created_at": 1494297371,
                                "display_plural": "baking sodas",
                                "display_singular": "baking soda",
                                "id": 247,
                                "name": "baking soda",
                                "updated_at": 1509035276
                            },
                            "measurements": [
                                {
                                    "id": 832519,
                                    "quantity": "½",
                                    "unit": {
                                        "abbreviation": "tsp",
                                        "display_plural": "teaspoons",
                                        "display_singular": "teaspoon",
                                        "name": "teaspoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 8,
                            "raw_text": "½ teaspoon baking soda"
                        },
                        {
                            "extra_comment": "",
                            "id": 64089,
                            "ingredient": {
                                "created_at": 1493307153,
                                "display_plural": "kosher salts",
                                "display_singular": "kosher salt",
                                "id": 11,
                                "name": "kosher salt",
                                "updated_at": 1509035289
                            },
                            "measurements": [
                                {
                                    "id": 832513,
                                    "quantity": "1 ½",
                                    "unit": {
                                        "abbreviation": "tsp",
                                        "display_plural": "teaspoons",
                                        "display_singular": "teaspoon",
                                        "name": "teaspoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 9,
                            "raw_text": "1½ teaspoons kosher salt"
                        },
                        {
                            "extra_comment": "chopped",
                            "hacks": [
                                {
                                    "end_index": 38,
                                    "id": 1,
                                    "match": "chopped",
                                    "start_index": 32
                                }
                            ],
                            "id": 64090,
                            "ingredient": {
                                "created_at": 1493954478,
                                "display_plural": "dark chocolates",
                                "display_singular": "dark chocolate",
                                "id": 171,
                                "name": "dark chocolate",
                                "updated_at": 1509035282
                            },
                            "measurements": [
                                {
                                    "id": 832520,
                                    "quantity": "3.5",
                                    "unit": {
                                        "abbreviation": "oz",
                                        "display_plural": "oz",
                                        "display_singular": "oz",
                                        "name": "ounce",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 10,
                            "raw_text": "1 3.5-ounce dark chocolate bar, chopped"
                        },
                        {
                            "extra_comment": "",
                            "id": 64091,
                            "ingredient": {
                                "created_at": 1576267409,
                                "display_plural": "semisweet chocolate chunks",
                                "display_singular": "semisweet chocolate chunk",
                                "id": 6039,
                                "name": "semisweet chocolate chunks",
                                "updated_at": 1576267409
                            },
                            "measurements": [
                                {
                                    "id": 832521,
                                    "quantity": "½",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 11,
                            "raw_text": "½ cup semisweet chocolate chunks"
                        }
                    ],
                    "name": null,
                    "position": 1
                }
            ],
            "seo_path": "9295812,9299134,64503",
            "seo_title": "",
            "servings_noun_plural": "cookies",
            "servings_noun_singular": "cookie",
            "show": {
                "id": 34,
                "name": "Goodful"
            },
            "show_id": 34,
            "slug": "browned-butter-chocolate-chip-cookies",
            "tags": [
                {
                    "display_name": "Comfort Food",
                    "id": 64462,
                    "name": "comfort_food",
                    "parent_tag_name": "cooking_style",
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "Dairy-Free",
                    "id": 64463,
                    "name": "dairy_free",
                    "parent_tag_name": "dietary",
                    "root_tag_type": "dietary",
                    "type": "dietary"
                },
                {
                    "display_name": "Vegan",
                    "id": 64468,
                    "name": "vegan",
                    "parent_tag_name": "dietary",
                    "root_tag_type": "dietary",
                    "type": "dietary"
                },
                {
                    "display_name": "Vegetarian",
                    "id": 64469,
                    "name": "vegetarian",
                    "parent_tag_name": "dietary",
                    "root_tag_type": "dietary",
                    "type": "dietary"
                },
                {
                    "display_name": "Desserts",
                    "id": 64485,
                    "name": "desserts",
                    "parent_tag_name": "meal",
                    "root_tag_type": "meal",
                    "type": "meal"
                },
                {
                    "display_name": "Kid-Friendly",
                    "id": 64488,
                    "name": "kid_friendly",
                    "parent_tag_name": "cooking_style",
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "Snacks",
                    "id": 64491,
                    "name": "snacks",
                    "parent_tag_name": "meal",
                    "root_tag_type": "meal",
                    "type": "meal"
                },
                {
                    "display_name": "Baking",
                    "id": 64492,
                    "name": "baking",
                    "parent_tag_name": "appliance",
                    "root_tag_type": "appliance",
                    "type": "appliance"
                },
                {
                    "display_name": "Party",
                    "id": 64503,
                    "name": "party",
                    "parent_tag_name": "occasion",
                    "root_tag_type": "seasonal",
                    "type": "occasion"
                },
                {
                    "display_name": "Microwave",
                    "id": 65845,
                    "name": "microwave",
                    "parent_tag_name": "appliance",
                    "root_tag_type": "appliance",
                    "type": "appliance"
                },
                {
                    "display_name": "Stove Top",
                    "id": 65848,
                    "name": "stove_top",
                    "parent_tag_name": null,
                    "root_tag_type": "appliance",
                    "type": "appliance"
                },
                {
                    "display_name": "Bakery Goods",
                    "id": 65857,
                    "name": "bakery_goods",
                    "parent_tag_name": "appliance",
                    "root_tag_type": "appliance",
                    "type": "appliance"
                },
                {
                    "display_name": "Special Occasion",
                    "id": 188967,
                    "name": "special_occasion",
                    "parent_tag_name": "occasion",
                    "root_tag_type": "seasonal",
                    "type": "occasion"
                },
                {
                    "display_name": "Ice Cream Scoop",
                    "id": 1247772,
                    "name": "ice_cream_scoop",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Oven Mitts",
                    "id": 1247775,
                    "name": "oven_mitts",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Parchment Paper",
                    "id": 1247780,
                    "name": "parchment_paper",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Whisk",
                    "id": 1247793,
                    "name": "whisk",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Liquid Measuring Cup",
                    "id": 1280506,
                    "name": "liquid_measuring_cup",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Dry Measuring Cups",
                    "id": 1280507,
                    "name": "dry_measuring_cups",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Measuring Spoons",
                    "id": 1280508,
                    "name": "measuring_spoons",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Best of Tasty",
                    "id": 5831534,
                    "name": "best_of_tasty",
                    "parent_tag_name": null,
                    "root_tag_type": "business_tags",
                    "type": "business_tags"
                },
                {
                    "display_name": "Under 1 Hour",
                    "id": 8091748,
                    "name": "under_1_hour",
                    "parent_tag_name": "difficulty",
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "Cookies",
                    "id": 9299679,
                    "name": "cookies",
                    "parent_tag_name": "desserts",
                    "root_tag_type": "meal",
                    "type": "desserts"
                },
                {
                    "display_name": "Gluten",
                    "id": 10623589,
                    "name": "gluten",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                },
                {
                    "display_name": "Tree nuts",
                    "id": 10640006,
                    "name": "tree_nuts",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                }
            ],
            "thumbnail_alt_text": "",
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/249914.jpg",
            "tips_and_ratings_enabled": true,
            "topics": [
                {
                    "name": "Baked Goods",
                    "slug": "baked-goods"
                },
                {
                    "name": "Best Vegetarian",
                    "slug": "best-vegetarian"
                },
                {
                    "name": "Kid Friendly",
                    "slug": "kid-friendly"
                },
                {
                    "name": "Romantic Dinners",
                    "slug": "romantic-dinners"
                },
                {
                    "name": "Vegan",
                    "slug": "vegan"
                },
                {
                    "name": "Desserts",
                    "slug": "desserts"
                },
                {
                    "name": "Snacks",
                    "slug": "snacks"
                }
            ],
            "total_time_minutes": 65,
            "total_time_tier": {
                "display_tier": "Under 1.5 hours",
                "tier": "under_1.5_hours"
            },
            "updated_at": 1692050400,
            "user_ratings": {
                "count_negative": 50,
                "count_positive": 275,
                "score": 0.8461538461538461
            },
            "video_ad_content": "none",
            "video_id": 95031,
            "video_url": "https://vid.tasty.co/output/156307/hls24_1577151257.m3u8",
            "yields": "Makes 8-10 cookies"
        },
        {
            "approved_at": 1574967882,
            "aspect_ratio": "16:9",
            "beauty_url": null,
            "brand": null,
            "brand_id": null,
            "buzz_id": null,
            "canonical_id": "recipe:5910",
            "compilations": [],
            "cook_time_minutes": 20,
            "country": "US",
            "created_at": 1574816565,
            "credits": [
                {
                    "name": "Grace Walker",
                    "type": "community"
                }
            ],
            "description": "These macarons are a sweet and delicate treat that are perfect for anyone with a nut allergy. Made with a crispy shell and a creamy filling, they're a perfect afternoon snack or dessert.",
            "draft_status": "published",
            "facebook_posts": [],
            "id": 5910,
            "inspired_by_url": null,
            "instructions": [
                {
                    "appliance": null,
                    "display_text": "In a bowl, beat egg whites until frothy.",
                    "end_time": 0,
                    "hacks": [
                        {
                            "end_index": 14,
                            "id": 23,
                            "match": "beat",
                            "start_index": 11
                        }
                    ],
                    "id": 52683,
                    "position": 1,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Gradually add the granulated sugar until stiff peaks form.",
                    "end_time": 0,
                    "id": 52684,
                    "position": 2,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "In a separate bowl, whisk the flour and powdered sugar together. Then, sift the flour and powdered sugar mixture into the egg white mixture.",
                    "end_time": 0,
                    "hacks": [
                        {
                            "end_index": 24,
                            "id": 24,
                            "match": "whisk",
                            "start_index": 20
                        }
                    ],
                    "id": 52685,
                    "position": 3,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Add the vanilla extract, and gel food coloring if you want the macarons to be colored.",
                    "end_time": 0,
                    "id": 52686,
                    "position": 4,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Gently fold all the ingredients together.",
                    "end_time": 0,
                    "id": 52687,
                    "position": 5,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Transfer the batter into a piping bag with a rounded tip.",
                    "end_time": 0,
                    "id": 52688,
                    "position": 6,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Pipe the macarons onto a baking sheet with parchment paper. Gently tap the baking sheet on a flat surface a few times to release air bubbles.",
                    "end_time": 0,
                    "id": 52689,
                    "position": 7,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Let the macarons sit at room temperature for about 45 minutes.",
                    "end_time": 0,
                    "id": 52690,
                    "position": 8,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": "oven",
                    "display_text": "Preheat the oven to 280°F.",
                    "end_time": 0,
                    "id": 52691,
                    "position": 9,
                    "start_time": 0,
                    "temperature": 280
                },
                {
                    "appliance": null,
                    "display_text": "Bake the macarons for 17-20 minutes.",
                    "end_time": 0,
                    "id": 52692,
                    "position": 10,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Allow the macarons to cool for 10 minutes, then transfer the macarons on to a cooling rack.",
                    "end_time": 0,
                    "id": 52693,
                    "position": 11,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Add a dollop of buttercream or any frosting of your choice to one of the macaron shells, then top it with another macaron shell to create a sandwich. Repeat with the remaining shells and frosting.",
                    "end_time": 0,
                    "id": 52694,
                    "position": 12,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "For best results, allow the macarons to “bloom” for about 24 hours.",
                    "end_time": 0,
                    "id": 52695,
                    "position": 13,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Enjoy!",
                    "end_time": 0,
                    "id": 52696,
                    "position": 14,
                    "start_time": 0,
                    "temperature": null
                }
            ],
            "is_app_only": false,
            "is_one_top": false,
            "is_shoppable": true,
            "is_subscriber_content": false,
            "keywords": "",
            "language": "eng",
            "name": "Nut-Free Macarons",
            "num_servings": 10,
            "nutrition": {
                "calories": 82,
                "carbohydrates": 16,
                "fat": 1,
                "fiber": 0,
                "protein": 1,
                "sugar": 10,
                "updated_at": "2024-09-03T03:10:44+02:00"
            },
            "nutrition_visibility": "auto",
            "original_video_url": null,
            "prep_time_minutes": 60,
            "price": {
                "consumption_portion": 50,
                "consumption_total": 250,
                "portion": 200,
                "total": 1850,
                "updated_at": "2024-10-08T07:19:29+02:00"
            },
            "promotion": "partial",
            "renditions": [],
            "sections": [
                {
                    "components": [
                        {
                            "extra_comment": "",
                            "id": 63833,
                            "ingredient": {
                                "created_at": 1498565541,
                                "display_plural": "large egg whites",
                                "display_singular": "large egg white",
                                "id": 1945,
                                "name": "large egg white",
                                "updated_at": 1509035155
                            },
                            "measurements": [
                                {
                                    "id": 548682,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 1,
                            "raw_text": "2 large egg whites"
                        },
                        {
                            "extra_comment": "plus 1/2 teaspoon",
                            "id": 63834,
                            "ingredient": {
                                "created_at": 1494989637,
                                "display_plural": "granulated sugars",
                                "display_singular": "granulated sugar",
                                "id": 419,
                                "name": "granulated sugar",
                                "updated_at": 1509035262
                            },
                            "measurements": [
                                {
                                    "id": 548690,
                                    "quantity": "4",
                                    "unit": {
                                        "abbreviation": "tbsp",
                                        "display_plural": "tablespoons",
                                        "display_singular": "tablespoon",
                                        "name": "tablespoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 2,
                            "raw_text": "4 tablespoons plus 1/2 teaspoon granulated sugar"
                        },
                        {
                            "extra_comment": "",
                            "id": 63835,
                            "ingredient": {
                                "created_at": 1513187920,
                                "display_plural": "all purpose flours",
                                "display_singular": "all purpose flour",
                                "id": 3393,
                                "name": "all purpose flour",
                                "updated_at": 1513187920
                            },
                            "measurements": [
                                {
                                    "id": 548685,
                                    "quantity": "65",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 548683,
                                    "quantity": "½",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 3,
                            "raw_text": "1/2 cup all purpose flour"
                        },
                        {
                            "extra_comment": "",
                            "id": 63836,
                            "ingredient": {
                                "created_at": 1493747135,
                                "display_plural": "powdered sugars",
                                "display_singular": "powdered sugar",
                                "id": 144,
                                "name": "powdered sugar",
                                "updated_at": 1509035283
                            },
                            "measurements": [
                                {
                                    "id": 548687,
                                    "quantity": "55",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 548686,
                                    "quantity": "½",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 4,
                            "raw_text": "1/2 cup powdered sugar"
                        },
                        {
                            "extra_comment": "",
                            "id": 63838,
                            "ingredient": {
                                "created_at": 1493745620,
                                "display_plural": "vanilla extracts",
                                "display_singular": "vanilla extract",
                                "id": 103,
                                "name": "vanilla extract",
                                "updated_at": 1509035284
                            },
                            "measurements": [
                                {
                                    "id": 548684,
                                    "quantity": "½",
                                    "unit": {
                                        "abbreviation": "tsp",
                                        "display_plural": "teaspoons",
                                        "display_singular": "teaspoon",
                                        "name": "teaspoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 5,
                            "raw_text": "1/2 teaspoon vanilla extract"
                        },
                        {
                            "extra_comment": "optional",
                            "id": 63839,
                            "ingredient": {
                                "created_at": 1500724268,
                                "display_plural": "gel food colorings",
                                "display_singular": "gel food coloring",
                                "id": 2483,
                                "name": "gel food coloring",
                                "updated_at": 1509035126
                            },
                            "measurements": [
                                {
                                    "id": 548688,
                                    "quantity": "0",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 6,
                            "raw_text": "Gel food coloring (optional)"
                        },
                        {
                            "extra_comment": "or any frosting of your choice",
                            "id": 63840,
                            "ingredient": {
                                "created_at": 1496767341,
                                "display_plural": "buttercream frostings",
                                "display_singular": "buttercream frosting",
                                "id": 1475,
                                "name": "buttercream frosting",
                                "updated_at": 1509035186
                            },
                            "measurements": [
                                {
                                    "id": 548689,
                                    "quantity": "0",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 7,
                            "raw_text": "Buttercream or any frosting of your choice"
                        }
                    ],
                    "name": null,
                    "position": 1
                }
            ],
            "seo_path": "8757513,9295874,64449",
            "seo_title": "",
            "servings_noun_plural": "servings",
            "servings_noun_singular": "serving",
            "show": {
                "id": 17,
                "name": "Tasty"
            },
            "show_id": 17,
            "slug": "nut-free-macarons",
            "tags": [
                {
                    "display_name": "French",
                    "id": 64449,
                    "name": "french",
                    "parent_tag_name": "european",
                    "root_tag_type": "cuisine",
                    "type": "european"
                },
                {
                    "display_name": "Dairy-Free",
                    "id": 64463,
                    "name": "dairy_free",
                    "parent_tag_name": "dietary",
                    "root_tag_type": "dietary",
                    "type": "dietary"
                },
                {
                    "display_name": "Vegetarian",
                    "id": 64469,
                    "name": "vegetarian",
                    "parent_tag_name": "dietary",
                    "root_tag_type": "dietary",
                    "type": "dietary"
                },
                {
                    "display_name": "Desserts",
                    "id": 64485,
                    "name": "desserts",
                    "parent_tag_name": "meal",
                    "root_tag_type": "meal",
                    "type": "meal"
                },
                {
                    "display_name": "Baking",
                    "id": 64492,
                    "name": "baking",
                    "parent_tag_name": "appliance",
                    "root_tag_type": "appliance",
                    "type": "appliance"
                },
                {
                    "display_name": "Bakery Goods",
                    "id": 65857,
                    "name": "bakery_goods",
                    "parent_tag_name": "appliance",
                    "root_tag_type": "appliance",
                    "type": "appliance"
                },
                {
                    "display_name": "Special Occasion",
                    "id": 188967,
                    "name": "special_occasion",
                    "parent_tag_name": "occasion",
                    "root_tag_type": "seasonal",
                    "type": "occasion"
                },
                {
                    "display_name": "Under 45 Minutes",
                    "id": 8091747,
                    "name": "under_45_minutes",
                    "parent_tag_name": "difficulty",
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "Under 1 Hour",
                    "id": 8091748,
                    "name": "under_1_hour",
                    "parent_tag_name": "difficulty",
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "Low-Calorie",
                    "id": 8091916,
                    "name": "low_calorie",
                    "parent_tag_name": "healthy",
                    "root_tag_type": "healthy",
                    "type": "healthy"
                },
                {
                    "display_name": "Low-Fat",
                    "id": 8091919,
                    "name": "low_fat",
                    "parent_tag_name": "healthy",
                    "root_tag_type": "healthy",
                    "type": "healthy"
                },
                {
                    "display_name": "Eggs",
                    "id": 10623588,
                    "name": "eggs",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                },
                {
                    "display_name": "Gluten",
                    "id": 10623589,
                    "name": "gluten",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                },
                {
                    "display_name": "Dairy",
                    "id": 10623608,
                    "name": "dairy",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                },
                {
                    "display_name": "Tree nuts",
                    "id": 10640006,
                    "name": "tree_nuts",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                }
            ],
            "thumbnail_alt_text": "",
            "thumbnail_url": "https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/8230d427f6b648e9ae0cfbcbea9d6877.jpeg",
            "tips_and_ratings_enabled": true,
            "topics": [
                {
                    "name": "Baked Goods",
                    "slug": "baked-goods"
                },
                {
                    "name": "Best Vegetarian",
                    "slug": "best-vegetarian"
                },
                {
                    "name": "Community Recipes",
                    "slug": "community"
                },
                {
                    "name": "Desserts",
                    "slug": "desserts"
                }
            ],
            "total_time_minutes": 80,
            "total_time_tier": {
                "display_tier": "Under 1.5 hours",
                "tier": "under_1.5_hours"
            },
            "updated_at": 1692050400,
            "user_ratings": {
                "count_negative": 21,
                "count_positive": 137,
                "score": 0.8670886075949367
            },
            "video_ad_content": null,
            "video_id": null,
            "video_url": null,
            "yields": "Servings: 10"
        },
        {
            "approved_at": 1563370544,
            "aspect_ratio": null,
            "beauty_url": null,
            "brand": null,
            "brand_id": null,
            "buzz_id": null,
            "canonical_id": "recipe:4885",
            "compilations": [],
            "cook_time_minutes": 0,
            "country": "US",
            "created_at": 1553790152,
            "credits": [
                {
                    "name": null,
                    "type": "internal"
                }
            ],
            "description": "Dive into layers of savory goodness with this classic comfort food! Tender pasta sheets are layered with a hearty meat sauce, rich cheese, and aromatic herbs and spices, all baked to perfection until bubbly and golden. It's a dish that's perfect for sharing with family and friends, and guaranteed to satisfy your cravings!",
            "draft_status": "published",
            "facebook_posts": [],
            "id": 4885,
            "inspired_by_url": null,
            "instructions": [
                {
                    "appliance": "oven",
                    "display_text": "Preheat the oven to 375˚F (190˚C).",
                    "end_time": 0,
                    "id": 45050,
                    "position": 1,
                    "start_time": 0,
                    "temperature": 375
                },
                {
                    "appliance": null,
                    "display_text": "In a large bowl, mix together the ricotta, 2 cups (200 G) of mozzarella, 1 cup (110 G) of Parmesan, eggs, parsley and 1 teaspoon salt. Set aside.",
                    "end_time": 0,
                    "id": 45051,
                    "position": 2,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "In a large pan, heat the olive oil over medium heat. Add the onion and sauté for 2-3 minutes, until translucent. Add the ground beef, breaking up with a wooden spoon. Stir in the garlic, Savory spice blend, and remaining 1½ teaspoons salt. Cook for 8 minutes, until the meat is no longer pink. Add 5 cups (1.3 Kilograms) of marinara sauce and stir to combine.",
                    "end_time": 0,
                    "id": 45052,
                    "position": 3,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "To assemble the lasagna, grease a 9 x 13-inch (22 x 33 cm)  baking dish with nonstick spray. Spread the remaining cup of marinara sauce over the bottom of the dish. Lay 4 sheets of lasagna on top of the sauce. Spread 1½ cups (375 G) of the ricotta mixture on top of the noodles. Pour 1½ cups (395 G) of meat sauce on top of the cheese. Repeat with the remaining ingredients, finishing with a layer of meat sauce. Loosely cover the baking dish with foil.",
                    "end_time": 0,
                    "id": 45053,
                    "position": 4,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Bake for 40 minutes.",
                    "end_time": 0,
                    "id": 45054,
                    "position": 5,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Increase the oven temperature to 500ºF (260˚C). Uncover the lasagna and sprinkle the remaining 1½ cups (150 G) mozzarella and ½ cup (55 G) Parmesan over the top.",
                    "end_time": 0,
                    "id": 45055,
                    "position": 6,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Bake the lasagna for 5 minutes more, until the cheese is bubbly and browned.",
                    "end_time": 0,
                    "hacks": [
                        {
                            "end_index": 74,
                            "id": 13,
                            "match": "browned",
                            "start_index": 68
                        }
                    ],
                    "id": 45056,
                    "position": 7,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Enjoy!",
                    "end_time": 0,
                    "id": 45057,
                    "position": 8,
                    "start_time": 0,
                    "temperature": null
                }
            ],
            "is_app_only": false,
            "is_one_top": false,
            "is_shoppable": true,
            "is_subscriber_content": false,
            "keywords": "",
            "language": "eng",
            "name": "Savory Lasagna",
            "num_servings": 12,
            "nutrition": {
                "calories": 394,
                "carbohydrates": 22,
                "fat": 21,
                "fiber": 37,
                "protein": 24,
                "sugar": 7,
                "updated_at": "2024-05-01T08:05:37+02:00"
            },
            "nutrition_visibility": "auto",
            "original_video_url": null,
            "prep_time_minutes": 0,
            "price": {
                "consumption_portion": 150,
                "consumption_total": 1600,
                "portion": 200,
                "total": 2700,
                "updated_at": "2024-10-08T07:16:07+02:00"
            },
            "promotion": "partial",
            "renditions": [],
            "sections": [
                {
                    "components": [
                        {
                            "extra_comment": "",
                            "id": 52651,
                            "ingredient": {
                                "created_at": 1495664520,
                                "display_plural": "whole milk ricotta cheeses",
                                "display_singular": "whole milk ricotta cheese",
                                "id": 696,
                                "name": "whole milk ricotta cheese",
                                "updated_at": 1509035240
                            },
                            "measurements": [
                                {
                                    "id": 739373,
                                    "quantity": "750",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 739372,
                                    "quantity": "3",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 1,
                            "raw_text": "3 cups whole milk ricotta"
                        },
                        {
                            "extra_comment": "divided",
                            "id": 52652,
                            "ingredient": {
                                "created_at": 1516936780,
                                "display_plural": "shredded low-moisture mozzarellas",
                                "display_singular": "shredded low-moisture mozzarella",
                                "id": 3568,
                                "name": "shredded low-moisture mozzarella",
                                "updated_at": 1516936780
                            },
                            "measurements": [
                                {
                                    "id": 739392,
                                    "quantity": "350",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 739391,
                                    "quantity": "3 ½",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 2,
                            "raw_text": "3½ cups shredded low-moisture mozzarella cheese, divided"
                        },
                        {
                            "extra_comment": "divided",
                            "id": 52653,
                            "ingredient": {
                                "created_at": 1497741203,
                                "display_plural": "grated parmesan cheeses",
                                "display_singular": "grated parmesan cheese",
                                "id": 1869,
                                "name": "grated parmesan cheese",
                                "updated_at": 1509035159
                            },
                            "measurements": [
                                {
                                    "id": 739382,
                                    "quantity": "165",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 739381,
                                    "quantity": "1 ½",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 3,
                            "raw_text": "1½ cups grated Parmesan cheese, divided"
                        },
                        {
                            "extra_comment": "",
                            "id": 52654,
                            "ingredient": {
                                "created_at": 1494382414,
                                "display_plural": "large eggs",
                                "display_singular": "large egg",
                                "id": 253,
                                "name": "large egg",
                                "updated_at": 1509035275
                            },
                            "measurements": [
                                {
                                    "id": 739379,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 4,
                            "raw_text": "2 large eggs"
                        },
                        {
                            "extra_comment": "finely chopped, loosely packed",
                            "hacks": [
                                {
                                    "end_index": 19,
                                    "id": 1,
                                    "match": "chopped",
                                    "start_index": 13
                                }
                            ],
                            "id": 52655,
                            "ingredient": {
                                "created_at": 1493906396,
                                "display_plural": "fresh parsleys",
                                "display_singular": "fresh parsley",
                                "id": 154,
                                "name": "fresh parsley",
                                "updated_at": 1509035283
                            },
                            "measurements": [
                                {
                                    "id": 739385,
                                    "quantity": "35",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 739383,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 5,
                            "raw_text": "1 cup finely chopped fresh parsley, loosely packed"
                        },
                        {
                            "extra_comment": "divided",
                            "id": 52656,
                            "ingredient": {
                                "created_at": 1493307153,
                                "display_plural": "kosher salts",
                                "display_singular": "kosher salt",
                                "id": 11,
                                "name": "kosher salt",
                                "updated_at": 1509035289
                            },
                            "measurements": [
                                {
                                    "id": 739376,
                                    "quantity": "2 ½",
                                    "unit": {
                                        "abbreviation": "tsp",
                                        "display_plural": "teaspoons",
                                        "display_singular": "teaspoon",
                                        "name": "teaspoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 6,
                            "raw_text": "2½ teaspoons kosher salt, divided"
                        },
                        {
                            "extra_comment": "",
                            "id": 52657,
                            "ingredient": {
                                "created_at": 1493306183,
                                "display_plural": "olive oils",
                                "display_singular": "olive oil",
                                "id": 4,
                                "name": "olive oil",
                                "updated_at": 1509035290
                            },
                            "measurements": [
                                {
                                    "id": 739375,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "tbsp",
                                        "display_plural": "tablespoons",
                                        "display_singular": "tablespoon",
                                        "name": "tablespoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 7,
                            "raw_text": "2 tablespoons olive oil"
                        },
                        {
                            "extra_comment": "diced",
                            "hacks": [
                                {
                                    "end_index": 27,
                                    "id": 3,
                                    "match": "diced",
                                    "start_index": 23
                                }
                            ],
                            "id": 52658,
                            "ingredient": {
                                "created_at": 1496102165,
                                "display_plural": "medium yellow onions",
                                "display_singular": "medium yellow onion",
                                "id": 942,
                                "name": "medium yellow onion",
                                "updated_at": 1509035220
                            },
                            "measurements": [
                                {
                                    "id": 739384,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 8,
                            "raw_text": "1 medium yellow onion, diced"
                        },
                        {
                            "extra_comment": "",
                            "id": 52659,
                            "ingredient": {
                                "created_at": 1493920746,
                                "display_plural": "ground beefs",
                                "display_singular": "ground beef",
                                "id": 161,
                                "name": "ground beef",
                                "updated_at": 1509035282
                            },
                            "measurements": [
                                {
                                    "id": 739388,
                                    "quantity": "455",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 739386,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "lb",
                                        "display_plural": "lb",
                                        "display_singular": "lb",
                                        "name": "pound",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 9,
                            "raw_text": "1 pound ground beef"
                        },
                        {
                            "extra_comment": "minced",
                            "hacks": [
                                {
                                    "end_index": 22,
                                    "id": 2,
                                    "match": "minced",
                                    "start_index": 17
                                }
                            ],
                            "id": 52660,
                            "ingredient": {
                                "created_at": 1493744766,
                                "display_plural": "garlics",
                                "display_singular": "garlic",
                                "id": 95,
                                "name": "garlic",
                                "updated_at": 1509035285
                            },
                            "measurements": [
                                {
                                    "id": 739387,
                                    "quantity": "4",
                                    "unit": {
                                        "abbreviation": "clove",
                                        "display_plural": "cloves",
                                        "display_singular": "clove",
                                        "name": "clove",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 10,
                            "raw_text": "4 cloves garlic, minced"
                        },
                        {
                            "extra_comment": "",
                            "id": 52661,
                            "ingredient": {
                                "created_at": 1553568771,
                                "display_plural": "McCormick® Savory Spice Blends",
                                "display_singular": "McCormick® Savory Spice Blend",
                                "id": 5237,
                                "name": "McCormick® Savory Spice Blend",
                                "updated_at": 1553568771
                            },
                            "measurements": [
                                {
                                    "id": 739377,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "tbsp",
                                        "display_plural": "tablespoons",
                                        "display_singular": "tablespoon",
                                        "name": "tablespoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 11,
                            "raw_text": "2 tablespoons McCormick® Savory Spice Blend"
                        },
                        {
                            "extra_comment": "divided",
                            "id": 52662,
                            "ingredient": {
                                "created_at": 1494208809,
                                "display_plural": "marinara sauces",
                                "display_singular": "marinara sauce",
                                "id": 201,
                                "name": "marinara sauce",
                                "updated_at": 1509035279
                            },
                            "measurements": [
                                {
                                    "id": 739390,
                                    "quantity": "1.5",
                                    "unit": {
                                        "abbreviation": "kg",
                                        "display_plural": "kg",
                                        "display_singular": "kg",
                                        "name": "kilogram",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 739389,
                                    "quantity": "6",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 12,
                            "raw_text": "6 cups marinara sauce, divided"
                        },
                        {
                            "extra_comment": "for greasing",
                            "id": 52663,
                            "ingredient": {
                                "created_at": 1520176895,
                                "display_plural": "nonstick cooking sprays",
                                "display_singular": "nonstick cooking spray",
                                "id": 3826,
                                "name": "nonstick cooking spray",
                                "updated_at": 1520176895
                            },
                            "measurements": [
                                {
                                    "id": 739374,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 13,
                            "raw_text": "Nonstick cooking spray, for greasing"
                        },
                        {
                            "extra_comment": "cooked according to package instructions",
                            "id": 52664,
                            "ingredient": {
                                "created_at": 1496668286,
                                "display_plural": "lasagna noodles",
                                "display_singular": "lasagna noodle",
                                "id": 1273,
                                "name": "lasagna noodle",
                                "updated_at": 1509035198
                            },
                            "measurements": [
                                {
                                    "id": 739380,
                                    "quantity": "225",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 739378,
                                    "quantity": "½",
                                    "unit": {
                                        "abbreviation": "lb",
                                        "display_plural": "lb",
                                        "display_singular": "lb",
                                        "name": "pound",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 14,
                            "raw_text": "½ pound lasagna noodles, cooked according to package instructions"
                        }
                    ],
                    "name": null,
                    "position": 1
                }
            ],
            "seo_path": "9295813,64486,9299522,9299622",
            "seo_title": "",
            "servings_noun_plural": "servings",
            "servings_noun_singular": "serving",
            "show": {
                "id": 17,
                "name": "Tasty"
            },
            "show_id": 17,
            "slug": "savoury-lasagna",
            "tags": [
                {
                    "display_name": "Italian",
                    "id": 64453,
                    "name": "italian",
                    "parent_tag_name": "european",
                    "root_tag_type": "cuisine",
                    "type": "european"
                },
                {
                    "display_name": "Comfort Food",
                    "id": 64462,
                    "name": "comfort_food",
                    "parent_tag_name": "cooking_style",
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "Easy",
                    "id": 64471,
                    "name": "easy",
                    "parent_tag_name": "difficulty",
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "Dinner",
                    "id": 64486,
                    "name": "dinner",
                    "parent_tag_name": "meal",
                    "root_tag_type": "meal",
                    "type": "meal"
                },
                {
                    "display_name": "Baking",
                    "id": 64492,
                    "name": "baking",
                    "parent_tag_name": "appliance",
                    "root_tag_type": "appliance",
                    "type": "appliance"
                },
                {
                    "display_name": "McCormick Seasoned Pro",
                    "id": 3956651,
                    "name": "mccormick_seasoned_pro",
                    "parent_tag_name": null,
                    "root_tag_type": "business_tags",
                    "type": "business_tags"
                },
                {
                    "display_name": "Schwartz Seasoned Pro",
                    "id": 3956652,
                    "name": "schwartz_seasoned_pro",
                    "parent_tag_name": null,
                    "root_tag_type": "business_tags",
                    "type": "business_tags"
                },
                {
                    "display_name": "Club House Seasoned Pro",
                    "id": 3956653,
                    "name": "club_house_seasoned_pro",
                    "parent_tag_name": null,
                    "root_tag_type": "business_tags",
                    "type": "business_tags"
                },
                {
                    "display_name": "Under 1 Hour",
                    "id": 8091748,
                    "name": "under_1_hour",
                    "parent_tag_name": "difficulty",
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "High-Protein",
                    "id": 8091917,
                    "name": "high_protein",
                    "parent_tag_name": "healthy",
                    "root_tag_type": "healthy",
                    "type": "healthy"
                },
                {
                    "display_name": "Low-Sugar",
                    "id": 8091918,
                    "name": "low_sugar",
                    "parent_tag_name": "healthy",
                    "root_tag_type": "healthy",
                    "type": "healthy"
                },
                {
                    "display_name": "High-Fiber",
                    "id": 8091920,
                    "name": "high_fiber",
                    "parent_tag_name": "healthy",
                    "root_tag_type": "healthy",
                    "type": "healthy"
                },
                {
                    "display_name": "Meal",
                    "id": 9295813,
                    "name": "meal",
                    "parent_tag_name": null,
                    "root_tag_type": "meal",
                    "type": "meal"
                },
                {
                    "display_name": "Beef",
                    "id": 9299515,
                    "name": "beef",
                    "parent_tag_name": "dinner",
                    "root_tag_type": "meal",
                    "type": "dinner"
                },
                {
                    "display_name": "Pasta",
                    "id": 9299522,
                    "name": "pasta",
                    "parent_tag_name": "dinner",
                    "root_tag_type": "meal",
                    "type": "dinner"
                },
                {
                    "display_name": "Lasagna",
                    "id": 9299622,
                    "name": "lasagna",
                    "parent_tag_name": "pasta",
                    "root_tag_type": "meal",
                    "type": "pasta"
                },
                {
                    "display_name": "Eggs",
                    "id": 10623588,
                    "name": "eggs",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                },
                {
                    "display_name": "Gluten",
                    "id": 10623589,
                    "name": "gluten",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                },
                {
                    "display_name": "Dairy",
                    "id": 10623608,
                    "name": "dairy",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                }
            ],
            "thumbnail_alt_text": "",
            "thumbnail_url": "https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/8a0ce26532fa4a47bd082e815ca49ad6.jpeg",
            "tips_and_ratings_enabled": true,
            "topics": [
                {
                    "name": "Easy Dinner",
                    "slug": "easy-dinner"
                },
                {
                    "name": "Tasty Spice Recipes",
                    "slug": "mccormick-seasoned-pro"
                },
                {
                    "name": "Dinner",
                    "slug": "dinner"
                },
                {
                    "name": "Pasta",
                    "slug": "pasta"
                },
                {
                    "name": "Italian",
                    "slug": "italian"
                }
            ],
            "total_time_minutes": 0,
            "total_time_tier": null,
            "updated_at": 1683237600,
            "user_ratings": {
                "count_negative": 9,
                "count_positive": 123,
                "score": 0.9318181818181818
            },
            "video_ad_content": null,
            "video_id": null,
            "video_url": null,
            "yields": "12 Servings"
        },
        {
            "approved_at": 1599763073,
            "aspect_ratio": "1:1",
            "beauty_url": null,
            "brand": null,
            "brand_id": null,
            "buzz_id": 4624246,
            "canonical_id": "recipe:2436",
            "compilations": [
                {
                    "approved_at": 1515785659,
                    "aspect_ratio": null,
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:406",
                    "country": "US",
                    "created_at": 1515525485,
                    "description": "The Keto diet is a popular low-carb, high-fat plan that can allow your body to burn fat for energy. Navigating a new diet and all its rules is always tricky, but we’re here to help! From a super filling and satisfying <a href=\"https://tasty.co/recipe/paleo-beef-and-veggie-stir-fry\">beef and veggie stir-fry</a> to quick and easy <a href=\"https://tasty.co/recipe/baked-avocado-eggs\">baked avocado eggs</a>, these Ketogenic diet recipes will show you how to satisfy your cravings in a completely Keto-friendly way.",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 406,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "6 Keto-Friendly Meals",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 34,
                            "name": "Goodful"
                        }
                    ],
                    "slug": "6-keto-friendly-meals",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://s3.amazonaws.com/video-api-prod/assets/f37be98862124adcbd951f57d8b777de/KetoFB.jpg",
                    "video_id": 43190,
                    "video_url": "https://vid.tasty.co/output/71862/hls24_1515525175.m3u8"
                },
                {
                    "approved_at": 1518679068,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": 4750736,
                    "canonical_id": "compilation:465",
                    "country": "US",
                    "created_at": 1518631105,
                    "description": null,
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 465,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "5 Easy 2-Ingredient Recipes",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "5-easy-2-ingredient-recipes",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/137136.jpg",
                    "video_id": 47717,
                    "video_url": "https://vid.tasty.co/output/78854/hls24_1518627461.m3u8"
                },
                {
                    "approved_at": 1563332585,
                    "aspect_ratio": "16:9",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:1023",
                    "country": "US",
                    "created_at": 1563182777,
                    "description": null,
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 1023,
                    "is_shoppable": true,
                    "keywords": null,
                    "language": "eng",
                    "name": "Keto-Friendly Weekday Dinner Recipes",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "keto-friendly-weekday-dinner-recipes",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/225378.jpg",
                    "video_id": 87494,
                    "video_url": "https://vid.tasty.co/output/138972/hls24_1563182870.m3u8"
                },
                {
                    "approved_at": 1591131115,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:1456",
                    "country": "US",
                    "created_at": 1585660817,
                    "description": null,
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 1456,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Easy No-Bake Snacks",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "easy-no-bake-snacks",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/260482.jpg",
                    "video_id": 102865,
                    "video_url": "https://vid.tasty.co/output/163863/hls24_1585661134.m3u8"
                },
                {
                    "approved_at": 1601559170,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:1732",
                    "country": "US",
                    "created_at": 1601459761,
                    "description": "Feeling lazy? Need recipes you can quickly make? These are the perfect dishes for you! Open up our treasure-trove of recipes and never be sleep hungry again. From versatile freezer foods to two-ingredient recipes, these ideas will delight everyone's taste buds and keep you craving even more.",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 1732,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Food To Eat When You're Feeling Lazy",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "food-to-eat-when-you-re-feeling-lazy",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/285275.jpg",
                    "video_id": 114203,
                    "video_url": "https://vid.tasty.co/output/180320/hls24_1601466337.m3u8"
                },
                {
                    "approved_at": 1615814518,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:2193",
                    "country": "US",
                    "created_at": 1614363222,
                    "description": "Have some chicken in the fridge and looking for something light to whip up for dinner? The <a href=\"https://tasty.co/recipe/one-pan-lemon-pepper-chicken\">One-Pan Lemon Pepper Chicken</a> is perfect for you. Or if you're feeling like making something more filling, go for the homemade <a href=\"https://tasty.co/recipe/homemade-chicken-tikka-masala\">Chicken Tikka Masala</a>. Use the spaghetti in your pantry for a light <a href=\"https://tasty.co/recipe/2-ingredient-pasta\">2-Ingredient Pasta</a> or indulge in a <a href=\"https://tasty.co/recipe/cheesy-chicken-alfredo-pasta-bake\">Cheesy Chicken Alfredo Pasta Bake</a>.",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 2193,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Indulgent Vs Light Dinner Recipes",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "indulgent-vs-light-dinner-recipes",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://s3.amazonaws.com/video-api-prod/assets/8ebbc1961b844cbeac4ecfb841967997/imagebuilder_1614362767606.jpg",
                    "video_id": 125210,
                    "video_url": "https://vid.tasty.co/output/219932/hls24_1634930480.m3u8"
                },
                {
                    "approved_at": 1617975763,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:2257",
                    "country": "US",
                    "created_at": 1617096493,
                    "description": "Adulting is hard, and budgeting is one of the hardest: doesn't the world know you have to eat? Well, we do, so we're bringing you these easy recipes under $5 and, well, they're unbelievably delicious. From a sweet <a href=\"https://tasty.co/recipe/2-ingredient-chocolate-souffle\">chocolate souffle</a> to the super easy-to-make, nutrient-packed <a href=\"https://tasty.co/recipe/honey-roasted-carrots\">honey-roasted carrots</a>, there's something for every palate. So go ahead, take your pick and relish in your food without breaking the bank!",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 2257,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Easy Recipes Under $5",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "easy-recipes-under-5",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/314834.jpg",
                    "video_id": 127759,
                    "video_url": "https://vid.tasty.co/output/198025/hls24_1617097467.m3u8"
                },
                {
                    "approved_at": 1620048895,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:2348",
                    "country": "US",
                    "created_at": 1619646737,
                    "description": "Are you famished but too tired to cook? Well, look no further: these super easy recipes will keep all of your hunger pangs at bay. From a delicious <a href=\"https://tasty.co/recipe/2-ingredient-chocolate-cake\">two-ingredient chocolate cake</a> to a <a href=\"https://tasty.co/recipe/3-ingredient-teriyaki-chicken\">three-ingredient teriyaki chicken</a> you can whip up these mouthwatering (and fool-proof!) recipes in no time. ",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 2348,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "No-Fuss Recipes For Those Lazy Days",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "no-fuss-recipes-for-those-lazy-days",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/319703.jpg",
                    "video_id": 130346,
                    "video_url": "https://vid.tasty.co/output/201478/hls24_1619654417.m3u8"
                },
                {
                    "approved_at": 1631553693,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:2791",
                    "country": "US",
                    "created_at": 1630397151,
                    "description": null,
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 2791,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Cheap Vs Expensive 3-Course Meal",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "cheap-vs-expensive-3-course-meal",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/339958.jpg",
                    "video_id": 140314,
                    "video_url": "https://vid.tasty.co/output/214528/hls24_1630397304.m3u8"
                },
                {
                    "approved_at": 1633453120,
                    "aspect_ratio": null,
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:2846",
                    "country": "US",
                    "created_at": 1632473076,
                    "description": "Whether you are cooking on a budget, haven't had time to grocery shop, or you're just looking for something quick and easy, these two-ingredient recipes never fail. A <a href=\"https://tasty.co/recipe/2-ingredient-pasta\">low-carb pasta</a> makes for a great dinner, and no one will believe how easy it is to whip up our <a href=\"https://tasty.co/recipe/2-ingredient-pumpkin-bread\">two-ingredient pumpkin bread</a>. You might want to throw out those fancy French cookbooks after trying this <a href=\"https://tasty.co/recipe/2-ingredient-chocolate-souffle\">simple chocolate souffle</a>. Yes, you're reading this correctly. Two ingredients is all you need!",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 2846,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "2 Ingredient Easy Meals",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "2-ingredient-easy-meals",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/344076.jpg",
                    "video_id": 142189,
                    "video_url": "https://vid.tasty.co/output/217111/hls24_1632473478.m3u8"
                }
            ],
            "cook_time_minutes": 245,
            "country": "ZZ",
            "created_at": 1504294336,
            "credits": [
                {
                    "name": "Alix Traeger",
                    "type": "internal"
                }
            ],
            "description": "This 2-ingredient pasta is a quick and easy dinner option, with pasta and your favorite jarred sauce.",
            "draft_status": "published",
            "facebook_posts": [],
            "id": 2436,
            "inspired_by_url": "http://www.uplateanyway.com/keto/fettuccine-low-carb-pasta/",
            "instructions": [
                {
                    "appliance": null,
                    "display_text": "Add the mozzarella to a bowl and microwave for 1-2 minutes, until melted.",
                    "end_time": 2140,
                    "id": 20352,
                    "position": 1,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Allow the mozzarella to cool for 30 seconds.",
                    "end_time": 0,
                    "id": 20353,
                    "position": 2,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "With a spatula, gently fold the egg yolk into the cheese.",
                    "end_time": 7210,
                    "id": 20354,
                    "position": 3,
                    "start_time": 2690,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Turn the mixture out onto a parchment paper-lined baking sheet.",
                    "end_time": 9200,
                    "id": 20355,
                    "position": 4,
                    "start_time": 7910,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Place another piece of parchment paper on top of the dough and press down with your hand until thin.",
                    "end_time": 12299,
                    "id": 20356,
                    "position": 5,
                    "start_time": 9410,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Remove the top piece of parchment and cut the dough into thin strips.",
                    "end_time": 19930,
                    "id": 20357,
                    "position": 6,
                    "start_time": 12520,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Place the “pasta” on a rack and refrigerate for four hours or overnight.",
                    "end_time": 0,
                    "id": 20358,
                    "position": 7,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": "food_thermometer",
                    "display_text": "Place the “pasta” in boiling water for one minute.",
                    "end_time": 23950,
                    "hacks": [
                        {
                            "end_index": 27,
                            "id": 18,
                            "match": "boiling",
                            "start_index": 21
                        }
                    ],
                    "id": 20359,
                    "position": 8,
                    "start_time": 21920,
                    "temperature": 215
                },
                {
                    "appliance": null,
                    "display_text": "Drain into a colander and run cool water over the pasta to prevent sticking.",
                    "end_time": 0,
                    "id": 20360,
                    "position": 9,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Serve with your favorite sauce and toppings.",
                    "end_time": 30729,
                    "id": 20361,
                    "position": 10,
                    "start_time": 24770,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Enjoy!",
                    "end_time": 34240,
                    "id": 20362,
                    "position": 11,
                    "start_time": 31400,
                    "temperature": null
                }
            ],
            "is_app_only": false,
            "is_one_top": false,
            "is_shoppable": true,
            "is_subscriber_content": false,
            "keywords": "2-ingredient, buzzfeed, cheese, dinner, healthy, low-carb, pasta, tasty, tasty_vegetarian, vegetarian",
            "language": "und",
            "name": "2-ingredient Pasta",
            "num_servings": 1,
            "nutrition": {
                "calories": 808,
                "carbohydrates": 8,
                "fat": 62,
                "fiber": 0,
                "protein": 55,
                "sugar": 0,
                "updated_at": "2024-09-03T03:10:44+02:00"
            },
            "nutrition_visibility": "auto",
            "original_video_url": "https://s3.amazonaws.com/video-api-prod/assets/c3bb47cc8b8947e1b558ff2d2213e23b/fb_2.mp4",
            "prep_time_minutes": 15,
            "price": {
                "consumption_portion": 350,
                "consumption_total": 350,
                "portion": 600,
                "total": 600,
                "updated_at": "2024-10-08T07:08:33+02:00"
            },
            "promotion": "partial",
            "renditions": [
                {
                    "aspect": "square",
                    "bit_rate": 6789,
                    "container": "mp4",
                    "content_type": "video/mp4",
                    "duration": 49434,
                    "file_size": 41944915,
                    "height": 720,
                    "maximum_bit_rate": null,
                    "minimum_bit_rate": null,
                    "name": "mp4_720x720",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/51134/mp4_1280X720/1504636473_00001.png",
                    "url": "https://vid.tasty.co/output/51134/mp4_1280X720/1504636473",
                    "width": 720
                },
                {
                    "aspect": "square",
                    "bit_rate": null,
                    "container": "mp4",
                    "content_type": "application/vnd.apple.mpegurl",
                    "duration": 49408,
                    "file_size": null,
                    "height": 1080,
                    "maximum_bit_rate": 7692,
                    "minimum_bit_rate": 273,
                    "name": "low",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/51134/1445289064805-h2exzu/1504636473_00001.png",
                    "url": "https://vid.tasty.co/output/51134/low_1504636473.m3u8",
                    "width": 1080
                },
                {
                    "aspect": "square",
                    "bit_rate": 6690,
                    "container": "mp4",
                    "content_type": "video/mp4",
                    "duration": 49434,
                    "file_size": 41336152,
                    "height": 640,
                    "maximum_bit_rate": null,
                    "minimum_bit_rate": null,
                    "name": "mp4_640x640",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/51134/mp4_640x640/1504636473_00001.png",
                    "url": "https://vid.tasty.co/output/51134/mp4_640x640/1504636473",
                    "width": 640
                },
                {
                    "aspect": "square",
                    "bit_rate": 6768,
                    "container": "mp4",
                    "content_type": "video/mp4",
                    "duration": 49434,
                    "file_size": 41817860,
                    "height": 720,
                    "maximum_bit_rate": null,
                    "minimum_bit_rate": null,
                    "name": "mp4_720x720",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/51134/mp4_720x1280/1504636473_00001.png",
                    "url": "https://vid.tasty.co/output/51134/mp4_720x1280/1504636473",
                    "width": 720
                }
            ],
            "sections": [
                {
                    "components": [
                        {
                            "extra_comment": "",
                            "id": 23884,
                            "ingredient": {
                                "created_at": 1493925751,
                                "display_plural": "shredded mozzarella cheeses",
                                "display_singular": "shredded mozzarella cheese",
                                "id": 169,
                                "name": "shredded mozzarella cheese",
                                "updated_at": 1509035282
                            },
                            "measurements": [
                                {
                                    "id": 591088,
                                    "quantity": "100",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                },
                                {
                                    "id": 591087,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 1,
                            "raw_text": "1 cup shredded mozzarella cheese"
                        },
                        {
                            "extra_comment": "",
                            "id": 23885,
                            "ingredient": {
                                "created_at": 1493743327,
                                "display_plural": "egg yolks",
                                "display_singular": "egg yolk",
                                "id": 67,
                                "name": "egg yolk",
                                "updated_at": 1509035286
                            },
                            "measurements": [
                                {
                                    "id": 591089,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 2,
                            "raw_text": "1 egg yolk"
                        }
                    ],
                    "name": null,
                    "position": 1
                }
            ],
            "seo_path": "8757513,9295874,64453",
            "seo_title": null,
            "servings_noun_plural": "servings",
            "servings_noun_singular": "serving",
            "show": {
                "id": 17,
                "name": "Tasty"
            },
            "show_id": 17,
            "slug": "2-ingredient-pasta",
            "tags": [
                {
                    "display_name": "Italian",
                    "id": 64453,
                    "name": "italian",
                    "parent_tag_name": "european",
                    "root_tag_type": "cuisine",
                    "type": "european"
                },
                {
                    "display_name": "Comfort Food",
                    "id": 64462,
                    "name": "comfort_food",
                    "parent_tag_name": "cooking_style",
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "Gluten-Free",
                    "id": 64465,
                    "name": "gluten_free",
                    "parent_tag_name": "dietary",
                    "root_tag_type": "dietary",
                    "type": "dietary"
                },
                {
                    "display_name": "Healthy",
                    "id": 64466,
                    "name": "healthy",
                    "parent_tag_name": null,
                    "root_tag_type": "healthy",
                    "type": "healthy"
                },
                {
                    "display_name": "Low-Carb",
                    "id": 64467,
                    "name": "low_carb",
                    "parent_tag_name": "healthy",
                    "root_tag_type": "healthy",
                    "type": "healthy"
                },
                {
                    "display_name": "Vegetarian",
                    "id": 64469,
                    "name": "vegetarian",
                    "parent_tag_name": "dietary",
                    "root_tag_type": "dietary",
                    "type": "dietary"
                },
                {
                    "display_name": "5 Ingredients or Less",
                    "id": 64470,
                    "name": "5_ingredients_or_less",
                    "parent_tag_name": "difficulty",
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "Easy",
                    "id": 64471,
                    "name": "easy",
                    "parent_tag_name": "difficulty",
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "Dinner",
                    "id": 64486,
                    "name": "dinner",
                    "parent_tag_name": "meal",
                    "root_tag_type": "meal",
                    "type": "meal"
                },
                {
                    "display_name": "Kid-Friendly",
                    "id": 64488,
                    "name": "kid_friendly",
                    "parent_tag_name": "cooking_style",
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "Baking",
                    "id": 64492,
                    "name": "baking",
                    "parent_tag_name": "appliance",
                    "root_tag_type": "appliance",
                    "type": "appliance"
                },
                {
                    "display_name": "Weeknight",
                    "id": 64505,
                    "name": "weeknight",
                    "parent_tag_name": "dinner",
                    "root_tag_type": "meal",
                    "type": "dinner"
                },
                {
                    "display_name": "Microwave",
                    "id": 65845,
                    "name": "microwave",
                    "parent_tag_name": "appliance",
                    "root_tag_type": "appliance",
                    "type": "appliance"
                },
                {
                    "display_name": "Stove Top",
                    "id": 65848,
                    "name": "stove_top",
                    "parent_tag_name": null,
                    "root_tag_type": "appliance",
                    "type": "appliance"
                },
                {
                    "display_name": "Parchment Paper",
                    "id": 1247780,
                    "name": "parchment_paper",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Pyrex",
                    "id": 1247785,
                    "name": "pyrex",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Spatula",
                    "id": 1247788,
                    "name": "spatula",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Baking Pan",
                    "id": 1280500,
                    "name": "baking_pan",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Dry Measuring Cups",
                    "id": 1280507,
                    "name": "dry_measuring_cups",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Mixing Bowl",
                    "id": 1280510,
                    "name": "mixing_bowl",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "McCormick Easy Dinner",
                    "id": 5143247,
                    "name": "mccormick_easy_dinner",
                    "parent_tag_name": null,
                    "root_tag_type": "business_tags",
                    "type": "business_tags"
                },
                {
                    "display_name": "Keto",
                    "id": 8091756,
                    "name": "keto",
                    "parent_tag_name": "dietary",
                    "root_tag_type": "dietary",
                    "type": "dietary"
                },
                {
                    "display_name": "High-Protein",
                    "id": 8091917,
                    "name": "high_protein",
                    "parent_tag_name": "healthy",
                    "root_tag_type": "healthy",
                    "type": "healthy"
                },
                {
                    "display_name": "Low-Sugar",
                    "id": 8091918,
                    "name": "low_sugar",
                    "parent_tag_name": "healthy",
                    "root_tag_type": "healthy",
                    "type": "healthy"
                },
                {
                    "display_name": "Pasta",
                    "id": 9299522,
                    "name": "pasta",
                    "parent_tag_name": "dinner",
                    "root_tag_type": "meal",
                    "type": "dinner"
                },
                {
                    "display_name": "Eggs",
                    "id": 10623588,
                    "name": "eggs",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                },
                {
                    "display_name": "Dairy",
                    "id": 10623608,
                    "name": "dairy",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                }
            ],
            "thumbnail_alt_text": "",
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/97761.jpg",
            "tips_and_ratings_enabled": true,
            "topics": [
                {
                    "name": "5 Ingredients or Less",
                    "slug": "5-ingredients-or-less"
                },
                {
                    "name": "Best Vegetarian",
                    "slug": "best-vegetarian"
                },
                {
                    "name": "Easy Dinner",
                    "slug": "easy-dinner"
                },
                {
                    "name": "Healthy Eating",
                    "slug": "healthy"
                },
                {
                    "name": "Keto",
                    "slug": "keto"
                },
                {
                    "name": "Kid Friendly",
                    "slug": "kid-friendly"
                },
                {
                    "name": "Low Carb Meals",
                    "slug": "low-carb-meals"
                },
                {
                    "name": "Dinner",
                    "slug": "dinner"
                },
                {
                    "name": "Pasta",
                    "slug": "pasta"
                },
                {
                    "name": "Italian",
                    "slug": "italian"
                }
            ],
            "total_time_minutes": 260,
            "total_time_tier": null,
            "updated_at": 1683237600,
            "user_ratings": {
                "count_negative": 298,
                "count_positive": 451,
                "score": 0.6021361815754339
            },
            "video_ad_content": "none",
            "video_id": 29446,
            "video_url": "https://vid.tasty.co/output/51134/low_1504636473.m3u8",
            "yields": "Servings: 1"
        },
        {
            "approved_at": 1563369473,
            "aspect_ratio": null,
            "beauty_url": null,
            "brand": null,
            "brand_id": null,
            "buzz_id": null,
            "canonical_id": "recipe:4870",
            "compilations": [],
            "cook_time_minutes": 0,
            "country": "US",
            "created_at": 1553545758,
            "credits": [
                {
                    "name": null,
                    "type": "internal"
                }
            ],
            "description": "Say hello to a taste of the bayou with this creamy Cajun pasta! Savory sausage and a bevy of vegetables get a spicy kick with a Cajun-inspired seasoning blend, all tossed in a luscious creamy sauce. Best of all, it all comes together in just one pot for easy prep and clean-up!",
            "draft_status": "published",
            "facebook_posts": [],
            "id": 4870,
            "inspired_by_url": null,
            "instructions": [
                {
                    "appliance": null,
                    "display_text": "In a large, heavy-bottomed pot, melt the butter over medium heat until just bubbling. Add the sausage, then season with salt. Brown for 2 minutes on one side, then stir and brown on the other side for 2 minutes more.",
                    "end_time": 0,
                    "id": 44910,
                    "position": 1,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Add the onion, season with salt, and cook for 2 minutes, until starting to soften. Add the jalapeño, garlic, and tomato paste. Stir to distribute the tomato paste. Add the Jazzy spice blend and stir to combine.",
                    "end_time": 0,
                    "id": 44911,
                    "position": 2,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Add the pasta, red and green peppers, mushrooms, and salt and stir to combine. Pour in the tomatoes and stock. Bring to a gentle boil, then reduce the heat to low, cover, and simmer for 10-12 minutes, until the pasta is cooked through and the peppers are tender but not mushy.",
                    "end_time": 0,
                    "hacks": [
                        {
                            "end_index": 180,
                            "id": 17,
                            "match": "simmer",
                            "start_index": 175
                        },
                        {
                            "end_index": 132,
                            "id": 18,
                            "match": "boil",
                            "start_index": 129
                        },
                        {
                            "end_index": 233,
                            "id": 21,
                            "match": "cooked through",
                            "start_index": 220
                        }
                    ],
                    "id": 44912,
                    "position": 3,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Mix in the cream cheese to create a thick, creamy sauce.",
                    "end_time": 0,
                    "id": 44913,
                    "position": 4,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Serve garnished with scallions, if desired.",
                    "end_time": 0,
                    "id": 44914,
                    "position": 5,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Enjoy!",
                    "end_time": 0,
                    "id": 44915,
                    "position": 6,
                    "start_time": 0,
                    "temperature": null
                }
            ],
            "is_app_only": false,
            "is_one_top": false,
            "is_shoppable": true,
            "is_subscriber_content": false,
            "keywords": "",
            "language": "eng",
            "name": "Creamy Cajun Pasta",
            "num_servings": 8,
            "nutrition": {
                "calories": 395,
                "carbohydrates": 31,
                "fat": 24,
                "fiber": 3,
                "protein": 18,
                "sugar": 6,
                "updated_at": "2024-09-03T03:10:44+02:00"
            },
            "nutrition_visibility": "auto",
            "original_video_url": null,
            "prep_time_minutes": 0,
            "price": {
                "consumption_portion": 200,
                "consumption_total": 1700,
                "portion": 300,
                "total": 2250,
                "updated_at": "2024-10-08T07:16:04+02:00"
            },
            "promotion": "partial",
            "renditions": [],
            "sections": [
                {
                    "components": [
                        {
                            "extra_comment": "",
                            "id": 52403,
                            "ingredient": {
                                "created_at": 1494806355,
                                "display_plural": "unsalted butters",
                                "display_singular": "unsalted butter",
                                "id": 291,
                                "name": "unsalted butter",
                                "updated_at": 1509035272
                            },
                            "measurements": [
                                {
                                    "id": 789916,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "tbsp",
                                        "display_plural": "tablespoons",
                                        "display_singular": "tablespoon",
                                        "name": "tablespoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 1,
                            "raw_text": "2 tablespoons unsalted butter"
                        },
                        {
                            "extra_comment": "cut into rounds",
                            "id": 52404,
                            "ingredient": {
                                "created_at": 1542860257,
                                "display_plural": "spicy italian sausages",
                                "display_singular": "spicy italian sausage",
                                "id": 4937,
                                "name": "spicy italian sausage",
                                "updated_at": 1542860257
                            },
                            "measurements": [
                                {
                                    "id": 789922,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "lb",
                                        "display_plural": "lb",
                                        "display_singular": "lb",
                                        "name": "pound",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 789920,
                                    "quantity": "455",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 2,
                            "raw_text": "1 pound spicy Italian sausage links, cut into rounds"
                        },
                        {
                            "extra_comment": "to taste",
                            "id": 52405,
                            "ingredient": {
                                "created_at": 1493307153,
                                "display_plural": "kosher salts",
                                "display_singular": "kosher salt",
                                "id": 11,
                                "name": "kosher salt",
                                "updated_at": 1509035289
                            },
                            "measurements": [
                                {
                                    "id": 789930,
                                    "quantity": "0",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 3,
                            "raw_text": "Kosher salt, to taste"
                        },
                        {
                            "extra_comment": "thinly sliced",
                            "hacks": [
                                {
                                    "end_index": 35,
                                    "id": 6,
                                    "match": "sliced",
                                    "start_index": 30
                                }
                            ],
                            "id": 52406,
                            "ingredient": {
                                "created_at": 1496102165,
                                "display_plural": "medium yellow onions",
                                "display_singular": "medium yellow onion",
                                "id": 942,
                                "name": "medium yellow onion",
                                "updated_at": 1509035220
                            },
                            "measurements": [
                                {
                                    "id": 789919,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 4,
                            "raw_text": "1 medium yellow onion, thinly sliced"
                        },
                        {
                            "extra_comment": "seeded and minced",
                            "hacks": [
                                {
                                    "end_index": 28,
                                    "id": 2,
                                    "match": "minced",
                                    "start_index": 23
                                }
                            ],
                            "id": 52407,
                            "ingredient": {
                                "created_at": 1493314613,
                                "display_plural": "jalapeñoes",
                                "display_singular": "jalapeño",
                                "id": 18,
                                "name": "jalapeño",
                                "updated_at": 1509035288
                            },
                            "measurements": [
                                {
                                    "id": 789933,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 5,
                            "raw_text": "1 jalapeño, seeded and minced"
                        },
                        {
                            "extra_comment": "",
                            "hacks": [
                                {
                                    "end_index": 18,
                                    "id": 2,
                                    "match": "minced",
                                    "start_index": 13
                                }
                            ],
                            "id": 52408,
                            "ingredient": {
                                "created_at": 1494981530,
                                "display_plural": "minced garlics",
                                "display_singular": "minced garlic",
                                "id": 390,
                                "name": "minced garlic",
                                "updated_at": 1509035264
                            },
                            "measurements": [
                                {
                                    "id": 789932,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "tbsp",
                                        "display_plural": "tablespoons",
                                        "display_singular": "tablespoon",
                                        "name": "tablespoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 6,
                            "raw_text": "1 tablespoon minced garlic"
                        },
                        {
                            "extra_comment": "",
                            "id": 52409,
                            "ingredient": {
                                "created_at": 1495078295,
                                "display_plural": "tomato pastes",
                                "display_singular": "tomato paste",
                                "id": 456,
                                "name": "tomato paste",
                                "updated_at": 1509035259
                            },
                            "measurements": [
                                {
                                    "id": 789938,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "tbsp",
                                        "display_plural": "tablespoons",
                                        "display_singular": "tablespoon",
                                        "name": "tablespoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 7,
                            "raw_text": "1 tablespoon tomato paste"
                        },
                        {
                            "extra_comment": "",
                            "id": 52410,
                            "ingredient": {
                                "created_at": 1553569421,
                                "display_plural": "McCormick® Jazzy Spice Blends",
                                "display_singular": "McCormick® Jazzy Spice Blend",
                                "id": 5240,
                                "name": "McCormick® Jazzy Spice Blend",
                                "updated_at": 1553569421
                            },
                            "measurements": [
                                {
                                    "id": 789937,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "tbsp",
                                        "display_plural": "tablespoons",
                                        "display_singular": "tablespoon",
                                        "name": "tablespoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 8,
                            "raw_text": "2 tablespoons McCormick® Jazzy Spice Blend"
                        },
                        {
                            "extra_comment": "",
                            "id": 52411,
                            "ingredient": {
                                "created_at": 1613581518,
                                "display_plural": "dried penne pastas",
                                "display_singular": "dried penne pasta",
                                "id": 7975,
                                "name": "dried penne pasta",
                                "updated_at": 1613581518
                            },
                            "measurements": [
                                {
                                    "id": 789918,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "lb",
                                        "display_plural": "lb",
                                        "display_singular": "lb",
                                        "name": "pound",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 789917,
                                    "quantity": "455",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 9,
                            "raw_text": "1 pound dried penne pasta"
                        },
                        {
                            "extra_comment": "seeded and thinly sliced",
                            "hacks": [
                                {
                                    "end_index": 42,
                                    "id": 6,
                                    "match": "sliced",
                                    "start_index": 37
                                }
                            ],
                            "id": 52412,
                            "ingredient": {
                                "created_at": 1494292131,
                                "display_plural": "red bell peppers",
                                "display_singular": "red bell pepper",
                                "id": 227,
                                "name": "red bell pepper",
                                "updated_at": 1509035277
                            },
                            "measurements": [
                                {
                                    "id": 789931,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 10,
                            "raw_text": "1 red bell pepper, seeded and thinly sliced"
                        },
                        {
                            "extra_comment": "seeded and thinly sliced",
                            "hacks": [
                                {
                                    "end_index": 44,
                                    "id": 6,
                                    "match": "sliced",
                                    "start_index": 39
                                }
                            ],
                            "id": 52413,
                            "ingredient": {
                                "created_at": 1494292187,
                                "display_plural": "green bell peppers",
                                "display_singular": "green bell pepper",
                                "id": 228,
                                "name": "green bell pepper",
                                "updated_at": 1509035277
                            },
                            "measurements": [
                                {
                                    "id": 789926,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 11,
                            "raw_text": "1 green bell pepper, seeded and thinly sliced"
                        },
                        {
                            "extra_comment": "stemmed and sliced",
                            "hacks": [
                                {
                                    "end_index": 44,
                                    "id": 6,
                                    "match": "sliced",
                                    "start_index": 39
                                }
                            ],
                            "id": 52414,
                            "ingredient": {
                                "created_at": 1681929868,
                                "display_plural": "button mushrooms",
                                "display_singular": "button mushroom",
                                "id": 11172,
                                "name": "button mushrooms",
                                "updated_at": 1681929868
                            },
                            "measurements": [
                                {
                                    "id": 789927,
                                    "quantity": "8",
                                    "unit": {
                                        "abbreviation": "oz",
                                        "display_plural": "oz",
                                        "display_singular": "oz",
                                        "name": "ounce",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 789925,
                                    "quantity": "225",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 12,
                            "raw_text": "8 ounces button mushrooms, stemmed and sliced"
                        },
                        {
                            "extra_comment": "",
                            "hacks": [
                                {
                                    "end_index": 31,
                                    "id": 14,
                                    "match": "roasted",
                                    "start_index": 25
                                }
                            ],
                            "id": 52415,
                            "ingredient": {
                                "created_at": 1496871618,
                                "display_plural": "fire-roasted tomatoes",
                                "display_singular": "fire-roasted tomato",
                                "id": 1590,
                                "name": "fire-roasted tomato",
                                "updated_at": 1509035178
                            },
                            "measurements": [
                                {
                                    "id": 789936,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "can",
                                        "display_plural": "cans",
                                        "display_singular": "can",
                                        "name": "can",
                                        "system": "none"
                                    }
                                },
                                {
                                    "id": 789935,
                                    "quantity": "14 ½",
                                    "unit": {
                                        "abbreviation": "oz",
                                        "display_plural": "oz",
                                        "display_singular": "oz",
                                        "name": "ounce",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 789934,
                                    "quantity": "410",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 13,
                            "raw_text": "1 14.5-ounce can of fire-roasted tomatoes"
                        },
                        {
                            "extra_comment": "",
                            "id": 52416,
                            "ingredient": {
                                "created_at": 1494124570,
                                "display_plural": "chicken stocks",
                                "display_singular": "chicken stock",
                                "id": 196,
                                "name": "chicken stock",
                                "updated_at": 1509035280
                            },
                            "measurements": [
                                {
                                    "id": 789924,
                                    "quantity": "4",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 789923,
                                    "quantity": "960",
                                    "unit": {
                                        "abbreviation": "mL",
                                        "display_plural": "mL",
                                        "display_singular": "mL",
                                        "name": "milliliter",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 14,
                            "raw_text": "4 cups chicken stock"
                        },
                        {
                            "extra_comment": "cubed",
                            "hacks": [
                                {
                                    "end_index": 27,
                                    "id": 5,
                                    "match": "cubed",
                                    "start_index": 23
                                }
                            ],
                            "id": 52417,
                            "ingredient": {
                                "created_at": 1494297000,
                                "display_plural": "cream cheeses",
                                "display_singular": "cream cheese",
                                "id": 242,
                                "name": "cream cheese",
                                "updated_at": 1509035276
                            },
                            "measurements": [
                                {
                                    "id": 789929,
                                    "quantity": "5",
                                    "unit": {
                                        "abbreviation": "oz",
                                        "display_plural": "oz",
                                        "display_singular": "oz",
                                        "name": "ounce",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 789928,
                                    "quantity": "140",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 15,
                            "raw_text": "5 ounces cream cheese, cubed"
                        },
                        {
                            "extra_comment": "thinly sliced, for garnish",
                            "hacks": [
                                {
                                    "end_index": 25,
                                    "id": 6,
                                    "match": "sliced",
                                    "start_index": 20
                                }
                            ],
                            "id": 52418,
                            "ingredient": {
                                "created_at": 1494803890,
                                "display_plural": "scallions",
                                "display_singular": "scallion",
                                "id": 276,
                                "name": "scallions",
                                "updated_at": 1509035273
                            },
                            "measurements": [
                                {
                                    "id": 789921,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 16,
                            "raw_text": "2 scallions, thinly sliced, for garnish"
                        }
                    ],
                    "name": null,
                    "position": 1
                }
            ],
            "seo_path": "9295813,64486,9299522",
            "seo_title": "",
            "servings_noun_plural": "servings",
            "servings_noun_singular": "serving",
            "show": {
                "id": 17,
                "name": "Tasty"
            },
            "show_id": 17,
            "slug": "creamy-cajun-pasta",
            "tags": [
                {
                    "display_name": "North American",
                    "id": 64444,
                    "name": "north_american",
                    "parent_tag_name": "cuisine",
                    "root_tag_type": "cuisine",
                    "type": "cuisine"
                },
                {
                    "display_name": "Italian",
                    "id": 64453,
                    "name": "italian",
                    "parent_tag_name": "european",
                    "root_tag_type": "cuisine",
                    "type": "european"
                },
                {
                    "display_name": "Comfort Food",
                    "id": 64462,
                    "name": "comfort_food",
                    "parent_tag_name": "cooking_style",
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "Easy",
                    "id": 64471,
                    "name": "easy",
                    "parent_tag_name": "difficulty",
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "Under 30 Minutes",
                    "id": 64472,
                    "name": "under_30_minutes",
                    "parent_tag_name": "difficulty",
                    "root_tag_type": "difficulty",
                    "type": "difficulty"
                },
                {
                    "display_name": "Dinner",
                    "id": 64486,
                    "name": "dinner",
                    "parent_tag_name": "meal",
                    "root_tag_type": "meal",
                    "type": "meal"
                },
                {
                    "display_name": "Weeknight",
                    "id": 64505,
                    "name": "weeknight",
                    "parent_tag_name": "dinner",
                    "root_tag_type": "meal",
                    "type": "dinner"
                },
                {
                    "display_name": "Big Batch",
                    "id": 65851,
                    "name": "big_batch",
                    "parent_tag_name": "cooking_style",
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "Meal Prep",
                    "id": 65853,
                    "name": "meal_prep",
                    "parent_tag_name": "cooking_style",
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "One-Pot or Pan",
                    "id": 65855,
                    "name": "one_pot_or_pan",
                    "parent_tag_name": "cooking_style",
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "McCormick Seasoned Pro",
                    "id": 3956651,
                    "name": "mccormick_seasoned_pro",
                    "parent_tag_name": null,
                    "root_tag_type": "business_tags",
                    "type": "business_tags"
                },
                {
                    "display_name": "Schwartz Seasoned Pro",
                    "id": 3956652,
                    "name": "schwartz_seasoned_pro",
                    "parent_tag_name": null,
                    "root_tag_type": "business_tags",
                    "type": "business_tags"
                },
                {
                    "display_name": "Club House Seasoned Pro",
                    "id": 3956653,
                    "name": "club_house_seasoned_pro",
                    "parent_tag_name": null,
                    "root_tag_type": "business_tags",
                    "type": "business_tags"
                },
                {
                    "display_name": "High-Protein",
                    "id": 8091917,
                    "name": "high_protein",
                    "parent_tag_name": "healthy",
                    "root_tag_type": "healthy",
                    "type": "healthy"
                },
                {
                    "display_name": "High-Fiber",
                    "id": 8091920,
                    "name": "high_fiber",
                    "parent_tag_name": "healthy",
                    "root_tag_type": "healthy",
                    "type": "healthy"
                },
                {
                    "display_name": "Meal",
                    "id": 9295813,
                    "name": "meal",
                    "parent_tag_name": null,
                    "root_tag_type": "meal",
                    "type": "meal"
                },
                {
                    "display_name": "Southern",
                    "id": 9299354,
                    "name": "southern",
                    "parent_tag_name": "north_american",
                    "root_tag_type": "cuisine",
                    "type": "north_american"
                },
                {
                    "display_name": "Chicken",
                    "id": 9299514,
                    "name": "chicken",
                    "parent_tag_name": "dinner",
                    "root_tag_type": "meal",
                    "type": "dinner"
                },
                {
                    "display_name": "Pork",
                    "id": 9299516,
                    "name": "pork",
                    "parent_tag_name": "dinner",
                    "root_tag_type": "meal",
                    "type": "dinner"
                },
                {
                    "display_name": "Pasta",
                    "id": 9299522,
                    "name": "pasta",
                    "parent_tag_name": "dinner",
                    "root_tag_type": "meal",
                    "type": "dinner"
                },
                {
                    "display_name": "Meats",
                    "id": 10623507,
                    "name": "meats",
                    "parent_tag_name": "ingredients_to_avoid",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "ingredients_to_avoid"
                },
                {
                    "display_name": "Gluten",
                    "id": 10623589,
                    "name": "gluten",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                },
                {
                    "display_name": "Dairy",
                    "id": 10623608,
                    "name": "dairy",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                },
                {
                    "display_name": "Chicken",
                    "id": 10623612,
                    "name": "chicken",
                    "parent_tag_name": "meats",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "meats"
                },
                {
                    "display_name": "Pork",
                    "id": 10623613,
                    "name": "pork",
                    "parent_tag_name": "meats",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "meats"
                }
            ],
            "thumbnail_alt_text": "",
            "thumbnail_url": "https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/6d9b54963ad9442aa9320076a7bbf0bf.jpeg",
            "tips_and_ratings_enabled": true,
            "topics": [
                {
                    "name": "Easy Dinner",
                    "slug": "easy-dinner"
                },
                {
                    "name": "Weekend Meal Prep",
                    "slug": "meal-prep"
                },
                {
                    "name": "Tasty Spice Recipes",
                    "slug": "mccormick-seasoned-pro"
                },
                {
                    "name": "One-Pot Recipes",
                    "slug": "one-pot"
                },
                {
                    "name": "Romantic Dinners",
                    "slug": "romantic-dinners"
                },
                {
                    "name": "Dinner",
                    "slug": "dinner"
                },
                {
                    "name": "Pasta",
                    "slug": "pasta"
                },
                {
                    "name": "American",
                    "slug": "american"
                },
                {
                    "name": "Italian",
                    "slug": "italian"
                }
            ],
            "total_time_minutes": 0,
            "total_time_tier": {
                "display_tier": "Under 30 minutes",
                "tier": "under_30_minutes"
            },
            "updated_at": 1702316891,
            "user_ratings": {
                "count_negative": 5,
                "count_positive": 113,
                "score": 0.9576271186440678
            },
            "video_ad_content": null,
            "video_id": null,
            "video_url": null,
            "yields": "8 Servings"
        },
        {
            "approved_at": 1523907123,
            "aspect_ratio": "1:1",
            "beauty_url": "https://img.buzzfeed.com/video-api-prod/assets/15cf3ad98d504be0abbfd2efa30c5c5a/BFV35527_100LayerLasagna-Beauty.jpg",
            "brand": null,
            "brand_id": null,
            "buzz_id": null,
            "canonical_id": "recipe:3746",
            "compilations": [
                {
                    "approved_at": 1525404431,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:554",
                    "country": "US",
                    "created_at": 1525373465,
                    "description": null,
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 554,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "5 Mind-Blowing Layered Recipes",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 51,
                            "name": "Tasty: Tasty Grill"
                        }
                    ],
                    "slug": "5-mind-blowing-layered-recipes",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/154133.jpg",
                    "video_id": 55315,
                    "video_url": "https://vid.tasty.co/output/92413/hls24_1525369560.m3u8"
                },
                {
                    "approved_at": 1546553358,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:834",
                    "country": "US",
                    "created_at": 1545433195,
                    "description": null,
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 834,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "6 Most-Popular Tasty Recipe Videos Of The Year",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "best-of-the-year-6-most-watched-tasty-recipe-videos",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/198462.jpg",
                    "video_id": 74859,
                    "video_url": "https://vid.tasty.co/output/121124/hls24_1545433315.m3u8"
                },
                {
                    "approved_at": 1557975833,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:951",
                    "country": "US",
                    "created_at": 1557836218,
                    "description": null,
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 951,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Tasty's Cheesiest Lasagna Recipes",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "tasty-s-cheesiest-lasagna-recipes",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216141.jpg",
                    "video_id": 82747,
                    "video_url": "https://vid.tasty.co/output/132723/hls24_1557836770.m3u8"
                },
                {
                    "approved_at": 1583891663,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:1432",
                    "country": "US",
                    "created_at": 1583851515,
                    "description": null,
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 1432,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "12 Extra Cheesy Layered Lasagna Recipes",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "12-extra-cheesy-layered-lasagna-recipes",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/257124.jpg",
                    "video_id": 99978,
                    "video_url": "https://vid.tasty.co/output/161574/hls24_1582991941.m3u8"
                },
                {
                    "approved_at": 1600108969,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:1684",
                    "country": "US",
                    "created_at": 1598896707,
                    "description": "Having trouble deciding what you should make next? Take a look at a few of the best pasta recipes we have to offer! From a <a href=\"https://tasty.co/recipe/vegan-mac-n-cheese\">vegan version of mac 'n' cheese</a> to delicious <a href=\"https://tasty.co/recipe/spaghetti-meatball-bake\">baked meatballs and spaghetti</a>, these ideas will satisfy every craving. Pair your pasta with a salad, dessert, and glass of wine — and you've got a restaurant-quality menu right at home!",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 1684,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Tasty's Best Pasta Recipes",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "tasty-s-best-pasta-recipes",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/281005.jpg",
                    "video_id": 112179,
                    "video_url": "https://vid.tasty.co/output/177582/hls24_1598903165.m3u8"
                },
                {
                    "approved_at": 1601298662,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:1711",
                    "country": "US",
                    "created_at": 1600174492,
                    "description": null,
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 1711,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Over-The-Top Recipes To Procrastinate Studying Over",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "over-the-top-recipes-to-procrastinate-studying-over",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/283019.jpg",
                    "video_id": 113584,
                    "video_url": "https://vid.tasty.co/output/178874/hls24_1600177466.m3u8"
                },
                {
                    "approved_at": 1607958478,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:1892",
                    "country": "US",
                    "created_at": 1606914115,
                    "description": null,
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 1892,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Tasty's Favorite Giant Foods",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "tasty-s-favorite-giant-foods",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/296751.jpg",
                    "video_id": 118711,
                    "video_url": "https://vid.tasty.co/output/187008/hls24_1606914812.m3u8"
                },
                {
                    "approved_at": 1668718685,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:3317",
                    "country": "US",
                    "created_at": 1663562528,
                    "description": "Big family dinners are a time for everyone to come together and gather around a table full of delicious eats. Impress everyone with these family-friendly (and family-size!) recipes that are sure to satisfy the whole crew. From a never-ending <a href=\"https://tasty.co/recipe/100-layer-lasagna\"> 100-Layer Lasagna </a> to a filling <a href=\"https://tasty.co/recipe/chili-cheese-casserole\"> Chili Cheese Casserole</a> , these dishes will have everyone coming back for more!",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 3317,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Recipes to Cook For a Big Family Dinner!",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "recipes-to-cook-for-a-big-family-dinner",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://s3.amazonaws.com/video-api-prod/assets/fa68916e941d481c99136a1051905e44/aaa.jpg",
                    "video_id": 168422,
                    "video_url": "https://vid.tasty.co/output/254537/hls24_1663561511.m3u8"
                },
                {
                    "approved_at": 1668699347,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:3351",
                    "country": "US",
                    "created_at": 1667197570,
                    "description": null,
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 3351,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Tasty's Greatest Bites Of All Time",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "tasty-s-greatest-bites-of-all-time",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/408066.jpg",
                    "video_id": 172547,
                    "video_url": "https://vid.tasty.co/output/260391/hls24_1667364329.m3u8"
                },
                {
                    "approved_at": 1670358181,
                    "aspect_ratio": "1:1",
                    "beauty_url": null,
                    "buzz_id": null,
                    "canonical_id": "compilation:3370",
                    "country": "US",
                    "created_at": 1668765961,
                    "description": "End the year with a culinary big bang! 2022 is coming to an end, but your nights shouldn't without tasting these delicious recipes. We have got <a href=\"https://tasty.co/recipe/baked-lobster-tails\">Baked Lobster Tails</a>, <a href=\"https://tasty.co/recipe/creamy-tuscan-chicken\">Creamy Tuscan Chicken</a>, <a href=\"https://tasty.co/recipe/korean-style-bbq-beef\">Korean-Style BBQ Beef</a>, or a <a href=\"https://tasty.co/recipe/20-minute-one-pan-pizza\">20-Minute One-Pan Pizza</a> to cover all of your cravings. Are you convinced or should we go on?",
                    "draft_status": "published",
                    "facebook_posts": [],
                    "id": 3370,
                    "is_shoppable": false,
                    "keywords": null,
                    "language": "eng",
                    "name": "Tasty Dinners for Every Night of December",
                    "promotion": "full",
                    "show": [
                        {
                            "id": 17,
                            "name": "Tasty"
                        }
                    ],
                    "slug": "tasty-dinner-for-every-night-of-december",
                    "thumbnail_alt_text": "",
                    "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/411506.jpg",
                    "video_id": 174237,
                    "video_url": "https://vid.tasty.co/output/264409/hls24_1669870722.m3u8"
                }
            ],
            "cook_time_minutes": 270,
            "country": "US",
            "created_at": 1523835443,
            "credits": [
                {
                    "name": "Alvin Zhou",
                    "type": "internal"
                }
            ],
            "description": "You won't believe your eyes when you see this 100-layer lasagna! It's a tower of deliciousness filled with layers of pasta, meat sauce, ricotta cheese, and mozzarella cheese. It's like a work of art that you can eat!",
            "draft_status": "published",
            "facebook_posts": [],
            "id": 3746,
            "inspired_by_url": null,
            "instructions": [
                {
                    "appliance": null,
                    "display_text": "Lay down about 6 feet (1.8 meters) of tinfoil on a flat surface. Place place 4 clusters of 2 lasagna noodles towards the left half of the foil sheet, leaving about a ½-inch (1 cm) gap in between each cluster.",
                    "end_time": 12883,
                    "id": 32688,
                    "position": 1,
                    "start_time": 2833,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Fold the right half of foil over the noodles, pressing flat. To help you see where the noodles are, run your finger along the edges of the noodles to create a rough outline in the foil.",
                    "end_time": 19383,
                    "id": 32689,
                    "position": 2,
                    "start_time": 12883,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Fold the top and bottom flaps of foil over, creasing and pressing flat.",
                    "end_time": 20716,
                    "id": 32690,
                    "position": 3,
                    "start_time": 19550,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Flip the foil sheet onto the table so that it’s now standing, then arrange into a square box, using the 4 groups of noodles as a visual guide. Fold and crease over any excess foil to join the ends together, then set aside.",
                    "end_time": 23216,
                    "id": 32691,
                    "position": 4,
                    "start_time": 20716,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "In a large pot, melt the butter over medium heat.",
                    "end_time": 27049,
                    "id": 32692,
                    "position": 5,
                    "start_time": 24216,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Whisk in the flour, cooking until the mixture reaches a light golden color.",
                    "end_time": 32766,
                    "id": 32693,
                    "position": 6,
                    "start_time": 27216,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Slowly drizzle in the milk and bring to a boil, whisking constantly until smooth. Mix in salt, pepper, and nutmeg. Bring to a boil.",
                    "end_time": 45766,
                    "hacks": [
                        {
                            "end_index": 45,
                            "id": 18,
                            "match": "boil",
                            "start_index": 42
                        },
                        {
                            "end_index": 55,
                            "id": 24,
                            "match": "whisking",
                            "start_index": 48
                        }
                    ],
                    "id": 32694,
                    "position": 7,
                    "start_time": 32933,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Transfer the béchamel to a large bowl and press plastic wrap onto the surface of the sauce to prevent a skin from forming. Set aside.",
                    "end_time": 0,
                    "id": 32695,
                    "position": 8,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Heat oil in a very large pot over high heat. Once the oil begins to shimmer, add the onions, carrots, and celery and cook until the vegetables have started to sweat but aren’t browning.",
                    "end_time": 52983,
                    "hacks": [
                        {
                            "end_index": 183,
                            "id": 13,
                            "match": "browning",
                            "start_index": 176
                        }
                    ],
                    "id": 32696,
                    "position": 9,
                    "start_time": 46766,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Add in the ground beef and use a wooden spoon or spatula to break up the meat into small pieces.",
                    "end_time": 55666,
                    "id": 32697,
                    "position": 10,
                    "start_time": 53150,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Cook the beef, stirring occasionally, until half of the liquid has evaporated.",
                    "end_time": 58333,
                    "id": 32698,
                    "position": 11,
                    "start_time": 55666,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Add in the tomato sauce, tomato paste, chicken stock, salt, and pepper, stirring to combine evenly and breaking up any last lumps.",
                    "end_time": 73716,
                    "id": 32699,
                    "position": 12,
                    "start_time": 58500,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Turn down the heat to low, and simmer, covered, for about 2 hours.",
                    "end_time": 0,
                    "hacks": [
                        {
                            "end_index": 36,
                            "id": 17,
                            "match": "simmer",
                            "start_index": 31
                        }
                    ],
                    "id": 32700,
                    "position": 13,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": "oven",
                    "display_text": "Preheat oven to 350°F (180°C).",
                    "end_time": 0,
                    "id": 32687,
                    "position": 14,
                    "start_time": 0,
                    "temperature": 350
                },
                {
                    "appliance": null,
                    "display_text": "To assemble, line a greased 9x9-inch (23x23-cm) square baking pan with 2 sheets of foil that extend over the sides.",
                    "end_time": 87100,
                    "id": 32701,
                    "position": 15,
                    "start_time": 82550,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Spread a thin layer of béchamel on the lined baking pan and top with 2 lasagna noodles. Spread a thin layer of meat sauce evenly across the noodles, followed by a thin layer of béchamel. Repeat the layering process, following the order of: 2 noodles, meat sauce, and béchamel. Alternate the direction of the lasagna sheets after every layer.",
                    "end_time": 110483,
                    "id": 32702,
                    "position": 16,
                    "start_time": 87266,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "After 50 layers, place the foil box over the lasagna, helping it stay upright and stable.",
                    "end_time": 117816,
                    "id": 32703,
                    "position": 17,
                    "start_time": 110650,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Continue with the layering process until the 99th layer.",
                    "end_time": 136366,
                    "id": 32704,
                    "position": 18,
                    "start_time": 117983,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Sprinkle Parmesan on top, then cover the whole lasagna with foil.",
                    "end_time": 148700,
                    "id": 32705,
                    "position": 19,
                    "start_time": 136366,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Bake for about 1½ hours, uncovering the foil halfway, until the top is a deep golden brown.",
                    "end_time": 0,
                    "id": 32706,
                    "position": 20,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Cool for at least 2 hours, then carefully lift out the lasagna with the foil sleeves onto a large cutting board.",
                    "end_time": 0,
                    "id": 32707,
                    "position": 21,
                    "start_time": 0,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Peel away the foil walls, then sprinkle the top of the lasagna generously with chives.",
                    "end_time": 162416,
                    "id": 32708,
                    "position": 22,
                    "start_time": 154700,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Cut and serve.",
                    "end_time": 186966,
                    "id": 32709,
                    "position": 23,
                    "start_time": 163916,
                    "temperature": null
                },
                {
                    "appliance": null,
                    "display_text": "Enjoy!",
                    "end_time": 195683,
                    "id": 32721,
                    "position": 24,
                    "start_time": 188466,
                    "temperature": null
                }
            ],
            "is_app_only": false,
            "is_one_top": false,
            "is_shoppable": true,
            "is_subscriber_content": false,
            "keywords": "100 layer lasagna, behind the scenes 100 layer lasagna, how to make lasagna, hundred layer lasagna, lasagna recipe, tasty lasagna",
            "language": "eng",
            "name": "100-Layer Lasagna",
            "num_servings": 20,
            "nutrition": {
                "calories": 747,
                "carbohydrates": 46,
                "fat": 32,
                "fiber": 5,
                "protein": 52,
                "sugar": 15,
                "updated_at": "2024-09-03T03:10:44+02:00"
            },
            "nutrition_visibility": "auto",
            "original_video_url": "https://s3.amazonaws.com/video-api-prod/assets/d6ca0a1f356141049705f49d48aecc5d/BFV35527_100LayerLasagna-FBFINAL.mp4",
            "prep_time_minutes": 180,
            "price": {
                "consumption_portion": 200,
                "consumption_total": 3800,
                "portion": 250,
                "total": 4650,
                "updated_at": "2024-10-08T07:05:02+02:00"
            },
            "promotion": "partial",
            "renditions": [
                {
                    "aspect": "square",
                    "bit_rate": 2597,
                    "container": "mp4",
                    "content_type": "video/mp4",
                    "duration": 207122,
                    "file_size": 67222368,
                    "height": 720,
                    "maximum_bit_rate": null,
                    "minimum_bit_rate": null,
                    "name": "mp4_720x720",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/89658/square_720/1523902408_00001.png",
                    "url": "https://vid.tasty.co/output/89658/square_720/1523902408",
                    "width": 720
                },
                {
                    "aspect": "square",
                    "bit_rate": 875,
                    "container": "mp4",
                    "content_type": "video/mp4",
                    "duration": 207122,
                    "file_size": 22630857,
                    "height": 320,
                    "maximum_bit_rate": null,
                    "minimum_bit_rate": null,
                    "name": "mp4_320x320",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/89658/square_320/1523902408_00001.png",
                    "url": "https://vid.tasty.co/output/89658/square_320/1523902408",
                    "width": 320
                },
                {
                    "aspect": "square",
                    "bit_rate": 2594,
                    "container": "mp4",
                    "content_type": "video/mp4",
                    "duration": 207122,
                    "file_size": 67155286,
                    "height": 720,
                    "maximum_bit_rate": null,
                    "minimum_bit_rate": null,
                    "name": "mp4_720x720",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/89658/landscape_720/1523902408_00001.png",
                    "url": "https://vid.tasty.co/output/89658/landscape_720/1523902408",
                    "width": 720
                },
                {
                    "aspect": "square",
                    "bit_rate": 1496,
                    "container": "mp4",
                    "content_type": "video/mp4",
                    "duration": 207122,
                    "file_size": 38707125,
                    "height": 480,
                    "maximum_bit_rate": null,
                    "minimum_bit_rate": null,
                    "name": "mp4_480x480",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/89658/landscape_480/1523902408_00001.png",
                    "url": "https://vid.tasty.co/output/89658/landscape_480/1523902408",
                    "width": 480
                },
                {
                    "aspect": "square",
                    "bit_rate": null,
                    "container": "ts",
                    "content_type": "application/vnd.apple.mpegurl",
                    "duration": 207124,
                    "file_size": null,
                    "height": 1080,
                    "maximum_bit_rate": 4514,
                    "minimum_bit_rate": 272,
                    "name": "low",
                    "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/89658/1445289064805-h2exzu/1523902408_00001.png",
                    "url": "https://vid.tasty.co/output/89658/hls24_1523902408.m3u8",
                    "width": 1080
                }
            ],
            "sections": [
                {
                    "components": [
                        {
                            "extra_comment": "",
                            "id": 37335,
                            "ingredient": {
                                "created_at": 1493314940,
                                "display_plural": "butters",
                                "display_singular": "butter",
                                "id": 30,
                                "name": "butter",
                                "updated_at": 1509035287
                            },
                            "measurements": [
                                {
                                    "id": 440589,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "stick",
                                        "display_plural": "sticks",
                                        "display_singular": "stick",
                                        "name": "stick",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 2,
                            "raw_text": "1 stick butter"
                        },
                        {
                            "extra_comment": "",
                            "id": 37336,
                            "ingredient": {
                                "created_at": 1493314654,
                                "display_plural": "flours",
                                "display_singular": "flour",
                                "id": 25,
                                "name": "flour",
                                "updated_at": 1509035288
                            },
                            "measurements": [
                                {
                                    "id": 440603,
                                    "quantity": "½",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 440601,
                                    "quantity": "60",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 3,
                            "raw_text": "½ cup flour"
                        },
                        {
                            "extra_comment": "",
                            "id": 37337,
                            "ingredient": {
                                "created_at": 1493314636,
                                "display_plural": "milks",
                                "display_singular": "milk",
                                "id": 21,
                                "name": "milk",
                                "updated_at": 1509035288
                            },
                            "measurements": [
                                {
                                    "id": 440593,
                                    "quantity": "8",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 440590,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "L",
                                        "display_plural": "L",
                                        "display_singular": "L",
                                        "name": "liter",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 4,
                            "raw_text": "8 cups milk"
                        },
                        {
                            "extra_comment": "",
                            "id": 37338,
                            "ingredient": {
                                "created_at": 1493314644,
                                "display_plural": "salts",
                                "display_singular": "salt",
                                "id": 22,
                                "name": "salt",
                                "updated_at": 1509035288
                            },
                            "measurements": [
                                {
                                    "id": 440599,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "tsp",
                                        "display_plural": "teaspoons",
                                        "display_singular": "teaspoon",
                                        "name": "teaspoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 5,
                            "raw_text": "2 teaspoons salt"
                        },
                        {
                            "extra_comment": "",
                            "id": 37339,
                            "ingredient": {
                                "created_at": 1493307183,
                                "display_plural": "black peppers",
                                "display_singular": "black pepper",
                                "id": 12,
                                "name": "black pepper",
                                "updated_at": 1509035289
                            },
                            "measurements": [
                                {
                                    "id": 440594,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "tsp",
                                        "display_plural": "teaspoons",
                                        "display_singular": "teaspoon",
                                        "name": "teaspoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 6,
                            "raw_text": "1 teaspoon black pepper"
                        },
                        {
                            "extra_comment": "",
                            "id": 37340,
                            "ingredient": {
                                "created_at": 1495588355,
                                "display_plural": "nutmegs",
                                "display_singular": "nutmeg",
                                "id": 677,
                                "name": "nutmeg",
                                "updated_at": 1509035242
                            },
                            "measurements": [
                                {
                                    "id": 440600,
                                    "quantity": "½",
                                    "unit": {
                                        "abbreviation": "tsp",
                                        "display_plural": "teaspoons",
                                        "display_singular": "teaspoon",
                                        "name": "teaspoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 7,
                            "raw_text": "½ teaspoon nutmeg"
                        }
                    ],
                    "name": "Béchamel Sauce",
                    "position": 1
                },
                {
                    "components": [
                        {
                            "extra_comment": "",
                            "id": 37342,
                            "ingredient": {
                                "created_at": 1493306183,
                                "display_plural": "olive oils",
                                "display_singular": "olive oil",
                                "id": 4,
                                "name": "olive oil",
                                "updated_at": 1509035290
                            },
                            "measurements": [
                                {
                                    "id": 440596,
                                    "quantity": "½",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 440595,
                                    "quantity": "120",
                                    "unit": {
                                        "abbreviation": "mL",
                                        "display_plural": "mL",
                                        "display_singular": "mL",
                                        "name": "milliliter",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 9,
                            "raw_text": "½ cup olive oil"
                        },
                        {
                            "extra_comment": "finely chopped",
                            "hacks": [
                                {
                                    "end_index": 27,
                                    "id": 1,
                                    "match": "chopped",
                                    "start_index": 21
                                }
                            ],
                            "id": 37343,
                            "ingredient": {
                                "created_at": 1493311386,
                                "display_plural": "onions",
                                "display_singular": "onion",
                                "id": 17,
                                "name": "onion",
                                "updated_at": 1509035288
                            },
                            "measurements": [
                                {
                                    "id": 440592,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 440591,
                                    "quantity": "300",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 10,
                            "raw_text": "2 cups onion, finely chopped"
                        },
                        {
                            "extra_comment": "finely chopped",
                            "hacks": [
                                {
                                    "end_index": 29,
                                    "id": 1,
                                    "match": "chopped",
                                    "start_index": 23
                                }
                            ],
                            "id": 37344,
                            "ingredient": {
                                "created_at": 1493314877,
                                "display_plural": "carrots",
                                "display_singular": "carrot",
                                "id": 27,
                                "name": "carrot",
                                "updated_at": 1509035288
                            },
                            "measurements": [
                                {
                                    "id": 440606,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 440605,
                                    "quantity": "240",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 11,
                            "raw_text": "2 cups carrots, finely chopped"
                        },
                        {
                            "extra_comment": "finely chopped",
                            "hacks": [
                                {
                                    "end_index": 28,
                                    "id": 1,
                                    "match": "chopped",
                                    "start_index": 22
                                }
                            ],
                            "id": 37345,
                            "ingredient": {
                                "created_at": 1495082620,
                                "display_plural": "celeries",
                                "display_singular": "celery",
                                "id": 458,
                                "name": "celery",
                                "updated_at": 1509035259
                            },
                            "measurements": [
                                {
                                    "id": 440604,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 440602,
                                    "quantity": "450",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 12,
                            "raw_text": "2 cups celery, finely chopped"
                        },
                        {
                            "extra_comment": "80% lean 20% fat",
                            "id": 37346,
                            "ingredient": {
                                "created_at": 1493920746,
                                "display_plural": "ground beefs",
                                "display_singular": "ground beef",
                                "id": 161,
                                "name": "ground beef",
                                "updated_at": 1509035282
                            },
                            "measurements": [
                                {
                                    "id": 440598,
                                    "quantity": "6",
                                    "unit": {
                                        "abbreviation": "lb",
                                        "display_plural": "lb",
                                        "display_singular": "lb",
                                        "name": "pound",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 440597,
                                    "quantity": "2.5",
                                    "unit": {
                                        "abbreviation": "kg",
                                        "display_plural": "kg",
                                        "display_singular": "kg",
                                        "name": "kilogram",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 13,
                            "raw_text": "6 pounds ground beef, 80% lean 20% fat"
                        },
                        {
                            "extra_comment": "4 cans",
                            "id": 37347,
                            "ingredient": {
                                "created_at": 1494882012,
                                "display_plural": "tomato sauces",
                                "display_singular": "tomato sauce",
                                "id": 344,
                                "name": "tomato sauce",
                                "updated_at": 1509035268
                            },
                            "measurements": [
                                {
                                    "id": 440614,
                                    "quantity": "115",
                                    "unit": {
                                        "abbreviation": "oz",
                                        "display_plural": "oz",
                                        "display_singular": "oz",
                                        "name": "ounce",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 440612,
                                    "quantity": "3.5",
                                    "unit": {
                                        "abbreviation": "kg",
                                        "display_plural": "kg",
                                        "display_singular": "kg",
                                        "name": "kilogram",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 14,
                            "raw_text": "4 28-ounce cans tomato sauce"
                        },
                        {
                            "extra_comment": "",
                            "id": 37348,
                            "ingredient": {
                                "created_at": 1495078295,
                                "display_plural": "tomato pastes",
                                "display_singular": "tomato paste",
                                "id": 456,
                                "name": "tomato paste",
                                "updated_at": 1509035259
                            },
                            "measurements": [
                                {
                                    "id": 440608,
                                    "quantity": "½",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 440607,
                                    "quantity": "110",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 15,
                            "raw_text": "½ cup tomato paste"
                        },
                        {
                            "extra_comment": "",
                            "id": 37349,
                            "ingredient": {
                                "created_at": 1494124570,
                                "display_plural": "chicken stocks",
                                "display_singular": "chicken stock",
                                "id": 196,
                                "name": "chicken stock",
                                "updated_at": 1509035280
                            },
                            "measurements": [
                                {
                                    "id": 440610,
                                    "quantity": "4",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 440609,
                                    "quantity": "960",
                                    "unit": {
                                        "abbreviation": "mL",
                                        "display_plural": "mL",
                                        "display_singular": "mL",
                                        "name": "milliliter",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 16,
                            "raw_text": "4 cups chicken stock"
                        },
                        {
                            "extra_comment": "",
                            "id": 37350,
                            "ingredient": {
                                "created_at": 1493314644,
                                "display_plural": "salts",
                                "display_singular": "salt",
                                "id": 22,
                                "name": "salt",
                                "updated_at": 1509035288
                            },
                            "measurements": [
                                {
                                    "id": 440617,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "tbsp",
                                        "display_plural": "tablespoons",
                                        "display_singular": "tablespoon",
                                        "name": "tablespoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 17,
                            "raw_text": "1 tablespoon salt"
                        },
                        {
                            "extra_comment": "",
                            "id": 37351,
                            "ingredient": {
                                "created_at": 1493307183,
                                "display_plural": "black peppers",
                                "display_singular": "black pepper",
                                "id": 12,
                                "name": "black pepper",
                                "updated_at": 1509035289
                            },
                            "measurements": [
                                {
                                    "id": 440611,
                                    "quantity": "½",
                                    "unit": {
                                        "abbreviation": "tbsp",
                                        "display_plural": "tablespoons",
                                        "display_singular": "tablespoon",
                                        "name": "tablespoon",
                                        "system": "imperial"
                                    }
                                }
                            ],
                            "position": 18,
                            "raw_text": "½ tablespoon black pepper"
                        },
                        {
                            "extra_comment": "",
                            "hacks": [
                                {
                                    "end_index": 10,
                                    "id": 18,
                                    "match": "boil",
                                    "start_index": 7
                                }
                            ],
                            "id": 37352,
                            "ingredient": {
                                "created_at": 1523904949,
                                "display_plural": "no-boil flat lasagna noodles",
                                "display_singular": "no-boil flat lasagna noodle",
                                "id": 3969,
                                "name": "no-boil flat lasagna noodle",
                                "updated_at": 1523904949
                            },
                            "measurements": [
                                {
                                    "id": 440616,
                                    "quantity": "110",
                                    "unit": {
                                        "abbreviation": "",
                                        "display_plural": "",
                                        "display_singular": "",
                                        "name": "",
                                        "system": "none"
                                    }
                                }
                            ],
                            "position": 19,
                            "raw_text": "108 no-boil flat lasagna noodles"
                        },
                        {
                            "extra_comment": "",
                            "id": 37353,
                            "ingredient": {
                                "created_at": 1497741203,
                                "display_plural": "grated parmesan cheeses",
                                "display_singular": "grated parmesan cheese",
                                "id": 1869,
                                "name": "grated parmesan cheese",
                                "updated_at": 1509035159
                            },
                            "measurements": [
                                {
                                    "id": 440615,
                                    "quantity": "2",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 440613,
                                    "quantity": "220",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 20,
                            "raw_text": "2 cups grated Parmesan"
                        },
                        {
                            "extra_comment": "finely chopped",
                            "hacks": [
                                {
                                    "end_index": 27,
                                    "id": 1,
                                    "match": "chopped",
                                    "start_index": 21
                                }
                            ],
                            "id": 37354,
                            "ingredient": {
                                "created_at": 1498567386,
                                "display_plural": "fresh chives",
                                "display_singular": "fresh chive",
                                "id": 1947,
                                "name": "fresh chives",
                                "updated_at": 1509035154
                            },
                            "measurements": [
                                {
                                    "id": 440619,
                                    "quantity": "1",
                                    "unit": {
                                        "abbreviation": "c",
                                        "display_plural": "cups",
                                        "display_singular": "cup",
                                        "name": "cup",
                                        "system": "imperial"
                                    }
                                },
                                {
                                    "id": 440618,
                                    "quantity": "40",
                                    "unit": {
                                        "abbreviation": "g",
                                        "display_plural": "g",
                                        "display_singular": "g",
                                        "name": "gram",
                                        "system": "metric"
                                    }
                                }
                            ],
                            "position": 21,
                            "raw_text": "1 cup chives, finely chopped"
                        }
                    ],
                    "name": "Meat Sauce",
                    "position": 2
                }
            ],
            "seo_path": "9295813,64486,9299522,9299622",
            "seo_title": null,
            "servings_noun_plural": "servings",
            "servings_noun_singular": "serving",
            "show": {
                "id": 17,
                "name": "Tasty"
            },
            "show_id": 17,
            "slug": "100-layer-lasagna",
            "tags": [
                {
                    "display_name": "North American",
                    "id": 64444,
                    "name": "north_american",
                    "parent_tag_name": "cuisine",
                    "root_tag_type": "cuisine",
                    "type": "cuisine"
                },
                {
                    "display_name": "Italian",
                    "id": 64453,
                    "name": "italian",
                    "parent_tag_name": "european",
                    "root_tag_type": "cuisine",
                    "type": "european"
                },
                {
                    "display_name": "Comfort Food",
                    "id": 64462,
                    "name": "comfort_food",
                    "parent_tag_name": "cooking_style",
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "Dinner",
                    "id": 64486,
                    "name": "dinner",
                    "parent_tag_name": "meal",
                    "root_tag_type": "meal",
                    "type": "meal"
                },
                {
                    "display_name": "Baking",
                    "id": 64492,
                    "name": "baking",
                    "parent_tag_name": "appliance",
                    "root_tag_type": "appliance",
                    "type": "appliance"
                },
                {
                    "display_name": "Winter",
                    "id": 64511,
                    "name": "winter",
                    "parent_tag_name": "seasonal",
                    "root_tag_type": "seasonal",
                    "type": "seasonal"
                },
                {
                    "display_name": "Stove Top",
                    "id": 65848,
                    "name": "stove_top",
                    "parent_tag_name": null,
                    "root_tag_type": "appliance",
                    "type": "appliance"
                },
                {
                    "display_name": "Big Batch",
                    "id": 65851,
                    "name": "big_batch",
                    "parent_tag_name": "cooking_style",
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "Special Occasion",
                    "id": 188967,
                    "name": "special_occasion",
                    "parent_tag_name": "occasion",
                    "root_tag_type": "seasonal",
                    "type": "occasion"
                },
                {
                    "display_name": "Oven Mitts",
                    "id": 1247775,
                    "name": "oven_mitts",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Sauce Pan",
                    "id": 1247786,
                    "name": "sauce_pan",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Spatula",
                    "id": 1247788,
                    "name": "spatula",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Whisk",
                    "id": 1247793,
                    "name": "whisk",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Baking Pan",
                    "id": 1280500,
                    "name": "baking_pan",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Chef's Knife",
                    "id": 1280501,
                    "name": "chefs_knife",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Liquid Measuring Cup",
                    "id": 1280506,
                    "name": "liquid_measuring_cup",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Dry Measuring Cups",
                    "id": 1280507,
                    "name": "dry_measuring_cups",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Measuring Spoons",
                    "id": 1280508,
                    "name": "measuring_spoons",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Offset Spatula",
                    "id": 1280511,
                    "name": "offset_spatula",
                    "parent_tag_name": null,
                    "root_tag_type": "equipment",
                    "type": "equipment"
                },
                {
                    "display_name": "Tips Viral",
                    "id": 6718867,
                    "name": "tips_viral",
                    "parent_tag_name": null,
                    "root_tag_type": "feature_page",
                    "type": "feature_page"
                },
                {
                    "display_name": "Cooking Style",
                    "id": 9295810,
                    "name": "cooking_style",
                    "parent_tag_name": null,
                    "root_tag_type": "cooking_style",
                    "type": "cooking_style"
                },
                {
                    "display_name": "Appliance",
                    "id": 9295811,
                    "name": "appliance",
                    "parent_tag_name": null,
                    "root_tag_type": "appliance",
                    "type": "appliance"
                },
                {
                    "display_name": "Meal",
                    "id": 9295813,
                    "name": "meal",
                    "parent_tag_name": null,
                    "root_tag_type": "meal",
                    "type": "meal"
                },
                {
                    "display_name": "Occasion",
                    "id": 9299134,
                    "name": "occasion",
                    "parent_tag_name": "seasonal",
                    "root_tag_type": "seasonal",
                    "type": "seasonal"
                },
                {
                    "display_name": "Chicken",
                    "id": 9299514,
                    "name": "chicken",
                    "parent_tag_name": "dinner",
                    "root_tag_type": "meal",
                    "type": "dinner"
                },
                {
                    "display_name": "Beef",
                    "id": 9299515,
                    "name": "beef",
                    "parent_tag_name": "dinner",
                    "root_tag_type": "meal",
                    "type": "dinner"
                },
                {
                    "display_name": "Baked Pasta",
                    "id": 9299621,
                    "name": "baked_pasta",
                    "parent_tag_name": "pasta",
                    "root_tag_type": "meal",
                    "type": "pasta"
                },
                {
                    "display_name": "Lasagna",
                    "id": 9299622,
                    "name": "lasagna",
                    "parent_tag_name": "pasta",
                    "root_tag_type": "meal",
                    "type": "pasta"
                },
                {
                    "display_name": "Meats",
                    "id": 10623507,
                    "name": "meats",
                    "parent_tag_name": "ingredients_to_avoid",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "ingredients_to_avoid"
                },
                {
                    "display_name": "Gluten",
                    "id": 10623589,
                    "name": "gluten",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                },
                {
                    "display_name": "Dairy",
                    "id": 10623608,
                    "name": "dairy",
                    "parent_tag_name": "allergens",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "allergens"
                },
                {
                    "display_name": "Beef",
                    "id": 10623611,
                    "name": "beef",
                    "parent_tag_name": "meats",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "meats"
                },
                {
                    "display_name": "Chicken",
                    "id": 10623612,
                    "name": "chicken",
                    "parent_tag_name": "meats",
                    "root_tag_type": "ingredients_to_avoid",
                    "type": "meats"
                }
            ],
            "thumbnail_alt_text": "",
            "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/150087.jpg",
            "tips_and_ratings_enabled": true,
            "topics": [
                {
                    "name": "Romantic Dinners",
                    "slug": "romantic-dinners"
                },
                {
                    "name": "Winter Recipes",
                    "slug": "winter"
                },
                {
                    "name": "Dinner",
                    "slug": "dinner"
                },
                {
                    "name": "Pasta",
                    "slug": "pasta"
                },
                {
                    "name": "American",
                    "slug": "american"
                },
                {
                    "name": "Italian",
                    "slug": "italian"
                }
            ],
            "total_time_minutes": 450,
            "total_time_tier": null,
            "updated_at": 1683237600,
            "user_ratings": {
                "count_negative": 91,
                "count_positive": 240,
                "score": 0.7250755287009063
            },
            "video_ad_content": "none",
            "video_id": 42294,
            "video_url": "https://vid.tasty.co/output/89658/hls24_1523902408.m3u8",
            "yields": "Servings: 20"
        }
    ]
})
  }

}
