import applyCaseMiddleware from 'axios-case-converter'
import axios from 'axios'

const options = {
  ignoreHeaders: true,
}

const client = applyCaseMiddleware(
  axios.create({
    baseURL: 'http://localhost:3002/api/v1',
    headers: {
      "Content-Type": "multipart/form-data" // 画像ファイルを取り扱うのでform-dataで送信
    }
  }),
  options
);

export default client;
