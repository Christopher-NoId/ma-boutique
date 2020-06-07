const SHOP_DATA = {
  bluray: {
    id: 1,
    title: "Blu-Ray",
    routeName: "bluray",
    items: [
      {
        id: 1,
        name: "Mad Max",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/18/11/82/8524056/1520-1/tsp20170123124455/Mad-Max-Fury-Road-Edition-Black-and-Chrome-Blu-ray.jpg",
        price: 12
      },
      {
        id: 2,
        name: "Trilogie Matrix",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/7b/e4/2a/2811003/1507-1/tsp20181030151204/Matrix-Coffret-Integral-Blu-Ray-Edition-Speciale-Fnac.jpg",
        price: 15
      },
      {
        id: 3,
        name: "Trilogie Seigneur des anneaux",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/e2/23/32/3285986/1507-1/tsp20181107174155/Le-Seigneur-des-Anneaux-Coffret-de-la-Trilogie-Edition-Fnac-Version-Longue-Blu-Ray.jpg",
        price: 15
      },
      {
        id: 4,
        name: "Watchmen",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/3c/8a/b2/11700796/1507-1/tsp20200127105636/Watchmen-Les-Gardiens-Ultimate-Cut-Blu-ray.jpg",
        price: 14
      },
      {
        id: 5,
        name: "Incassable",
        imageUrl: "https://static.fnac-static.com/multimedia/FR/images_produits/FR/Fnac.com/ZoomPE/8/5/6/8717418159658/tsp20130828173933/Incaable-Edition-Blu-Ray.jpg",
        price: 18
      },
      {
        id: 6,
        name: "A history of violence",
        imageUrl: "https://static.fnac-static.com/multimedia/images_produits/ZoomPE/0/2/1/3512391450120/tsp20130902110602/A-History-of-violence-Blu-Ray.jpg",
        price: 19.71
      },
      {
        id: 7,
        name: "Snowpiercer",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/58/49/55/5589336/1540-1/tsp20150925095134/Snowpiercer-Le-Transperceneige-Combo-Blu-Ray-DVD.jpg",
        price: 18
      },
      {
        id: 8,
        name: "Fargo",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/f7/a5/5c/6071799/1507-1/tsp20140728173049/Fargo-Blu-ray.jpg",
        price: 14
      },
      {
        id: 9,
        name: "La la land",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/84/fc/82/8584324/1507-1/tsp20170516152952/La-La-Land-Blu-ray.jpg",
        price: 16
      },

      {
        id: 10,
        name: "1917",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/40/bc/b2/11713600/1507-1/tsp20200206125057/1917-Steelbook-Edition-Speciale-Fnac-Blu-ray.jpg",
        price: 22.99
      },

      {
        id: 11,
        name: "Joker",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/ba/b3/ae/11449274/1507-1/tsp20200106160132/Joker-Blu-ray.jpg",
        price: 20
      },

      {
        id: 12,
        name: "Ad Astra",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/91/2a/ae/11414161/1507-1/tsp20191113154825/Ad-Astra-Blu-ray.jpg",
        price: 24.99
      },

      {
        id: 13,
        name: "Once Upon a Time in...Hollywood",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/8e/f6/ac/11335310/1507-1/tsp20191104160709/Once-Upon-a-Time-in-Hollywood-Blu-ray.jpg",
        price: 25
      },

      {
        id: 14,
        name: "Spider-Man : Far From Home",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/26/9d/ab/11246886/1507-1/tsp20191008111112/Spider-Man-Far-From-Home-Blu-ray.jpg",
        price: 20
      },

      {
        id: 15,
        name: "Dernier train pour Busan ",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/e6/f9/81/8518118/1507-1/tsp20170112172907/Dernier-train-pour-Busan-Blu-ray.jpg",
        price: 15
      },

      {
        id: 16,
        name: "The Dark Knight La Trilogie  ",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/3c/ba/51/5356092/1507-1/tsp20181026101115/Coffret-The-Dark-Knight-La-Trilogie-Edition-speciale-Fnac-Blu-Ray.jpg",
        price: 24.99
      },

      {
        id: 17,
        name: "Jumanji : Next Level   ",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/6e/e0/b0/11591790/1507-1/tsp20200213164055/Jumanji-Next-Level-Blu-ray.jpg",
        price: 24.99
      },

      {
        id: 18,
        name: "Rogue One  ",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/76/99/b2/11704694/1507-1/tsp20200219145141/Rogue-One-A-Star-Wars-Story-Blu-ray.jpg",
        price: 15
      },

      {
        id: 19,
        name: "Le Roi Lion ",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/31/17/9b/10164017/1507-1/tsp20190919093439/Le-Roi-Lion-Blu-ray.jpg",
        price: 15
      },

      {
        id: 20,
        name: "X-Men : Dark Phoenix ",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/00/7e/aa/11173376/1507-1/tsp20190826163514/X-Men-Dark-Phoenix-Blu-ray.jpg",
        price: 15
      },


    ]
  },


  bd: {
    id: 4,
    title: "Bande Dessinée",
    routeName: "bande-dessinee",
    items: [
      {
        id: 23,
        name: " Y le dernier homme",
        imageUrl: "https://static.fnac-static.com/multimedia/FR/Images_Produits/FR/fnac.com/ZoomPE/8/0/1/9782365771108/tsp20121026171628/Y-le-dernier-homme.jpg",
        price: 25
      },
      {
        id: 24,
        name: "Irrécupérable",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/f3/46/b9/12142323/1507-1/tsp20200311071518/Irrecuperable-Integrale-1.jpg",
        price: 20
      },
      {
        id: 25,
        name: "Watchmen, l'intégrale",
        imageUrl: "https://static.fnac-static.com/multimedia/FR/images_produits/FR/Fnac.com/ZoomPE/5/9/0/9782365770095/tsp20130903162055/Watchmen.jpg",
        price: 80
      },
      {
        id: 26,
        name: "Walking Dead",
        imageUrl: "https://static.fnac-static.com/multimedia/images_produits/ZoomPE/4/2/1/9782756009124/tsp20130903015020/Pae-decompose.jpg",
        price: 80
      },
      {
        id: 27,
        name: "Kingdom come",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/26/b4/37/3650598/1507-1/tsp20191108071323/Kingdom-Come-nouvelle-edition.jpg",
        price: 45
      },
      {
        id: 28,
        name: "Kick Ass",
        imageUrl: "https://static.fnac-static.com/multimedia/FR/images_produits/FR/Fnac.com/ZoomPE/3/0/6/9782809419603/tsp20130903150514/Kick-A.jpg",
        price: 135
      },
      {
        id: 29,
        name: "Civil war",
        imageUrl: "https://static.fnac-static.com/multimedia/FR/images_produits/FR/Fnac.com/ZoomPE/1/4/7/9782809412741/tsp20130901165221/Guerre-civile.jpg",
        price: 20
      },

      {
        id: 230,
        name: "V pour Vendetta ",
        imageUrl: "https://static.fnac-static.com/multimedia/Images/FR/NR/d4/c3/b1/11650004/1507-1/tsp20200507070245/V-pour-Vendetta-Edition-Black-Label.jpg",
        price: 28
      }
    ]
  },

};

export default SHOP_DATA;
