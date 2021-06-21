let isUpdate = false;
let addressBookObj = {};

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector("#name");
    name.addEventListener("input", function() {
        if(name.value.length == 0) {
            setTextValue('.text-error', "");
            return;
        }
        try {
            (new AddressBook()).name = name.value;
            setTextValue('.text-error', "");
        } catch(e) {
            setTextValue('.text-error', e);
        }
    });

    const address = document.querySelector('#address');
    address.addEventListener('input' , function() {
        if(address.value.length == 0) {
            setTextValue('.address-error', "");
            return;
        }
        try {
            (new AddressBook()).address = address.value;
            setTextValue('.address-error', "");
        } catch (e) {
            setTextValue('.address-error', e);
        }
    });

    const phoneNumber = document.querySelector('#phoneNumber');
    phoneNumber.addEventListener('input' , function() {
        if(phoneNumber.value.length == 0) {
            setTextValue('.phoneNumber-error', "");
            return;
        }
        try {
            (new AddressBook()).phoneNumber = phoneNumber.value;
            setTextValue('.phoneNumber-error', "");
        } catch (e) {
            setTextValue('.phoneNumber-error', e);
        }
    });

    const zipcode = document.querySelector('#zipcode');
    zipcode.addEventListener('input' , function() {
        if(zipcode.value.length == 0) {
            setTextValue('.zipcode-error', "");
            return;
        }
        try {
            (new AddressBook()).zipcode = zipcode.value;
            setTextValue('.zipcode-error', "");
        } catch (e) {
            setTextValue('.zipcode-error', e);
        }
    });

    checkForUpdate();

});    

const save = () => {
    try {
        setAddressBookObject();
        createAndUpdateStorage();
        resetForm();
        window.location.replace(site_properties.home_page);
    } catch (e) {
        return;
    }
}

const setAddressBookObject = () => {
    addressBookObj._name = getInputValueById('#name');
    addressBookObj._address = getInputValueById('#address');
    addressBookObj._city = getInputValueById('#city');
    addressBookObj._state = getInputValueById('#state');
    addressBookObj._zipcode = getInputValueById('#zipcode');
    addressBookObj._phoneNumber = getInputValueById('#phoneNumber');
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

const createAndUpdateStorage = () => {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addressBookList) {
        let personData = addressBookList.find(addressData => addressData._id == addressBookObj._id);
        if(!personData) {
            addressBookList.push(createAddressBookData());
        } else {
            const index = addressBookList.map(addressData => addressData._id).indexOf(personData._id);
            addressBookList.splice(index, 1, createAddressBookData(personData._id));
        }
    } else {
        addressBookList = [createAddressBookData]
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
}

const createAddressBookData = (id) => {
    let addressBookData = new AddressBook();
    if(!id) addressBookData.id = createNewAddressId();
    else addressBookData.id = id;
    setAddressBookData(addressBookData);
    return addressBookData;
}

const setAddressBookData = (addressBookData) => {
    try {
        addressBookData.name = addressBookObj._name;
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    try {
        addressBookData.address = addressBookObj._address;
    } catch (e) {
        setTextValue('.address-error', e);
        throw e;
    }
    try {
        addressBookData.phoneNumber = addressBookObj._phoneNumber;
    } catch (e) {
        setTextValue('.phoneNumber-error', e);
        throw e;
    }
    try {
        addressBookData.zipcode = addressBookObj._zipcode;
    } catch (e) {
        setTextValue('zipcode-error', e);
        throw e;
    }
    addressBookData.city = addressBookObj._city
    addressBookData.state = addressBookObj._state;
    alert(addressBookData.toString());
}

const createNewAddressId = () => {
    let personID = localStorage.getItem("PersonID");
    personID = !personID ? 1 : (parseInt(personID)+1).toString();
    localStorage.setItem("PersonID", personID);
    return personID;
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

const setTextValue = (id , value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

const checkForUpdate = () => {
    const addressBookJson = localStorage.getItem('editAddressBook');
    isUpdate = addressBookJson ? true : false;
    if(!isUpdate) return;
    addressBookObj = JSON.parse(addressBookJson);
    setForm();
}

const setForm = () => {
    setValue('#name', addressBookObj._name);
    setValue('#address', addressBookObj._address);
    setValue('#city', addressBookObj._city);
    setValue('#state', addressBookObj._state);
    setValue('#zipcode', addressBookObj._zipcode);
    setValue('#phoneNumber', addressBookObj._phoneNumber);
}

