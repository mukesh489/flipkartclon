import mongoose from 'mongoose';

const Connection = async () => {
    const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ecommerce-website.ybiut.mongodb.net/?retryWrites=true&w=majority&appName=ECommerce-Website`;

    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000,  // 10 seconds
            socketTimeoutMS: 60000,  // 60 seconds
        });
        console.log('Database Connected Successfully');

        // Define a schema and model for your collection
        const productSchema = new mongoose.Schema({
            name: { type: String, required: true },
            price: { type: Number, required: true },
            description: { type: String, required: true }
        });

        const Product = mongoose.model('Product', productSchema);

        // Example of inserting a document
        const sampleProduct = new Product({
            name: 'Sample Product',
            price: 100,
            description: 'This is a sample product.'
        });

        await sampleProduct.save();
        console.log('Sample product saved successfully.');

    } catch (error) {
        console.error('Database connection error:', error);
    }
};

export default Connection;
