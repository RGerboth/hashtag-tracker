import { Request, Response, NextFunction } from "express";
import velocityHandler from "../utils/velocityHandler";

module.exports = {
  async trendingTags(req: Request, res: Response, next: NextFunction) {
    try {
      const trendingHashtags = await velocityHandler();
      return { success: true, hashtags: trendingHashtags || [] };
    } catch (error) {
      console.log(error);
      return { success: false, message: error };
    }
  },
};
