// fetch get our data from the database


export default function getContactInfo () {
  return fetch("http://localhost:8088/contact-list")
  .then(contact => contact.json())
}

