# IT-API

<details><summary>Basic API</summary>
#### Registration 
**POST** > URL: [http://localhost:1337/auth/local/register](http://localhost:1337/auth/local/register)

>     data: {
>     		    "username": "user play",
>     		    "email": "user@user.com",
>     		    "password": "Password"
>     	   }
<hr></hr>

#### Get user information
**GET** > URL: http://localhost:1337/user/me

    headers: {
    		    Authorization: `Bearer ${jwt}`
             }

   
  <details><summary>Response</summary>
 
     {
         "_id": "5b2c3f7b8d67ce14620bac28",
         "username": "useruser",
         "email": "user@useruser.com",
         "provider": "local",
         "role": {
             "_id": "5b2c0adf2fa51a2198454cde",
             "name": "Authenticated",
             "description": "Default role given to authenticated user.",
             "type": "authenticated",
             "__v": 0
         },
         "__v": 0,
         "id": "5b2c3f7b8d67ce14620bac28"
     }
 </details>

<hr></hr>

### Update user information
**PUT** > URL: http://localhost:1337/user/{$id}

>     data {
>     			"username": "NEWusername",
>     	        "email": "NEWemail@email.email"
>     	  }
<hr></hr>

####  Login

**POST** > URL: http://localhost:1337/auth/local/
> 
>     data: {
>             "identifier": "user@user.com",
>             "password": "Password"
>           } 
<details><summary>Response</summary>
 
     {
     "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ.....",
     "user": {
         "_id": "5b2c3f7b8d67ce14620bac28",
         "username": "useruser",
         "email": "user@useruser.com",
         "provider": "local",
         "role": {
             "_id": "5b2c0adf2fa51a2198454cde",
             "name": "Authenticated",
             "description": "Default role given to authenticated user.",
             "type": "authenticated",
             "__v": 0
         },
         "__v": 0,
         "id": "5b2c3f7b8d67ce14620bac28"
    } } 
</details>    
<hr></hr>

#### Recover password
**POST**  >  URL: http://localhost:1337/auth/forgot-password

>     data: {
> 	            email: 'user@useruser.com',
> 	            url: 'http://igroteka-site.com/rest-password'
> 	      }
> >http://igroteka-site.com/rest-password?code=privateCode
<hr></hr>
    
#### Change password

**POST** > URL:   http://localhost:1337/auth/reset-password

> `code` это параметр URL, полученный по электронной почте
> 
>     data: {
> 		    "code": "privateCode",
> 		    "password": "myNewPassword",
> 		    "passwordConfirmation: "myNewPassword"
> 		  }
<hr></hr>

#### List of consoles
**GET** > URL:  http://localhost:1337/consolas
 <details><summary>Response</summary>

     [
        {
            "_id": "5b2c0ea84fc2d40468d34583",
            "Name": "Playstation 4 Pro",
            "sescription": "Sescription",
            "Console_credentials": "Console_credentials",
            "games": "Games 1 . 2 . 3",
            "createdAt": "2018-06-21T20:46:32.691Z",
            "updatedAt": "2018-06-22T01:17:02.268Z",
            "__v": 0,
            "id": "5b2c0ea84fc2d40468d34583",
            "Console_group_id": {
                "_id": "5b2c0eda4fc2d40468d34584",
                "Console": "DemoGroup",
                "Games": "Games 1. 2 .3 .4",
                "createdAt": "2018-06-21T20:47:22.593Z",
                "updatedAt": "2018-06-21T20:47:22.785Z",
                "__v": 0,
                "id": "5b2c0eda4fc2d40468d34584"
            },
            "img": {
                "_id": "5b2c4e0eb2a2cf156c0070a2",
                "name": "PS4-Pro.png",
                "hash": "214b14ee92724198aae2e5d69b5c2a44",
                "ext": ".png",
                "mime": "image/png",
                "size": "117.87",
                "url": "/uploads/214b14ee92724198aae2e5d69b5c2a44.png",
                "provider": "local",
                "related": [
                    "5b2c0ea84fc2d40468d34583"
                ],
                "createdAt": "2018-06-22T01:17:02.301Z",
                "updatedAt": "2018-06-22T01:17:02.319Z",
                "__v": 0,
                "id": "5b2c4e0eb2a2cf156c0070a2"
            }
        }
    ]

-
#### Console details
**GRT** > URL: http://localhost:1337/Consoles/_id

</details>
