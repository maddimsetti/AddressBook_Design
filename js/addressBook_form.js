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

const save = () => {
    try {
        let addressBookData = createAddressBook();
        createAndUpdateStorage(addressBookData);
    } catch (e) {
        return;
    }
}

const createAddressBook = () => {
    let addressBookData = new AddressBook();
    try {
        addressBookData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    try {
        addressBookData.address = getInputValueById('#address');
    } catch (e) {
        setTextValue('.address-error', e);
        throw e;
    }
    try {
        addressBookData.phoneNumber = getInputValueById('#phoneNumber');
    } catch (e) {
        setTextValue('.phoneNumber-error', e);
        throw e;
    }
    try {
        addressBookData.zipcode = getInputValueById('#zipcode');
    } catch (e) {
        setTextValue('zipcode-error', e);
        throw e;
    }
    addressBookData.city = getInputValueById('#city');
    addressBookData.state = getInputValueById('#state');
    alert(addressBookData.toString());
    return addressBookData;
}

function createAndUpdateStorage(addressBookData) {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addressBookList != undefined) {
        addressBookList.push(addressBookData);
    } else {
        addressBookList = [addressBookData]
    }
    alert(addressBookData.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

const resetForm = () => {
    setValue('#name', '');
    setValue('#address', '');
    setValue('#city', 'Select City');
    setValue('#state', 'Select State');
    setValue('#zipcode', '');
    setValue('#phoneNumber', '');
}

const setTextValue = () => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}