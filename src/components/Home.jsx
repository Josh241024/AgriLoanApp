/*import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Home.css';
import { Link } from 'react-router-dom';
import digiaccounts from './images/waystobank/DigitalAccounts.png';
import bobworld from './images/waystobank/bobWorld.png';
import Applock from './images/waystobank/AppLockerOnline.png';
import digiHome from './images/waystobank/DigitalHomeLoans.png';
import intbanking from './images/waystobank/internetBanking.png';
import Whatsapp from './images/waystobank/WhatsAppBanking.png';
import barodaanimal from './images/cardimages/BarodaAnimalHusbandryandFisheries.png';
import barodakisan from './images/cardimages/BarodaKisanCreditCard.png';
import barodakisantatkal from './images/cardimages/BarodaKisanTatkal.png';
import financingagriclinic from './images/cardimages/FinancingAgriclinics&AgribusinessCentresbyAgricultureGraduates.png';
import financingdevelopment from './images/cardimages/FinancingDevelopmentofDairyPoultryandFishery.png';
import fianancingtractor from './images/cardimages/Financingtractorsandheavyagriculture.png';
import pradhanmantri from './images/cardimages/PradhanMantriKisanUrjaSuraksha.png';
import scemeforpurchaseof from './images/cardimages/Schemeforpurchaseofagricultureland.png';
import foodagrobased from './images/cardimages/toFoodAgroBasedUnitsUnderAgriculture.png';
import appstore from './images/assistance/appstore.png';
import googleplay from './images/assistance/googleplay.png';
import img1 from './images/carousel/image1.png';
import img2 from './images/carousel/image2.png';
import img3 from './images/carousel/image3.png';
import bankimg from './images/assistance/bankimg.png';

function Home() {
  return (
    <>
      <div className="Carousel">
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>

      <div className="Marquee">
        <div className="marquee-container">
          <div className="marquee">
            Closure of Trading Window – Q1 (FY2024-25) Financial Results • bob World Digital Rupee application services will be unavailable for 15 minutes from 09.00 PM to 09.15 PM on Friday
          </div>
        </div>
      </div>

      <div className="Waystobank">
        <h2 className="Waystobankh1">Ways to Bank</h2>
        <div className="Waystobankcards">
          <div className="Waystobankcard">
            <img src={digiaccounts} alt="Digital accounts" />
            <h3>Digital accounts</h3>
          </div>
          <div className="Waystobankcard">
            <img src={digiHome} alt="Digital Home Loans" />
            <h3>Digital Home Loans</h3>
          </div>
          <div className="Waystobankcard">
            <img src={bobworld} alt="bob World(Mobile Banking)" />
            <h3>bob World(Mobile Banking)</h3>
          </div>
          <div className="Waystobankcard">
            <img src={intbanking} alt="Internet Banking" />
            <h3>Internet Banking</h3>
          </div>
          <div className="Waystobankcard">
            <img src={Whatsapp} alt="WhatsApp Banking" />
            <h3>WhatsApp Banking</h3>
          </div>
          <div className="Waystobankcard">
            <img src={Applock} alt="Apply Locker Online" />
            <h3>Apply Locker Online</h3>
          </div>
        </div>
      </div>

      <div className="AgriLoansandAdvances">
        <div className="AgriLoansandAdvancesContainer">
          <div className="AgriLoansandAdvancesTitle">
            <h2 className="AgriLoansandAdvancesTitleh2">Agriculture Loans & Advances</h2>
          </div>
          <div className="AgriLoansandAdvancesPara">
            <p className="AgriLoansandAdvancesp">
              List of bank's authorised venders for Overdue Collection Activities the Bank is a pioneer in introducing various customer centric initiatives in the Indian Banking industry. It is a holistic, ecosystem driven platform that helps in digitizing the agronomic journey by offering new-age solutions related to agri-inputs and implements, financing, and advisory among other functionalities at the user’s fingertips.
            </p>
          </div>
        </div>
      </div>

      <div className="Box"> </div>

      <div className="search">
        <div className="searchboxandbutton">
          <input type="text" className="searchbox" placeholder="Looking for something specific?" />
          <button className="searchbutton">Search</button>
          <button className="micbutton">Mic</button>
        </div>
        <div className="searchboxotherbuttonscontainer">
          <div className="searchboxotherbuttons1">
            <button className="buttonsearchshareholderscorner">Shareholder's Corner</button>
            <button className="buttonsearchbobworldstartup">bob World Start-Up</button>
            <button className="buttonsearchpositivepaysystem">Positive Pay System</button>
            <button className="buttonsearchrighttoinformationact">Right to Information Act</button>
            <button className="buttonsearchdoorstepbanking">Doorstep Banking</button>
            <button className="buttonsearchforlawenforcementagencies">For Law Enforcement Agencies</button>
          </div>
          <br />
          <div className="searchboxotherbuttons2">
            <button className="buttonsearchchiefvigilanceofficer">Chief Vigilance Officer</button>
            <button className="buttonsearchlifeinsurance">Life Insurance</button>
            <button className="buttonsearchonlinedeceasedclaimportal">Online Deceased Claim Portal</button>
            <button className="buttonsearchudgamportal">UDGAM Portal</button>
            <button className="buttonsearchonlineots">Online OTS</button>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="cardfeatures">
          <div className="cardwithvalues">
            <img src={foodagrobased} className="cardwithvalues1img" alt="..." />
            <h2 className="cardtitle">Advances to Food Agro Based Units Under Agriculture</h2>
            <p className="cardpara">
              Financing the new projects, working capital and non fund based facilities to the units engaged in activities of oil mill/solvent extraction, agro/food
            </p>
            <Link to="/details/1">
              <button className="cardbutton">Know more 🔜</button>
            </Link>
          </div>
          <div className="cardwithvalues">
            <img src={barodaanimal} className="cardwithvalues1img" alt="..." />
            <h2 className="cardtitle">Animal Husbandry and Fisheries Kisan Credit Card</h2>
            <p className="cardpara">
              Provide adequate and timely credit support under a single window to the farmers for activities related to Animal Husbandry and Fisheries.
            </p>
            <Link to="/details/2">
              <button className="cardbutton">Know more 🔜</button>
            </Link>
          </div>
          <div className="cardwithvalues">
            <img src={barodakisan} className="cardwithvalues1img" alt="..." />
            <h2 className="cardtitle"> Kisan Credit Card (BKCC)</h2>
            <p className="cardpara">
              Aims at providing adequate and timely credit support from the banking system under a single window to the farmers for their cultivation & other needs.
            </p>
            <Link to="/details/3">
              <button className="cardbutton">Know more 🔜</button>
            </Link>
          </div>
          <div className="cardwithvalues">
            <img src={financingagriclinic} className="cardwithvalues1img" alt="..." />
            <h2 className="cardtitle">Financing Agriclinics & Agribusiness Centres by Agriculture Graduates</h2>
            <p className="cardpara">
              A financial aid for setting up of Agriclinics and Agribusiness centers in order to supplement efforts of public extension
            </p>
            <Link to="/details/4">
              <button className="cardbutton">Know more 🔜</button>
            </Link>
          </div>
          <div className="cardwithvalues">
            <img src={financingdevelopment} className="cardwithvalues1img" alt="..." />
            <h2 className="cardtitle">Financing Development of Dairy, Poultry, Fishery, etc.</h2>
            <p className="cardpara">
              To fulfil capital and working capital requirement of units engaged in dairy, piggery, poultry, equipment/machinery/transport vehicle for purchase of feed and to meet other expenditure
            </p>
            <Link to="/details/5">
              <button className="cardbutton">Know more 🔜</button>
            </Link>
          </div>
          <div className="cardwithvalues">
            <img src={pradhanmantri} className="cardwithvalues1img" alt="..." />
            <h2 className="cardtitle">Pradhan Mantri Kisan Urja Suraksha Evam Uthaan Mahabhiyaan (PM-KUSUM Scheme)</h2>
            <p className="cardpara">
              PM-KUSUM scheme is a financing installation of small renewable energy project of 2 MW. Installation of standalone solar pumps and solarization of existing grid connected agriculture pumps.
            </p>
            <Link to="/details/6">
              <button className="cardbutton">Know more 🔜</button>
            </Link>
          </div>
          <div className="cardwithvalues">
            <img src={scemeforpurchaseof} className="cardwithvalues1img" alt="..." />
            <h2 className="cardtitle">Scheme for Purchase of Agriculture Land</h2>
            <p className="cardpara">A financial aid for farmers to purchase</p>
            <Link to="/details/7">
              <button className="cardbutton">Know more 🔜</button>
            </Link>
          </div>
          <div className="cardwithvalues">
            <img src={barodakisantatkal} className="cardwithvalues1img" alt="..." />
            <h2 className="cardtitle"> Kisan Tatkal Loan Scheme</h2>
            <p className="cardpara">
              A scheme to meet the emergent funds requirements for agriculture and domestic purposes during off season. Farmers who are existing Kisan Card Holders are eligible.
            </p>
            <Link to="/details/8">
              <button className="cardbutton">Know more 🔜</button>
            </Link>
          </div>
          <div className="cardwithvalues">
            <img src={fianancingtractor} className="cardwithvalues1img" alt="..." />
            <h2 className="cardtitle">Financing Tractors and Heavy Agriculture Machinery</h2>
            <p className="cardpara">
              Helps with the purchase of new tractor, tractor drawn implements and power tiller and other agriculture machines etc.
            </p>
            <Link to="/details/9">
              <button className="cardbutton">Know more 🔜</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="assistance">
        <div className="assistancecontainer">
          <div className="assistanceimage-section">
            <h2 className="assistancetitle">Gain access to many exciting offers & trending deals on various bob World Debit & Credit Cards.</h2>
            <button className="assistancebutton">View All offers</button>
          </div>
          <div className="assistancetext">
            <h2 className="assistanceh2">Experience a new Digital World. Welcome to bob World</h2>
            <p className="assistancep">
              Our official mobile banking application with new and exciting features and easy user interface.
            </p>
            <div className="assistancebadges">
              <img src={appstore} alt="App Store" />
              <img src={googleplay} alt="Google Play" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;*/

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Home.css';
import { Link } from 'react-router-dom';

// Import images
import digiaccounts from './images/waystobank/DigitalAccounts.png';
import bobworld from './images/waystobank/bobWorld.png';
import Applock from './images/waystobank/AppLockerOnline.png';
import digiHome from './images/waystobank/DigitalHomeLoans.png';
import intbanking from './images/waystobank/internetBanking.png';
import Whatsapp from './images/waystobank/WhatsAppBanking.png';
import barodaanimal from './images/cardimages/BarodaAnimalHusbandryandFisheries.png';
import barodakisan from './images/cardimages/BarodaKisanCreditCard.png';
import barodakisantatkal from './images/cardimages/BarodaKisanTatkal.png';
import financingagriclinic from './images/cardimages/FinancingAgriclinics&AgribusinessCentresbyAgricultureGraduates.png';
import financingdevelopment from './images/cardimages/FinancingDevelopmentofDairyPoultryandFishery.png';
import fianancingtractor from './images/cardimages/Financingtractorsandheavyagriculture.png';
import pradhanmantri from './images/cardimages/PradhanMantriKisanUrjaSuraksha.png';
import scemeforpurchaseof from './images/cardimages/Schemeforpurchaseofagricultureland.png';
import foodagrobased from './images/cardimages/toFoodAgroBasedUnitsUnderAgriculture.png';
import appstore from './images/assistance/appstore.png';
import googleplay from './images/assistance/googleplay.png';
import img1 from './images/carousel/image1.png';
import img2 from './images/carousel/image2.png';
import img3 from './images/carousel/image3.png';
import banking from './images/assistance/bankimg.png';

function Home() {
  const [searchInput, setSearchInput] = useState('');

  const cardsData = [
    {
      id: 1,
      imgSrc: foodagrobased,
      title: 'Advances to Food Agro Based Units Under Agriculture',
      description: 'Financing the new projects, working capital and non-fund based facilities to the units engaged in activities of oil mill/solvent extraction, agro/food',
    },
    {
      id: 2,
      imgSrc: barodaanimal,
      title: 'Animal Husbandry and Fisheries Kisan Credit Card',
      description: 'Provide adequate and timely credit support under a single window to the farmers for activities related to Animal Husbandry and Fisheries.',
    },
    {
      id: 3,
      imgSrc: barodakisan,
      title: 'Kisan Credit Card (BKCC)',
      description: 'Aims at providing adequate and timely credit support from the banking system under a single window to the farmers for their cultivation & other needs.',
    },
    {
      id: 4,
      imgSrc: financingagriclinic,
      title: 'Financing Agriclinics & Agribusiness Centres by Agriculture Graduates',
      description: 'A financial aid for setting up of Agriclinics and Agribusiness centers in order to supplement efforts of public extension.',
    },
    {
      id: 5,
      imgSrc: financingdevelopment,
      title: 'Financing Development of Dairy, Poultry, Fishery, etc.',
      description: 'To fulfil capital and working capital requirement of units engaged in dairy, piggery, poultry, equipment/machinery/transport vehicle for purchase of feed and to meet other expenditure.',
    },
    {
      id: 6,
      imgSrc: pradhanmantri,
      title: 'Pradhan Mantri Kisan Urja Suraksha Evam Uthaan Mahabhiyaan (PM-KUSUM Scheme)',
      description: 'PM-KUSUM scheme is a financing installation of small renewable energy project of 2 MW. Installation of standalone solar pumps and solarization of existing grid connected agriculture pumps.',
    },
    {
      id: 7,
      imgSrc: scemeforpurchaseof,
      title: 'Scheme for Purchase of Agriculture Land',
      description: 'A financial aid for farmers to purchase agriculture land.',
    },
    {
      id: 8,
      imgSrc: barodakisantatkal,
      title: 'Kisan Tatkal Loan Scheme',
      description: 'A scheme to meet the emergent funds requirements for agriculture and domestic purposes during off season. Farmers who are existing Kisan Card Holders are eligible.',
    },
    {
      id: 9,
      imgSrc: fianancingtractor,
      title: 'Financing Tractors and Heavy Agriculture Machinery',
      description: 'Helps with the purchase of new tractor, tractor drawn implements, power tiller and other agriculture machines etc.',
    },
  ];

  const handleSearch = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const filteredCards = cardsData.filter((card) =>
    card.title.toLowerCase().includes(searchInput) ||
    card.description.toLowerCase().includes(searchInput)
  );

  return (
    <>
      <div className="Carousel">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={img1} className="d-block w-100" alt="Carousel image 1" />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={img2} className="d-block w-100" alt="Carousel image 2" />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="Carousel image 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="Marquee">
        <div className="marquee-container">
          <div className="marquee">
            Closure of Trading Window – Q1 (FY2024-25) Financial Results • bob World Digital Rupee application services will be unavailable for 15 minutes from 09.00 PM to 09.15 PM on Friday.
          </div>
        </div>
      </div>

      <div className="Waystobank">
        <h2 className="Waystobankh1">Ways to Bank</h2>
        <div className="Waystobankcards">
          <div className="Waystobankcard">
            <img src={digiaccounts} alt="Digital accounts" />
            <h3>Digital accounts</h3>
          </div>
          <div className="Waystobankcard">
            <img src={digiHome} alt="Digital Home Loans" />
            <h3>Digital Home Loans</h3>
          </div>
          <div className="Waystobankcard">
            <img src={bobworld} alt="bob World (Mobile Banking)" />
            <h3>bob World (Mobile Banking)</h3>
          </div>
          <div className="Waystobankcard">
            <img src={intbanking} alt="Internet Banking" />
            <h3>Internet Banking</h3>
          </div>
          <div className="Waystobankcard">
            <img src={Whatsapp} alt="WhatsApp Banking" />
            <h3>WhatsApp Banking</h3>
          </div>
          <div className="Waystobankcard">
            <img src={Applock} alt="Apply Locker Online" />
            <h3>Apply Locker Online</h3>
          </div>
        </div>
      </div>

      <div className="AgriLoansandAdvances">
        <div className="AgriLoansandAdvancesContainer">
          <div className="AgriLoansandAdvancesTitle">
            <h2 className="AgriLoansandAdvancesTitleh2">Agriculture Loans & Advances</h2>
          </div>
          <div className="AgriLoansandAdvancesPara">
            <p className="AgriLoansandAdvancesp">
              List of bank's authorised vendors for Overdue Collection Activities. The Bank is a pioneer in introducing various customer-centric initiatives in the Indian Banking industry. It is a holistic, ecosystem-driven platform that helps in digitizing the agronomic journey by offering new-age solutions related to agri-inputs and implements, financing, and advisory among other functionalities at the user’s fingertips.
            </p>
          </div>
        </div>
      </div>

      <div className="search">
        <div className="searchboxandbutton">
          <input
            type="text"
            className="searchbox"
            placeholder="Looking for something specific?"
            value={searchInput}
            onChange={handleSearch}
          />
          <button className="searchbutton" onClick={() => console.log('Search functionality to be implemented.')}>Search</button>
          <button className="micbutton">Mic</button>
        </div>
        <div className="searchboxotherbuttonscontainer">
          <div className="searchboxotherbuttons1">
            <button className="buttonsearchshareholderscorner">Shareholder's Corner</button>
            <button className="buttonsearchbobworldstartup">bob World Start-Up</button>
            <button className="buttonsearchpositivepaysystem">Positive Pay System</button>
            <button className="buttonsearchrighttoinformationact">Right to Information Act</button>
            <button className="buttonsearchdoorstepbanking">Doorstep Banking</button>
            <button className="buttonsearchforlawenforcementagencies">For Law Enforcement Agencies</button>
          </div>
          <br />
          <div className="searchboxotherbuttons2">
            <button className="buttonsearchchiefvigilanceofficer">Chief Vigilance Officer</button>
            <button className="buttonsearchlifeinsurance">Life Insurance</button>
            <button className="buttonsearchonlinedeceasedclaimportal">Online Deceased Claim Portal</button>
            <button className="buttonsearchudgamportal">UDGAM Portal</button>
            <button className="buttonsearchonlineots">Online OTS</button>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="cardfeatures">
          {filteredCards.length > 0 ? (
            filteredCards.map(card => (
              <div key={card.id} className="cardwithvalues">
                <img src={card.imgSrc} className="cardwithvalues1img" alt={card.title} />
                <h2 className="cardtitle">{card.title}</h2>
                <p className="cardpara">{card.description}</p>
                <Link to={`/details/${card.id}`}>
                  <button className="cardbutton">Know more 🔜</button>
                </Link>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>

      <div className="assistance">
        <div className="assistancecontainer">
          <div className="assistanceimage-section">
            <h2 className="assistancetitle">Gain access to many exciting offers & trending deals on various bob World Debit & Credit Cards.</h2>
            <button className="assistancebutton">View All offers</button>
          </div>
          <div className="assistancetext">
            <h2 className="assistanceh2">Experience a new Digital World. Welcome to bob World</h2>
            <p className="assistancep">
              Our official mobile banking application with new and exciting features and an easy user interface.
            </p>
            <div className="assistancebadges">
              <img src={appstore} alt="App Store" />
              <img src={googleplay} alt="Google Play" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
