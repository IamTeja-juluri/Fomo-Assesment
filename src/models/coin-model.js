const mongoose = require("mongoose")
const coinSchema = new mongoose.Schema({
    name: String,
    symbol: String,
    rank: Number,
    age: Number,
    color: String,
    png32: String,
    png64: String,
    webp32: String,
    webp64: String,
    exchanges: Number,
    markets: Number,
    pairs: Number,
    categories: [String],
    allTimeHighUSD: Number,
    circulatingSupply: Number,
    totalSupply: Number,
    maxSupply: Number,
    links: {
      website: String,
      whitepaper: String,
      twitter: String,
      reddit: String,
      telegram: String,
      discord: String,
      medium: String,
      instagram: String,
      tiktok: String,
      youtube: String,
      linkedin: String,
      twitch: String,
      spotify: String,
      naver: String,
      wechat: String,
      soundcloud: String,
    },
    code: String,
    rate: Number,
    volume: Number,
    cap: Number,
    delta: {
      hour: Number,
      day: Number,
      week: Number,
      month: Number,
      quarter: Number,
      year: Number
    }
  },{timestamps:true});


const coin = mongoose.model('coin',coinSchema)
module.exports = coin