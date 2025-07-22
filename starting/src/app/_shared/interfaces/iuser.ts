/**Obs: agora com a versão mais nova do ECMA podemo usar , ou ; */

export interface IUserExemplo {
  name: string,
  email: string,
  isAdmin?: boolean,
}
export interface IUserApi {
  id?: number;
  title: string;
  body: string;
  userId?: number;

}

