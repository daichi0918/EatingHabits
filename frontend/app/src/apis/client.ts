import applyCaseMiddleware from 'axios-case-converter'
import axios from 'axios'

import { DEFAULT_API_LOCALHOST } from '../../src/urls'

const options = {
  ignoreHeaders: true,
}

const client = applyCaseMiddleware(
  axios.create({
    baseURL: DEFAULT_API_LOCALHOST,
    headers: {
      "Content-Type": "multipart/form-data" // 画像ファイルを取り扱うのでform-dataで送信
    }
  }),
  options
);

export default client;
