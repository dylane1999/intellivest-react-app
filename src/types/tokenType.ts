export default interface IToken {
  aud: string;
  cid: string;
  exp: number;
  iat: number;
  iss: string;
  jti: string;
  scp: Array<string>;
  sub: string;
  uid: string;
  ver: number;
}
