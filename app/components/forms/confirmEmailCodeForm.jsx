"use client"
import { useState } from "react"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation'


export default function ConfirmationCodeForm() {

    const router = useRouter()

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        code: '',
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
        form.append('code', formData.code);
        console.log(formData)

        const payload = {
            code: formData.code
        }

        const BearerToken = process.env.NEXT_PUBLIC_MASTER_BEARER_KEY;

        const response = await fetch('/api/auth/confirm-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${BearerToken}`
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();

        if (!response.ok) {
            toast.error("Wrong confirmation code", {
                position: "top-right"
            });
            setLoading(false)
        } else {
            toast.success("Email confirmed, wait while we redirect you...", {
                position: "top-right"
            });

            router.push('/signin');


            setLoading(false)
            console.log(data)
        }


    }

    return (

        <>

            <form onSubmit={handleSubmit}>
                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Code</label>
                    <input name="code" value={formData.code} onChange={handleChange} type="number" placeholder="Type code here" class="form-control" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }} required />
                </div>
                <div className="mt-5 mb-3 d-grid">
                    {loading ? (
                        <>
                            <button disabled type="submit" className="btn btn-block border-0 text-white px-5 py-2" style={{ fontFamily: "Fredoka, sans-serif", background: "linear-gradient(to right, #D95388, #85486e)" }}>
                                Confirming code...
                            </button>
                        </>
                    ) : (
                        <>
                            <button type="submit" className="btn btn-block border-0 text-white px-5 py-2" style={{ fontFamily: "Fredoka, sans-serif", background: "linear-gradient(to right, #D95388, #85486e)" }}>
                                Confirm
                            </button>
                        </>
                    )

                    }


                </div>
            </form>
            <ToastContainer />

        </>

    )

}