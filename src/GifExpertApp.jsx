import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {
        
        // if ( categories.includes( newCategory) ) return;
        // const call = categories.findIndex(category => category.toLowerCase() === newCategory.toLowerCase());
        // console.log(call);
        if (categories.some(category => category.toLowerCase() === newCategory.toLowerCase())) return;
        setCategories([ newCategory, ...categories ])
    }

    return (
        <>

            <h1>Gif Expert App</h1>

            <AddCategory 
                onNewCategory= { value => onAddCategory(value) } //argumento se lo mandamos a una funcion inmediatamente
                // setCategories={ setCategories } 
            /> 
            {/* // le paso como prop una funcion al componente hijo  */}
            
            { 
                categories.map( ( category ) => ( 
                    <GifGrid 
                        key={category} 
                        category={ category } /> 
                ))
            }

        </>
    )
}

// API KEY = CQGezYnsdQgX3V7X9IS0N1hC5B6vXNuS
