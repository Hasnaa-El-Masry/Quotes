const FIREBASE_DOMAIN = 'https://routerv6-1ca70-default-rtdb.firebaseio.com';

export const get = async () => {
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Coudln't fetch data!")
    }

    let transformedData = [];

    for (const key in data) {

        const obj = {
            id: key,
            ...data[key]
        }

        transformedData.push(obj);

    }

    return transformedData;
}

export const getById = async (id) => {

    const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${id}.json`);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch data!')
    }

    const loadedItem = {
        id,
        ...data
    }

    return loadedItem

}

export const add = async (item) => {
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            'Content-type': 'application/json'
        }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not create new item!')
    }

    return null;
}

// export const deleteQuote = async ({id}) => {
//     const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${id}.json`, {
//         method: 'DELETE',
//         body: JSON.stringify({}),
//         headers: {
//             'Content-type': 'application/json'
//         }
//     });

//     const data = await response.json();

//     if (!response.ok) {
//         throw new Error(data.message || 'Could not create new item!')
//     }

//     return ;
// }