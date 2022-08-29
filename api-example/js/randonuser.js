
const randomLover = () => {
    fetch('https://randomuser.me/api/?results=40')
        .then(res => res.json())
        .then(data => displayRandomLover(data.results))
}

const displayRandomLover = (data) => {
    const loverContainer = document.getElementById('user-container');

    for (const user of data) {
        console.log(user)
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <h3>User Name: ${user.name.first} ${user.name.last} </h3>
        <h3>User Gender: ${user.gender} </h3>
        <h3>User Name: ${user.email} </h3>
        <p>User location: ${user.location.city} ${user.location.country} </p>
        <p>User idInfo : ${user.id.name} ${user.id.value} </p>

        `;
        loverContainer.appendChild(userDiv);
    }

    console.log(data);

};

randomLover();