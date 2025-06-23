import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemListAccordion = ({items}) =>{

    const dispatch = useDispatch()
    const handleAddItem = (item)=>{
        dispatch(addItem(item))
    }

    return(
        <div>
            {items.map((item)=>( 
                <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex" key={item.card.info.id}>
                    <div className="w-9/12">
                    <div className="py-2">
                        <span className="text">{item.card.info.name}</span>
                        <span>{" "}- ₹ {" "}{item.card.info.price ? item.card.info.price /100 : item.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="text-ellipsis overflow-hidden whitespace-nowrap">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-2">
                            <div className="absolute">
                                <button className="p-1 bg-black shadow-lg rounded-lg text-white"
                                onClick={() => handleAddItem(item)}
                                // onClick={ handleAddItem(item)}
                                // onClick={handleAddItem}
                                >Add +</button>
                            </div>
                            <img src={CDN_URL + item.card.info.imageId} className="w-full rounded-lg" ></img>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default ItemListAccordion;
