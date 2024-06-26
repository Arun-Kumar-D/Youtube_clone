//const GOOGLE_API_KEY = "AIzaSyBwwxtfERSjq3iqhfXYk3GAvN1CfKUSzWI"
//export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${GOOGLE_API_KEY}`;
//export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="



const GOOGLE_API_KEY = "AIzaSyDbW_oPhAp309IgCXXgD-5lDXmo8sCicdo";

const GOOGLE_API_KEY2 = "AIzaSyBEaIh3AuOoEc9gRLiFKi0fwz_wFnFzeQA";

const GOOGLE_API_KEY3 = "AIzaSyBnf3Y0qm3-Gg9HMtFgcCWNbwrhGHnmcGI";

const GOOGLE_API_KEY4 = "AIzaSyBg_nk3cxIJi9kbfWkEI4j_EfYuYLBCaw4";

const RAILWAY_PROXY_URL = "https://web-production-bc5cc.up.railway.app/";

export const PROXY_URL = "https://cors-anywhere-5d5n.onrender.com/";

export const YOUTUBE_VIDEOS_API =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=` +
  GOOGLE_API_KEY;

export const YOUTUBE_CHANNELS_API =
  `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=` +
  GOOGLE_API_KEY2 +
  `&id=`;

export const YOUTUBE_VIDEO_PLAYER_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&key=" +
  GOOGLE_API_KEY +
  "&videoId=";

export const buildVideoApiUrl = (videoId) => {
  return (
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=` +
    GOOGLE_API_KEY2
  );
};

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=AIzaSyDbW_oPhAp309IgCXXgD-5lDXmo8sCicdo&id=gHnWkmW6qRI

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const searchResultsApi = (searchQuery) => {
  return (
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${searchQuery}&key=` +
    GOOGLE_API_KEY3
  );
};

export const LIVE_CHAT_LIMIT = 50;
