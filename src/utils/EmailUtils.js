export function getNameFromEmail(email) {
    const atIndex = email.indexOf('@');
    const name = email.slice(0, atIndex);
    return name;
}

export function parseNameFromEmail(email) {
    const name = {};
    const match = email.match(/^([^@]+)@[^@]+\.com$/i);
    if (match) {
      const parts = match[1].split('.');
      name.first = parts[0];
      name.last = parts[1];
    }
    return name;
}