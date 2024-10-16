import React from "react";
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section>
        <div>
          <marquee behavior="" direction=""></marquee>
        </div>
        <div className="container text-center my-5">
          <div className="row">
            <div className="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 mx-auto">
                <h1  style={{color:"blueviolet"}}>Easy Books</h1>
                <hr/>
                  <h5 className="card-title">
                    Where Simplicity Meets creativity in evry Click !
                  </h5>
                  <hr/>
                  <p className="text-secondary">
                  The company itself is a very successful company.
                  There is no such thing as pain and need, pain as
                  the fault from which, it will be followed by those who praise our advantages
                  The choice of the mind to reject the architect itself is more severe
                  all with what free, just finder? However, it is a mistake
                  with the pleasure of the accusers that I will come, as it were, ours
                  with the desire of the present she often desires him which she herself repels
                  He then fled in pursuit of the great one!
                  </p>
                  <div className= "d-flex justify-content-center align-item-center">
                  <div className="my-4 fw-bold p-4 box fs-5">
                  <Link to={"/Books"} className="home-btn p-3">Read Books</Link>
                  </div>
                  </div>
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 mx-auto">
              <div className="home-img">
                <img src="/assets/home.avif" className="rounded img-fluid" alt="Read Books" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
