"use client"
import { FaRegTrashCan } from "react-icons/fa6";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation'
import Link from "next/link";

import { useState, useRef } from 'react';

export default function StudyPlanForm() {

    const router = useRouter()

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        courseTitle: '',
        courseCode: '',
        courseDescription: '',
        courseImages: [] // Updated to handle multiple images
    });

    const fileInputRef = useRef(null); // Reference for file input

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        Promise.all(files.map(fileToDataURL))
            .then((images) => {
                setFormData((prevData) => ({
                    ...prevData,
                    courseImages: [...prevData.courseImages, ...images]
                }));
            })
            .catch((error) => {
                console.error('Error reading files:', error);
            });
    };

    const fileToDataURL = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = () => {
                reject(reader.error);
            };

            reader.readAsDataURL(file);
        });
    };

    const handleDelete = (index) => {
        setFormData((prevData) => {
            const updatedImages = [...prevData.courseImages];
            updatedImages.splice(index, 1);
            return {
                ...prevData,
                courseImages: updatedImages
            };
        });

        // Reset the file input field
        fileInputRef.current.value = null;
    };

    const handleSubmit = async (e) => {

        setLoading(true)
        e.preventDefault();

        const data = new FormData();
        data.append('courseTitle', formData.courseTitle);
        data.append('courseCode', formData.courseCode);
        data.append('courseDescription', formData.courseDescription);
        formData.courseImages.forEach((image, index) => {
            data.append(`courseImage${index}`, image);
        });
        console.log(formData)

        const payload = {
            userId: localStorage.getItem('study-userId'),
            courseTitle: formData.courseTitle,
            courseCode: formData.courseCode,
            courseDescription: formData.courseDescription,
            courseImages: formData.courseImages
        }

        const BearerToken = process.env.NEXT_PUBLIC_MASTER_BEARER_KEY;

        const response = await fetch('/api/studyplans/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${BearerToken}`
            },
            body: JSON.stringify(payload)
        });
        const data_response = await response.json();
        if (!response.ok) {

            toast.error("Could not create", {
                position: "top-right"
            });
            setLoading(false)
        } else {
            toast.success("Study plan created", {
                position: "top-right"
            });
            setLoading(false)
            console.log(data)
        }
    }


    return (

        <>

            <form onSubmit={handleSubmit}>
                <div class="mt-4 mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Course Title</label>
                    <input type="text" name="courseTitle" value={formData.courseTitle} onChange={handleChange} placeholder="e.g Anatomy of Head and Neck" class="form-control" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }} required />
                </div>

                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Course Code</label>
                    <input type="text" name="courseCode" value={formData.courseCode} onChange={handleChange} placeholder="e.g ANA 301" class="form-control" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }} />
                </div>

                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Description</label>
                    <textarea name="courseDescription" value={formData.courseDescription} onChange={handleChange} required class="form-control" rows="5" style={{ backgroundColor: "#F7F2F6", borderRadius: "10px" }}></textarea>
                </div>

                <div className="mb-4">
                    <label className="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Upload Your Notes</label>
                    <input ref={fileInputRef} className="form-control" type="file" id="formFileMultiple" multiple style={{ height: "44px", backgroundColor: "#F7F2F6", borderRadius: "10px" }} accept="image/*" onChange={handleImageChange} />
                </div>
                <div>
                    {formData.courseImages.map((image, index) => (
                        <div key={index} className="position-relative d-inline-block me-2">
                            <img className="img-thumbnail rounded mb-3" src={image} style={{ width: '100px', height: '100px', objectFit: 'contain' }} alt={`Thumbnail ${index}`} />
                            <button className="btn btn-danger btn-sm position-absolute top-0 end-0 bg-light text-danger" onClick={() => handleDelete(index)}>
                                <FaRegTrashCan />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-5 mb-3 d-grid">
                    <button type="submit" className="btn btn-block border-0 text-white px-5 py-2" style={{ fontFamily: "Fredoka, sans-serif", background: "linear-gradient(to right, #D95388, #85486e)" }}>
                        Create
                    </button>
                </div>
            </form>
            {/*}
            <div>
                {images.map((preview, index) => (
                    <div key={index} className="position-relative d-inline-block me-2">
                        <img className="img-thumbnail rounded mb-3" src={preview} style={{ width: '100px', height: '100px', objectFit: 'contain' }} alt={`Thumbnail ${index}`} />
                        <button className="btn btn-danger btn-sm position-absolute top-0 end-0 bg-light text-danger" onClick={() => handleDelete(index)}>
                            <FaRegTrashCan />
                        </button>
                    </div>
                ))}
                
            </div>
            {*/}

            <ToastContainer />

        </>

    )

}