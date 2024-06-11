import Link from "next/link";


export default function ProfileSection() {

    return (

        <>

            <main style={{ height: "100%" }}>

                <div className="container">
                    <div style={{ textAlign: "center", marginTop: "-70px" }}>
                        <img src="/profile.png" className="img-fluid h-51 " alt="Profile Image" />
                    </div>
                    <div className="mt-3" style={{ fontFamily: "Fredoka, sans-serif", textAlign: "center", fontWeight: "normal" }} >
                        <span style={{ fontSize: "19px", fontFamily: "Fredoka, sans-serif", fontWeight: "600" }}>Islamiyah Yusuf</span>
                    </div>
                    <div className="">
                    <p style={{ fontFamily: "Fredoka, sans-serif", textAlign: "center", fontWeight: "normal" }} className="text-muted">Islamiyahyusuf@gmail</p> 
                    </div>
                    {/* <p style={{ fontFamily: "Fredoka, sans-serif", textAlign: "center", fontWeight: "bold" }}>Islamiyyah Yusuf</p>
                    <p style={{ fontFamily: "Fredoka, sans-serif", textAlign: "center", fontWeight: "normal" }} className="text-muted"></p> */}

                </div>

                <Link href="" className="text-decoration-none card bg-transparent border-top-0 mt-5" style={{ border: "1px solid #E0D9DE" }}>
                    <div className="pt-0 px-2">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center me-3">
                                <div className="flex-shrink-0">

                                    <img src="/tree.png"></img>

                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <div className="row row-cols-1">
                                        <div className="col">
                                            <span style={{ fontSize: "14px", fontFamily: "Fredoka, sans-serif", fontWeight: "500" }}>Grade Record</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="row row-cols-1">
                                    <div className="col mb-3 ms-2">
                                        <span
                                            style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "600" }}
                                        >
                                            <Link
                                                href="/dashboard"
                                                className="text-decoration-none text-dark bi-chevron-right me-2"
                                                style={{ "-webkit-text-stroke": "1.3px", textStroke: "5px" }}
                                            ></Link>

                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="" className="text-decoration-none card bg-transparent border-top-0" style={{ border: "1px solid #E0D9DE" }}>
                    <div className="pt-0 px-2">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center me-3">
                                <div className="flex-shrink-0">

                                    <img src="/tree.png"></img>

                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <div className="row row-cols-1">
                                        <div className="col">
                                            <span style={{ fontSize: "14px", fontFamily: "Fredoka, sans-serif", fontWeight: "500" }}>Grade Record</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="row row-cols-1">
                                    <div className="col mb-3 ms-2">
                                        <span
                                            style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "600" }}
                                        >
                                            <Link
                                                href="/dashboard"
                                                className="text-decoration-none text-dark bi-chevron-right me-2"
                                                style={{ "-webkit-text-stroke": "1.3px", textStroke: "5px" }}
                                            ></Link>

                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Link>


            </main>

        </>

    )

}