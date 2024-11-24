
import { Request, Response, NextFunction } from "express"
import { Hashtag } from "../models/Hashtag"
import { sequelize } from "../models";

module.exports = {
  async trendingTags(req: Request, res: Response, next: NextFunction) {
    try { 
      const trendingHashtags = await Hashtag.findAll({
        order: sequelize.literal('max(count) DESC'),
        group: ["id"],
        limit: 25
      });
      const formattedTags = trendingHashtags.map(tag => {
        return tag.tag
      })
      return ({success: true, hashtags: formattedTags || []})
    } catch (error) {
      console.log(error)
      return ({success: false, message: error})
    }
  }
}