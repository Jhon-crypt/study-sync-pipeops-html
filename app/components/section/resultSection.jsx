import { FaExclamationTriangle } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import Link from "next/link";

export default function ResultSection() {

    return (

        <>

            <main style={{ height: "100%" }}>

                <div className="px-3 py-3 " style={{ backgroundColor: "#F1E3EF", fontFamily: "Fredoka, sans-serif", fontWeight: "500", color: "#333333" }}>
                    <div className="d-flex align-content-center justify-content-center mb-2">
                        <span className="me-2"><FaExclamationTriangle className="text-danger" /></span>
                        <span>Try again once you are ready</span>
                    </div>
                    <div className="d-flex align-content-center justify-content-center">
                        <span><b>TO PASS</b> 80% or higher</span>
                    </div>
                    <div className="d-flex align-content-center justify-content-center">
                        <span><b>GRADE</b></span>
                    </div>
                    <div className="d-flex align-content-center justify-content-center text-danger">
                        <span><b>30.0 %</b></span>
                    </div>
                </div>

                <div className="container">
                    <div className="mt-4 px-2">
                        <div style={{ fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>
                            Latest grade (we keep your highest score)<br />
                        </div>
                        <div style={{ fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>
                            <b>30.0 %</b>
                        </div>

                        <div className="row row-cols-1 mt-4">
                            <div className="col mb-3">
                                <div className="text-decoration-none card bg-transparent" style={{ border: "1px solid #E0D9DE" }}>
                                    <div className="card-body ">
                                        <h6 style={{ fontFamily: "Fredoka, sans-serif", fontWeight: '400', color: "#333333" }}>QUESTION 1/10</h6>
                                        <p className="card-text" style={{ fontFamily: "Fredoka, sans-serif", fontWeight: 500 }}>How many bones are in the Skull ?</p>
                                        <div className="alert alert-danger text-danger border-0" style={{ backgroundColor: "#F1E3EF", fontFamily: "Fredoka, sans-serif", fontWeight: "500" }}>
                                            <IoIosCloseCircleOutline className="me-1" size={20} /> Incorrect
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col mb-3">
                                <div className="text-decoration-none card bg-transparent" style={{ border: "1px solid #E0D9DE" }}>
                                    <div className="card-body ">
                                        <h6 style={{ fontFamily: "Fredoka, sans-serif", fontWeight: '400', color: "#333333" }}>QUESTION 1/10</h6>
                                        <p className="card-text" style={{ fontFamily: "Fredoka, sans-serif", fontWeight: 500 }}>How many bones are in the Skull ?</p>
                                        <div className="alert alert-danger text-success border-0" style={{ backgroundColor: "#F1E3EF", fontFamily: "Fredoka, sans-serif", fontWeight: "500" }}>
                                            <FaRegCheckCircle className="me-1" size={20} /> Correct
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col mb-3">
                                <div className="text-decoration-none card bg-transparent" style={{ border: "1px solid #E0D9DE" }}>
                                    <div className="card-body ">
                                        <h6 style={{ fontFamily: "Fredoka, sans-serif", fontWeight: '400', color: "#333333" }}>QUESTION 1/10</h6>
                                        <p className="card-text" style={{ fontFamily: "Fredoka, sans-serif", fontWeight: 500 }}>How many bones are in the Skull ?</p>
                                        <div className="alert alert-danger text-danger border-0" style={{ backgroundColor: "#F1E3EF", fontFamily: "Fredoka, sans-serif", fontWeight: "500" }}>
                                            <IoIosCloseCircleOutline className="me-1" size={20} /> Incorrect
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="d-flex justify-content-between mb-3">
                            <Link href="/study-plan/quiz" className="btn ps-4" style={{ fontFamily: "Fredoka, sans-serif", color: "#CD598F", fontWeight: "600" }}>
                                Try again
                            </Link>

                            <Link href="/study-plan/modules" className="btn border-0 text-white px-5" style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "600", background: "linear-gradient(to right, #D95388, #85486e)" }}>
                                Next
                            </Link>

                        </div>

                    </div>
                </div>

            </main>

        </>

    )

}