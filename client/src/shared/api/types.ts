export type NewUser = {
  name: string;
  surname: string;
  email: string;
  age: number;
};

export enum ApiMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type ApiMethod =
  | ApiMethods.GET
  | ApiMethods.POST
  | ApiMethods.PUT
  | ApiMethods.DELETE;
