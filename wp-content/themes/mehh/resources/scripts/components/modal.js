import Modal from 'bootstrap/js/dist/modal';
export function handleModal() {
  const modalBtn = document.querySelector('#btn-modal-large')

  if (!modalBtn) return

  const modalCloseBtn = document.querySelector('.modal-header .btn-close')
  const contactModal = new Modal('#contactModal')

  modalBtn.addEventListener('click', () => {
    contactModal.show()
  })

  modalCloseBtn.addEventListener('click', () => {
    contactModal.hide()
  })
}
