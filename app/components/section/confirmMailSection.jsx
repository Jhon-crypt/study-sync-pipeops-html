import ConfirmationCodeForm from "../forms/confirmEmailCodeForm"

export default function ConfirmEmailSection() {

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
                        <div className="mb-3" style={{ fontSize: "20px", fontFamily: "Fredoka, sans-serif", fontWeight: "500" }}>Confirm Email Code</div>
                        <p className="px-3">We sent a code to your email, check and type it below to confirm your account</p>
                    </div>
                    

                    <div className="mt-4 px-2">
                        <ConfirmationCodeForm />
                    </div>
                </div>

            </main>

        </>

    )

}