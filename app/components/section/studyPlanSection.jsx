import StudyPlanCards from "../cards/studyPlanCards"

export default function StudyPlanSecton() {

    return (

        <>

            <main style={{ height: "100%" }}>

                <div className="container">

                    <div className="row row-cols-1 mt-4">
                        <div className="col mb-3">
                            <StudyPlanCards />
                        </div>
                        <div className="col mb-3">
                            <StudyPlanCards />
                        </div>
                        <div className="col mb-3">
                            <StudyPlanCards />
                        </div>
                        <div className="col mb-3">
                            <StudyPlanCards />
                        </div>
                        <div className="col mb-3">
                            <StudyPlanCards />
                        </div>
                        <div className="col mb-3">
                            <StudyPlanCards />
                        </div>
                    </div>

                </div>

            </main>

        </>

    )

}