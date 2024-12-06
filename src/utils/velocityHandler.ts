import { Hashtag } from "../models/Hashtag";

async function velocityHandler() {
  try {
    // capture existing state (order) of hashtags, order by count (DESC) to get current rank,
    // added updatedAt to help pull more recent activity to the top in case of tie on count
    const hashtags = await Hashtag.findAll({
      order: [
        ["count", "DESC"],
        ["updatedAt", "DESC"],
      ],
    });
    // build an updated response object with calculated velocity
    const formattedTags = hashtags.map((tag: any, i) => {
      const previousRank = tag.previousRank || 0;
      const currentRank = i + 1;
      tag.dataValues.velocity = previousRank - currentRank;
      return tag;
    });
    // store tag with updated previousRank (previousRank = currentRank)
    const promiseArray = formattedTags.map(async (tag: any, i) => {
      const data = {
        previousRank: i + 1,
      };
      await Hashtag.update(data, { where: { id: tag.id } });
    });
    await Promise.all(promiseArray);
    return formattedTags;
  } catch (error) {
    console.log(error);
  }
}

export default velocityHandler;
