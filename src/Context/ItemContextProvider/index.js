import React from 'react';

export const ListsContext = React.createContext();

const ItemContextProvider = (props) => {

    const [item,setItem] = React.useEffect({});
    const [loading,setLoading] = React.useEffect(true);

    const asyncFetchData = async () => {
        
        const item = await props.items.find((item) => item._id === props.id);
        setItem(item);
        setLoading(false);
        
    }
    React.useEffect(async () => {
       await asyncFetchData()
    },
        []);
    return (
        <ListsContext.Provider value={item,loading}>
            {children}
        </ListsContext.Provider>
    );
};

ItemContextProvider.propTypes = {

};

export default ItemContextProvider;
