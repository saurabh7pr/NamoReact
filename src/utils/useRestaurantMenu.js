import React from 'react'
import { MENUAPI_URL } from '../utils/constants';
import { useState, useEffect } from 'react'


const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, [])



    const fetchMenu = async () => {
        const data = await fetch(MENUAPI_URL + resId + "&catalog_qa=undefined&")
        const json = await data.json();

        setResInfo(json.data)


    };

    return resInfo






}

export default useRestaurantMenu
