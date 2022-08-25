import { useCallback, useEffect, useState } from "react";
import AccommodationSection from "./AccommodationSection";
import CitySection from "./CitySection";
import Header from "./Header";

const Home = (props: any) => {
    const [locations, setLocations] = useState([]);
    const [accommodations, setAccommodations] = useState([]);

    const fetchLocations = useCallback(async () => {
        fetch("https://devcademy.herokuapp.com/api/Location")
            .then(response => {
                return response.json();
            }).then(data => {
                setLocations(data);
            });
    }, []);

    const fetchAccommodations = useCallback(async () => {
        fetch("https://devcademy.herokuapp.com/api/Accomodations")
            .then(response => {
                return response.json();
            }).then(data => {
                setAccommodations(data);
            });
    }, []);

    useEffect(() => {
        fetchLocations();
        fetchAccommodations();
    }, []);

    const changePage = (component: JSX.Element) => {
        props.onLinkClick(component);
    }

    return(
        <div>
            <Header onLinkClick={changePage}/>
            <CitySection cities={locations} onLinkClick={changePage}/>
            <AccommodationSection homes={accommodations} onLinkClick={changePage}/>
        </div>
    );
}

export default Home;