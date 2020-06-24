require('dotenv').config();

const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const config = require('../util/config');
const User = require('../models/user');
const Product = require('../models/product');

// execute seed
connectToMongoDB()
    .then(async () => {
        return await addAdminUser();
    })
    .then(async user => {
        return await addProducts(user);
    })
    .then(async () => {
        console.log('Seeding data success!');
        process.exit();
    }).catch(err => {
        console.log('An error occurred while seeding data', err);
        process.exit(1);
    });

async function connectToMongoDB() {
    await mongoose.connect(
        config.MONGODB_URI,
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Connected to MongoDB!");
}

async function addAdminUser() {
    const adminUserPath = path.join(__dirname, 'admin-user.json');
    const adminUser = JSON.parse(fs.readFileSync(adminUserPath));

    const user = await User.findOne({ email: adminUser.email });
    if (user) {
        console.log(`User ${user.id} already exists`);
        return user;
    } else {
        const hashedPassword = await bcrypt.hash(adminUser.password, 12);
        const admin = new User({
            email: adminUser.email,
            password: hashedPassword,
            isAdmin: true,
            cart: { items: [] },
        });
        console.log(`User ${admin.id} created!`);
        return await admin.save();
    }
}

async function addProducts(user) {
    const productsPath = path.join(__dirname, 'products.json');
    const products = JSON.parse(fs.readFileSync(productsPath));

    for (const p of products) {
        const product = await Product.findById(p._id);
        if (!product) {
            const newProduct = new Product({
                _id: p._id,
                title: p.title,
                imageUrl: p.imageUrl,
                price: p.price,
                description: p.description,
                userId: user._id,
            });
            await newProduct.save();
            console.log(`Product ${newProduct.id} created!`);
        } else {
            console.log(`Product ${product.id} already exists!`);
        }
    }
}
