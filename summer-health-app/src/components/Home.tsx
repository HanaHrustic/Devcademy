import AccommodationDetails from "./AccommodationDetails";
import AccommodationSection from "./AccommodationSection";
import CitySection from "./CitySection";
import Header from "./Header";
import PlaceSection from "./PlaceSection";

const Home = (props: any) => {
    const cities = require('../data/cities.json')
    const homes = require('../data/homes.json')
    const places = require('../data/places.json').map((place:any) => {
     return {...place, image:require(`../assets/${place.image}`)}});
    const accommodations = require('../data/accommodations.json')

    const changePage = (component: JSX.Element) => {
        props.onLinkClick(component);
    }

    return(
        <div>
            <Header/>
            <CitySection cities={cities} onLinkClick={changePage}/>
            <AccommodationSection homes={homes} onLinkClick={changePage}/>
            <PlaceSection places={places}/>
            <AccommodationDetails accommodation={accommodations[0]} onLinkClick={changePage}/>
        </div>
    );
}

export default Home;