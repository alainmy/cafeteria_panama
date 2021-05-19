
import axios from 'axios';
//import URI from './apiuri.js';
// const filePath = 'data.json';
// const data = require(filePath);
const data = require('./data.json');
const URI = 'https://www.backend.nelosoftt.com/api-nelo';

const config = {
       headers: {
            'Content-type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers':'*',
            'cache-control': 'no-cache'
          }
    };

const getItems = async (currentIndex,countPerPage) => {
    return axios.get(`${URI}/items`,{},config)
      .then(res => res.data)
    return new Promise((resolve,reject) =>{
      setTimeout(() =>{
       resolve(movieData);
      //    reject("Cannot fetch data!")
      },2000);
    });
  }

export default getItems;