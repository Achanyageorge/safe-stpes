import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
import './Footer.css';  // Import CSS file

function Footer() {
    return (
        <div>
            <MDBFooter className="footer">
                <MDBContainer className="footer-container">
                    <section className="social-icons">
                        <MDBBtn className="icon-btn" href="#!">
                            <MDBIcon fab icon="facebook-f" />
                        </MDBBtn>

                        <MDBBtn className="icon-btn" href="#!">
                            <MDBIcon fab icon="twitter" />
                        </MDBBtn>

                        <MDBBtn className="icon-btn" href="#!">
                            <MDBIcon fab icon="google" />
                        </MDBBtn>

                        <MDBBtn className="icon-btn" href="#!">
                            <MDBIcon fab icon="instagram" />
                        </MDBBtn>

                        <MDBBtn className="icon-btn" href="#!">
                            <MDBIcon fab icon="linkedin" />
                        </MDBBtn>

                        <MDBBtn className="icon-btn" href="#!">
                            <MDBIcon fab icon="github" />
                        </MDBBtn>
                    </section>
                </MDBContainer>

                <div className="footer-bottom">
                    © 2024 Copyright:  
                    <a href="https://mdbootstrap.com/"> MDBootstrap.com </a>
                </div>
            </MDBFooter>
        </div>
    );
}

export default Footer;
