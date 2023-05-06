(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-open-modal]"),
      closeModalBtn: document.querySelector("[data-close-modal]"),
      modal: document.querySelector("[modal-data]"),
      body: document.body,
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle("hide-scroll");
    }
  })();
  