import React from 'react';
import { getCategories, getItems } from '../../actions';

export const ListsContext = React.createContext();

const ItemsContextProvider = ({ children }) => {
    const [lists, setLists] = React.useState([]);
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
    console.log(error)
    const handleFilter = (value) => {
        setrFilter(value);
    }
    React.useEffect(async () => {
       await asyncFetchData()
    },
        []);


    return (
        <ListsContext.Provider value={{lists,loading,filter,handleFilter,categories,error}}>
            {children}
        </ListsContext.Provider>)
};

ItemsContextProvider.propTypes = {

};

export default ItemsContextProvider;

