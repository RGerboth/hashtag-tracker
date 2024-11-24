import express from 'express';
const router = express.Router();
const hashtagController = require("../controllers/hashtagController")

router.get('/trending-hashtags',
  async (req, res) => {
    console.log("You are here, trending-hashtags")
    try { 
      const result = await hashtagController.trendingTags(req, res)
      res.send(result)
    } catch (error) {
      res.send(error);
    }
})

module.exports = router;
