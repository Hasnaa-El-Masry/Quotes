const FIREBASE_DOMAIN = 'AIzaSyA6twMtsbOMhJCiNImEUuhnGlZDyIn7IdY';


export const signup = async (requestData) => {

    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_DOMAIN}`,
        {
            method: 'POST',
            body: JSON.stringify({ ...requestData, returnSecureToken: true }),
            headers: {
                'Content-type': 'application/json'
            }
        });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error.message || 'Could not create new item!')
    }

    return data;
}

export const login = async (requestData) => {

    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_DOMAIN}`,
        {
            method: 'POST',
            body: JSON.stringify({ ...requestData, returnSecureToken: true }),
            headers: {
                'Content-type': 'application/json'
            }
        });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error.message || 'Could not create new item!')
    }

    return data;
}