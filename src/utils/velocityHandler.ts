import { Hashtag } from "../models/Hashtag";

async function velocityHandler() {
  try {
    // capture existing state (order) of hashtags, order by count (DESC) to get current rank
    const hashtags = await Hashtag.findAll({
      order: [["count", "DESC"]],
      // limit: 25
    });
    const hashtagHashmap = hashtags.reduce((map: any, obj: any) => {
      map[obj.tag] = obj.previousRank;
      return map;
    }, {});
    let formattedTags: any[] = []; // build an updated response object
    hashtags.forEach((tag: any, i) => {
      const previousRank = hashtagHashmap[tag.tag] || 0;
      const currentRank = i + 1;
      tag.previousRank = currentRank;
      tag.dataValues.velocity = previousRank - currentRank;
      formattedTags.push(tag);
    });
    const promiseArray = formattedTags.map(async (tag: any, i) => {
      // store updated tag with previousRank
      const data = {
        previousRank: tag.previousRank,
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
