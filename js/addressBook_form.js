window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector("#name");
    const textError = document.querySelector('.text-error');
    name.addEventListener("input", function() {
        if(name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new AddressBook()).name = name.value;
            textError.textContent = "";
        } catch(e) {
            textError.textContent = e;
        }
    });

    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input' , function() {
        if(address.value.length == 0) {
            addressError.textContent = " ";
            return;
        }
        try {
            (new AddressBook()).address = address.value;
            addressError.textContent = " ";
        } catch (e) {
            addressError.textContent = e;
        }
    });

    const phoneNumber = document.querySelector('#phoneNumber');
    const phoneNumberError = document.querySelector('.phoneNumber-error');
    phoneNumber.addEventListener('input' , function() {
        if(phoneNumber.value.length == 0) {
            phoneNumberError.textContent = " ";
            return;
        }
        try {
            (new AddressBook()).phoneNumber = phoneNumber.value;
            phoneNumberError.textContent = " ";
        } catch (e) {
            phoneNumberError.textContent = e;
        }
    });

    const zipcode = document.querySelector('#zipcode');
    const zipcodeError = document.querySelector('.zipcode-error');
    zipcode.addEventListener('input' , function() {
        if(zipcode.value.length == 0) {
            zipcodeError.textContent = " ";
            return;
        }
        try {
            (new AddressBook()).zipcode = zipcode.value;
            zipcodeError.textContent = " ";
        } catch (e) {
            zipcodeError.textContent = e;
        }
    });

});    