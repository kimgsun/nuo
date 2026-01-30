import FormValidator from "../utils/form-validator.js";

(function initContactForm() {
  const contactForm = document.querySelector(".form");
  if (!contactForm) return;

  const formValidator = new FormValidator(contactForm);

  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const phoneField = document.getElementById("phone");
  const messageField = document.getElementById("message");
  const projectTypeFields = document.querySelectorAll(
    'input[name="project-type"]',
  );
  const radioGroup = document.querySelector(".form__radio-group");

  if (phoneField) {
    phoneField.addEventListener("input", (e) => {
      e.target.value = formValidator.formatPhone(e.target.value);
    });
  }

  if (nameField) {
    formValidator.addRealtimeValidation(nameField, (input) =>
      formValidator.validateRequired(input),
    );
  }

  if (emailField) {
    formValidator.addRealtimeValidation(emailField, (input) =>
      formValidator.validateEmail(input.value),
    );
  }

  if (messageField) {
    formValidator.addRealtimeValidation(messageField, (input) =>
      formValidator.validateRequired(input),
    );
  }

  projectTypeFields.forEach((input) => {
    input.addEventListener("change", () => {
      if (radioGroup) radioGroup.classList.remove("form__group--error");
    });
  });

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isFormValid = true;

    if (!formValidator.validateRequired(nameField)) {
      formValidator.showError(nameField);
      isFormValid = false;
    } else {
      formValidator.hideError(nameField);
    }

    if (!formValidator.validateEmail(emailField.value)) {
      formValidator.showError(emailField);
      isFormValid = false;
    } else {
      formValidator.hideError(emailField);
    }

    if (!formValidator.validateRadioGroup("project-type")) {
      if (radioGroup) radioGroup.classList.add("form__group--error");
      isFormValid = false;
    } else {
      if (radioGroup) radioGroup.classList.remove("form__group--error");
    }

    if (!formValidator.validateRequired(messageField)) {
      formValidator.showError(messageField);
      isFormValid = false;
    } else {
      formValidator.hideError(messageField);
    }

    if (!isFormValid) {
      alert("필수 항목을 확인해 주세요.");
      return;
    }

    alert("문의가 접수되었습니다. 곧 연락드리겠습니다.");
    formValidator.reset();
  });
})();
