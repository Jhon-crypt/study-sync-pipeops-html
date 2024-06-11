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


        </>

    )

}