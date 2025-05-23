
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const isEmail = (email: string): boolean => emailRegex.test(email.trim());

const isEmpty = (input: string): boolean => !input.trim();

const replaceCode = (input: string): string => input.replace(/</g, '&lt;').replace(/>/g, '&gt;');

export { isEmail, isEmpty, replaceCode };