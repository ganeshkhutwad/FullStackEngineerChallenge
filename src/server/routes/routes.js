/**
    - It contains all REST APIs.
    @author Ganesh Khutwad.
 */
const path = require('path');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const assert = require('assert');

const url = 'mongodb://localhost/emp_feedback';

// All REST Endpoints.
const appRouter = function (app) {
    
    // root endpoint to access document file.
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../../../build', 'index.html'));
    });

    // To get employee. 
    app.get('/employee', (req, res) => {
        const userId = req.headers['userid'];
        let cursor;

        MongoClient.connect(url, (err, database) => {
            assert.equal(null, err);
            const myDb = database.db('emp_feedback');
            myDb.collection('employees').findOne({_id: new ObjectId(userId)}, function(err, user) {
                assert.equal(null, err);

                if (user.role === 'admin') {
                    cursor = myDb.collection('employees').find({role: 'employee'});
                } else if (user.role === 'employee') {
                    const  reviewsList= user.reviews.map(id => new ObjectId(id));
                    cursor = myDb.collection('employees').find({_id: {$in: reviewsList}});
                } else {
                    console.log('Invalid role');
                    res.status(404).send('Not found...');
                }
                cursor.toArray(function(err, docs) {
                    assert.equal(null, err);
                    res.status(200).send(docs);
                });
    
                database.close();
            });
        });
    });

    // To post employee. 
    app.post('/employee', (req, res) => {
        const employee = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            reviews: req.body.reviews ? req.body.reviews : [],
            role: 'employee',
            isActive: true,
            permissions: [{
                _id: 'perfReview',
                title: "Performance Reviews",
                description: "Participate in performance reviews.",
            }]
        };

        MongoClient.connect(url, (err, database) => {
            assert.equal(null, err);
            const myDb = database.db('emp_feedback');
            myDb.collection('employees').insertOne(employee, function(err, result) {
                assert.equal(null, err);
                res.status(200).send();
                database.close();
            });
        });
    });
    
    // To login
    app.post('/login', (req, res) => {
        const credentials = {
            email: req.body.email,
            password: req.body.password
        };

        MongoClient.connect(url, (err, database) => {
            const myDb = database.db('emp_feedback');
            myDb.collection('employees').findOne({email: credentials.email}, function(err, result) {
                assert.equal(null, err);
                res.status(200).send(result);
                database.close();
            });
        });
    });

    // To feedback questions. 
    app.get('/feedbackQuestion', (req, res) => {
        let cursor;

        MongoClient.connect(url, (err, database) => {
            assert.equal(null, err);
            const myDb = database.db('emp_feedback');
            cursor = myDb.collection('review_metrics').find();
            cursor.toArray(function(err, docs) {
                assert.equal(null, err);
                res.status(200).send(docs);
                database.close();
            });
        });
    });

    // To add feedback.
    app.put('/feedbackQuestion', (req, res) => {
        const feedback = req.body.feedback;
        const empId = req.body.empId;

        MongoClient.connect(url, (err, database) => {
            const myDb = database.db('emp_feedback');
            myDb.collection('employees').findOne({_id: new ObjectId(empId)}, function(err, employee) {
                assert.equal(null, err);
                let feedbacks;
                if (employee.feedbacks) {
                    feedbacks = [...employee.feedbacks, feedback];
                } else {
                    feedbacks = [feedback];
                }
                myDb.collection('employees').updateOne({_id: new ObjectId(empId)}, {$set: {feedbacks}}, function(err, result) {
                    assert.equal(null, err);
                    res.status(200).send();
                    database.close();
                });
            });
        });
    });
};

module.exports = appRouter;