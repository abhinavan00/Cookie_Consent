const modalDiv = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const modalInner = document.getElementById('modal-inner')
const declineBtn = document.getElementById('decline-btn')
const modalChoieBtns = document.getElementById('modal-choice-btns')

setTimeout(function() {
    modalDiv.style.display = 'block'
}, 1500)

modalCloseBtn.addEventListener('click', function () {
    modalDiv.style.display = 'none'
})

declineBtn.addEventListener('mouseenter', function() {
    modalChoieBtns.classList.toggle('reverse-btns')
})

consentForm.addEventListener('submit', function(e) {
    e.preventDefault()

    const consentFormData = new FormData(consentForm)
    const userName = consentFormData.get('fullname')

    modalText.innerHTML = `
                            <div class="modal-inner-loading">
                                <img src="./images/loading.svg" class="class="loading"">
                                <p id="uploadText">
                                    Uploading your data to the dark web...
                                </p>
                            </div>
                            `
    setTimeout(function(){
        document.getElementById('uploadText').textContent = `Making the sale...`
    }, 1500)

    setTimeout(function() {
        modalInner.innerHTML = `
            <div class="modal-inner" id="modal-inner">
                <h2> Thanks <span class='modal-display-name'>${userName}</span>, you sucker! </h2>
                <p> We just sold the rights to your eternal soul. </p>
                <div class="idiot-gif">
                    <img src="./images/pirate.gif" >
                </div>
            </div>
        `
        modalCloseBtn.disabled = false
    }, 3000)
})