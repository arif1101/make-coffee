
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name,chef,supplier,taste,category,details,photo}
        console.log(newCoffee)

        //send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log("send to server data : ",data)
                Swal.fire({
                    title: 'Good job',
                    text: 'Successfully added',
                    icon: 'success',
                  })
            })
    }
    
    return (
        <div className="bg-yellow-50 p-[100px]">
            <form onSubmit={handleAddCoffee} className="" action="">

                <div className="flex flex-col lg:px-[100px] gap-6">

                    <div className="flex-col flex md:flex-row justify-between gap-8">
                        <div className="md:w-1/2">
                            <p className="text-xl">Name</p>
                            <input type="text" name='name' placeholder="Enter coffee name" className="outline-emerald-400 px-5  w-full border border-gray-300 rounded-lg h-12" />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-xl">Chef</p>
                            <input type="text" name='chef' placeholder="Enter coffee chef" className="outline-emerald-400 px-5  w-full border border-gray-300 rounded-lg h-12" />
                        </div>
                    </div>
                    <div className="flex-col flex md:flex-row justify-between gap-8">
                        <div className="md:w-1/2">
                            <p className="text-xl">Supplier</p>
                            <input type="text" name='supplier'  placeholder="Enter coffee name" className="outline-emerald-400 px-5  w-full border border-gray-300 rounded-lg h-12" />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-xl">Taste</p>
                            <input type="text" name='taste' placeholder="Enter coffee chef" className="outline-emerald-400 px-5  w-full border border-gray-300 rounded-lg h-12" />
                        </div>
                    </div>
                    <div className="flex-col flex md:flex-row justify-between gap-8">
                        <div className="md:w-1/2">
                            <p className="text-xl">Category</p>
                            <input type="text" name='category' placeholder="Enter coffee name" className="outline-emerald-400 px-5  w-full border border-gray-300 rounded-lg h-12" />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-xl">Details</p>
                            <input type="text" name='details' placeholder="Enter coffee chef" className="outline-emerald-400 px-5  w-full border border-gray-300 rounded-lg h-12" />
                        </div>
                    </div>
                    <div className="">
                        <div className="w-full">
                            <p className="text-xl">Photo URL</p>
                            <input type="text" name='photo' placeholder="Enter coffee name" className="outline-emerald-400 px-5  w-full border border-gray-300 rounded-lg h-12" />
                        </div>
                    </div>
                    <div className="flex-col flex md:flex-row justify-between gap-8">
                        <input type="submit" value="Add Coffee" className="outline-emerald-400 px-5 border border-gray-300 rounded-lg h-12 btn btn-block" />
                    </div>

                    
                </div>

                
            </form>
        </div>
    );
};

export default AddCoffee;