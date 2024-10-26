() => {
  const appoint = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  appoint.openModalBtn.addEventListener("click", toggleModal);
  appoint.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    appoint.modal.classList.toggle("is-hidden");
  }
};
