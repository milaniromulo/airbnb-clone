import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import './styles.css';

const Dashboard = () => {

    const [spots, setSpots] = useState([]);

    useEffect(()=>{
        async function loadSpots(){
            const user_id = localStorage.getItem('user')
            const response = await api.get('/profile', {
                headers: {
                    user_id
                }
            })

            console.log(response.data)
            setSpots(response.data)
        }

        loadSpots();
    }, []);

    return (
        <>
            <ul className="spot-list">
                {
                    spots.map(spot => (
                        <li key={spot._id}>
                            <header style={{ backgroundImage: `url(${spot.thumb_url})`}}/>
                            <strong>{spot.company}</strong>
                            <span>{spot.value ? `R$${spot.value}/dia` : 'GRATUITO'}</span>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Dashboard
