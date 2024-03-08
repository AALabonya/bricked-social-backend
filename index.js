const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(express.static('public'));

app.use(cors());
app.use(express.json());

const connecting = () => {
    const uri = `mongodb+srv://brickedSocialDB:6uLaKCS0xbOLLQM6@cluster0.waps95s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    return uri;
}

const connectDB = async () => {
    console.log('testing.....');
    const test = connecting();
    await mongoose.connect(test, { dbName: 'BrickedSocialDB' })
    console.log('connected');
}

const final = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

final()