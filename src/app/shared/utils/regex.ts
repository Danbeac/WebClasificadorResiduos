/* tslint:disable:max-line-length */
export const regex = {
  email: /^\s*(?:[A-Za-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[A-Za-z0-9-]*[A-Za-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])\s*$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*([0-9]|[^\w\s]))/g,
  latin: /^[A-Za-z-\s]+$/,
  numbers: /^\d+$/,
  latinAndNumbers: /^[A-Za-z0-9]+$/,
  latinAndSpaces: /^[a-zA-Z\s]*$/,
  phone: /^[0-9-]+$/,
  safe: /^([\sA-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])*$/
};

export const regexErrors = {
  email: 'Email inválido',
  password: 'La contraseña debe tener una letra mayúscula, una letra minúscula and un número',
  latin: 'Solo letras látinas',
  numbers: 'Solo números',
  latinAndNumbers: 'Solo letras látinas y números',
  latinAndSpaces: 'Solo letras látinas y espacios',
  phone: 'Número de teléfono incorrecto',
  safe: 'Solo letras látinas, números y carácteres especiales'
};
