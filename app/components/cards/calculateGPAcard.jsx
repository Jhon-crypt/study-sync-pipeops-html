import Link from "next/link"

export default function CalculateGpaCard() {

    return (

        <>

            <Link href="/gpa" className="text-decoration-none card m-0" id="dashnavv" style={{ height: "84px", backgroundColor: "transparent", borderRadius: "10px", }}>
                <div className="card-body mt-2 mb-2">
                    <div className="d-flex" style={{ fontFamily: "Fredoka, sans-serif", fontSize: "14px", fontWeight: "550" }}>
                        <span className="me-2">
                            <i className="bi bi-calculator" style={{ color: "#E84D88" }} />
                        </span>
                        <span>Calculate GPA</span>
                    </div>
                </div>
            </Link>

        </>

    )

}