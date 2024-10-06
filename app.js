import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
/*import Category from './models/Category.js';
import Product from './models/Product.js';*/
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error));

app.get('/', (req, res) => {
  res.send('Hello, Mongoose!');
});

/*app.post('/categories', async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: "Failed to create category" });
  }
});

app.post('/initialize-categories', async (req, res) => {
  try {
    const categories = await Category.insertMany([
      { name: "Electronics" },
      { name: "Books" }
    ]);
    res.status(201).json(categories);
  } catch (error) {
    res.status(400).json({ error: "Failed to create categories" });
  }
});

app.post('/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: "Failed to create product" });
  }
});

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});*/
app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);
