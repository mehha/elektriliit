import Modal from 'bootstrap/js/dist/modal';
export function handleModal() {
  const modalBtn = document.querySelector('#btn-modal-large')
  const contactModal = new Modal('#contactModal')

  if (!modalBtn) {
    return
  }

  modalBtn.addEventListener('click', (e) => {
    // e.preventDefault()
    console.log('e', e, contactModal)
    contactModal.show()
  })
}
