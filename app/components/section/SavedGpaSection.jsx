import SavedGpaCard from "../cards/savedGpaCard"

export default function SavedGpaSection() {

    return (

        <>

            <main style={{ height: "100%" }}>

                <div className="container">

                    <div className="row row-cols-1 mt-4">
                        <div className="col mb-3">
                            <SavedGpaCard />
                        </div>
                        <div className="col mb-3">
                            <SavedGpaCard />
                        </div> 
                        <div className="col mb-3">
                            <SavedGpaCard />
                        </div>
                    </div>

                </div>

            </main>

        </>

    )

}