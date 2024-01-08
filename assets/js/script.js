// console.log("hello world");//works
const submit = document.querySelector(".submit");//button
const input = document.querySelector("input");//hopefully all input
const form = document.querySelector("form");
// four error imgs
const oneLabel = document.querySelector(".one");
const twoLabel = document.querySelector(".two");
const threeLabel = document.querySelector(".three");
const fourLabel = document.querySelector(".four");

form.addEventListener("submit", validate);
submit.addEventListener("click", validate);

function validate(e) {
    e.preventDefault()//no re-load

    const customerInfo = input.value;
    input.value = ''
    console.log(customerInfo);
}


// // all input
// let password = document.getElementById("exampleInputPassword1");
// // let password = document.myForm.firstname.value;
// let email = document.getElementById("exampleInputEmail1");
// let lastName = document.getElementById("exampleInputLastName");
// let firstName = document.getElementById("exampleInputFirstName");


// // https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/
// // check this page out