import express from 'express';
import bodyParser from 'body-parser';
import { jewellery } from '../model/index.js';

const jewelleryRouter = express.Router();

jewelleryRouter.get('/', (req, res)=>{
    try {
        jewellery.fetchJewellery(req, res);
    } catch(e){
        res.json({
            status: res.statusCode,
            msg: "Failed to retrieve jewellery items."
        })
    }
})

jewelleryRouter.get('/:id', (req, res)=>{
    try {
        jewellery.fetchJewel(req, res);
    } catch(e){
        res.json({
            status: res.statusCode,
            msg: "Failed to retrieve jewellery items."
        })
    }
})

jewelleryRouter.post('/addJewel', bodyParser.json(), (req, res)=>{
    try {
        jewellery.addJewel(req, res);
    } catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to add jewellery item."
        })
    }
})

jewelleryRouter.delete('/deleteJewel/:id', bodyParser.json(), (req, res)=>{
    try {
        jewellery.deleteJewel(req, res);
    } catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to delete jewellery item."
        })
    }
})

jewelleryRouter.patch('/updateJewel/:id', bodyParser.json(), (req, res)=>{
    try {
        jewellery.updateJewel(req, res);
    } catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to update jewellery items."
        })
    }
})

export {
    jewelleryRouter
}