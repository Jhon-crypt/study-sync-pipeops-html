import Link from "next/link"

export default function Header(props) {

    return (

        <>
            <nav class="navbar mt-2" style={{backgroundColor: "#F7F2F6" }}>
                <div class="container">
                    <span class="navbar-brand mb-0 h1" style={{ fontFamily: "Fredoka, sans-serif", fontWeight: "600" }}>
                        <Link href={`${props.route}`} className={`text-decoration-none text-dark bi ${props.icon} me-2`} style={{ "-webkit-text-stroke": "1.3px", textStroke: "5px" }}></Link>
                        {props.title }
                    </span>
                </div>
            </nav>
        </>

    )

}