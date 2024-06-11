import Sidebar from "../sidebar/sidebar"

export function DashboardHeader(props) {

    return (

        <>

            <nav class="navbar mt-2" style={{ backgroundColor: "#F7F2F6" }}>
                <div class="container">
                    <span class="navbar-brand mb-0 h1" style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "600" }}>
                        <span className={`bi ${props.icon} me-2`} style={{ "-webkit-text-stroke": "1.3px", textStroke: "5px" }} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"></span>
                        {props.title}
                    </span>
                </div>

            </nav>

        </>

    )

}