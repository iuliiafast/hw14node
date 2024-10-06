import Category from '../models/Category.js';

export const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: "Failed to create category" });
  }
};

export const initializeCategories = async (req, res) => {
  try {
    const categories = await Category.insertMany([
      { name: "Electronics" },
      { name: "Books" }
    ]);
    res.status(201).json(categories);
  } catch (error) {
    res.status(400).json({ error: "Failed to create categories" });
  }
};
