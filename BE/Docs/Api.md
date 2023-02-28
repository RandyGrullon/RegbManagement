# Regb Dinner Api

- [Regb Dinner Api](#regb-dinner-api)
  - [Auth](#auth)
  - [Register](#register)
    - [Register Request](#register-request)
    - [Register Response](#register-response)
  - [Login](#login)
    - [Login Request](#Login-request)
    - [Login Response](#login-response)

## Auth

### Register

```js
POST {{host}}/auth/register
```

#### Register Request

```Json
{
    "firstName": "Randy",
    "lastName": "Grullon",
    "email": "Randy6grullon@gmail.com",
    "password": "1234"
    "token": "wslokeijfns..sdf"
}
```

### Register Response

```js
200 OK
```

```Json
{
    "id": "2093485y-934sdujf390-483123freg",
    "firstName": "Randy",
    "lastName": "Grullon",
    "email": "Randy6grullon@gmail.com",
    "password": "1234"
}
```

### Login

```js
POST {{host}}/auth/login
```

#### Login Request

```Json
{
    "email": "Randy6grullon@gmail.com",
    "password": "1234"
}
```

### Login Response

```js
200 OK
```

```Json
{
    "id": "2093485y-934sdujf390-483123freg",
    "firstName": "Randy",
    "lastName": "Grullon",
    "email": "Randy6grullon@gmail.com",
    "password": "1234"
}
```

<!-- create the Login section -->

