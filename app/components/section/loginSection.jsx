import LoginForm from "../forms/loginForm"

export default function LoginSection() {

    return (

        <>

            <main style={{ height: "100%" }}>
                <div className="d-flex align-content-center justify-content-center">
                    <h1 className="mt-3">
                        <img src="/logo.png" alt="Logo" width={150} />
                    </h1>
                </div>

                <div className="container">
                    <div className="text-center mt-5">
                        <div className="mb-3" style={{ fontSize: "20px", fontFamily: "Fredoka, sans-serif", fontWeight: "500" }}>Login</div>
                    </div>


                    <div className="mt-4 px-2">
                        <LoginForm />
                    </div>
                </div>

            </main>

        </>

    )

}