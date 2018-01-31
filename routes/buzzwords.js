const express = require('express');
const router = express.Router();

const collection = [];

router.get('/', (req, res) => {
    if (collection.length > 0) {
      res.json({
        buzzWords: collection
      })
    } else {
      res.json({
        error: 'the player has no words stored'
      });
    }
  })
  .post('/', (req, res) => {
    if (collection.length < 5) {
      collection.push(req.body);
      res.json({
        success: true
      })
      console.log(collection)
    } else {
      res.json({
        error: 'player cannot store more than 5 words'
      });
    }
  })
  .put('/', (req, res) => {
    let index = collection.findIndex(element => element.buzzWord === req.body.buzzWord);
    console.log(index);

    if (index >= 0) {
      collection[index].points = req.body.points;
      console.log(collection);
      res.json({
        success: true
      })
    } else {
      res.json({
        error: 'selected buzzword does not exist'
      })
    }
  })
  .delete('/', (req, res) => {
    let index = collection.findIndex(element => element.buzzWord === req.body.buzzWord);
    if (index >= 0) {
      collection.splice(index, 1);
      res.json({success: true})
    } else {
      res.json({error: 'selected buzzWord is not in the players stored words'})
    }
  })

module.exports = router;