import AccommodationDetails from "./AccommodationDetails";
import AccommodationSection from "./AccommodationSection";
import CitySection from "./CitySection";
import NewPlaceForm from "./Forms/NewPlaceForm";
import Header from "./Header";

const Home = (props: any) => {
    const cities = require('../data/cities.json')
    const homes = require('../data/homes.json')
    const accommodations = require('../data/accommodations.json')

    const changePage = (component: JSX.Element) => {
        props.onLinkClick(component);
    }

    return(
        <div>
            <Header/>
            <CitySection cities={cities} onLinkClick={changePage}/>
            <AccommodationSection homes={homes} onLinkClick={changePage}/>
            <AccommodationDetails accommodation={accommodations[0]} onLinkClick={changePage}/>
        </div>
    );
}

export default Home;