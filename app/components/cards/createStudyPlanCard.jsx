import Link from "next/link"

export default function CreateStudyPlanCard() {

    return (

        <>

            <Link href="/study-plan/create" className="text-decoration-none card m-0 hover-overlay bg-transparent" id="dashnav" style={{ height: "84px", borderRadius: "10px", }}>
                <div className="card-body mt-2 mb-2">
                    <div className="d-flex" style={{ fontFamily: "Fredoka, sans-serif", fontSize: "14PX", fontWeight: "550" }}>
                        <span className="me-2">
                            <i className="bi bi-ui-checks-grid" style={{ color: "#E84D88" }}/>
                        </span>
                        <span>Create a study plan</span>
                    </div>
                </div>
            </Link>

        </>

    )

}