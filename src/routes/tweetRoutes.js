const express= require("express");
const { getTweets, postTweets, putTweets, deleteTweet ,patchTweet} = require("../controller/tweetController");
const router= express.Router();

router.get("/", getTweets)

router.post("/", postTweets)

router.put("/", putTweets) 

router.delete("/", deleteTweet)




module.exports= router;