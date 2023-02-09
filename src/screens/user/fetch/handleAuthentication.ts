import axios from 'axios';
import {host} from '../url/base';

export type LoginUser = {
  email: string;
  password: string;
};

export type PhoneNumber = {
  ph_number: string;
  callingCode: string;
  code: string;
  name: string;
  region: string;
  subregion: string;
};

export type RegisterUser = {
  first: string;
  last: string;
  email: string;
  password: string;
  phone: string;
};

const loginUser = async (dataForm: LoginUser) => {
  return await axios({
    method: 'post',
    url: `${host}/api/user/login`,
    headers: {
      'content-type': 'application/json',
    },
    data: JSON.stringify(dataForm),
  })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
      return err;
    });
};

const registerUser = async (dataForm: RegisterUser) => {
  return await axios({
    method: 'post',
    url: `${host}/api/user`,
    headers: {
      'content-type': 'application/json',
    },
    data: dataForm,
  })
    .then(res => res)
    .catch(err => {
      console.error(err);
      return err;
    });
};

export {loginUser, registerUser};
