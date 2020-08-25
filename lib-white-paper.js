const modules = document.querySelectorAll('[data-view-module]')
const controls = document.querySelectorAll('[data-view-control]')
const containerGlobal = document.querySelector('[data-view-container]')


// bind blocks with corresponding forms
controls.forEach((control) => {
  control.addEventListener('click', () => {
    navigateViews(control.dataset.viewControl, control.dataset.modulePass);
  })
})

// a function that finds a view and sets it as a current view
function navigateViews(key, passData) {
  modules.forEach(module => {
    module.dataset.viewModule == key ? smoothTransition() : setTimeout(() => {
      module.classList.remove('active')
    }, 200)

    function smoothTransition() {
      containerGlobal.classList.add('on')
      setTimeout(() => {
        module.classList.add('active')

        setTimeout(() => {
          containerGlobal.classList.remove('on')
        }, 200)
      }, 200)

    }
  })
}