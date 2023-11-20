const listUsers = document.getElementById('listaUsuarios');


// name, age, username, img, phone, email, company, address(street, suite, city)

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then (response => {
        if (!response.ok) {
            throw new Error('La solicitud no se pudo procesar');
        }
        return response.json();
    })
    .then (data => {
        console.log(data);
        //Procesar cada usuario
        data.forEach(user => {
            const {name, username, phone, email, company: {name: companyName}} = user;
            const Object = {
                name,
                username,
                phone,
                email,
                companyName
            };
            //console.log(Object)
            const randomAge = Math.floor(Math.random() * 65);
            const address = `${user.address.street}, ${user.address.suite}, ${user.address.city}`;
            const img = `../assets/img/${user.id}.jpeg`;

            const newObject = {
                ...Object,
                randomAge,
                address,
                img
            };

            console.log(newObject)
            listUsers.innerHTML += `
            <li class ="user">
            <div class="user-data">
                <div class="user">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Age:</strong>${randomAge}</p>
                    <p><strong>Username:</strong>${username}</p>
                    <p><strong>Phone Number:</strong>${phone}</p>
                    <p><strong>Email:</strong>${email}</p>
                </div>
                <img src="${img}" alt="" />
            </div>
            <div>
                <p><strong>Company:</strong>${companyName}</p>
                <p><strong>Address:</strong>${address}</p>
            </li>   
            `;
        });
    })