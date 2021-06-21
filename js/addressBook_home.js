let addressBookList;

window.addEventListener('DOMContentLoaded', (event) => {
    addressBookList = getAddressBookDataFromStorage();
    document.querySelector(".person-count").textContent = addressBookList.length;
    createInnerHtml();
    localStorage.removeItem('editAddressBook');
});

const getAddressBookDataFromStorage = () => {
    return localStorage.getItem('AddressBookList') ? JSON.parse(localStorage.getItem('AddressBookList')) : [];
}

//Templete Literal ES6 Feature
const createInnerHtml = () => {
    if (addressBookList.length == 0) return;
    const headerHtml = "<th></th><th>Full Name</th><th>Address</th><th>City</th><th>State</th>"+
                        "<th>Zip Code</th><th>Phone Number</th><th>Actions</th>"

    let innerHtml = `${headerHtml}`;
    for(const addressBookData of addressBookList) {
        innerHtml = `${innerHtml}
        <tr>
            <td></td>
            <td>${addressBookData._name}</td>
            <td>${addressBookData._address}</td>
            <td>${addressBookData._city}</td>
            <td>${addressBookData._state}</td>
            <td>${addressBookData._zipcode}</td>
            <td>${addressBookData._phoneNumber}</td>
            <td>
                <img id="${addressBookData._id}" onclick="remove(this)" alt="delete" src="../assets/image3.png" width="20px">
                <img id="${addressBookData._id}" alt="edit" onclick="update(this)" src="../assets/image4.svg" width="20px">
            </td>
        </tr>` 
        ;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;   
}

const remove = (node) => {
    let addressBookData = addressBookList.find(addressData => addressData._id == node.id);
    if(!addressBookData) return;
    const index = addressBookList.map(addressData => addressData._id).indexOf(addressBookData._id);
    addressBookList.splice(index, 1);
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
    document.querySelector(".person-count").textContent = addressBookList.length;
    createInnerHtml();
}