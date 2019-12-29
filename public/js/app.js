// 
listRequests = () => {
    fetch('/request').then(response => {
        return response.json();
    }).then(data => {
        data.forEach(element => {
            console.log(element.contact)
        });
    }).catch(e => {
        console.log(e)
    })
}

displayRequests = () => {
    let html = '';

    fetch('/request').then(response => {
        return response.json();
    }).then(data => {
        data.forEach(element => {
            // Add display style

            html += `
            <div id="requestItem">
                <p>Name: ${element.contact.firstName} ${element.contact.lastName}</p>
                <p>Email: ${element.contact.email}</p>
            </div>
            <hr>
            `
            document.getElementById('requestList').innerHTML = html;

        });
    }).catch(e => {
        console.log(e)
    })
}

displayRequests();