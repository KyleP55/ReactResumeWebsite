function emptyCheck(str) {
    if (str == "") return "All fields must be filled.";
    return null;
}

function emailCheck(str) {
    const emailVali = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let res = str.match(emailVali);
    if (!res) return "Email is not a valid format.";
}

export function allCheck(name, email, message) {
    if (emptyCheck(name) != null) return emptyCheck(name);
    if (emptyCheck(email) != null) return emptyCheck(email);
    if (emptyCheck(message) != null) return emptyCheck(message);

    if (emailCheck(email) != null) return emailCheck(email);

    return null;
}