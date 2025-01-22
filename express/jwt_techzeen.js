const express = require('express')
const app = express();

const jwt = require('jsonwebtoken')  // jsonwebtoken
const secretkey = 'maddy123@!';

// Middleware to parse JSON requests
app.use(express.json());


// Login Endpoint
app.post('/login', (req, res) => {
    const user = {
        name: 'Maddy Mirza',
        email: 'maddymirza@gmail.com'
    };

    // Generate Token
    const token = jwt.sign({ user }, secretkey, { expiresIn: '500s' });
    res.status(200).json({ token }); // Responding with the token in an object
});


// Middleware to Verify Token
const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if (bearerHeader) {
        const token = bearerHeader.split(' ')[1]; // Extract token
        req.token = token;
        next();
    } else {
        res.status(403).json({ message: 'Access Denied: Token is missing or invalid' });
    }
};


// Protected Route
app.post('/protected', verifyToken, (req, res) => {
    jwt.verify(req.token, secretkey, (err, authData) => {
        if (err) {
            res.status(403).json({ message: 'Unauthorized: Invalid token' });
        } else {
            res.status(200).json({
                message: 'You are an authorized user',
                authData
            });
        }
    });
});


// Start the Server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});