let reqId = ''

let obj = {}
let contact = {}
let contactAddress = {}
let serviceAddress = {}
let carpet = {}
let rugs = {}
let upholstery = {}
let tile = {}
let ducts = {}

const form = document.querySelector('form')

checkFields = () => {
    // Contact
    form.querySelectorAll("[data-sec='contact']").forEach(element => { 
        contact[element.id] = element.value
    })
        //Contact Address
        form.querySelectorAll("[data-sec='contactAddress']").forEach(element => { 
            contactAddress[element.id] = element.value
        })
    // Service Address
    form.querySelectorAll("[data-sec='serviceAddress']").forEach(element => { 
        serviceAddress[element.id] = element.value
    })
    // +++ Services
        // Carpet
        form.querySelectorAll("[data-sec='carpet']").forEach(element => { 
            carpet[element.id] = element.value
        })
        // Rugs
        form.querySelectorAll("[data-sec='rugs']").forEach(element => { 
            rugs[element.id] = element.value
        })
        // Upholstery
        form.querySelectorAll("[data-sec='upholstery']").forEach(element => { 
            upholstery[element.id] = element.value
        })
        // Tile
        form.querySelectorAll("[data-sec='tile']").forEach(element => { 
            tile[element.id] = element.value
        })
        // Ducts
        form.querySelectorAll("[data-sec='ducts']").forEach(element => { 
            ducts[element.id] = element.value
        })


    //Compile object
    contact['address'] = contactAddress
    obj['contact'] = contact
    obj['serviceAddress'] = serviceAddress
    obj['services'] = {}
    obj.services['carpet'] = carpet
    obj.services['rugs'] = rugs
    obj.services['upholstery'] = upholstery
    console.log(obj)
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