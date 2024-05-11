import index1 from "../assets/airbnb_index1.png"
import index2 from "../assets/airbnb_index2.png"
import { Button } from "react95";
import './desktop.css'

export const bookingApp = () => {
    return (
        <>
        <div className="h4-style">
            <p>A full-stack app coverings main features including <b>user registeration</b>, <b>login</b>. Users can easily <b>make bookings</b>, <b>create new listings</b> of available places for rent, <b>modifying existing listings</b>, and <b>leave reviews for their experiences</b>
            </p>                                
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: '15px' }}>
            <Button primary>GitHub Repository</Button>
            <Button primary>Demo Link (deployed into Fly.io)</Button>
            <Button primary>README.md</Button>
        </div>
        <div style={{ marginLeft: '15px'}}>
            <h3>Index Page - Where all places are listed</h3>
            <p>Each place will display its location, price, and a short description. Of course, you can filter out where you want to see on the Header. Or even rent out your home, log in, and see your profile details</p>
            <img src={index1} alt="Airbnb" style={{ width: '800px', height: '400px' }} />
        </div>
        <div style={{ marginLeft: '15px'}}>
            <h3>Place Details - Reviews - Booking Widget</h3>
            <p>See description of a place, its reviews based on clients who stayed there. If it's good enough, you can book this place</p>
            <img src={index2} alt="Airbnb" style={{ width: '800px', height: '400px' }} />
        </div>
        <div style={{ marginLeft: '15px'}}>
            <h3>Place Details - Reviews - Booking Widget</h3>
            <p>See description of a place, its reviews based on clients who stayed there. If it's good enough, you can book this place</p>
            <img src={index2} alt="Airbnb" style={{ width: '800px', height: '400px' }} />
        </div>        
        </>
    )
}