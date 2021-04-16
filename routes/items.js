const express = require('express');
const router = express.Router();

let Item = require('../models/items-model');

router.route('/').get((req,res) => {
  Item.find()
  .then(items => res.json(items))
  .catch(err => res.status(400).json('Error: ' +err));
  });

  router.route('/test').get((req,res) => {
    return res.status(200).json({'text': 'ciao' })
    });

    router.route('/shortdesc').post((req, res) => {

      let itemDescription = req.body;
       let itemDescriptionStr = JSON.stringify(itemDescription);
      console.log(req);
      return res.status(200).json(itemDescriptionStr.substring(0,20));
    });
  


module.exports = router;
