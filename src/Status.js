import React, { useEffect, useState } from 'react';
import './Status.css';

const Status = () => {

    // eslint-disable-next-line
    const [status, setStatus] = new useState(null);
    const [services, setServices] = new useState([]);

    useEffect(() => {
        async function fetchStatus() {
            // eslint-disable-next-line
            const apiURL="https://cbg-api.pewtech.de/api/v1/status";
            try {
                let data;
                await fetch(apiURL).then(async response => {data = await response.json()});
                setStatus(data.status);
            } catch (err) {
                console.log('Fetching from API failed!');
                setStatus(null);
            }
        }
        fetchStatus();
    }, [])

    return (
        status !== null ? (
            <div>
                <ul className="status-list">
                    {
                        Object.keys(status).map((item, i) => (
                            <li className="status-item">
                                <div className="status-item-information">
                                    <label className="status-label-name">{ status[item].serviceName }</label>
                                </div>
                                <div className="status-item-status">
                                    <span>{ status[item].status ? '🟢' : '🔴' }</span>
                                    <label className={ status[item].status ? "status-label-desc green" : "status-label-desc red"}>{ status[item].message }</label>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        ) : (
            <label>Loading....</label>
        )
    )
}

export default Status;