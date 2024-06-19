import Link from "next/link"

export default function Page() {

    return (

        <>

            <div>
                <div className="container-fluid text-center">

                    <div className="row justify-content-between align-items-center my-4">
                        <div className="col-auto">
                            <img src="/logo2.png" alt="StudySync Logo" className="img-fluid" width={160} />
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

        </>

    )

}