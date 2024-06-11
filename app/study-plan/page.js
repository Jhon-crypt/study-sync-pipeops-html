import Header from "../components/header/header"
import StudyPlanSecton from "../components/section/studyPlanSection"

export default function Page() {

    return (

        <>

            <Header title="Study Plans" icon="bi-chevron-left" route="/dashboard" />

            <StudyPlanSecton />
        </>

    )

}