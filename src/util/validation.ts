export interface Validatable {
  value: string;
  maxLength: number;
  minLength: number;
}

export const validate = (validatableInput: Validatable) => {
  let isValid = true;
  if (validatableInput.value.length <= validatableInput.minLength) {
    isValid = false;
  }
  if (validatableInput.value.length >= validatableInput.maxLength) {
    isValid = false;
  }
  return isValid;
};
