import React from 'react';

export default function Slider() {
  return <div>
     {/* testimonial slider start  */}
     <section className='tastimonial '>
            <h1 className='fs-2 pt-5 text-center'>TESTIMONIALS</h1>
            <p className='p-2 text-center'>Our clients help us to improve and strive for more.</p>
            <div id="carouselExampleCaptions" className="py-5 carousel conatiner w-75 mx-auto slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-lg-2" />
                            <div className="col-lg-8 d-flex flex-column align-items-center">
                                <div className='rounded-img img-1 my-5'></div>
                                <h5>Cynthia Nelson</h5>
                                <p>Student of scince</p>
                                <p>"The teaching, in my opinion, is the best that anyone can hope for. Sekolah High School staff provide an environment in which students are able to reach their full potential. As well as this. I felt constantly challenged to push myself to exceed what is expected. I have no doubt that the persion I become is due to my time spent here and that the last six years have been the best of my life."</p>


                            </div>
                            <div className="col-lg-2" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-lg-2" />
                            <div className="col-lg-8 d-flex flex-column align-items-center">
                                <div className='rounded-img img-2 my-5'></div>
                                <h5>Cynthia Nelson</h5>
                                <p>Student of scince</p>
                                <p>"The teaching, in my opinion, is the best that anyone can hope for. Sekolah High School staff provide an environment in which students are able to reach their full potential. As well as this. I felt constantly challenged to push myself to exceed what is expected. I have no doubt that the persion I become is due to my time spent here and that the last six years have been the best of my life."</p>


                            </div>
                            <div className="col-lg-2" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-lg-2" />
                            <div className="col-lg-8 d-flex flex-column align-items-center">
                                <div className='rounded-img img-3 my-5' ></div>
                                <h5>Cynthia Nelson</h5>
                                <p>Student of scince</p>
                                <p>"The teaching, in my opinion, is the best that anyone can hope for. Sekolah High School staff provide an environment in which students are able to reach their full potential. As well as this. I felt constantly challenged to push myself to exceed what is expected. I have no doubt that the persion I become is due to my time spent here and that the last six years have been the best of my life."</p>


                            </div>
                            <div className="col-lg-2" />
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="" aria-hidden="true"><i className='text-black fs-2 fas fa-chevron-left'></i></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="" aria-hidden="true" > <i className='text-black fs-2 fas fa-chevron-right'></i></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </section>
        {/* testimonial slider end  */}
  </div>;
}
