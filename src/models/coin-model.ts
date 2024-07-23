import mongoose, { Schema ,Document,Model} from "mongoose";

interface ICoin extends Document {
  name: string;
  symbol: string;
  rank: number;
  age: number;
  color: string;
  png32: string;
  png64: string;
  webp32: string;
  webp64: string;
  exchanges: number;
  markets: number;
  pairs: number;
  categories: string[];
  allTimeHighUSD: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number;
  links: {
      website: string;
      whitepaper: string;
      twitter: string;
      reddit: string;
      telegram: string;
      discord: string;
      medium: string;
      instagram: string;
      tiktok: string;
      youtube: string;
      linkedin: string;
      twitch: string;
      spotify: string;
      naver: string;
      wechat: string;
      soundcloud: string;
  };
  code: string;
  rate: number;
  volume: number;
  cap: number;
  delta: {
      hour: number;
      day: number;
      week: number;
      month: number;
      quarter: number;
      year: number;
  };
}

const coinSchema : Schema<ICoin> = new mongoose.Schema({
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


const Coin: Model<ICoin> = mongoose.model<ICoin>('Coin',coinSchema)
export default Coin;
export type { ICoin };

