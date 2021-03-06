import axios from "axios";
import { promiseWrapper } from "./index";


const DOMAIN = "http://127.0.0.1:3000";


function formatURL(path) {
  return `${DOMAIN}${path}`;
}

function httpWrapper(p) {
  return new Promise((resolve, reject) => {
    p.then((response) => {
      const { data: { code, data } } = response;
      if (code !== 0) {
        const e = Error(`HTTP response error: ${code}`);
        return reject(e);
      }
      return resolve(data);
    }).catch(reject);
  });
}


function getPostList() {
  return promiseWrapper(
    httpWrapper(
      axios.get(formatURL(`/api/posts`))
    )
  );
}

function getPost(id) {
  return promiseWrapper(
    httpWrapper(
      axios.get(formatURL(`/api/post/${id}`))
    )
  );
}

function getUploadToken() {
  return promiseWrapper(
    httpWrapper(
      axios.get(formatURL(`/api/upload_token`))
    )
  );
}

function createPost(data) {
  return promiseWrapper(
    httpWrapper(
      axios.post(formatURL(`/api/posts`), data)
    )
  );
}


export {
  getPostList,
  getPost,
  getUploadToken,
  createPost
};
