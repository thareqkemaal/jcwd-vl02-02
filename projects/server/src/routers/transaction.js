const express = require('express');
const { transactionController } = require('../controllers');
const { readToken } = require('../config/encript');
const { uploader } = require('../config/upload');
const route = express.Router();

const prescriptionUploader = uploader('/prescription', 'prescription').array('prescription_pic', 1);
const paymentProofUploader = uploader('/paymentproof', 'paymentproof').array('paymentproof_pic', 1);

route.get('/all', transactionController.getTransaction)

// PRESCRIPTION

route.post('/addprescription', prescriptionUploader, readToken, transactionController.addTransaction);
route.post('/add', readToken, transactionController.addTransaction);

// PAYMENT PROOF
route.patch('/addproof', paymentProofUploader, readToken, transactionController.updateTransaction);
route.patch('/update', transactionController.updateTransaction)

module.exports = route