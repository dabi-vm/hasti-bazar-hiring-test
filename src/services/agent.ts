import axios, { AxiosResponse } from "axios";
import { ILinkItem } from "../models/links";

// config axios default options
axios.interceptors.request.use(
  async (config) => {
    config.baseURL = `http://localhost:8000/`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(undefined, (error) => {
  if (!error.response) {
    throw error;
  }
  const { status, data, config } = error.response;
  const ExceptedError = status && status >= 400 && status < 500;
  if (!ExceptedError) {
    alert("a server error accrued. call to manager");
    console.log("error mess: ", data, config);
  }
  throw error.response;
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
};

// API's requests
const Links = {
  list: (limit: number = 100, page: number = 1): Promise<ILinkItem[]> =>
    requests.get(`/LinksList?_page=${page}&limit=${limit}`),
  postLink: (form: ILinkItem): Promise<any> =>
    requests.post("/LinksList", form),
  editLink: (form: ILinkItem): Promise<any> =>
    requests.put(`/LinksList/${form.id}`, form),
  removeLink: (id: string): Promise<any> => requests.del(`/LinksList/${id}`),
};

export default { Links };
