import veg2 from '../assets/veg2.jpg'
export default function About(){
    return(
        <div>
            <div className="about-container">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="about-wrapper">
                    <div className="about-image">
                        <img src={veg2} alt="" />
                    </div>
                    <div className="about-text">
                         <h1>Fresh Any</h1>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                         <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}