import ModulesPlanCards from "../cards/modulesPlanCards"
export default function ModulesSection() {

    return (

        <>

            <main style={{ height: "100%" }}>

                <div className="container">
                    <div className="mt-4 px-2">
                    {/*}
                        Import Your component here idiot boy!!! 
                    {*/}
                    <div className="row row-cols-1 mt-4">
                        <div className="col mb-3">
                            <ModulesPlanCards />
                        </div>
                        <div className="col mb-3">
                            <ModulesPlanCards />
                        </div>
                        <div className="col mb-3">
                            <ModulesPlanCards />
                        </div>
                        <div className="col mb-3">
                            <ModulesPlanCards />
                        </div>
                        <div className="col mb-3">
                            <ModulesPlanCards />
                        </div>
                        <div className="col mb-3">
                            <ModulesPlanCards />
                        </div>
                    </div>
                    {/* <p style={{ fontFamily: "Fredoka, sans-serif" }}>Modules component goes here</p> */}
                    </div>
                </div>

            </main>

        </>

    )

}