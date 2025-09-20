import { v2 as cloudinary } from "cloudinary";

import productModel from "../models/product.model.js";

//add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;

    // Get file objects from multer
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(Boolean);

    // Upload valid images to Cloudinary
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestSeller: bestSeller === "true",
      sizes: sizes ? JSON.parse(sizes) : [],
      image: imagesUrl, // This will now contain the Cloudinary URLs
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();
    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//list products
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//remove product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//single product
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Admin: Seed Oversize variants for products
// If productIds is provided, clones those; otherwise clones the latest 3 by date.
const seedOversize = async (req, res) => {
  try {
    const { productIds } = req.body || {};

    let baseProducts;
    if (Array.isArray(productIds) && productIds.length > 0) {
      baseProducts = await productModel.find({ _id: { $in: productIds } });
    } else {
      baseProducts = await productModel.find({}).sort({ date: -1 }).limit(3);
    }

    const created = [];
    for (const p of baseProducts) {
      // Skip if an Oversize variant with same base name already exists
      const oversizeName = p.name.includes("Oversize") ? p.name : `${p.name} (Oversize)`;
      const exists = await productModel.findOne({ name: oversizeName });
      if (exists) continue;

      const clone = new productModel({
        name: oversizeName,
        description: p.description,
        price: p.price,
        image: p.image, // reuse existing Cloudinary URLs
        category: p.category,
        subCategory: p.subCategory,
        sizes: ["Oversize"],
        bestSeller: !!p.bestSeller,
        date: Date.now(),
      });
      await clone.save();
      created.push(clone);
    }

    res.json({ success: true, createdCount: created.length, products: created });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { listProduct, addProduct, removeProduct, singleProduct, seedOversize };
