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
                            <button type="submit" className="btn btn-block border-0 text-white px-5 py-2" style={{ fontFamily: "Fredoka, sans-serif", background: "linear-gradient(to right, #D95388, #85486e)" }}>
                                Finish
                            </button>
                        </div>
                        {/* <p style={{ fontFamily: "Fredoka, sans-serif" }}>Modules component goes here</p> */}
                    </div>
                </div>

            </main>

        </>

    )

}


{/*}
"use client"
import { useState, useEffect } from 'react';
import ModulesPlanCards from "../cards/modulesPlanCards"
import DotLoader from "react-spinners/DotLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export default function ModulesSection(props) {

    const [loading, setLoading] = useState(false)
    let [color, setColor] = useState("#85486e");
    const [modulesData, setModulesData] = useState(null);

    useEffect(() => {

        fetchModules();

    }, [])

    const fetchModules = async () => {
        setLoading(true)

        const url = `/api/studyplans/modules/list?plan_id=${props.plan_id}`

        const BearerToken = process.env.NEXT_PUBLIC_MASTER_BEARER_KEY;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${BearerToken}`
                }
            });
            if (!response.ok) {
                setLoading(false);
                throw new Error('Failed to fetch data');
            } else {
                const data = await response.json();
                setLoading(false);
                setModulesData(data.modules)
                console.log(data.modules)
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }

    }


    return (

        <>

            <main style={{ height: "100%" }}>

                <div className="container">
                    <div className="mt-4 px-2">

                        <DotLoader
                            color={color}
                            loading={loading}
                            cssOverride={override}
                            size={100}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
 
                        <div className="row row-cols-1 mt-4">
                            {modulesData && modulesData.map(module => (
                                <div className="col mb-3" key={module.id}>
                                    <ModulesPlanCards module_title={`${module.module_title}`} />
                                </div>
                            ))}
                            <button type="submit" className="btn btn-block border-0 text-white px-5 py-2" style={{ fontFamily: "Fredoka, sans-serif", background: "linear-gradient(to right, #D95388, #85486e)" }}>
                                Finish
                            </button>
                        </div>


                    </div>
                </div>

            </main>

        </>

    )

}
{*/}