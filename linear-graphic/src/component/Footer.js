import React from 'react';

function Footer() {
    return <div>
        {/* 
			=============================================
				Conatct us Section
			============================================== 
			*/}
        <div className="contact-us-section p-5">
            <div className="container">
       {/* /.theme-title-one */}
                <div className="clearfix main-content no-gutters row">
                    <div className="col-lg-5 con-l col-12">
                        <div className='con-t px-5'>
                            <h1 className='fs-1'>Let's Chat</h1>
                            <p>
                                We'd love to get to know you,
                                discuss your needs, and create
                                a plan for going forward. Please
                                enter your information in the
                                form below, and we'll contact
                                you as soon as possible.
                            </p>
                            <span className='con-i'><p className=''><i className='fas con-i fa-map-marker-alt'></i> Graphi Tales Creative,
                                36, Krishna
                                </p></span>
                                <span className='span'><p>Vihar, Gopal Pura Bypass,
                                Jaipur 302015</p></span>
                                <span className='con-i'><p> <i className='fas fa-envelope'></i>
                                tasrif@lineargraphic.com
                                </p></span>
                               <span className='con-i'> <p><i className='fas fa-phone'></i> +919899167772</p></span>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="form-wrapper">
                            <form action="" className="theme-form-one form-validation" autoComplete="off">
                                <div className="row">
                                    <div className="col-sm-12 col-12"><input className="name" type="text" placeholder="Name" required/></div>
                                    <div className="col-sm-12 col-12"><input className="email" type="email" placeholder="Email" required/></div>
                                    <div className="col-12"><textarea name="" id="" className="message" placeholder="Message" required/></div>
                                    
                                    <div className="col-sm-6 col-6"></div>
                                    <div className="col-6 w-50 file-input">
                                        <input type="file" className="file-in" /></div>
                                </div>

                                    {/* /.row */}
                                <button type='submit' className="theme-button-one">SEND MESSAGE</button>
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
