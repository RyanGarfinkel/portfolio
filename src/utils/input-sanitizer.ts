
const isEmail = (email: string): boolean => {

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    email = email.trim();

    return emailRegex.test(email);
};

const isEmpty = (input: string): boolean => input.trim() === '';

const 