"use client"
import { useState } from "react"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation'
import Link from "next/link";

export default function SignupForm() {

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        ConfirmPassword: '',
    });

    const router = useRouter()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();

        if (formData.password !== formData.ConfirmPassword) {
            toast.error("Passwords do not match", {
                position: "top-right"
            });
        } else {
            const data = new FormData();
            data.append('fullname', formData.fullname);
            data.append('email', formData.email);
            data.append('password', formData.password);
            //console.log(formData)
            // Check if form data exists in localStorage
            const storedData = localStorage.getItem('formData');

            if (storedData) {
                localStorage.removeItem('formData');
                localStorage.setItem('formData', JSON.stringify(formData));
                router.push('/signin')
                setLoading(false)

            } else {
                localStorage.setItem('formData', JSON.stringify(formData));
                toast.success("Form Saved", {
                    position: "top-right"
                });
                setLoading(false)
                router.push('/setup')


            }
        }

    }




    return (

        <>

            <form onSubmit={handleSubmit}>
                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Full Name</label>
                    <input name="fullname" value={formData.fullname} onChange={handleChange} type="text" placeholder="e.g Islamiyat Yusuf" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }} required />
                </div>

                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g Islamiyatyusuf@gmail.com" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }} required />
                </div>

                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="e.g Isila25@" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }} />
                </div>

                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Confirm Password</label>
                    <input type="password" name="ConfirmPassword" value={formData.ConfirmPassword} onChange={handleChange} required placeholder="e.g Isila25@" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }} />
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
                    {/*}
                    {loading ? (
                        <>
                            <button disabled type="submit" className="btn btn-block border-0 text-white px-5 py-2" style={{ fontFamily: "Fredoka, sans-serif", background: "linear-gradient(to right, #D95388, #85486e)" }}>
                                Loading
                            </button>
                        </>
                    ) :
                        (
                            <>
                                <button type="submit" className="btn btn-block border-0 text-white px-5 py-2" style={{ fontFamily: "Fredoka, sans-serif", background: "linear-gradient(to right, #D95388, #85486e)" }}>
                                    Next
                                </button>
                            </>
                        )
                    }
                    {*/}

                </div>
            </form>
            <ToastContainer style={{ wdith: "50px" }} />
        </>

    )

}