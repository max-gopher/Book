import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'
import VueNotifications from 'vue-notifications'

export default (model, key) => {
  const errors = {}

  if (!Validator.isEmail(model.email)) {
    errors.email = true
    VueNotifications.error({ message: 'Не верный формат почты' })
  }
  if (isEmpty(model.password)) {
    errors.password = true
    VueNotifications.error({ message: 'Поле пароль не заполненно' })
  }

  if (key === 'reg') {
    if (isEmpty(model.repasword)) {
      errors.repasword = true
      VueNotifications.error({ message: 'Поле повтор пароля не заполнено' })
    }
    if (model.password !== model.repassword) {
      errors.defferent = true
      VueNotifications.error({ message: 'Пароли не совпадают' })
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
