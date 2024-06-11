"use client"
import Link from "next/link"
import { useRouter } from 'next/navigation'


export default function Sidebar() {

    const router = useRouter()


    function redirectToStudyPlan() {
        setTimeout(() => {
            router.push('/study-plan')
        }, 300);

    }

    function redirectToProfile(){
        setTimeout(() => {
            router.push('/profile')
        }, 300);
    }

    function redirectToCgpa(){
        setTimeout(() => {
            router.push('/gpa')
        }, 300);
    }

    return (

        <>

            <div class="offcanvas offcanvas-start rounded" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ width: "250px" }}>
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                        <img src="/logo.png" alt="Logo" width={150} />
                    </h5>
                    {/*}
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    {*/}
                </div>
                <div class="offcanvas-body">
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2">
                            <a class="nav-link" onClick={redirectToStudyPlan} data-bs-dismiss="offcanvas" aria-label="Close" style={{ fontFamily: "Fredoka, sans-serif", color: "#674764", fontSize: "17px" }}>
                                <i className="bi bi-ui-checks-grid me-3" style={{ color: "#E84D88" }} />
                                <span>Study Plan</span>
                            </a>
                        </li>
                        <li class="nav-item mb-2">
                            <a class="nav-link" onClick={redirectToCgpa} data-bs-dismiss="offcanvas" aria-label="Close" style={{ fontFamily: "Fredoka, sans-serif", color: "#674764", fontSize: "17px" }}>
                                <i className="bi bi-calculator me-3" style={{ color: "#E84D88" }} />
                                <span>CGPA</span>
                            </a>
                        </li>
                        <li class="nav-item mb-2">
                            <a class="nav-link" href="/study-plan/quiz" style={{ fontFamily: "Fredoka, sans-serif", color: "#674764", fontSize: "17px" }}>
                                <i className="bi bi-cpu me-3" style={{ color: "#E84D88" }} />
                                <span>Quiz</span>
                            </a>
                        </li>
                        <li class="nav-item mb-2">
                            <a class="nav-link" href="#" style={{ fontFamily: "Fredoka, sans-serif", color: "#674764", fontSize: "17px" }}>
                                <i className="bi bi-mortarboard me-3" style={{ color: "#E84D88" }} />
                                <span>Grades</span>
                            </a>
                        </li>
                        {/*}
                        <li class="nav-item mb-2">
                            <a class="nav-link" href="#" style={{ fontFamily: "Fredoka, sans-serif", color: "#674764", fontSize: "17px" }}>
                                <i className="bi bi-gear me-3" style={{ color: "#E84D88" }} />
                                <span>Settings</span>
                            </a>
                        </li>
                        {*/}
                        <li class="nav-item mb-2">
                            <a class="nav-link" onClick={redirectToProfile} data-bs-dismiss="offcanvas" aria-label="Close" style={{ fontFamily: "Fredoka, sans-serif", color: "#674764", fontSize: "17px" }}>
                                <i className="bi bi-person me-3" style={{ color: "#E84D88" }} />
                                <span>Profile</span>
                            </a>
                        </li>
                        <li class="nav-item mb-2">
                            <a class="nav-link" href="#" style={{ fontFamily: "Fredoka, sans-serif", color: "#674764", fontSize: "17px" }}>
                                <i className="bi bi-box-arrow-right me-3" style={{ color: "#E84D88" }} />
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </>

    )

}