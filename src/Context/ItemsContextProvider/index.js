import React from 'react';
import { getCategories, getItems } from '../../actions';

export const ListsContext = React.createContext();

const ItemsContextProvider = ({ children }) => {
    const [lists, setLists] = React.useState([]);
    const [item,setItem] = React.useState({});
    const [loadingItem,setLoadingItem] = React.useState(true);
    const [categories, setCategories] = React.useState([]);
    const [filter,setrFilter] = React.useState('Entradas');
    const [loading, setloading] = React.useState(true);
    const [error,setError] = React.useState('');
    
    const asyncFetchData = async () => {
        
        await getItems(1).then(res => {
            const {items,data,errors} = res;

            if(!data){
                setError('Error de Conexion')
                setloading(false)
            }
            else{
                setLists([...items]);
                setError('');
                setloading(false)
            }
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

    const findItem = async (value) => {
        
        const item = await lists.find((item) => item._id === value);
        setItem(item);
        setLoadingItem(false);
    }
    React.useEffect(async () => {
       await asyncFetchData()
    },
        []);


    return (
        <ListsContext.Provider value={{lists,loading,filter,handleFilter,categories,error,item,findItem,loadingItem}}>
            {children}
        </ListsContext.Provider>)
};

ItemsContextProvider.propTypes = {

};

export default ItemsContextProvider;

