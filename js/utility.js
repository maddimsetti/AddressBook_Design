const update = (node) => {
    let addressBookData = addressBookList.find(addressData => addressData._id == node.id);
    if(!addressBookData) return;
    localStorage.setItem('editAddressBook', JSON.stringify(addressBookData));
    window.location.replace(site_properties.add_address_book_page);
}