const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'contact_form_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

app.post('/submit_form', 
  // validation rules
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('message').notEmpty().withMessage('Message is required')
  ], 
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // handle errors
      res.status(400).json({ errors: errors.array() });
    } else {
      const sql = 'INSERT INTO contacts SET ?';
      const contact = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
      };

      // using a prepared statement to prevent SQL injection
      db.query(sql, contact, (err, result) => {
        if (err) throw err;
        console.log('Contact saved to database');
        res.redirect('/');
      });
    }
  }
);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
