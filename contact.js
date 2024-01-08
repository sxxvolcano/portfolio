const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_458jwiv','service_458jwiv','#contact-form','wqvU-E5MQVVfNdopS')
    .then(() => {
        contactMessage.textContent = 'Your message has been successfully delivered ✅'

        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'Apologies, unable to assist now. Please check back later ❌'
    })


}        

contactForm.addEventListener('submit', sendEmail)