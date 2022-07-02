/* eslint-disable no-undef */
export const API_KEYS = {
  SPOON_API_KEY: IS_DEV ? process.env.SPOON_API_KEY : SPOON_API_KEY,
  FB_API_KEYS: {
    apiKey: IS_DEV ? process.env.FB_API_KEY : FB_API_KEY,
    authDomain: "lifeafterdiets-30c24.firebaseapp.com",
    databaseURL: "https://lifeafterdiets-30c24-default-rtdb.firebaseio.com",
    projectId: "lifeafterdiets-30c24",
    storageBucket: "lifeafterdiets-30c24.appspot.com",
    messagingSenderId: "543791507558",
    appId: "1:543791507558:web:8aae671c3298a6b16365a7",
    measurementId: "G-1EXMBFBYM8",
  },
};
