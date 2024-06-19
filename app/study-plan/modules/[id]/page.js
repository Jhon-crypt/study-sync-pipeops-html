import Header from "@/app/components/header/header"
import ModulesSection from "@/app/components/section/modulesSection"

export default function Modules({ params }) {

    return (

        <>

            <Header title="Modules" icon="bi-chevron-left" route="/study-plan" />

            <ModulesSection />
        </>

    )

}