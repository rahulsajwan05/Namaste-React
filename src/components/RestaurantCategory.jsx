import ItemListAccordion from "./ItemListAccordion";
import {useState} from 'react'

const RestaurantCategory =(props)=>{
    const {data, showItems , setShowIndex }= props;

    const handleClick = () => {
        setShowIndex()
    }
    return (
        <div>
            {/* { HEADER} */}
        <div className="bg-gray-50 shadow-lg w-6/12 mx-auto my-2 p-4">
          <div className="flex justify-between cursor-pointer" 
            onClick={handleClick}>
            <span className="font-bold">
                {data.title} ({data.itemCards.length})
             </span>
                <span>⬇️</span> 
         
        </div>
            { showItems && <ItemListAccordion key={data.categoryId} items={data.itemCards}/>}

        </div>
        </div>
    )
}
export default RestaurantCategory;