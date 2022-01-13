(() => {
  const refs = {
    openModalBtn: document.querySelector('.mobile__menu__btn'),
    closeModalBtn: document.querySelector('.btn__close'),
    modal: document.querySelector('.header__mobile__menu'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();