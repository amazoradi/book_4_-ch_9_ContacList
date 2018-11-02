// import validateEntry from "./formValidation"


export default function onSubmit () {
  let submitButton = document.getElementById("contact-button")
  submitButton.addEventListener("click", () => {
    console.log("ya clicked me")
    let newContact = {
      "name": document.getElementById("contact-name").value,
      "phone_number": document.getElementById("contact-number").value,
      "address": document.getElementById("contact-address").value
    }
    console.log(newContact) 
  })
  // validateEntry()
}











// function createEvent() {
//   recordButton.addEventListener("click", () => {
//     console.log("click")
//     let entryObject = {
//       "date": dateJournal.value,
//       "concept": conceptJournal.value,
//       "entry": entryJournal.value,
//       "mood": moodJournal.value
//       // "id": counter
//     }
//     console.log(entryObject)
//     //add function to apply logic 
//     validateEntry(entryObject)

//   })
// }