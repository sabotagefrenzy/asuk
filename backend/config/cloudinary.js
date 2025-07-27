import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = () => {
  try {
    // Correct: Pass a single configuration object
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // <-- Standard name
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET, // <-- Standard name
    });
    console.log("Cloudinary connected successfully.");
  } catch (error) {
    console.error("Cloudinary connection error:", error);
  }
};

export default connectCloudinary;
