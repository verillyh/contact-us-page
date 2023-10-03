const $ = require('jquery')
require('./style.css')
const location_logo = require('./assets/location-pin-alt-svgrepo-com.svg')
const telephone_logo = require('./assets/telephone-svgrepo-com.svg')
const email_logo = require('./assets/email-1-svgrepo-com.svg')
emailjs.init("5ZKH2IbMMd4-4X4RI")


$(function() {
    // Insert images 
    $('#location-logo').attr('src', location_logo);
    $('#telephone-logo').attr('src', telephone_logo);
    $('#email-logo').attr('src', email_logo);

    $('#form').on('submit', e => {
        emailjs.sendForm('service_b3qrptj', 'template_fukzufm', $('#form')[0])
            .then(response => {
                console.log("SUCCESS", response.status, response.text);
            }, error => {
                console.log("ERROR", error)
            })
    })
})