import AccommodationDetails from "./landing-page/AccommodationDetails";
import AccommodationSection from "./landing-page/AccommodationSection";
import CitySection from "./landing-page/CitySection";
import Header from "./landing-page/Header";
import PlaceSection from "./landing-page/PlaceSection";

const Home = (props: any) => {
    const cities = [
        {
          name: "London",  
          count: "5102" 
        }
    ]
  
    const homes = [
        {  
            title: "Sugar & Spice Apartments",
            location: "Split",
            price: 75,
            categorization: 3
        }
    ]

    const places = [
        {  
            title: "Treehouse",
            location: "Hrusice",  
            subtitle: "Renting entire unit", 
            image: require("../assets/TreeHouse.png")
        }, 
        {  
            title: "Tiny House", 
            location: "Hrusice", 
            subtitle: "Renting entire unit",
            image: require("../assets/TinyHouse.png")
        } 
    ]
  
    const accommodations = [
      {
        title: "Poseidon Hotel Suites", 
        subtitle: "Stay in the heart of Mýkonos City",  
        description: "This property is 3 minutes walk from the beach. Overlooking Mykonos Windmills, the Poseidon Hotel Suites is only 50 m from Megali Ammos Beach. The 3-star hotel offers a freshwater pool, and bright rooms with air conditioning and fan.\\nEach of the Cycladic rooms opens to a private balcony with across to Mykonos Town, the sea and Delos. A fridge, satellite TV and safe are standard.\\nFree two-way transfer from the airport or port is offered. Poseidon provides free Wi-Fi in public areas, and on-site parking is also free. Guests can hire Poseidon’s motor yacht and discover the magnificent beaches of Mykonos.\\nAt the breakfast room and its cool patio, guests can taste homemade local delicacies, fresh fruit and good quality coffee. The Alley Bay serves exclusive cocktails, a few steps from the Poseidon.\\nThe Poseidon is just 200 m from the famous Mykonos Windmills. Right next to the hotel, guests will find small sandy coves and a pathway that leads to the picturesque chapel of Agios Charalambis.\\nThis is our guests' favourite part of Mýkonos City, according to independent reviews.\\nCouples particularly like the location — they rated it 9.6 for a two-person trip.",  
        type: "Room",  
        categorization: 5,  
        personCount: 2,  
        imageUrl: "",  
        freeCancelation: true,  
        price: 500,  
        location: "Mýkonos City",  
        postalCode: "846 00"  
      }
    ]

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