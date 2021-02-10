const plants = [
  {
    _id: '1',
    commonName: 'thinleaf sunflower',
    scientificName: 'helianthus decapetalus',
    image1: {
      src: 'helianthus-decapetalus-detail.jpg',
      sourceUrl:
        'https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Helianthus_decapetal_73UWx0Mw1tW1.jpg',
      credit: 'H. Zell',
      creditUrl: '',
      license: 'CC-BY-SA 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/deed.en',
    },
    image2: {
      src: 'helianthus-decapetalus.jpg',
      sourceUrl:
        'https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Helianthus_decapetal_OqgVFApNtuoe.jpg',
      credit: 'H. Zell',
      creditUrl: '',
      license: 'CC BY-SA 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/deed.en',
    },
    colors: ['gold', 'yellow'],
    spacingIn: {
      min: 0,
      max: 0,
    },
    heightIn: {
      min: 36,
      max: 60,
    },
    bloomSeason: 'summer/early fall',
    light: 'full sun/partial shade',
    soil: 'moist, loamy, well-drained',
    usdaZone: {
      min: 4,
      max: 9,
    },
    other: [],
    description: {
      text:
        'Papaver orientale, commonly called Oriental poppy, is among the most popular poppies available. They are clump-forming plants that most often feature flowers in shades of red, orange and pink. Serrate, thistle-like, grayish-green leaves (to 12” long) are pinnately dissected into lance-shaped segments and have a somewhat weedy appearance.',
      credit: '',
      url: '',
    },
    rating: 5,
    numReviews: 3,
  },
  {
    _id: '2',
    commonName: 'oriental poppy',
    scientificName: 'papaver orientale',
    image1: {
      src: 'papaver-orientale-detail.jpg',
      sourceUrl:
        'https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Oriental_poppy_flowe_uP0Zlj5B5XOV.jpg',
      credit: 'RoyBoy',
      creditUrl: '',
      license: 'CC-BY-SA 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/deed.en',
    },
    image2: {
      src: 'papaver-orientale.jpg',
      sourceUrl:
        'https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Papaver_orientale_fo_vqm9NPJbJ0GR.jpg',
      credit: 'Cillas',
      creditUrl: '',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'http://creativecommons.org/licenses/by-sa/4.0/legalcode',
    },
    colors: ['black', 'orange', 'pink', 'purple', 'red', 'white'],
    spacingIn: {
      min: 12,
      max: 12,
    },
    heightIn: {
      min: 24,
      max: 36,
    },
    bloomSeason: 'early summer',
    light: 'full sun',
    soil: 'well-drained, occasionally dry',
    usdaZone: {
      min: 3,
      max: 7,
    },
    other: ['toxic'],
    description: {
      text:
        'Papaver orientale, commonly called Oriental poppy, is among the most popular poppies available. They are clump-forming plants that most often feature flowers in shades of red, orange and pink. Serrate, thistle-like, grayish-green leaves (to 12” long) are pinnately dissected into lance-shaped segments and have a somewhat weedy appearance.',
      credit: '',
      url: '',
    },
    rating: 4.5,
    numReviews: 2,
  },
  {
    _id: '3',
    commonName: 'forget-me-not',
    scientificName: 'myosotis sylvatica',
    image1: {
      src: 'myosotis-sylvatica-detail.jpg',
      sourceUrl:
        'https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Myosotis-sylvatica-leaves--Tero-Laakso--CC-BY-SA_AxFNdGR.jpg',
      credit: 'Tero Laasko',
      creditUrl: '',
      license: 'CC-BY-SA 2.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    },
    image2: {
      src: 'myosotis-sylvatica.jpg',
      sourceUrl:
        'https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Myosotis-sylvatica-nursery--Kristine-Paulus--CC-BY.jpg',
      credit: 'Kristine Paulus',
      creditUrl: '',
      license: 'CC-BY-SA 2.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    },
    colors: ['blue', 'pink', 'white'],
    spacingIn: {
      min: 8,
      max: 10,
    },
    heightIn: {
      min: 7,
      max: 12,
    },
    bloomSeason: 'spring',
    light: 'full sun/partial shade',
    soil: 'well-drained, occasionally wet',
    usdaZone: {
      min: 3,
      max: 8,
    },
    other: ['biennial'],
    description: {
      text:
        'Myosotis is a genus of flowering plants in the family Boraginaceae. The name comes from the Ancient Greek, which the foliage is thought to resemble. In the northern hemisphere they are colloquially denominated forget-me-nots or scorpion grasses.',
      credit: '',
      url: '',
    },
    rating: 4,
    numReviews: 4,
  },
  {
    _id: '4',
    commonName: 'foxglove',
    scientificName: 'digitalis purpurea',
    image1: {
      src: 'slawek-k-qOW5oeANw5E-unsplash-foxglove.jpg',
      sourceUrl: 'https://unsplash.com/photos/qOW5oeANw5E',
      credit: 'Slawek K',
      creditUrl: 'https://unsplash.com/@s1awek',
      license: '',
      licenseUrl: '',
    },
    image2: {
      src: '',
      sourceUrl: '',
      credit: '',
      creditUrl: '',
      license: '',
      licenseUrl: '',
    },
    colors: ['cream, pink, purple, white'],
    spacingIn: {
      min: 18,
      max: 24,
    },
    heightIn: {
      min: 36,
      max: 60,
    },
    bloomSeason: 'early summer',
    light: 'full sun/partial shade',
    soil: 'moist, well-drained',
    usdaZone: {
      min: 4,
      max: 9,
    },
    other: ['toxic', 'biennial'],
    description: {
      text:
        'The plant is a popular garden subject, with many cultivars available. It is the original source of the heart medicine digoxin (also called digitalis or digitalin). This biennial plant grows as a rosette of leaves in the first year after sowing, before flowering and then dying in the second year (i.e. it is monocarpic). It generally produces enough seeds, however, so that new plants will continue to grow in a garden setting.',
      credit: '',
      url: '',
    },
    rating: 4,
    numReviews: 4,
  },
];

export default plants;
