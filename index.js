const modalDiv = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')

setTimeout(function() {
    modalDiv.style.display = 'block'
}, 1500)

modalCloseBtn.addEventListener('click', function () {
    modalDiv.style.display = 'none'
})

consentForm.addEventListener('submit', function(e) {
    e.preventDefault()
})