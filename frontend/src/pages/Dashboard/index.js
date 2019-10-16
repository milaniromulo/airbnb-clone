import React, { useEffect } from 'react'
import api from '../../services/api'

const Dashboard = () => {

    useEffect(()=>{
        async function loadSpots(){
            const user_id = localStorage.getItem('user')
            const response = await api.get('/profile', {
                headers: {
                    user_id
                }
            })

            console.log(response.data)
        }

        loadSpots();
    }, []);

    return (
        <h1>Dashboard</h1>
    )
}

export default Dashboard
