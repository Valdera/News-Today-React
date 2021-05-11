import axios from 'axios';

/*I cant get the data directly from line API because CORS issue, so I made a simple API to connect with line Today API and deploy it on Heroku (Source Code API: https://github.com/Valdera/NewsToday-API)*/
export const getNews = async () => {
  const data = await axios.get(
    'https://immense-depths-27555.herokuapp.com/line',
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }
  );

  return data.data.result.categories;
};
