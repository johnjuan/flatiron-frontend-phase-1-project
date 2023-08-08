console.log(`connected`)

const handleFormInputFocus = () => {
console.log(`focus occurred`)
}

const searchTermsInput = document.body.querySelector("#search-terms")

searchTermsInput.addEventListener('focus', handleFormInputFocus)