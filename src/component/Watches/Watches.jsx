import { useEffect, useState } from "react";
import Watch from "../Watch/Watch";
import Table from "../Table/Table";




const Watches = () => {

    const [watches, setWatches] = useState([])

    const [carts, setCarts] = useState([])
    

    useEffect(() => {
        fetch('watch.json')
            .then(res => res.json())
        .then(data=>setWatches(data))
    }, [])




    const handleAddToCart = (watch) => {
        //  console.log('clicke',watch,carts)
        
        const findCart = carts.find(cart => cart.id == watch.id)
        console.log(findCart);
        if (!findCart) {
             const newCart = [...carts, watch];
             setCarts(newCart);  
            
        }
        else {
            alert('Please Another One')
        }
       
         
       
    }




   
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 col-span-2">
          {watches.map((watch) => (
            <Watch
              watch={watch}
              key={watch.id}
              handleAddToCart={handleAddToCart}
            ></Watch>
          ))}
        </div>
        <div className="col-span-1">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Warranty</th>
                </tr>
              </thead>
                        <tbody>
                            {
                                carts.map((cart,idx) => <Table
                                    cart={cart}
                                    key={idx}
                                    idx={idx}
                                
                                ></Table>)
                            }
               
              </tbody>
            </table>
          </div>
         
        </div>
      </div>
    );
};

export default Watches;