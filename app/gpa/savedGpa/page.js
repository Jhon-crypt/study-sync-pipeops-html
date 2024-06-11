import Header from "@/app/components/header/header";
import SavedGpaSection from "@/app/components/section/SavedGpaSection";

export default function SavedGpasPage() {

    return (

        <>

            <Header title="Saved Gpas" icon="bi-chevron-left" route="/gpa" />
            <SavedGpaSection />

        </>

    )

}