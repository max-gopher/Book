import miniToaster from 'mini-toastr'

const toastTypes = {
  success: 'succes',
  error: 'error',
  info: 'info',
  warn: 'warn'
}

miniToaster.init({ types: toastTypes })

function toast ({ title, message, type, timeout, cb }) {
  return miniToaster[type](message, title, timeout, cb)
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

export default options
