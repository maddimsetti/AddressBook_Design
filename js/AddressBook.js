class AddressBook {

    get id () {
        return this._zipCode;
    }

    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{3,}$");
        if(nameRegex.test(name)) {
            this._name = name;
        } else {
            throw "Name is Incorrect. Please Enter Valid Name";
        }
    }
    
    get address() {
        return this._address;
    }

    set address(address) {
        let addressRegex = RegExp("^[A-Z]{1}[a-zA-z0-9]{4,}$");
        if(addressRegex.test(address)) {
            this._address = address;
        } else {
            throw "Address is Incorrect. Please Enter Valid Address";
        }
    }

    get city() {
        return this._city;
    }

    set city(city) {
        this._city = city;
        }
    
    get state() {
        return this._state;
    }

    set state(state) {
        this._state = state;
    }

    get zipcode() {
        return this._zipCode;
    }

    set zipcode(zipcode) {
        let zipcodeRegex = RegExp("^[1-9]{1}[0-9]{5}$");
        if(zipcodeRegex.test(zipcode)) {
            this._zipcode = zipcode;
        } else {
            throw "Zip Code is Incorrect";
        }
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp("^[\+]?(([1-9]{2})?)[0-9]{10}$");
        if(phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        } else {
            throw "Phone Number is Incorrect. Please Enter Valid Phone Number";
        }
    }
    
    //method
    toString() {
        return "id = " + this.id + ", name = " + this.name + ", address = " + this.address + ", city = " + this.city +
                ", State = "+ this.state + ", ZipCode = " + this.zipcode +  ", Phone Number = " + this.phoneNumber;
    }
}