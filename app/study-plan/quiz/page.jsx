import Header from "@/app/components/header/header";
import QuizSection from "@/app/components/section/quizSection";

export default function Quiz() {

    return (

        <>

            <Header title="Quiz" icon="bi-chevron-left" route="/study-plan/notes" />

            <QuizSection />
        </>

    )

}