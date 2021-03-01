import app from "../app";
import supertest from 'supertest'
import { DecodeToken } from "../utils/decodeJwt.utils"

test("JWT OK, status 200, remember false", async () => {
  
  const code = "groupbycaq@gmail.com";
  const appId = "ecdf";
  const remember = false

  const response = await supertest(app)
    .post('/auth/')
    .send({
      "code": code,
      "appId": appId,
      "remember": remember
    })
    
  let decodeToken: DecodeToken;

  decodeToken = new DecodeToken(response.body);

  const jwtDecode = await decodeToken.Decode();

  expect(jwtDecode.code).toEqual(code)
  expect(jwtDecode.remember).toEqual(remember)
  expect(response.status).toEqual(200)

});

// test("JWT OK, status 200, remember true", async () => {
//   const code = "groupbycaq@gmail.com";
//   const appId = "ecdf";
//   const remember = true
//   const response = await supertest(app)
//     .post('/auth/')
//     .send({
//       "code": code,
//       "appId": appId,
//       "remember": true
//     })
//   let decodeToken: DecodeToken;
//   decodeToken = new DecodeToken(response.body);
//   const jwtDecode = await decodeToken.Decode();
//   expect(jwtDecode.code).toEqual(code)
//   expect(jwtDecode.remember).toEqual(remember)
//   expect(response.status).toEqual(200)
// });

// test("JWT automatic False", async () => {
//   const jwt = "JWT_FEAKE";

//   const response = await supertest(app)
//     .post('/auth/')
//     .send({
//       "token": jwt
//     })
//     expect(response.body).toEqual({ message: 'El cliente no tiene un acceso automatico activo' });
// });
