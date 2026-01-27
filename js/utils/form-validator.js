export default class FormValidator {
  constructor(formElement) {
    this.form = formElement;
  }

  validateRequired(inputField) {
    return inputField && inputField.value.trim() !== '';
  }

  validateEmail(emailValue) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue);
  }

  validateRadioGroup(groupName) {
    const radioButtons = this.form.querySelectorAll(`input[name="${groupName}"]`);
    return Array.from(radioButtons).some(radio => radio.checked);
  }

  formatPhone(phoneValue) {
    const digitsOnly = phoneValue.replace(/[^0-9]/g, '');
    
    if (digitsOnly.length <= 3) return digitsOnly;
    if (digitsOnly.length <= 7) return digitsOnly.slice(0, 3) + '-' + digitsOnly.slice(3);
    if (digitsOnly.length <= 11) {
      return digitsOnly.slice(0, 3) + '-' + digitsOnly.slice(3, 7) + '-' + digitsOnly.slice(7);
    }
    return digitsOnly.slice(0, 3) + '-' + digitsOnly.slice(3, 7) + '-' + digitsOnly.slice(7, 11);
  }

  showError(inputField) {
    if (!inputField) return;
    const fieldGroup = inputField.closest('.form__group');
    if (fieldGroup) fieldGroup.classList.add('form__group--error');
    inputField.classList.add('form__input--error');
  }

  hideError(inputField) {
    if (!inputField) return;
    const fieldGroup = inputField.closest('.form__group');
    if (fieldGroup) fieldGroup.classList.remove('form__group--error');
    inputField.classList.remove('form__input--error');
  }

  addRealtimeValidation(inputField, validationFn) {
    if (!inputField) return;

    inputField.addEventListener('blur', () => {
      validationFn(inputField) ? this.hideError(inputField) : this.showError(inputField);
    });

    inputField.addEventListener('input', () => {
      if (validationFn(inputField)) this.hideError(inputField);
    });
  }

  reset() {
    this.form.reset();
    this.form.querySelectorAll('.form__group--error').forEach(group => 
      group.classList.remove('form__group--error')
    );
    this.form.querySelectorAll('.form__input--error').forEach(input => 
      input.classList.remove('form__input--error')
    );
  }
}
