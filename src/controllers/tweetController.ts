
import { Request, Response, NextFunction } from "express"
import { Tweet } from "../models/Tweet"
import handleTags from "../utils/hastagHandler"

module.exports = {
  async handleTweet(req: Request, res: Response, next: NextFunction) {
    try { 
      const tweet = req.body.tweet
      const newTweet = await Tweet.create({ text: tweet });
      if (newTweet) {
        handleTags(tweet)
      }
      return ({success: true, message: newTweet})
    } catch (error) {
      console.log(error)
      return ({success: false, message: error})
    }
  }
}