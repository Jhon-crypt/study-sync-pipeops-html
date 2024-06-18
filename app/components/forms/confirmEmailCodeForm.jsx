"use client"
import { useState } from "react"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function ConfirmationCodeForm() {

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

        const data = new FormData();
        data.append('code', formData.code);
        console.log(formData)
    }

    return (

        <>

            <form onSubmit={handleSubmit}>
                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Code</label>
                    <input name="code" value={formData.code} onChange={handleChange} type="number" placeholder="Type code here" class="form-control" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }} required />
                </div>
                <div className="mt-5 mb-3 d-grid">
                    <button type="submit" className="btn btn-block border-0 text-white px-5 py-2" style={{ fontFamily: "Fredoka, sans-serif", background: "linear-gradient(to right, #D95388, #85486e)" }}>
                        Confirm
                    </button>

                </div>
            </form>

        </>

    )

}