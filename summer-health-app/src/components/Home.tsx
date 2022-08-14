import AccommodationDetails from "./AccommodationDetails";
import AccommodationSection from "./AccommodationSection";
import CitySection from "./CitySection";
import Header from "./Header";

const Home = (props: any) => {
    const cities = require('../data/cities.json')
        .map((city: {name: string, count: string, imageUrl: string}) => 
        {
        return {...city, imageUrl:require(`../assets/${city.imageUrl}`)};
        }
    );
    const homes = require('../data/homes.json')
        .map((home: {title: string, location: string, price: number, categorization: number, imageUrl: string}) => 
            {
            return {...home, imageUrl:require(`../assets/${home.imageUrl}`)};
            }
        );
    const accommodations = require('../data/accommodations.json')

    const changePage = (component: JSX.Element) => {
        props.onLinkClick(component);
    }

    return(
        <div>
            <Header onLinkClick={changePage}/>
            <CitySection cities={cities} onLinkClick={changePage}/>
            <AccommodationSection homes={homes} onLinkClick={changePage}/>
            <AccommodationDetails accommodation={accommodations[0]} onLinkClick={changePage}/>
        </div>
    );
}

export default Home;