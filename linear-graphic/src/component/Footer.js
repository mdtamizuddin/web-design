import React from 'react';

function Footer() {
    return <div>
        {/* 
			=============================================
				Conatct us Section
			============================================== 
			*/}
        <div className="contact-us-section section-spacing">
            <div className="container">
                <div className="theme-title-one">
                   
                </div> {/* /.theme-title-one */}
                <div className="clearfix main-content no-gutters row">
                    <div className="col-lg-5 con-l col-12">
                        <div className='con-t p-5'>
                            <h1 className='my-2'>Let's Chat</h1>
                            <p>
                                We'd love to get to know you,
                                discuss your needs, and create
                                a plan for going forward. Please
                                enter your information in the
                                form below, and we'll contact
                                you as soon as possible.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="form-wrapper">
                            <form action="" className="theme-form-one form-validation" autoComplete="off">
                                <div className="row">
                                    <div className="col-sm-6 col-12"><input type="text" placeholder="Name *" name="name" /></div>
                                    <div className="col-sm-6 col-12"><input type="text" placeholder="Phone *" name="phone" /></div>
                                    <div className="col-sm-12 col-12"><input type="email" placeholder="Email *" name="email" /></div>
                                    <div className="col-12"><textarea placeholder="Message" name="message"  /></div>
                                    <div className="col-sm-6 col-6"></div>
                                   
                                    <div className="col-6 w-50 file-input">
                                        <input type="file" className="file-in" /></div>
                                </div> {/* /.row */}
                                <button className="theme-button-one">SEND MESSAGE</button>
                            </form>
                        </div> {/* /.form-wrapper */}
                    </div> {/* /.col- */}
                </div> {/* /.main-content */}
            </div> {/* /.container */}
            {/*Contact Form Validation Markup */}
            {/* Contact alert */}


        </div> {/* /.contact-us-section */}

        <footer>
            <div className='container footer'>
                <p>© 2022 Linear Graphic</p>
                <span>
                    <i className='fab fa-facebook'></i>
                    <i className='fab fa-instagram'></i>
                    <i className='fab fa-twitter'></i>
                    <i className='fab fa-linkedin'></i>
                </span>
            </div>
        </footer>
    </div>;
}

export default Footer;
