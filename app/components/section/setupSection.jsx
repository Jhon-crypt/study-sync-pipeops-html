import Link from "next/link"
import SetupForm from "../forms/setupForm"

export default function SetupSection() {

    return (

        <>

            <main style={{ height: "100%" }}>
                <div className="d-flex align-content-center justify-content-center">
                    <h1 className="mt-3">
                        <img src="/logo.png" alt="Logo" width={150} />
                    </h1>
                </div>

                <div className="container">
                    <div className="d-flex ps-3 mt-4">
                        <span className="me-3">
                            <Link href="/signup" className="bi bi-chevron-left" style={{ fontSize: "20px", color: "#D9455F", "-webkit-text-stroke": "1.3px", textStroke: "5px" }}></Link>
                        </span>
                        <span style={{ fontSize: "20px", fontFamily: "Fredoka, sans-serif", fontWeight: "500" }}>Create Account</span>
                    </div>
                    <div className="px-4">
                        <div class="progress mt-3" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ "height": "5px" }}>
                            <div class="progress-bar" style={{ "width": "100%", backgroundColor: "#D9455F" }}></div>
                        </div>
                    </div>

                    <div className="mt-4 px-2">
                        <SetupForm />
                    </div>
                </div>
            </main>

        </>

    )

}