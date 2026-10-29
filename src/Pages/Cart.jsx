import onion from '../assets/onions.jpg'
import eggplant from '../assets/EggPlant.jpg'
import carrot from '../assets/Carrots.jpg'
import cucumber from '../assets/Cucumber.jpg'
import brocoli from '../assets/brocoli.jpg'
import spinach from '../assets/spinach.jpg'
import { useContext, useEffect} from 'react'
import { context } from '../App'
import { useState } from 'react'
export default function Cart(){
    const {store,remove,getting,setDisplay,display} = useContext(context)
    const [total,setTotal] = useState()
    function adding(){
        let sum = 0
        if(store.length > 0){
                store.map(function(pre){
                    sum += pre.price
                })
                setTotal(sum)
        }else{
            setTotal(0)
        }
    }
    console.log(total)
    useEffect(function(){
        adding()
    },[store])
    useEffect(function(){
        getting()
    },[])
    return(
        <div>
            <div className="veg-wrapper">
                {display.map(function(pre){
                    return(
                            <div className="veg-container" key={pre.id}>
                                <div className="veg-card">
                                    <div className="image-card">
                                        <img src={pre.image} alt="" />
                                    </div>
                                    <div className="text-card">
                                        <h2>{pre.text}</h2>
                                        <p>${pre.price}</p>
                                        <button onClick={function(){
                                            remove(pre)
                                        }}>Remove</button>
                                    </div>
                                </div>
                            </div> 
                    )
                })}        
                <p>Total: {total}</p>     
                {/* <p>{item}</p> */}

            </div>
        </div>
    )
}