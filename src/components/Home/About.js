import React from 'react'

const About = () => {
    return (
        <>
            <div className="about_us_area">
                <div className="container">
                    <div className="row res_padd">

                        <h1>Welcom To BazarMoynaguri</h1>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae pharetra erat. Fusce quis suscipit leo. Nulla scelerisque erat in nam at efficitur tortor, vitae porttitor mi. Morbi sit amet velit nec leo imperdiet porttitor mi. Morbi sit amet velit nec leo imperdiet.</h2>
                        <img src="assets/images/icon05.jpg" alt="" />

                        <div className="linee"></div>

                        <div className="aboput_boxx line_left">
                            <img src="assets/images/icon12.png" alt="" />
                            <h3>Best Quality Product</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>

                        <div className="aboput_boxx">
                            <img src="assets/images/icon11.png" alt="" />
                            <h3>Free Shipping</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>

                        <div className="aboput_boxx border_none line_right">
                            <img src="assets/images/icon10.png" alt="" />
                            <h3>On Time Delivery</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>

                        <a href="#">Quality product at your door step</a>

                    </div>
                </div>
            </div >
        </>
    )
}

export default About