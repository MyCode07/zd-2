document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('_btn') && targetEl.closest('section.projects')) {
        const activeGallery = document.querySelector('.projects [data-tab-content]._active');
        activeGallery.classList.toggle('_open')

        if (activeGallery.classList.contains('_open')) {
            targetEl.textContent = targetEl.dataset.textShow
        }
        else {
            targetEl.textContent = targetEl.dataset.textHide
        }
    }
})