// This is the contact page form control

$(function() {
    
    $(".form-control").on('focus', function(){

        $(this).parents(".form-group").addClass('focused')


    })
    $(".form-control").on('blur', function(){

        $(this).parents(".form-group").removeClass('focused')

        
    })


});

// This is the contact info email collection and email control

const contactForm = document.querySelector('.form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    console.log(formData);

    function jAlert(text, customokay){
        document.getElementById('jAlRem').classList.remove('is-hidden');
        document.getElementById('jAlert_content').innerHTML = text;
        document.getElementById('jAlert_ok').innerHTML = customokay;
        document.body.style.backgroundColor = "gray";
        document.body.style.cursor="wait";
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText)
        if(xhr.responseText == 'success'){
            jAlert('Email sent', '<b>Thank you!</b>');
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        }else{
            jAlert('Stop! Stop!', "<b>Okay!</b>");
        }
    }


    xhr.send(JSON.stringify(formData));
});

