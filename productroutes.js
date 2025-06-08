// productroutes.js
import express from 'express';
import formidable from 'express-formidable';
import { createproductcontroller, deleteproductcontroller, getpersondatacontroller, getproductcontroller, persondatacontroller } from './productcontroller.js';

const router = express.Router();

router.post('/create-product', formidable(), createproductcontroller);
router.get('/get-product',  getproductcontroller);
router.delete('/delete-products/:pid',deleteproductcontroller)
router.post('/person-data',persondatacontroller)
router.get('/getperson-data',getpersondatacontroller)
export default router; // ✅ This line fixes the issue

//https://github.com/sabihkahn/ecom.git