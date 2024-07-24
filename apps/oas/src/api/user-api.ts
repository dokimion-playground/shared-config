import { axiosInstance, PromiseAxiosResponse } from '@/worker/commands/config/apiInstance';
import {
  User,
} from '../model';

const createUserAxios = ({
  user,
}: {
  user?: User;
}): PromiseAxiosResponse<User> => {
  const localVarPath = `/user`;
  return axiosInstance.post(
  localVarPath,
  {
    params: {
      user,
    }
  })
};

const createUsersWithListInputAxios = ({
  user,
}: {
  user?: Array<User>;
}): PromiseAxiosResponse<User> => {
  const localVarPath = `/user/createWithList`;
  return axiosInstance.post(
  localVarPath,
  {
    params: {
      user,
    }
  })
};

const deleteUserAxios = ({
  username,
}: {
  username: string;
}): PromiseAxiosResponse<void> => {
  const localVarPath = `/user/{username}`
    .replace(`{${"username"}}`, encodeURIComponent(String(username)));
  return axiosInstance._delete(
  localVarPath,
  {
    params: {
      username,
    }
  })
};

const getUserByNameAxios = ({
  username,
}: {
  username: string;
}): PromiseAxiosResponse<User> => {
  const localVarPath = `/user/{username}`
    .replace(`{${"username"}}`, encodeURIComponent(String(username)));
  return axiosInstance.get(
  localVarPath,
  {
    params: {
      username,
    }
  })
};

const loginUserAxios = ({
  username,
  password,
}: {
  username?: string;
  password?: string;
}): PromiseAxiosResponse<string> => {
  const localVarPath = `/user/login`;
  return axiosInstance.get(
  localVarPath,
  {
    params: {
      username,
      password,
    }
  })
};

const logoutUserAxios = ({
}: {
}): PromiseAxiosResponse<void> => {
  const localVarPath = `/user/logout`;
  return axiosInstance.get(
  localVarPath,
  {
    params: {
    }
  })
};

const updateUserAxios = ({
  username,
  user,
}: {
  username: string;
  user?: User;
}): PromiseAxiosResponse<void> => {
  const localVarPath = `/user/{username}`
    .replace(`{${"username"}}`, encodeURIComponent(String(username)));
  return axiosInstance.put(
  localVarPath,
  {
    params: {
      username,
      user,
    }
  })
};

export {
  createUserAxios,
  createUsersWithListInputAxios,
  deleteUserAxios,
  getUserByNameAxios,
  loginUserAxios,
  logoutUserAxios,
  updateUserAxios,
};
