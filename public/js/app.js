let reqId = ''

let obj = {}
let contact = {}

const form = document.querySelector('form');

checkFields = () => {
    form.querySelectorAll('input').forEach(element => {
        const id = element.id
        const val = element.value
    
        contact[id] = val
    })
    obj['contact'] = contact
}

document.getElementById('clickMe').onclick = () => {
    checkFields()
    sendRequest()
}

const sendRequest = () => {
    $.ajax({
        contentType: 'application/json',
        data: JSON.stringify(obj),//data
        success: () => {
            console.log('Good to go!')
        },
        error: e => {
            console.log('Error: ' + e)
        },
        processData: false,
        type: 'POST',
        url: '/request'
    })

}// sendRequest()

//sendRequest();

// Display all requests at page load
// displayRequests = () => {
//     let html = '';
//     fetch('/request').then(response => {
//         return response.json();
//     }).then(data => {
//         data.forEach(element => {
//             // Add display style
//             reqId = element._id
//             console.log(reqId)
//             html += `
//             <div id="requestItem">
//                 <p>Name: ${element.contact.firstName} ${element.contact.lastName}</p>
//                 <p>Email: ${element.contact.email}</p>
//             </div>
//             <hr>
//             `
//             document.getElementById('requestList').innerHTML = html;
//         });
//     }).catch(e => {
//         console.log(e)
//     })
// }
// displayRequests();