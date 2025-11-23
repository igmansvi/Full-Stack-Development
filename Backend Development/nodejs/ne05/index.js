import express from 'express';
import { body, validationResult } from 'express-validator';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello, world!");
})

app.post('/form', [
    body('name')
    .notEmpty()
    .withMessage("name is required"),

    body('email')
    .isEmail()
    .withMessage("email is required"),

    body('password')
    .isLength({min: 8})
    .withMessage("password length must be 8 characters")
], (req, res) => {
    const error = validationResult(req);
    if(!error.isEmpty()) {
        return res.json(error);
    } else {
        res.send("registration successful");
    }
})

app.listen(3000, () => {
    console.log(`running on: http://localhost:3000/form`)
})