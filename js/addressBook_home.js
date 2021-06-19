window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

//Templete Literal ES6 Feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Full Name</th><th>Address</th><th>City</th><th>State</th>"+
    "<th>Zip Code</th><th>Phone Number</th><th>Actions</th>"

    const innerHtml = `${headerHtml}
    <tr>
        <td></td>
        <td>Maddimsetti Bala Rama Krishna</td>
        <td>Gopalapuram</td>
        <td>Hyderabad</td>
        <td>Telangana</td>
        <td>533274</td>
        <td>9666917945</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="../assets/image3.png" width="20px">
            <img id="1" alt="edit" onclick="update(this)" src="../assets/image4.svg" width="20px">
        </td>
    </tr>` 
    ;
    document.querySelector('#table-display').innerHTML = innerHtml;   
}

