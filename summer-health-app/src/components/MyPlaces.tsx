import PlaceSection from "./PlaceSection";
import { Route } from 'react-router-dom';

import { useCallback, useEffect, useState } from "react";

function MyPlaces (props: any){
    const [accommodations, setAccommodations] = useState([]);

    const fetchAccommodations = useCallback(async () => {
        fetch("https://devcademy.herokuapp.com/api/Accomodations")
            .then(response => {
                return response.json();
            }).then(data => {
                setAccommodations(data);
            });
    }, []);

    useEffect(() => {
        fetchAccommodations();
    }, []);

    return (
        <div>
            <PlaceSection homes={accommodations}/>
        </div>
    );
}

export default MyPlaces;