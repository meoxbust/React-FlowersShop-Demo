const express = require("express");
const app = express();

const flowers = [
    {
        id: 1,
        name: "MAUVE FREESIA",
        price: 7000,
        description: "The soft, purple hue of our Mauve freesias compliment a summer garden table perfectly whilst exuding a sweet scent to delight guests.",
        imageUrl: 
            "https://dy1yydbfzm05w.cloudfront.net/media/catalog/product/cache/466bc07fdd9f3406dd5cbfa6621097e2/f/r/freesia_mauve_freesia_wrap_2.jpg",
    }, 
    {
        id: 2,
        name: "LAVENDER PINK SNAPDRAGON",
        price: 7000,
        description: "A splash of lavender coloring to this snapdragon variety creates a softer, more feminine tone that warms any interior.",
        imageUrl: 
            "https://dy1yydbfzm05w.cloudfront.net/media/catalog/product/cache/466bc07fdd9f3406dd5cbfa6621097e2/s/n/snapdragon_lavender_pink_snapdragon_vase_6.jpg",
    },
    {
        id: 3,
        name: "VIOLET DUSK ANEMONE",
        price: 10000,
        description: "The Violet Dusk Anemone has a light and ethereal quality that is equally elegant on its own in a Bailey Bud vase or when bunched together.",
        imageUrl: 
            "https://dy1yydbfzm05w.cloudfront.net/media/catalog/product/cache/466bc07fdd9f3406dd5cbfa6621097e2/a/n/anemone_violet_dusk_anemone_stem_2.jpg",
    },
    {
        id: 4,
        name: "COTTON CANDY SNAPDRAGON",
        price: 8000,
        description: "The Cotton Candy snapdragon from our Snapdragon Collection is the sweetest of them all, towering over the rest in a sugar-spun shade of cotton candy pink.",
        imageUrl: 
            "https://dy1yydbfzm05w.cloudfront.net/media/catalog/product/cache/466bc07fdd9f3406dd5cbfa6621097e2/s/n/snapdragon_cotton_candy_snapdragon_vase_6.jpg",
    },
    {
        id: 5,
        name: "BABY POWDER FREESIA",
        price: 6000,
        description: "Introduce the Baby Powder freesia into your home for effortless elegance and simplicity. Its delicate blooms unfurl beautifully over time, whilst adding natural fragrance to its surroundings.",
        imageUrl: 
            "https://dy1yydbfzm05w.cloudfront.net/media/catalog/product/cache/466bc07fdd9f3406dd5cbfa6621097e2/f/r/freesia_baby_powder_freesia_wrap_2.jpg",
    },
    {
        id: 6,
        name: "YELLOW PENNY LANE ROSE",
        price: 6500,
        description: "The Penny Lane Rose is a timeless classic and sure to delight with its beauty and simplicity.",
        imageUrl: 
            "https://dy1yydbfzm05w.cloudfront.net/media/catalog/product/cache/466bc07fdd9f3406dd5cbfa6621097e2/r/o/rose_yellow_penny_lane_rose_vase_2.jpg",
    },
    {
        id: 7,
        name: "FIRST BLUSH LONG-STEM DELUXE LILY",
        price: 7000,
        description: "The First Blush Long-Stem Deluxe Lily is a fragrant, regal beauty that is universally loved.",
        imageUrl: 
            "https://dy1yydbfzm05w.cloudfront.net/media/catalog/product/cache/466bc07fdd9f3406dd5cbfa6621097e2/d/e/deluxe_lily_first_blush_long_stem_deluxe_lily_stem_2.jpg",
    },
    {
        id: 8,
        name: "CANDY CANE CARNATION",
        price: 7000,
        description: "These seasonal holiday carnations look like a literal candy cane and are just as delicious.",
        imageUrl: 
            "https://dy1yydbfzm05w.cloudfront.net/media/catalog/product/cache/466bc07fdd9f3406dd5cbfa6621097e2/c/a/carnation_candy_cane_carnation_stem_3.jpg",
    },
    {
        id: 9,
        name: "CHARTREUSE LISIANTHUS",
        price: 5000,
        description: "Chartreuse Lisianthus is an elegant bloom with multiple flowers that provide lovely bursts of color.",
        imageUrl: 
            "https://dy1yydbfzm05w.cloudfront.net/media/catalog/product/cache/466bc07fdd9f3406dd5cbfa6621097e2/l/i/lisianthus_chartreuse_lisianthus_stem_6.jpg",
    },
    {
        id: 10,
        name: "CLOUD NINE LONG-STEM DELUXE LILY",
        price: 7000,
        description: "The Cloud Nine Long-Stem Deluxe Lily is a fragrant, regal beauty that is universally loved.",
        imageUrl: 
            "https://dy1yydbfzm05w.cloudfront.net/media/catalog/product/cache/466bc07fdd9f3406dd5cbfa6621097e2/d/e/deluxe_lily_cloud_nine_long_stem_deluxe_lily_stem_2.jpg",
    }
]

app.get("/v1/flowers", (req, res)=>{
    res.status(200).json(flowers);
});

app.listen("8080", () => {
    console.log("Server is running...")
});