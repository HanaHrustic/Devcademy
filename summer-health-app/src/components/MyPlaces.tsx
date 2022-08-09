import PlaceSection from "./PlaceSection";

function MyPlaces (props: any){
    const places = require('../data/places.json').map((place:any) => {
        return {...place, image:require(`../assets/${place.image}`)}});

    const changePage = (component: JSX.Element) => {
        props.onLinkClick(component);
    }

    return (
        <div>
            <PlaceSection places={places} onLinkClick={changePage}/>
        </div>
    );
}

export default MyPlaces;