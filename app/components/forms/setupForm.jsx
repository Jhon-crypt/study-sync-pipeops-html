"use client"
import { useState } from "react"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation'

import Link from "next/link"


export default function SetupForm() {

    const [loading, setLoading] = useState(false)

    const [additionalData, setAdditionalData] = useState({
        country: '',
        gender: '',
        institution: '',
        gradePoint: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdditionalData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const router = useRouter()

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        console.log(additionalData)

        //send mail


        // Retrieve existing form data from localStorage
        const existingFormData = JSON.parse(localStorage.getItem('formData')) || {};

        // Merge the additional data with the existing form data
        const updatedFormData = { ...existingFormData, ...additionalData };
        toast.success("Sign up successful", {
            position: "top-right"
        });
        setLoading(false)
        // Save the updated form data back to localStorage
        localStorage.setItem('formData', JSON.stringify(updatedFormData));
        console.log("Form data updated:", updatedFormData.email);
    };

    return (

        <>


            <form onSubmit={handleSubmit}>
                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Country</label>
                    <select class="form-select" aria-label="Default select example" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }}
                        name="country"
                        value={additionalData.country}
                        onChange={handleChange}
                    >
                        <option selected><span style={{ fontFamily: "Fredoka, sans-serif", fontSize: "10px" }}>e.g Nigeria</span></option>
                        <option value="Nigeria">Nigeria</option>
                    </select>
                </div>



                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Gender</label>
                    <select class="form-select" aria-label="Default select example" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }}
                        name="gender"
                        value={additionalData.gender}
                        onChange={handleChange}
                    >
                        <option selected><span style={{ fontFamily: "Fredoka, sans-serif", fontSize: "10px" }}>e.g Female</span></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Name Of Institution</label>
                    <select class="form-select" aria-label="Default select example" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }}
                        name="institution"
                        value={additionalData.institution}
                        onChange={handleChange}
                    >
                        <option selected><span style={{ fontFamily: "Fredoka, sans-serif", fontSize: "10px" }}>e.g Olabisi Onabanjo University</span></option>
                        <option value="tasued">Tasued</option>
                        <option value="oou">OOU</option>
                        <option value="unilag">Unilag</option>
                    </select>
                </div>

                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>University Grade Point</label>
                    <select class="form-select" aria-label="Default select example" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }}
                        name="gradePoint"
                        value={additionalData.gradePoint}
                        onChange={handleChange}
                    >
                        <option selected><span style={{ fontFamily: "Fredoka, sans-serif", fontSize: "10px" }}>e.g 5.0, 7.0</span></option>
                        <option value="4.0">4.0</option>
                        <option value="5.0">5.0</option>
                        <option value="7.0">7.0</option>
                    </select>
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
                                Sign Up
                            </button>
                        </>
                    )}
                </div>
            </form>
            <ToastContainer />
        </>

    )

}