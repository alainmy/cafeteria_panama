import React from 'react';
import { getCategories, getItems } from '../../actions';

export const ListsContext = React.createContext();

const ItemsContextProvider = ({ children }) => {
    const [lists, setLists] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [filter,setrFilter] = React.useState('Entradas');
    const [loading, setloading] = React.useState(true);

    const asyncFetchData = async () => {
        
        await getItems(1).then(res => {
            const result = res.items;
            setLists([...result]);
            setloading(false)
        });
        await getCategories(1).then(res => {
            const result = res.items;
            setCategories([...result]);
            setloading(false)
        });
    } 
    const handleFilter = (value) => {
        setrFilter(value);
    }
    React.useEffect(async () => {
       await asyncFetchData()
    },
        []);


    return (
        <ListsContext.Provider value={{lists,loading,filter,handleFilter,categories}}>
            {children}
        </ListsContext.Provider>)
};

ItemsContextProvider.propTypes = {

};

export default ItemsContextProvider;

