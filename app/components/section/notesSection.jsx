import Link from "next/link"

export default function NotesSection() {

    return (

        <>

            <main style={{ height: "100%" }}>

                <div className="container">
                    <div className="mt-4 px-2">

                        <p style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "bold" }}>Introduction to Osteology of the Head</p>
                    </div>
                    <div className="mt-2 px-2">
                        <p style={{ fontFamily: "Fredoka, sans-serif", textAlign: "left", textOverflow: "inherit" }}>
                            Osteology of the head is divided  the head is divided into 2 parts, one thing i have is  the head is divided into 2 parts, one thing i have is
                        </p>
                    </div>

                    <div className="mt-4 px-2">

                        <p style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "bold" }}>Bones of the Head</p>
                    </div>

                    <div className="mt-2 px-2">
                        <ul style={{ fontFamily: "Fredoka, sans-serif", textAlign: "left", textOverflow: "inherit" }}>
                            <li className="pb-2"> Osteology of the head is divided into 2 parts, one thing i have is  the head is divided into 2 parts.              </li>
                            <li className="pb-2"> Osteology of the head is divided into 2 parts, one thing i have is  the head is divided into 2 parts.              </li>
                            <li> Osteology of the head is divided into 2 parts, one thing i have is  the head is divided into 2 parts.              </li>
                        </ul>

                    </div>
                    <div className="mt-4 px-2">

                        <p style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "bold" }}>Bones of the Head</p>
                    </div>

                    <div className="mt-2 px-2">
                        <ul style={{ fontFamily: "Fredoka, sans-serif", textAlign: "left", textOverflow: "inherit" }}>
                            <li className="pb-2"> Osteology of the head is divided into 2 parts, one thing i have is  the head is divided into 2 parts.              </li>
                            <li className="pb-2"> Osteology of the head is divided into 2 parts, one thing i have is  the head is divided into 2 parts.              </li>
                            <li> Osteology of the head is divided into 2 parts, one thing i have is  the head is divided into 2 parts.              </li>
                        </ul>

                    </div>

                    <div className="mt-5 mb-3 d-grid ">
                        <Link href="/study-plan/quiz" className="btn btn-block border-0 text-white px-5 py-2 " style={{ fontFamily: "Fredoka, sans-serif", background: "linear-gradient(to right, #D95388, #85486e)" }}>
                            Take Quiz
                        </Link>
                    </div>
                </div>

            </main>

        </>

    )

}