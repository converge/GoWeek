const Tweet = require('../models/Tweet')

module.exports = {

  async index(req, res) {
    const tweets = await Tweet.find({}).sort('-createdAt')
    return res.json(tweets)
  },

  async store(req, res) {
    const tweets = await Tweet.create(req.body)
    req.io.emit('tweet', tweets)
    return res.json(tweets)
  }
}
