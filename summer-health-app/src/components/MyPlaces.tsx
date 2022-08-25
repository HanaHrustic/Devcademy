import PlaceSection from "./PlaceSection";

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

    const changePage = (component: JSX.Element) => {
        props.onLinkClick(component);
    }

    return (
        <div>
            <PlaceSection homes={accommodations} onLinkClick={changePage}/>
        </div>
    );
}

export default MyPlaces;