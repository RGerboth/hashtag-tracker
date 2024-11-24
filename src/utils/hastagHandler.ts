import { Hashtag } from "../models/Hashtag"

const extractHashtags = (tweet: string): string[] => {
  const matches = tweet.match(/#\w+/g);
  return matches ? matches : [];
};

async function handleTags(tweet: string) {
  try {
    // separate tags into arrray
    const hashtags: string[] = extractHashtags(tweet)
    // process array
    if (hashtags.length > 0) {
      const promiseArray = hashtags.map(async tag => {
        //  check for existing tag, tolowercase, increment count if found
        const formattedTag = tag.toLowerCase()
        const existingTag: any = await Hashtag.findOne({ where: { tag: formattedTag } })
        if (existingTag) {
          const updateTag = {
            tag: formattedTag,
            count: existingTag.count += 1
          }
          await Hashtag.update(updateTag, { where: { id: existingTag.id } })
        } else {
          const newTag = {
            tag: formattedTag,
            count: 1
          }
          await Hashtag.create(newTag)
        }
      })
      await Promise.allSettled(promiseArray)
    }
    return
  } catch (error) {
    console.log(error)
  }
}

export default handleTags 