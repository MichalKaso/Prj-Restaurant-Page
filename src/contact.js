
function createContact(){
    const contact = document.createElement('div')
    contact.classList.add('contact')

    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = ' +1 212 884 5568 '

    const address = document.createElement('p')
    address.textContent = ' 31st Avenue, Astoria, NYC, USA'

    const restaurantLocation = document.createElement('img')
    restaurantLocation.src = "https://i.insider.com/5dc318cc79d7570f0a5800a6?width=600&format=jpeg&auto=webp"
    restaurantLocation.alt = 'Mike/s Pizza location'

    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    contact.appendChild(restaurantLocation)

    return contact;
}

function loadContact(){
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createContact())
}

export default loadContact