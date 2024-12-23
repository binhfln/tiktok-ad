const axios = require("axios");
require("dotenv").config();

const access_token = process.env.ACCESS_TOKEN;

const ttRes = {
  code: 0,
  message: "OK",
  request_id: "2024122306503006287AF4BA8B85B67205",
  data: {
    advertiser_ids: [
      "7263034332447653889",
      "7267871318970826754",
      "7337902402957426690",
      "7339765686652305410",
      "7339766226219991041",
      "7350226932639727617",
      "7350227263293538305",
      "7350227403857461249",
      "7358304306782765073",
      "7358304596529512464",
      "7358304926985994256",
      "7358305138265751568",
      "7358305405891821584",
      "7358305742513831937",
      "7358305987599663120",
      "7376842778984169489",
      "7376843226789003281",
      "7376843482596999184",
      "7376843720886632449",
      "7376844141600292880",
      "7376844475760443393",
      "7376844706086584337",
      "7376844904070381584",
      "7376845180651208705",
      "7376845592573640720",
      "7376848554846961665",
      "7376849294625669121",
      "7376849741675626512",
      "7376850005652570129",
      "7376850249119301648",
      "7376850419269582864",
      "7376850594969206800",
      "7376850888968781841",
      "7376851123442941968",
      "7376851411444924432",
    ],
    scope: [
      17000000, 1, 2, 3, 4, 64, 65, 66, 7050363942434079000,
      7176833266039685000, 7130572512626360000, 67, 68, 69, 6100000, 6110000,
      60, 61, 62, 63,
    ],
  },
};
const baseUrl = "https://business-api.tiktok.com/open_api/v1.3/";
axios.interceptors.request.use(
  function (config) {
    config.baseURL = baseUrl;
    config.headers = {
      "Access-Token": access_token,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

(async () => {
  const params = {
    advertiser_id: "7358304306782765073",
    // filtering: JSON.stringify({ campaign_ids: ["1801643702467633"] }),
  };

  //* get ad group
  // const res = await axios.get("adgroup/get/", {
  //   params,
  // });

  //*get campaign
  const res = await axios.get("campaign/get/", {
    params: params,
  });
  console.log(JSON.stringify(res.data));
})();
