import Navigation from './components/landing-page/Navigation';
import Header from './components/landing-page/Header';
import './Main.css';
import CitySection from './components/landing-page/CitySection';
import AccommodationSection from './components/landing-page/AccommodationSection';
import PlaceSection from './components/landing-page/PlaceSection';
import AccommodationDetails from './components/landing-page/AccommodationDetails';
import Footer from './components/landing-page/Footer';

function Main() {
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
          image: require("./assets/TreeHouse.png")
      }, 
      {  
          title: "Tiny House", 
          location: "Hrusice", 
          subtitle: "Renting entire unit",
          image: require("./assets/TinyHouse.png")
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

  return (
    <div>
      <Navigation/>
      <Header/>
      <CitySection cities={cities}/>
      <AccommodationSection homes={homes}/>
      <PlaceSection places={places}/>
      <AccommodationDetails accommodation={accommodations[0]} />
      <Footer/>
    </div>
  );
}

export default Main;