import React from 'react'
import Button from '../../Components/button/Button'
import ShopLogo from '../../Components/logo/ShopLogo'
import NavBar from '../../Components/Nav/NavBar'
import './LandingPage.css'



const LandingPage = () => {

    const handleCreate = (e) => {
        console.log("Hello create")
        window.location.href = "/steps";
    }

    return (
        <React.Fragment>
            <NavBar />
            <div className="landing-page-div" >
                <ShopLogo />
                
                <p className="open-text">Gift is one of the best thing to share your feeling to loved one <br/>
                    It make the person realize that some one care for them. <br/>
                    Share your love to your loved ones. <br/><br/></p>

                <p className="sec-text">We will feel happy and proud to become a parter in your happiness. <br/>
                    Let spread the happiness, take the oath. </p> <br/> 
                <Button 
                    value= {"Create Oath"}  
                    height={"40px"} 
                    width={"150px"} 
                    fill={"red"}
                    onClick={() => handleCreate()}  />
            </div>
        </React.Fragment>
    )
}

export default LandingPage;