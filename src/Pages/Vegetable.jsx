import onion from '../assets/onions.jpg'
import eggplant from '../assets/EggPlant.jpg'
import carrot from '../assets/Carrots.jpg'
import cucumber from '../assets/Cucumber.jpg'
import brocoli from '../assets/brocoli.jpg'
import spinach from '../assets/spinach.jpg'
import { useState } from 'react'
import { context } from '../App'
import { useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
export default function Vegetable(){
    const {store,setStore} = useContext(context)
    const data = [{
        id:1,
        image: onion,
        text: "Onion",
        price: 19
    },{
        id:2,
        image:eggplant,
        text: "Egg Plant",
        price: 19
    },{
        id:3,
        image:carrot,
        text: "Carrot",
        price: 19
    },{
        id: 4,
        image:cucumber,
        text: "Cucumber",
        price: 19
    },{
        id:5,
        image: spinach,
        text: "Spinach",
        price: 19
    },{
        id:6,
        image: brocoli,
        text: "Brocoli",
        price: 19
    }]
    function buy(e){
        console.log(e)
        if(store.length > 0){
            store.map(function(pre){
                if(pre.id !== e.id){
                    setStore(function(pre){
                        return(
                        [...pre,e]
                    )
                    })
                }
                else{
                    alert("Already Exits")
                }
            })
        }else{
            setStore([e])
        }
        console.log('store',store)
    }
    return(
        <div>
            <div className="veg-wrapper">
                <div className="veg-container">
                    {data.map(function(res){
                        return(
                            <div className="veg-card" key={res.id}>
                                <div className="image-card">
                                    <img src={res.image} alt="" />
                                </div>
                                <div className="text-card">
                                    <h2>{res.text}</h2>
                                    <p>${res.price}</p>
                                    <button onClick={function(){
                                        buy(res)
                                    }}>Buy</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}