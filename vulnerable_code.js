import express, { Express } from "express";
import { Request, Response, NextFunction } from "express";

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const dbConfig = {
    host: 'mydatabase.com',
    user: 'admin',
    password: 'secret123',
    database: 'mydb'
};

app.use(express.json());

app.post('/submit', (req, res) => {
    try {
        const userData = JSON.parse(req.body.data);

        console.log(`User Data: ${userData.name}, ${userData.role}`);

        res.send('Data received successfully');
    } catch (error) {
        res.status(400).send('Invalid JSON');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

app.post('/merge', (req, res) => {
    const userConfig = req.body.config;

    const defaultConfig = {
        setting1: true,
        setting2: false
    };
  
    const finalConfig = { ...defaultConfig, ...userConfig };

    res.send(`Configuration: ${JSON.stringify(finalConfig)}`);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

app.post('/calculate', (req, res) => {
    const userExpression = req.body.expression;

    try {
        const result = eval(userExpression);

        res.send(`Result: ${result}`);
    } catch (error) {
        res.status(400).send('Invalid expression');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

app.get('/user/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        res.send(user);
    } catch (error) {
        // Insecure: Exposing sensitive error details
        res.status(500).send(`Internal Server Error: ${error.message}`);
    }
});

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
