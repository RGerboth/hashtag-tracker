"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hashtag_1 = require("../models/Hashtag");
const extractHashtags = (tweet) => {
    const matches = tweet.match(/#\w+/g);
    return matches ? matches : [];
};
function handleTags(tweet) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // separate tags into arrray
            const hashtags = extractHashtags(tweet);
            // process array
            if (hashtags.length > 0) {
                const promiseArray = hashtags.map((tag) => __awaiter(this, void 0, void 0, function* () {
                    //  check for existing tag, tolowercase, increment count if found
                    const formattedTag = tag.toLowerCase();
                    const existingTag = yield Hashtag_1.Hashtag.findOne({ where: { tag: formattedTag } });
                    if (existingTag) {
                        const updateTag = {
                            tag: formattedTag,
                            count: existingTag.count += 1
                        };
                        yield Hashtag_1.Hashtag.update(updateTag, { where: { id: existingTag.id } });
                    }
                    else {
                        const newTag = {
                            tag: formattedTag,
                            count: 1
                        };
                        yield Hashtag_1.Hashtag.create(newTag);
                    }
                }));
                yield Promise.allSettled(promiseArray);
            }
            return;
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.default = handleTags;
