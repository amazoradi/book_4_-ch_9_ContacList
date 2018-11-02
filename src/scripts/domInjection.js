// function that takes our get'ed and post'ed data already in our html elements form element creator and displays in the dom
import elementFactory from "./elementCreator"
import API from "./APIdata"


const domCreation = {
   userCreate (info) {
    let entryTitle = elementFactory("h4", "Contact")
    let entryName = elementFactory("p", `Name: ${info.name}`)
    let entryNum = elementFactory("p", `Phone Number: ${info.phone_number}`)
    let entryaddress = elementFactory("p", `Address: ${info.address}`)
    let contactDiv = elementFactory("div", null, "contact-card  ", `${info.id}`, entryTitle, entryName, entryNum, entryaddress)
    let fragment = document.createDocumentFragment()
    fragment.appendChild(contactDiv)
    let contactList = document.getElementById("contact-list")
    contactList.appendChild(fragment)
},
databaseCreate (data){
  data.forEach(contact =>{
    domCreation.userCreate(contact)
  })
}
}


export default domCreation