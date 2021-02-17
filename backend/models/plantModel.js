import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const plantSchema = mongoose.Schema(
  {
    // which Admin created plant item
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Plant must have a user name'],
      ref: 'User',
    },
    commonName: {
      type: String,
      required: [true, 'Plant must have a common name'],
      unique: true,
    },
    scientificName: {
      type: String,
      required: [true, 'Plant must have a scientific name'],
      unique: true,
    },
    image1: {
      src: {
        type: String,
        required: [true, 'Plant must have an image'],
      },
      sourceUrl: String,
      credit: String,
      creditUrl: String,
      license: String,
      licenseUrl: String,
    },
    image2: {
      src: String,
      sourceUrl: String,
      credit: String,
      creditUrl: String,
      license: String,
      licenseUrl: String,
    },
    colors: [String],
    spacingIn: {
      min: Number,
      max: Number,
    },
    heightIn: {
      min: Number,
      max: Number,
    },
    bloomSeason: String,
    light: String,
    soil: String,
    usdaZone: {
      min: Number,
      max: Number,
    },
    other: [String],
    description: {
      text: String,
      credit: String,
      url: String,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    numCollections: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Plant = mongoose.model('Plant', plantSchema);

export default Plant;
