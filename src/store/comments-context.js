import { createContext, useState } from "react";
export const CommentsContext = createContext({
    data: null,
});

export const CommentsProvider = ({ children }) => {

    const [data, setData] = useState(null);

    const fetch = (data) => {
        
        setData(data)
    }

    const add = (item) => {
        const updatedData = [item,...data]
        setData(updatedData)
    }

    const deleteItem = (id) => {
        const filteredData = data.filter(item => item.id !== id)
        setData(filteredData)
    }

    const state = {
        data,
        fetch,
        add,
        deleteItem
    }

    return <CommentsContext.Provider value={state}>
        {children}
    </CommentsContext.Provider>
}