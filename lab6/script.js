const downloadBtn = document.getElementById('downloadBtn');
const statusMsg = document.getElementById('statusMsg');
const usersContainer = document.getElementById('usersContainer');

downloadBtn.onclick = function() {
    statusMsg.innerText = 'Downloading...';
    usersContainer.innerHTML = '';

    fetch('https://randomuser.me/api/?results=5')
        .then(response => {
            return response.json();
        })
        .then(data => {
            statusMsg.innerText = 'success!';
            const users = data.results;

            users.forEach(user => {
                const card = document.createElement('div');
                card.className = 'user-card';

                const img = document.createElement('img');
                img.src = user.picture.large;

                const infoDiv = document.createElement('div');
                infoDiv.className = 'user-info';

                const countryP = document.createElement('p');
                countryP.innerHTML = `<strong>Country:</strong> ${user.location.country}`;

                const postcodeP = document.createElement('p');
                postcodeP.innerHTML = `<strong>Postcode:</strong> ${user.location.postcode}`;

                const phoneP = document.createElement('p');
                phoneP.innerHTML = `<strong>Phone:</strong> ${user.phone}`;

                const nameP = document.createElement('p');
                nameP.innerHTML = `<strong>Name:</strong> ${user.name.first} ${user.name.last}`;

                infoDiv.appendChild(countryP);
                infoDiv.appendChild(postcodeP);
                infoDiv.appendChild(phoneP);
                infoDiv.appendChild(nameP);

                card.appendChild(img);
                card.appendChild(infoDiv);

                usersContainer.appendChild(card);
            });
        })
        .catch(error => {
            statusMsg.innerText = 'Error loading data';
        });
};