import React, { useEffect, useState } from 'react';

const Status = () => {

    // eslint-disable-next-line
    const [status, setStatus] = new useState(null);

    useEffect(() => {
        async function fetchStatus() {
            // eslint-disable-next-line
            const apiURL="http://localhost:3030/api/v1/status";
        }
        fetchStatus();
    }, [])

    return (
        status !== null ? (
            <div>
                <ul className="status-list">
                    { Object.entries(status).forEach(service => {
                        return (
                            <div className="service-item">
                                <label>{service.serviceName}</label>
                            </div>
                        )
                    }) }
                </ul>
            </div>
        ) : (
            <label>Loading....</label>
        )
    )
}

export default Status;