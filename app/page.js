"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
//import OnboardingOneSection from './components/section/onbaordingOneSection';

export default function Home() {

  const [loading, setLoading] = useState(true);

  // Simulating loading with a setTimeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds (adjust as needed)
    }, 3000); // 3 seconds

    // Clean up function
    return () => clearTimeout(timeout);
  }, []); // Runs only once on component mount


  return (

    <>

      {loading ? (
        <main className="" style={{ height: "100vh", alignContent: "center" }}>
          <div className="d-flex align-justify-center justify-content-center">
            <h1 className="">
              <img src="/logo.png" alt="Logo" />
            </h1>
          </div>
        </main>
      ) : (
        <>
          <div className='mx-3' style={{ height: "100vh", alignContent: "center" }}>
            <div className='d-flex align-content-center justify-content-center'>
              <div class="card" style={{ "width": "100px;" }}>
                <div class="card-body">
                  <h5 class="card-title"><img src="/logo2.png" alt="StudySync Logo" className="img-fluid" width={200} /></h5>
                  <p class="card-text">
                    We recommend you to open Study sync on a <br />mobile device for the best experience
                  </p>
                  <div className='d-flex align-content-center justify-content-center'>
                    <Link href="/intro" className="btn text-white px-4" style={{ background: "linear-gradient(to right, #B670E3, #E864DB)", fontFamily: "Fredoka, sans-serif" }}>Proceed</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*}
        <div>
          <div className="container-fluid text-center">

            <div className="row justify-content-between align-items-center my-4">
              <div className="col-auto">
                <img src="/logo2.png" alt="StudySync Logo" className="img-fluid" width={200} />
              </div>
              <div className="col-auto">
                <button className="btn me-2 px-4" style={{ border: "1px solid #B670E3", fontFamily: "Fredoka, sans-serif" }}>Sign In</button>
                <button className="btn text-white px-4" style={{ background: "linear-gradient(to right, #B670E3, #E864DB)", fontFamily: "Fredoka, sans-serif" }}>Sign up</button>
              </div>
            </div>
            <br />
            <div className="row align-items-center">
              <div className="col-md-6 text-md-start text-center">
                <h1 className="display-4" style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "600" }}>All in One Learning Productivity Tool</h1>
                <p className="lead">
                  Discover a world of endless knowledge and growth opportunities tailored just for you,
                  combining cutting-edge technology with personalized learning experiences.
                </p>
                <div className="my-4">
                  <div class="">
                    <Link href="/signup" className="btn btn-lg btn-block me-3 px-5" style={{ border: "1px solid #B670E3", fontFamily: "Fredoka, sans-serif" }}>
                      Get started
                    </Link>
                    <Link href="/signin" className="btn btn-lg btn-block text-white px-5" style={{ background: "linear-gradient(to right, #B670E3, #E864DB)", fontFamily: "Fredoka, sans-serif" }}>Sign in now</Link>
                  </div>

                </div>
              </div>
              <div className="col-md-6 text-center">
                <img src="/public2.png" alt="Hero" className="img-fluid position-relative" />

              </div>
            </div>
          </div>

          
        </div>
        {*/}
        </>

      )}

      {/*}
          <OnboardingOneSection />
          {*/}


    </>


  );
}
