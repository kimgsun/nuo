import FormValidator from '../utils/form-validator.js';

(function initContactForm() {
  const contactForm = document.querySelector('.form');
  if (!contactForm) {
    console.error('Contact form not found');
    return;
  }

  const formValidator = new FormValidator(contactForm);

  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const phoneField = document.getElementById('phone');
  const messageField = document.getElementById('message');
  const projectTypeFields = document.querySelectorAll('input[name="project-type"]');
  const radioGroup = document.querySelector('.form__radio-group');

  // 전화번호 자동 하이픈
  if (phoneField) {
    phoneField.addEventListener('input', (e) => {
      e.target.value = formValidator.formatPhone(e.target.value);
    });
  }

  // 실시간 유효성 검사
  if (nameField) {
    formValidator.addRealtimeValidation(nameField, (input) => formValidator.validateRequired(input));
  }

  if (emailField) {
    formValidator.addRealtimeValidation(emailField, (input) => formValidator.validateEmail(input.value));
  }

  if (messageField) {
    formValidator.addRealtimeValidation(messageField, (input) => formValidator.validateRequired(input));
  }

  // 체크박스 변경 시 에러 제거
  projectTypeFields.forEach(input => {
    input.addEventListener('change', () => {
      if (radioGroup) radioGroup.classList.remove('form__group--error');
    });
  });

  // 폼 제출 처리
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isFormValid = true;

    // 이름 검증
    if (!formValidator.validateRequired(nameField)) {
      formValidator.showError(nameField);
      isFormValid = false;
    } else {
      formValidator.hideError(nameField);
    }

    // 이메일 검증
    if (!formValidator.validateEmail(emailField.value)) {
      formValidator.showError(emailField);
      isFormValid = false;
    } else {
      formValidator.hideError(emailField);
    }

    // 프로젝트 타입 검증
    if (!formValidator.validateRadioGroup('project-type')) {
      if (radioGroup) radioGroup.classList.add('form__group--error');
      isFormValid = false;
    } else {
      if (radioGroup) radioGroup.classList.remove('form__group--error');
    }

    // 메시지 검증
    if (!formValidator.validateRequired(messageField)) {
      formValidator.showError(messageField);
      isFormValid = false;
    } else {
      formValidator.hideError(messageField);
    }

    // 유효성 검사 실패 시 중단
    if (!isFormValid) {
      console.log('Form validation failed');
      return;
    }
    
    // 성공 시 처리
    alert('문의가 접수되었습니다. 곧 연락드리겠습니다.');
    formValidator.reset();
  });

  console.log('Contact form initialized successfully');
})();
