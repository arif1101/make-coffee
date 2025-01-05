
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
const CoffeeCard = ({coffee}) => {

    console.log(coffee)
    
    return (
        <div className="w-[300px] border shadow p-4 flex">
            <img src={coffee.photo} alt="" />
            <div>
                <p>Name: {coffee.name}</p>
                <p>Chef: {coffee.chef}</p>
                <p>Price: {coffee.price}</p>
            </div>
            <div>
                <p><FaEye></FaEye></p>
                <p><MdEdit></MdEdit></p>
                <p><AiOutlineDelete></AiOutlineDelete></p>
            </div>
        </div>
    );
};

export default CoffeeCard;