import React from 'react';
function Home() {
  return <div>
   <div className="hero-area">
  <div className="container d-flex justify-content-center">
    <div className="hero-content">
      <h2 className="animate__animated animate__delay-0.8s  animate__backInDown">We provide</h2>
      <h1 className="animate__animated animate__delay-1s  animate__backInRight">
        High-quality, affordable<br />
        graphic design services for<br />
        Marketing Agencies.
      </h1>
      <a className="btn-c animate__animated animate__backInUp animate__delay-1s" href="#"><button className="color-btn"> Get A Quote</button></a>
    </div>
  </div>
</div>
  {/* hero area End here  */}
  {/* service section start here  */}
<section className='service'>
<div class="container py-5">
  <div className='col-lg-4 grid'>
      <div className='col border d-flex flex-column justify-content-center align-items-center'>
      <img src="images/logo-work.png" alt="Girl in a jacket" width="200" height="200"/>
        <h1 className='fs-4'>Logo Design</h1>
        <p>Learn More</p>
      </div>
      <div className='col border d-flex flex-column justify-content-center align-items-center'>
      <img src="images/logo-work.png" alt="Girl in a jacket" width="200" height="200"/>
        <h1 className='fs-4'>Logo Design</h1>
        <p>Learn More</p>
      </div>
      <div className='col border d-flex flex-column justify-content-center align-items-center'>
      <img src="images/logo-work.png" alt="Girl in a jacket" width="200" height="200"/>
        <h1 className='fs-4'>Logo Design</h1>
        <p>Learn More</p>
      </div>
      <div className='col border d-flex flex-column justify-content-center align-items-center'>
      <img src="images/logo-work.png" alt="Girl in a jacket" width="200" height="200"/>
        <h1 className='fs-4'>Logo Design</h1>
        <p>Learn More</p>
      </div>
      <div className='col border d-flex flex-column justify-content-center align-items-center'>
      <img src="images/logo-work.png" alt="Girl in a jacket" width="200" height="200"/>
        <h1 className='fs-4'>Logo Design</h1>
        <p>Learn More</p>
      </div>
      <div className='col border d-flex flex-column justify-content-center align-items-center'>
      <img src="images/logo-work.png" alt="Girl in a jacket" width="200" height="200"/>
        <h1 className='fs-4'>Logo Design</h1>
        <p>Learn More</p>
      </div>
  </div>
</div>
  </section>

  </div>;
}

export default Home;
