"use client"
import Link from "next/link"
import { useMediaQuery } from 'react-responsive'

export default function Page() {

    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }

    return (

        <>

            <div>
                <div className="container-fluid text-center">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">
                                <img src="/logo2.png" alt="StudySync Logo" className="img-fluid" width={160} />
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <Mobile>
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <Link class="nav-link active" href="/signin">Signin</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" href="/signup">Signup</Link>
                                        </li>
                                       
                                    </ul>
                                </Mobile>
                            </div>
                            <Desktop>
                                <div>
                                    <button className="btn mb-3" style={{ border: "1px solid #B670E3", fontFamily: "Fredoka, sans-serif" }}>Sign In</button>
                                    <button className="btn text-white" style={{ background: "linear-gradient(to right, #B670E3, #E864DB)", fontFamily: "Fredoka, sans-serif" }}>Sign up</button>
                                </div>
                            </Desktop>
                        </div>
                    </nav>
                    {/*}
                    <nav class="navbar bg-body-tertiary">
                        <div class="container-fluid">

                            <div>
                                <button className="btn me-2" style={{ border: "1px solid #B670E3", fontFamily: "Fredoka, sans-serif" }}>Sign In</button>
                                <button className="btn text-white" style={{ background: "linear-gradient(to right, #B670E3, #E864DB)", fontFamily: "Fredoka, sans-serif" }}>Sign up</button>
                            </div>
                        </div>
                    </nav>
                    {*/}

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

        </>

    )

}