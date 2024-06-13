"use client"
import '../../styles/analyticsTab.css'
import AnanlyticChart from '../charts/analyticsChart';
import { useState } from 'react'

export default function AnalyticsSection() {

    const [activeTab, setActiveTab] = useState('WEEk');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (

        <>

            <main style={{ height: "100%" }}>
                <div className="container px-3 mt-2">

                    <div className="d-flex align-content-center justify-content-center">
                        <div className="tab-switch">
                            <div className="toggle-switch" style={{ width: "100%" }}>
                                <button
                                    className={`tab ${activeTab === 'WEEK' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('WEEK')}
                                    style={{ width: "50%" }}
                                >
                                    WEEK
                                </button>
                                <button
                                    className={`tab ${activeTab === 'MONTH' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('MONTH')}
                                    style={{ width: "50%" }}
                                >
                                    MONTH
                                </button>
                                <button
                                    className={`tab ${activeTab === 'YEAR' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('YEAR')}
                                    style={{ width: "50%" }}
                                >
                                    YEAR
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 d-flex align-content-center justify-content-center'>
                        <AnanlyticChart />
                    </div>

                    <div className="mt-5 px-2 mb-4">
                        <div className="d-flex justify-content-between">
                            <p className="d-flex">
                                <span className="me-2"><img src="dot.png"></img></span>
                                <span style={{ fontFamily: "Fredoka, sans-serif", }}>Quiz</span>
                            </p>
                            <p style={{ fontFamily: "Fredoka, sans-serif" }}>
                                100
                            </p>
                        </div>
                        <div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ "height": "5px" }}>
                            <div class="progress-bar" style={{ "width": "100%", backgroundColor: "#DCC0D8" }}></div>
                        </div>
                    </div>

                    <div className=" px-2 mb-3">
                        <div className="d-flex justify-content-between">
                            <p className="d-flex">
                                <span className="me-2"><img src="dot1.png"></img></span>
                                <span style={{ fontFamily: "Fredoka, sans-serif", }}>Module</span>
                            </p>
                            <p style={{ fontFamily: "Fredoka, sans-serif" }}>
                                35
                            </p>
                        </div>
                        <div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ "height": "5px" }}>
                            <div class="progress-bar" style={{ "width": "100%", backgroundColor: "#E84D88" }}></div>
                        </div>
                    </div>

                </div>
            </main>

        </>

    )

}