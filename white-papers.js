// const thankYouPage = '-1' // default id
const modules = document.querySelectorAll('[data-view-module]')
const controls = document.querySelectorAll('[data-view-control]')
const containerGlobal = document.querySelector('[data-view-container]')
const colors = ['linear-gradient(135deg, #EA5C54 0%, # 100%)','linear-gradient(135deg, #5782e4 0%, #b54ad8 100%)', 'linear-gradient(135deg, #e1ef73 0%, #5ab799 100%)'];


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
      document.getElementsByTagName('body')[0].className = ''
      document.getElementsByTagName('body')[0].classList.add(`color-${key}`)
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
