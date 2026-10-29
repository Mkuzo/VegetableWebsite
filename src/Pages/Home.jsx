import veg from '../assets/veg.jpg'
export default function Home(){
    return(
        <div>
            <div className="banner">
                <div className="card-container">
                        <div className="home-container">
                            <h1>Fresh Vegetable Shop</h1>
                            <p>Vege – Fresh Vegetable Shop Template</p>
                            <div className="buttons">
                                <div className="white-button">
                                    <button>Buy Now</button>
                                </div>
                                <div className="button-container">
                                    <button>Contact Us</button>
                                </div>
                            </div>
                        </div>
                        <div className="image-container">
                            <img src={veg} alt="" />
                        </div>
                </div>
            </div>
        </div>
    )
}