import Header from "../components/header/header"
import GpaCalculatorSection from "../components/section/gpaCalculatorSection"

export default function Page() {

    return (

        <>

            <Header title="GPA Calculator" icon="bi-chevron-left" route="/dashboard" />

            <GpaCalculatorSection />
        </>

    )

}