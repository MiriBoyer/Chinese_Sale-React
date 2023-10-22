import { produce } from "immer";
const initialState = {
  productsList: [
    { id: 0, name: 'Camera', subHeader: 'To Capture Your Beautiful Memories', description: `CANON EOS 90D DSLR reflex camera + IS NANO zoom lens 135-18 resolution 33 megapixel | Auto focus + manual | Weight 701 grams | Connections Micro HDMI USB 2.0 | Flash connection option external | Wi-Fi | Video resolution FPS 30@2160 | video format H.264, Mpeg 4 | Stereo microphone, connection to an external microphone | Storage of JPEG files, Raw Image | SD SDHC SDXC memory card | 3-inch articulated touch screen`,  img: '/images/Camera.png', price: 20},
    { id: 1, name: '$100,000 In Cash', subHeader: 'To Feel Rich', description: 'You get $100,000 without doing a thing! What will you buy with all those big bucks?',  img: '/images/CashPrize.jpg', price: 40},
    { id: 2, name: 'Cleaning Help', subHeader: 'For A Spotless Home', description: `Cleaning Help for a Year. Double the fun! Receive in addition: 2,000 NIS towards purchase of cleaning products. The prize includes: 4 hours a week of cleaning for a year.`,  img: '/images/CleaningHelp.png', price: 20},
    { id: 3, name: 'Computer', subHeader: 'For Parnassa Only!!!', description: `Touch Screen Laptop. Description: HP Pavilion x360/ Slinky 21C1q Core i7-1165G7 quad/ 8gb DDR4 2DM 3200/ 512GB PCie value / Intel Iris Xe/ TOUCH/ 14 FHD Antiglare IPS 250 nits narrow Border /OST W10H6pls/ natural silver Ff+- fingerprint reader with SD card reader | 3-year ON-SITE WARRANTY`,  img: '/images/Computer.png', price: 30},
    { id: 4, name: 'Dream Card', subHeader: 'To Fullfill Your Dreams', description: '5,000 NIS Dream Card',  img: '/images/DreamCard.png', price: 20},
    { id: 5, name: 'Flight To USA', subHeader: 'For Sunshine and Smiles', description: `Two Round Trip Tickets to the US. Double the fun! Receive in addition: $1,000 for shopping. The prize includes: A pair of round-trip plane tickets to the United States + $1,000 for shopping. Minimum stay over the weekend. The card must be purchased at least one month before the flight. For usage until December 2023.`,  img: '/images/FlightToUSA.png', price: 30},
    { id: 6, name: 'Gas For A Year', subHeader: 'To Go Far', description: `Gas for one year (up to NIS 12,000). The prize includes: Delkan monthly for a year for a total of NIS 12,000. Refuel your car`,  img: '/images/GasForAYear.png', price: 40},
    { id: 7, name: '5,000 to Ikea', subHeader: 'For A Nice Home', description: 'Make your home nice with $5,000 to Ikea.',  img: 'images/Ikea.png', price: 20},
    { id: 8, name: 'Luxury Car', subHeader: 'To Travel In Comfort', description: `NIS 160,000 for a luxury car. This is your chance to choose the perfect minivan or jeep for you, which includes spacious seats, a huge trunk, a cannon engine, low fuel consumption. Maximum comfort and innovative design from the leading series of 2023. It's just important that you remember: your partnership in the Chinese auction - this is what drives the enormous wheels of activity of Ezer Mezion! Double the fun! Receive in addition: 10,000 NIS for gas.`,  img: '/images/LuxuryCar.jpg', price: 60},
    { id: 9, name: 'Modern Kitchen', subHeader: 'For Pampered Mealtimes', description: `Luxurious 'Inside' Kitchen.  The prize includes: 12 meters of cabinets made of red sandwich wood, formica coated. Includes 2 oven cabinets and a 2-door suitcase closet, 3 rows of 'Bloom' ironwork drawers, nickel handles of the 'Domisol' company, caesar marble - compatible with the kitchen, a pair of 'Silly Granite' sinks, flat installation, a pair of hot removable irons. Appliances: A single-cell oven in Bild, children's stove.`,  img: '/images/ModernKitchen.jpg', price: 50},
    { id: 10, name: '$12,000 In Your Bank ', subHeader: 'To Help You Get Through the Month', description: '',  img: 'images/MoneyInBank.png', price: 30},
    { id: 11, name: 'Mortage for a Year', subHeader: 'To Help You Save Money', description: `2,500 NIS per month for a year, for mortgage payments, debt repayments or to cover current expenses. There is no doubt that it will make your day-to-day life easier...Even in your partnership here with us, you help us to make the lives of thousands of patients and their families easier. Double the fun! In addition, get mortgage advice worth 5,000 NIS as a gift!`,  img: '/images/MortageForYear.png', price: 50},
    { id: 12, name: 'Nespresso Machine', subHeader: 'For a Morning Jolt', description: `'New generation coffee machine,offering a variety of coffee recipes with one click.  The machine is made in a luxurious design and comes with an advanced and simple system for whipping fresh milk.`,  img: '/images/Nespresso.png', price: 10},
    { id: 13, name: '$10,000 to Osher Ad', subHeader: 'For a Grocery Shopping Spree', description: `Migdal Hamek: the stadium 10 | Kiryat Bialik: Hans Muller 6 | Jerusalem: Givat Shaul, Beit Hadfus 29 | Telpiot: Pierre Koenig 26 Hadar Mall, Shamgar 16, Rav Shefa Mall | Bnei Brak: Kishon 11 | Ashdod: the artisans 4 | Honesty Junction: Red 24 | Be'er Sheva: The Harvester 15 | Beit Shemesh: HaGalil 1 | Petah Tikva: Ben Zion Galis 30 | Lod: Bat Sheva 1 | Ashkelon: Bat Hadar | Hadera: The framer 22 Northern industrial area | Tel Aviv: 3 Kermanitzki, entrance from 1 Walter Moses St. | Nazareth Illit: HaGilboa St. 1 Mall in front of Harim | Rishon Lezion: 24 Hatzel St. | Haifa: Bar Yehuda 31 | Netanya: Naimi Mall, Sderot Tom Lantos`,  img: '/images/OsherAd.png', price: 20},
    { id: 14, name: 'Sefer Torah', subHeader: 'In Memory of Your Loved Ones', description: `There is nothing more exciting than placing a Torah scroll in memory of your loved one! A mehudar Torah book written by a qualified sofer. Vira Shamain from Malkot Wexburger - Ashkenazi or Sephardic Torah scroll - to be chosen by the winner - Completing the writing of the letters by Marnan and Ravnan, the greats of the Shalita generation. For the guide to successfully purchasing a Sefer Torah. Send a message to Tel: 054-2606214 or to email: st@mwaxb.co.il`,  img: '/images/SeferTorah.png', price: 60},
    { id: 15, name: '$10,000 Men Shopping', subHeader: 'For Whatever He Needs', description: `NIS 11,000 men's shopping. The prize includes: 2,000 NIS in 'Bagir', 2,000 NIS at Davis, 2,000 NISin 'Ohr Hachayim', 1,000 NIS in 'Einit', 1,000 NIS in 'Brooklyn', 1,000 NIS in 'Borselino', 1,000 NIS in 'Record', 1,000 NIS in 'Titanium'`,  img: '/images/ShoppingForMen.png', price: 20},
    { id: 16, name: 'Ski Trip in Europe', subHeader: 'For Pure Fun', description: `Ski vacation for 2 in Europe. The prize includes: Ski vacation for a couple from Sunday to Thursday, with a total value of 3,000 euros: Round trip flight, hotel/apartment and ski equipment rental`,  img: '/images/SkiTripInEurope.png', price: 30},
    { id: 17, name: 'Surprise Prize', subHeader: 'For...', description: `Behind this prize is a sense of curiosity and anticipation that you cannot hide.Ready to contain all this goodness?`,  img: '/images/SurprisePrize.png', price: 10},
    { id: 18, name: 'Two Tickets to Europe', subHeader: 'For a Terrific Tour', description: `Two Round Trip Tickets to Europe. Double the fun! Receive in addition: €500 for shopping. Double flight to a destination of your choice in Europe + €500 for attractions and shopping. Regular flight. Minimum stay over weekend. Tickets must be purchased at least one month before the flight. For usage until December 2023`,  img: 'images/TripToEurope.png', price: 30},
    { id: 19, name: 'Two Tickets to Crestir', subHeader: 'For a Day of Heartful Prayers', description: `Two Round Trip Tickets to Crestir. The prize includes: A pair of round trip tickets to Crestir, Tickets must be purchased at least one month before the flight.`,  img: 'images/TripToKrastir.png', price: 30},
    { id: 20, name: 'Wig', subHeader: 'For a Stunning Look', description: `Prize includes: BK wig worth 12,000 NIS + Design by Chavi Weiss`,  img: '/images/Wig.png', price: 30},
    { id: 21, name: 'Diamond Ring', subHeader: 'For a Stunning Look', description: `14K white gold ring 0.75 carat diamond`,  img: '/images/DiamondRing.png', price: 20},
    { id: 22, name: "Bugaboo B6", subHeader: 'For Your Baby', description:'',  img: '/images/BugabooStroller.png', price: 20},
    { id: 23, name: '5,000 NIS For Games', subHeader: 'For Your Sweeties', description:'',  img: '/images/GameSet.png', price: 10}
]
};

export const productsReducer = produce((state, action) => {
  switch (action.type) {
    case "addProduct":
      if(action.payload['id']===-1){
        action.payload['id']=state.productsList.length;
              state.productsList.push(action.payload);
      }
      else{
        var prod=state.productsList.find((temp)=>temp['id']===action.payload['id']);
        prod['name']=action.payload['name']
        prod['img']=action.payload['img']
        prod['price']=action.payload['price']
        prod['description']=action.payload['description']
        prod['subHeader']=action.payload['subHeader']
      }
      break;
    case "removeProduct":
      state.productsList= state.productsList.filter((p)=>action.payload!==p.id);
      for (let i=action.payload; i<state.productsList.length;i++)
      {
        state.productsList[i].id--;
      }
      console.log(state.productsList)
      break;
    case "editProduct":
      state.productsList[action.payload.prodId] = state.payload.prod;
      break;
  }
}, initialState);
