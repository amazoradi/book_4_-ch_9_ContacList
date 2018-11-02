// our element creator funciton that takes in data for our intial get of the database and data from our eventual post

export default function elementFactory (el, content, clazz, id, ...children){
  let element = document.createElement(el)
  element.innerHTML = content || null
  element.hasAttribute("class", clazz)
  element.hasAttribute("id", id)
  children.forEach(child => {
    element.appendChild(child)
  })
  return element
}