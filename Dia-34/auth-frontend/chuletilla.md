```js
//Ejemplo GET con Token
localStorage.getItem('jwtToken');
const response = await fetch('http://localhost:3000/api/v1/auth/me', {
    headers: {
        'Authorization': `Bearer ${token}`
    }
});

//Ejemplo POST con Token
localStorage.getItem('jwtToken');
const response = await fetch('http://localhost:3000/api/v1/auth/me', {
    method: "POST",
    headers: {
        'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(nuevoProducto)
});
if(response.ok){
    const responseData = await response.json();
    setUser(responseData.data);
}

```

- Cada vez que hacemos un Login o Register guardamos el token en localStorage

```js
//dataToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vy..."
localStorage.setItem('jwtToken', dataToken);
```

- Cada vez que hacemos un fetch, enviamos el token en localStorage