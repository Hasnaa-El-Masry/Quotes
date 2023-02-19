const FIREBASE_DOMAIN = 'https://routerv6-1ca70-default-rtdb.firebaseio.com';

export const get = async (quoteId) => {
    const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Coudln't fetch data!")
    }

    const transformedData = [];

    for (const key in data) {

        const obj = {
            id: key,
            text: data[key]
        }

        transformedData.push(obj)
    }

    return transformedData;
}

export const add = async (requestData) => {
    const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`, {
        method: 'POST',
        body: JSON.stringify(requestData.commentData),
        headers: {
            'Content-type': 'application/json'
        }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not create new item!')
    }

    return { commentId: data.name };
}

export const deleteComment = async (requestData) => {
    const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.quoteId}/${requestData.commentId}.json`, {
        method: 'DELETE',
        body: JSON.stringify({}),
        headers: {
            'Content-type': 'application/json'
        }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not create new item!')
    }

    return ;
}