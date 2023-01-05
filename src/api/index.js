// promise 요청 타임아웃 시간 선언
import {Method} from "axios";

const TIME_OUT = 300*1000;

export const fetchCall = async (url, method, body) => {
  const option = {
    method: method,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(body)
  };

  const data = await getPromise(url, option).catch(() => {
    return statusError;
  });

  // @ts-ignore
  if (parseInt(Number(data.status)/100)===2) {
    const status = data.ok;
    const code = data.status;
    const text = await data.text();
    const json = text.length ? JSON.parse(text) : "";

    return {
      status,
      code,
      json
    };
  } else {
    return data;
  }
};

// promise 타임아웃 처리
const timeoutPromise = () => {
  return new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), TIME_OUT));
};

// promise 요청
const getPromise = async (url, option) => {
  return await Promise.race([
    fetch(`http://localhost:8080${url}`, option),
    timeoutPromise()
  ]);
};

const statusError = {
  status: false,
  json: {
    error: ["연결이 원활하지 않습니다. 잠시 후 다시 시도해 주세요"]
  }
};
