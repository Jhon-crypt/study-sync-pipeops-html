"use client"
import { useState } from "react"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation'


export default function LoginForm() {

    const router = useRouter()

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

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

        const form = new FormData();
        form.append('email', formData.email);
        form.append('password', formData.password);

        const payload = {
            email: formData.email,
            password: formData.password
        }
        //console.log(payload)
        const BearerToken = process.env.NEXT_PUBLIC_MASTER_BEARER_KEY;

        const response = await fetch('/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${BearerToken}`
            },
            body: JSON.stringify(payload)
        });
       
        if (!response.ok) {

            toast.error("Wrong email or password", {
                position: "top-right"
            });
            setLoading(false)
        } else {
            const data = await response.json();
            router.push('/dashboard');
            toast.success("Login successful", {
                position: "top-right"
            });
            const user_id = data.data.user_id
            localStorage.setItem('study-userId', user_id);
            setLoading(false)
            //const accessToken = localStorage.getItem('accessToken');
            //console.log(parsed_data)
        }

    }

    return (

        <>

            <form onSubmit={handleSubmit}>
                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Email</label>
                    <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" class="form-control" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }} required />
                </div>

                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Password</label>
                    <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Password" class="form-control" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }} required />
                </div>

                <div className="mt-5 mb-3 d-grid">
                    {loading ? (
                        <>
                            <button disabled type="submit" className="btn btn-block border-0 text-white px-5 py-2" style={{ fontFamily: "Fredoka, sans-serif", background: "linear-gradient(to right, #D95388, #85486e)" }}>
                                Loading
                            </button>
                        </>
                    ) : (
                        <>
                            <button type="submit" className="btn btn-block border-0 text-white px-5 py-2" style={{ fontFamily: "Fredoka, sans-serif", background: "linear-gradient(to right, #D95388, #85486e)" }}>
                                Login
                            </button>
                        </>
                    )}

                </div>

            </form>

            <ToastContainer />

        </>

    )

}