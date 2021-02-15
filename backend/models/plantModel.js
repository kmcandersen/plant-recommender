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
      required: true,
      ref: 'User',
    },
    commonName: {
      type: String,
      required: true,
      unique: true,
    },
    scientificName: {
      type: String,
      required: true,
      unique: true,
    },
    image1: {
      src: String,
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
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Plant = mongoose.model('Plant', plantSchema);

export default Plant;
