import Header from "@/app/components/header/header";
import CreateStudyPlanSection from "@/app/components/section/createStudyPlanSection";

export default function Page(){

    return (

        <>

            <Header title="Create Study Plan" icon="bi-chevron-left" route="/dashboard"/>

            <CreateStudyPlanSection />

        </>

    )

}