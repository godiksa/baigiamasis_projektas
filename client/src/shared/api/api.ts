import { NewUser, ApiMethods, ApiMethod } from './types';

const client = async (url: string, method: ApiMethod, data?: any) => {
  const res = await (
    await fetch(url, {
      method,
      ...(method === ApiMethods.POST
        ? {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          }
        : method === ApiMethods.PUT
        ? {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          }
        : null),
    })
  ).json();

  return res;
};

export default class API {
  private static baseUrl: string = 'http://localhost:5000';

  public static getUsers = async () => {
    return await client(this.baseUrl + '/users', ApiMethods.GET);
  };

  public static addUser = async (user: NewUser) => {
    return await client(this.baseUrl + '/users', ApiMethods.POST, user);
  };

  public static updateUser = async (id: string, user: NewUser) => {
    return await client(this.baseUrl + '/users/' + id, ApiMethods.PUT, user);
  };

  public static deleteUser = async (id: string) => {
    return await client(this.baseUrl + '/users/' + id, ApiMethods.DELETE);
  };
}
