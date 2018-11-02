// validates the input recovered from our event listener
import API from "./ContactCollection"

export default function validateThis (newContact) {
  if (document.getElementById("contact-name").value === "") {
    alert("Name field is required, please enter a name")
  } else if (document.getElementById("contact-number").value === ""){
    alert("Phone number field is required, please enter a number")
  } else if (document.getElementById("contact-address").value === ""){
    alert("Address field is required, please enter an address")
  } else {
     API.saveToList(newContact)
  }
}