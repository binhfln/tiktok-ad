require("dotenv").config();
const axios = require("axios");

const authCode = process.env.AUTH_CODE;
const appId = process.env.APP_ID;
const secret = process.env.SECRET;
const accessTokenUrl = `https://business-api.tiktok.com/open_api/v1.3/oauth2/access_token/`;

(async () => {
  const body = {
    secret,
    app_id: appId,
    auth_code: authCode,
  };
  const res = await axios.post(accessTokenUrl, body);

  console.log(res.data);
})();
