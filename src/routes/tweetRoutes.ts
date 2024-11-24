import express from 'express';
const router = express.Router();
import { body, query, validationResult } from 'express-validator';
const tweetController = require('../controllers/tweetController')

router.post('/tweet', 
    body('tweet').notEmpty().withMessage("tweet text is a required string"), // validate the request, only one input field. 
    async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const result = await tweetController.handleTweet(req, res)
      res.send(result) 
    } else {
      res.send({ errors: errors.array() });
    }
  })

module.exports = router;
