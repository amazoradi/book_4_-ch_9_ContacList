export default function onSubmit () {
  let submitButton = document.getElementById("contact-button")
  submitButton.addEventListener("click", () => {
    console.log("ya clicked me")
    let newContact = {
      "name": document.getElementById("contact-name").value.name,
      "phone_number": document.getElementById("contact-number").value.phone_number,
      "address": document.getElementById("contact-address").value.address
    }
    console.log(newContact)
  })
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