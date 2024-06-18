"use client"
import { useState } from "react"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm() {

    return (

        <>

            <form>
                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Email</label>
                    <input name="email" type="email" placeholder="Email" class="form-control" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }} required />
                </div>

                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Password</label>
                    <input name="password" type="password" placeholder="Password" class="form-control" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }} required />
                </div>
                {/*}
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
                {*/}
                <div className="mt-5 mb-3 d-grid">
                    <button type="submit" className="btn btn-block border-0 text-white px-5 py-2" style={{ fontFamily: "Fredoka, sans-serif", background: "linear-gradient(to right, #D95388, #85486e)" }}>
                        Login
                    </button>
                </div>

            </form>

        </>

    )

}