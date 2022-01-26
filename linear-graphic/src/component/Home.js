import React from 'react';
import Slider from './Slider';
function Home() {
    return <div>
        <div className="hero-area">
            <div className="container  d-flex justify-content-center">
                <div className="hero-content">
                    <h2 className="animate__animated animate__delay-0.8s  animate__backInDown">We provide</h2>
                    <h1 className="animate__animated animate__delay-1s  animate__backInRight">
                        High-quality, Affordable<br />
                        Araphic Design Aervices For<br />
                        Marketing Agencies.
                    </h1>
                    <a className="btn-c animate__animated animate__backInUp animate__delay-1s" href="/"><button className="color-btn"> Get A Quote</button></a>
                </div>
            </div>
        </div>
        {/* hero area End here  */}

        {/* service section  */}
        <section>
            <div className='container  mart-70'>
                <h1 className='text-center fs-1 py-4'>Designed For Your Success.</h1>
                <p className='text-center serv-p'>Linear Graphic is a branding and marketing graphic design studio based in Cebu, Philippines. We provide fast, high-quality, and reliable graphic design support to business owners and marketing professionals to get your projects done faster. Better. You get to focus on doing what you do best, increase your productivity, and take on more clients</p>
                <div className='row service-top my-5'>
                    <div className='col p-5'>
                    <img src="https://pugodesigns.com/wp-content/uploads/2020/08/PUGO-website-ICONS-BRANDING.png" alt="" srcset=""/>
                    <h2>Branding</h2>
                    <p>Logo
                        Corporate Identity
                        Brand Guidelines
                        Mascot Design</p>
                    </div>
                    <div className='col p-5'>
                    <img src="https://pugodesigns.com/wp-content/uploads/2020/08/PUGO-website-ICONS-MARKETING.png" alt="" srcset=""/>
                    <h2>Marketing</h2>
                    <p>Logo
                        Corporate Identity
                        Brand Guidelines
                        Mascot Design</p>
                    </div>
                    <div className='col p-5'>
                    <img src="https://pugodesigns.com/wp-content/uploads/2020/08/PUGO-website-ICONS-WEB.png" alt="" srcset=""/>
                    <h2>Web Design</h2>
                    <p>Logo
                        Corporate Identity
                        Brand Guidelines
                        Mascot Design</p>
                    </div>
                    <div className='col p-5'>
                    <img src="https://pugodesigns.com/wp-content/uploads/2020/08/PUGO-website-ICONS-ANIMATION2.png" alt="" srcset=""/>
                    <h2>Web Dev</h2>
                    <p>Logo
                        Corporate Identity
                        Brand Guidelines
                        Mascot Design</p>
                    </div>
                </div>
            </div>
        </section>
        {/* Project running and competed section start*/}

        <section className='mart-60 bg-2'>
            <div className='container '>

                <h1 className='fs-1  mt-5  text-center'>Our Design Prosses</h1>
                <p className='text-center fs-5'>Get your customized visual content design oozing with creativity and grandeur in easy 3 steps</p>
                <div className='row   d-flex align-items-center height-hl'>
                    <div className='col ps-5'>
                        {/* accordian start  */}
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        STEP 1 - LET'S CONNECT
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Fill the contact form and provide us details. We will discuss your project to get a complete picture of your preferences about design, specifications, and budget.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        STEP 2 - GETTING ROLLING
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>We will start working on your presentation based on your inputs. We prepare a sample ppt for your approval, containing cover slide, template, and a few slides</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        STEP 3 - EXECUTION AND DELIVERY
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">

                                        <p>We take your feedback, make revisions, apply the final touches, make sure everything is in the right order, deliver the final presentation, to mark the completion of your project.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* accordian End  */}
                    </div>

                    <div className='col row-c2'>
                        <img className='border-l w-80' width='80%' src="https://github.com/mdtomiz420/Linear-Graphic/blob/main/mail.gif?raw=true" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className=''>
                <div className='row'>
                    <div className='col col-bg3 '>

                    </div>
                    <div className='col bg-dark d-flex align-items-center'>
                        <div className='row w-100'>
                            <div className='col-6'>
                                <h1 className='text-center text-white'>298</h1>
                                <p className='text-center text-white p-2'>Completed Project</p>
                            </div>
                            <div className='col'>
                                <h1 className='text-center text-white'>06</h1>
                                <p className='text-center text-white p-2'>Running Project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Project running and competed section end*/}
        {/* our service section start  here  */}
        <section>
            <div className='service-title'>
                <h1 className='fs-1'>Letest Works</h1>
            </div>
            <div className='container mart-70 service-con'>
                {/* item start */}
                <div className='service-item'>
                    <img className='w-60' src="https://github.com/mdtomiz420/Linear-Graphic/blob/main/Cover%206.png?raw=true" alt="" />
                    <div className='service-overlay animate__animated  animate__fadeInUp animate__delay-0.5s'>
                        <a className='serv-btn' href='/'>View Project <i className='fas fa-arrow-right'></i></a>
                    </div>
                </div>
                {/* item end  */}
                {/* item start */}
                <div className='service-item'>
                    <img src="https://github.com/mdtomiz420/Linear-Graphic/blob/main/Cover%206.png?raw=true" alt="" />
                    <div className='service-overlay animate__animated  animate__fadeInUp animate__delay-0.5s'>
                        <a className='serv-btn' href='/'>View Project <i className='fas fa-arrow-right'></i></a>

                    </div>
                </div>
                {/* item end  */}
                {/* item start */}
                <div className='service-item'>
                    <img src="https://github.com/mdtomiz420/Linear-Graphic/blob/main/Cover%206.png?raw=true" alt="" />
                    <div className='service-overlay animate__animated  animate__fadeInUp animate__delay-0.5s'>
                        <a className='serv-btn' href='/'>View Project <i className='fas fa-arrow-right'></i></a>

                    </div>
                </div>
                {/* item end  */}
                {/* item start */}
                <div className='service-item'>
                    <img src="https://github.com/mdtomiz420/Linear-Graphic/blob/main/Cover%206.png?raw=true" alt="" />
                    <div className='service-overlay animate__animated  animate__fadeInUp animate__delay-0.5s'>
                        <a className='serv-btn' href='/'>View Project <i className='fas fa-arrow-right'></i></a>

                    </div>
                </div>
                {/* item end  */}
                {/* item start */}
                <div className='service-item'>
                    <img src="https://github.com/mdtomiz420/Linear-Graphic/blob/main/Cover%206.png?raw=true" alt="" />
                    <div className='service-overlay animate__animated  animate__fadeInUp animate__delay-0.5s'>
                        <a className='serv-btn' href='/'>View Project <i className='fas fa-arrow-right'></i></a>

                    </div>
                </div>
                {/* item end  */}
                {/* item start */}
                <div className='service-item'>
                    <img src="https://github.com/mdtomiz420/Linear-Graphic/blob/main/Cover%206.png?raw=true" alt="" />
                    <div className='service-overlay animate__animated  animate__fadeInUp animate__delay-0.5s'>
                        <a className='serv-btn' href='/'>View Project <i className='fas fa-arrow-right'></i></a>

                    </div>
                </div>
                {/* item end  */}
                {/* item start */}
                <div className='service-item'>
                    <img src="https://github.com/mdtomiz420/Linear-Graphic/blob/main/Cover%206.png?raw=true" alt="" />
                    <div className='service-overlay animate__animated  animate__fadeInUp animate__delay-0.5s'>
                        <a className='serv-btn' href='/'>View Project <i className='fas fa-arrow-right'></i></a>

                    </div>
                </div>
                {/* item end  */}
                {/* item start */}
                <div className='service-item'>
                    <img src="https://github.com/mdtomiz420/Linear-Graphic/blob/main/Cover%206.png?raw=true" alt="" />
                    <div className='service-overlay animate__animated  animate__fadeInUp animate__delay-0.5s'>
                        <a className='serv-btn' href='/'>View Project <i className='fas fa-arrow-right'></i></a>

                    </div>
                </div>
                {/* item end  */}
                {/* item start */}
                <div className='service-item'>
                    <img src="https://github.com/mdtomiz420/Linear-Graphic/blob/main/Cover%206.png?raw=true" alt="" />
                    <div className='service-overlay animate__animated  animate__fadeInUp animate__delay-0.5s'>
                        <a className='serv-btn' href='/'>View Project <i className='fas fa-arrow-right'></i></a>

                    </div>
                </div>
                {/* item end  */}

            </div>
        </section>
        {/* our service section end here  */}
        <Slider />



    </div>;
}

export default Home;
