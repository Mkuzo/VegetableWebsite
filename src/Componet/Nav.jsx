import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { context } from "../App"
export default function Nav(){
    const {store} = useContext(context)
    const navigate = useNavigate()
    function handleHome(){
        navigate('/')
    }
    function handleAbout(){
        navigate('/About')
    }
    function handleVeg(){
        navigate('/Vegetable')
    }
    function handleCart(){
        navigate('/Cart')
    }
    console.log(store.length,'number')
    return(
        <div>
            <div className="navigation-wrapper">
                <div className="navigation">
                    <div className="text-container">
                        <h1>V<span>o</span>ge</h1>
                    </div>
                    <ul>
                        <li onClick={handleHome}>Home</li>
                        <li onClick={handleVeg}>Vegetable</li>
                        <li onClick={handleAbout}>About</li>
                        <li onClick={handleCart}>Cart <span>{store.length}</span></li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}