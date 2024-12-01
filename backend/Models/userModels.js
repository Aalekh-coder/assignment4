// import { Schema,model } from "mongoose";
// const userSchema = new Schema(
//   {
//     fullName: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//       lowercase: true,
//       match: [
//         /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
//         "Please enter a valid email address",
//       ],
//     },
//     password: {
//       type: String,
//       required: true,
//       minlength: 6,
//     },
//     dob: {
//       type: String,
//       required: true,
//     },
//     phone: {
//       type: String,
//       required: true,
//       unique: true,
      
//     },
//   },
//   { timestamps: true }
// );
// const User = model("User", userSchema);
// export default User;


import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    dob: {
      type: String,
      required: true,
      match: [
        /^\d{2}\/\d{2}\/\d{2}$/,
        "Date of birth must be in MM/DD/YY format",
      ],
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\+91\d{10}$/,
        "Phone number must start with +91 followed by 10 digits",
      ],
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
