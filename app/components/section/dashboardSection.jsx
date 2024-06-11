import CreateStudyPlanCard from "../cards/createStudyPlanCard"
import CalculateGpaCard from "../cards/calculateGPAcard"
import CreatAiQuizCard from "../cards/createAiquizCard"
import CalculateCGPACard from "../cards/calculateCGPACard"
import AnalyticsCard from "../cards/analyticsCard"
import BlogPost from "../cards/blogPostCard"

export default function Dashboard() {

    return (

        <>
            <main style={{ height: "100%" }}>
                <div className="container px-3 mt-2">
                    <header>
                        <p style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "500", fontSize: "17px" }} >Hi, Mariam Motunrayo </p>
                        <p className="d-flex" style={{ fontFamily: "Fredoka, sans-serif", }}>
                            <span className="me-4">Welcome</span>
                            <span>
                                <img src="welcome.png" />
                            </span>
                        </p>
                    </header>

                    <div className="row">
                        <div className="col m-0 p-1">
                            <CreateStudyPlanCard />
                        </div>
                        <div className="col m-0 p-1">
                            <CalculateGpaCard />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col m-0 p-1">
                            <CreatAiQuizCard />
                        </div>
                        <div className="col m-0 p-1">
                            <CalculateCGPACard />
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col p-1" style={{ maxHeight: "100%" }}>
                            <AnalyticsCard />
                        </div>
                        
                        <div className="col p-1">
                            <BlogPost />
                        </div>
                    </div>

                    <div className="mt-3">
                        <p className="d-flex" style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "500", fontSize: "17px" }}>
                            <span><i className="bi bi-journal-text me-2" /></span>
                            <span>Daily Update</span>
                        </p>

                        <div className="mt-2 px-2">
                            <div className="d-flex justify-content-between">
                                <p className="d-flex">
                                    <span className="me-2"><i className="bi bi-view-list" /></span>
                                    <span style={{ fontFamily: "Fredoka, sans-serif", }}>Course Quiz</span>
                                </p>
                                <p style={{ fontFamily: "Fredoka, sans-serif" }}>
                                    3/10
                                </p>
                            </div>
                            <div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ "height": "5px" }}>
                                <div class="progress-bar" style={{ "width": "40%", backgroundColor: "#D9455F" }}></div>
                            </div>
                        </div>
                        <hr />

                        

                        <p className="d-flex mt-4" style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "500", fontSize: "17px" }}>
                            <span><i className="bi bi-award me-2" /></span>
                            <span>Acheivements</span>
                        </p>

                        <div className="mt-2 mb-2">
                            <div className="card border-0 bg-transparent p-0" >
                                <div className="card-body">
                                    <div className="d-flex justify-content-center align-content-center">
                                        <img src="medal.png" />
                                    </div>
                                    <span className="text-center mt-2 d-flex align-content-center justify-content-center" style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "500", fontSize: "17px" }}>
                                        Congrats, Isila !
                                    </span>
                                    <p className="pt-2 text-center" style={{ fontFamily: "Fredoka, sans-serif", fontSize: "15px", color: "#333333"  }}>You just completed your weekly module quiz</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

        </>

    )

}