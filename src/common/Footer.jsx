import React from "react"

const FooterStrap = ()  => 
<footer className="page-footer font-small blue pt-4">
<div id="foot"></div>
<hr></hr>
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Burning Airlines Project</h5>
                <p>Burning Airlines is a safe and trustworthy airlines with a reputation for underpaying developers and giving them unrealistic deadlines.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">Search</a></li>
                    <li><a href="#!">Planes</a></li>
                    <li><a href="#!">Flights</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Info</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Subscribe</a></li>
                    <li><a href="#!">About Us</a></li>
                    <li><a href="#!">Support</a></li>
                    <li><a href="#!">Admin View</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright</div>

</footer>

export default FooterStrap

