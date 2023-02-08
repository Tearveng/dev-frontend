import axios from 'axios';
import {host} from '../url/base';

export type LoginUser = {
  email: string;
  password: string;
};

export type RegisterUser = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

const loginUser = async (dataForm: LoginUser) => {
  const data = await axios({
    method: 'post',
    url: `${host}/login`,
    data: dataForm,
  })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
      return err;
    });

  return data;
};

const registerUser = async (dataForm: RegisterUser) => {
  const data = await axios({
    method: 'post',
    url: `${host}/api/user`,
    data: dataForm,
  })
    .then(res => res)
    .catch(err => {
      console.error(err);
      return err;
    });

  return data;
};

export {loginUser, registerUser};
