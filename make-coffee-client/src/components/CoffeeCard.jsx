/* eslint-disable react/prop-types */

import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
const CoffeeCard = ({coffee}) => {

    const {_id,name,chef,photo} = coffee;

    const handleDelete = _id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

              fetch(`http://localhost:5000/coffee/${_id}`, {
                method: 'DELETE'
              })
              .then(res =>res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    console.log(data)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
              })
            }
          });
    }
    
    return (
        <div className="w-[648px] h-[300px] rounded-xl border shadow p-12 flex justify-between items-center gap-6 bg-stone-100">
            <img className="w-[185px] h-[239px] rounded-xl"  src={photo} alt="" />
            <div className="text-xl w-2/4">
                <p>Name: {name}</p>
                <p>Chef: {chef}</p>
                <p>Price: </p>
            </div>
            <div className="w-1/12 flex flex-col items-center gap-3">
                <p className="w-10 h-10 border flex items-center justify-center bg-yellow-100 rounded-md text-2xl"><FaEye></FaEye></p>
                <p className="w-10 h-10 flex items-center justify-center bg-slate-700 text-white rounded-md text-2xl"><MdEdit></MdEdit></p>
                <p onClick={() => handleDelete(_id)} className="cursor-pointer w-10 h-10 flex items-center justify-center bg-red-400 rounded-md text-white text-2xl"><AiOutlineDelete></AiOutlineDelete></p>
            </div>
        </div>
    );
};

export default CoffeeCard;