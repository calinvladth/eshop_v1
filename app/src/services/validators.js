// All validation will return a boolean value

// The validate text is a standard input validation
export function ValidateText(text) {
    return text.length > 0 && text
}

export function ValidateEmail(mail) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)
}