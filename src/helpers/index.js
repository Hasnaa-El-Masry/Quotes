export const getToken = () => {
    const token = localStorage.getItem('token');
    return token
}

export const getTokenDuration = (expirationTime) => {

    const now = new Date().getTime(); // get your number
    const expirationDate = new Date(expirationTime) // create Date object

    const remainingDuration = expirationDate - now;

    return remainingDuration
}

export function getAuthToken() {
    const token = localStorage.getItem('token');
    const expiration = localStorage.getItem('expiration');
    const remaining = getTokenDuration(expiration);

    if (!token) {
        return null;
    }

    if (remaining < 0) {
        return null;
    }

    return token;
}
