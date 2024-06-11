export default function TodoCard() {

    return (

        <>

            <div className="card m-0" style={{ height: "185px", backgroundColor: "transparent", borderRadius: "10px", border: "2px solid #E0D9DE" }}>
                <div className="card-body">
                    <div className="mt-4 mx-auto d-flex justify-content-center align-items-center" style={{ backgroundColor: "#EBDEEA", width: '70px', height: '70px', borderRadius: '50%' }}>
                        <i className="bi bi-list-check" style={{ color: "#E84D88", fontSize: "25px", fontWeight: "bold" }} />
                    </div>
                    <div className="mt-2 d-flex justify-content-center align-content-center" style={{ fontSize: "14px", fontFamily: "Fredoka, sans-serif" }}>
                        To-Do
                    </div>
                </div>
            </div>

        </>

    )

}   