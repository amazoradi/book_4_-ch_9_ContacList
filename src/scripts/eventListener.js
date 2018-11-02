import validateEntry from "./formValidation"

export default function onSubmit () {
  let submitButton = document.getElementById("contact-button")
  submitButton.addEventListener("click", () => {
    console.log("ya clicked me")
    let newContact = {
      "name": document.getElementById("contact-name").value,
      "phone_number": document.getElementById("contact-number").value,
      "address": document.getElementById("contact-address").value
    }
    validateEntry(newContact)
  })
}
