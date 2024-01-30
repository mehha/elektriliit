import Modal from 'bootstrap/js/dist/modal';
export function handleModal() {
  const modalBtn = document.querySelector('#btn-modal-large')
  const modalCloseBtn = document.querySelector('.modal-header .btn-close')
  const contactModal = new Modal('#contactModal')

  if (!modalBtn) {
    return
  }

  modalBtn.addEventListener('click', () => {
    contactModal.show()
  })

  modalCloseBtn.addEventListener('click', () => {
    contactModal.hide()
  })
}
