import Link from "next/link"

export default function SignupForm() {

    return (

        <>

            <form>
                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Full Name</label>
                    <input type="text" placeholder="e.g Islamiyat Yusuf" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }} />
                </div>

                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Email Address</label>
                    <input type="text" placeholder="e.g Islamiyatyusuf@gmail.com" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }} />
                </div>

                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Password</label>
                    <input type="password" placeholder="e.g Isila25@" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }} />
                </div>

                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Confirm Password</label>
                    <input type="password" placeholder="e.g Isila25@" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }} />
                </div>

                <div className="mt-3 px-3">
                    <p style={{ fontSize: "12px", fontFamily: "Montserrat-SemiBold" }}>
                        By signing up you agreed to StudySync <span style={{ color: "#D9455F" }}>Terms, Privacy Policy,</span> and <span style={{ color: "#D9455F" }}>Cookie Use.</span>
                    </p>
                </div>

                <div className="mt-5 mb-3 d-grid">
                    <Link href="/setup" className="btn btn-block border-0 text-white px-5 py-2" style={{ fontFamily: "Fredoka, sans-serif", background: "linear-gradient(to right, #D95388, #85486e)" }}>
                        Next
                    </Link>
                </div>
            </form>

        </>

    )

}