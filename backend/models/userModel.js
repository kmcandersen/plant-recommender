import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'User must have a name'],
    },
    email: {
      type: String,
      required: [true, 'User must have an email address'],
      unique: true,
    },
    usdaZone: {
      type: Number,
    },
    plantCollection: [mongoose.Schema.Types.ObjectId],
    password: {
      type: String,
      required: [true, 'User must have a password'],
    },
    isAdmin: {
      type: Boolean,
      required: [true, 'User account must include Admin indicator'],
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
