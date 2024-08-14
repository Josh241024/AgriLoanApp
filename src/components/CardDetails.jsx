import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import './CardDetails.css';
import location from './images/helpimages/location.png';
import locationaccount from './images/helpimages/locationaccount.png';
import phone from './images/helpimages/phone.png';
import img1 from "./images/carousel/image1.png";
import img2 from "./images/carousel/image2.png";
import img3 from "./images/carousel/image3.png";
import { NavLink } from 'react-router-dom';


const cardDetails = {
  1: {
    title: 'Advances to Food Agro Based Units Under Agriculture',
    imgSrc: './images/cardimages/toFoodAgroBasedUnitsUnderAgriculture.png',
    content: [
      'New, existing Food and Agro based processing units can avail this facility',
      'Individual, Proprietorship, Partnership concerns, Private, Public Limited companies and Limited Liability Partnership Concerns.',
      '50% concession towards unified Processing upfront and Documentation Charges',
      'Collection Charges on collection of cheques: 100% waiver of the Collection charges on collection of cheques issued in favour of the Borrower by Food Corporation of India, Cotton Corporation of India.',
      'Up to Rs. 100 crores with our bank(however, the aggregate sanctioned limit per borrower from the Banking system not to exceed Rs. 100 crores)',
      'Margin:',
      'Stocks & Book Debts: 25 %',
      'Plant & Machinery: 25%',
      'Land & Building: 30%',
      'ROI: Depending on Hard Security Coverage and Internal Credit Rating'
    ]
  },
  
  2: {
    title: 'Animal Husbandry and Fisheries Kisan Credit Card (BAHFKCC) Scheme : Benefits',
    imgSrc: './images/cardimages/toFoodAgroBasedUnitsUnderAgriculture.png',
    content: [
      'Nil Processing Charges for aggregate loan upto Rs 3.00 Lakhs',
      'Nil Inspection Charges for aggregate loan up to Rs 3.00 Lakhs',
      'Simple interest is applied till due date of repayment',
      'Credit Balance will attract interest as in saving bank rate',
      'No penal interest is charged up to limit of Rs. 25000.00',
      'Free Personal Accidental Insurance of Rs. 50000.00',
      'Loans up to Rs. 2.00 Lakhs will be charged @ 7%p.a, subject to Govt. of India providing Interest Subvention to Bank on such advances.',
      'Prompt Repayment Incentive of 3% per annum for loans up to Rs 2.00 lakh for borrowers with timely repayment. However, the interest subvention and prompt repayment incentive benefit on working capital (i.e Crop Loan+ Working capital loan for animal husbandry and fisheries) will be available only on an overall limit of Rs 3.00 lakh per annum and subject to maximum limit of Rs 2.00 lakh per farmer involved in activities only related to animal husbandry and /or fisheries.',
      'Credit Guarantee for loans upto Rs 10.00 lakhs is available under Credit Guarantee Fund for Micro Units (CGFMU)'
    ]
  },
  
  3: {
    title: 'Kisan Credit Card (KCC)',
    imgSrc: './images/cardimages/toFoodAgroBasedUnitsUnderAgriculture.png',
    content: [
      'Digital BKCC Renewal facility',
      'All farmers including tenants and share croppers are eligible for loans',
      'Minimum loan amount is Rs. 5,000/-',
      'Credit facility is provided for Production Credit and Investment Credit',
      'Loans up to Rs. 3.00 Lakhs will be charged @ 7%p.a, subject to Govt. of India providing Interest Subvention to Bank on such advances',
      'Interest at SB rate on credit balance in account',
      'Coverage available under Pradhan Mantri Fasal Bima Yojana',
      'Concession available in ROI for existing regular borrowers',
      'Limit is valid for 5 years',
      'Eligible for free insurance cover of Rs. 50,000/ under Personal Accident Insurance Scheme',
      'Nil Processing Charges for aggregate loan upto Rs 3.00 Lakhs',
      'Nil Inspection Charges for aggregate loan upto Rs 3.00 Lakhs'
    ]
  },
  
  8: {
    title: 'Kisan Tatkal Loan Scheme : Benefits',
    imgSrc: './images/cardimages/toFoodAgroBasedUnitsUnderAgriculture.png',
    content: [
      'A scheme to meet the emergent funds requirements for agriculture and domestic purposes during off season.',
      'Maximum Loan upto Rs 1.00 Lakhs',
      'Individual Farmers/Joint borrowers who are existing BKCC holder of our bank for at least 2 years, with satisfactory repayment track record of all advance accounts.'
    ]
  },
  
  4: {
    title: 'Financing Agriclinics & Agribusiness Centres by Agriculture Graduates',
    imgSrc: './images/cardimages/toFoodAgroBasedUnitsUnderAgriculture.png',
    content: [
      'Provides financial aid for setting up of Agriclinics and Agribusiness Centers by Agricultural Graduates and other technically qualified entrepreneurs',
      'Maximum Loan of Rs 25.Lakhs for Project by individual is allowed',
      'Maximum Loan of Rs.20 Lakhs per trained person and overall ceiling of Rs.100 Lakhs for Project by group of individuals is allowed',
      'No collateral security for Loan upto Rs 5 Lakhs',
      'Nil margin for Loan upto Rs 5 Lakhs',
      'Can avail subsidy through NABARD'
    ]
  },
  
  5: {
    title: 'Financing Development of Dairy, Poultry, Fishery, etc.',
    imgSrc: './images/cardimages/toFoodAgroBasedUnitsUnderAgriculture.png',
    content: [
      'Processing charges Nil for Aggregate Loan upto Rs 3.00 Lakhs',
      'Inspection charges Nil for Aggregate Loan upto Rs 3.00 Lakh',
      'Margin Nil for loans upto Rs 1.00 Lakhs',
      'Meets the capital expenditure and working capital requirements of units engaged Agri Allied activities'
    ]
  },
  
  9: {
    title: 'Financing Tractors and Heavy Agriculture Machinery',
    imgSrc: './images/cardimages/toFoodAgroBasedUnitsUnderAgriculture.png',
    content: [
      'Processing charges Nil for Aggregate Loan upto Rs 3.00 Lakhs',
      'Inspection charges Nil for Aggregate Loan upto Rs 3.00 Lakh',
      'Low Land Requirement.',
      'Low Margin Requirement',
      'Repayment as per the income flow of borrower'
    ]
  },
  
  6: {
    title: 'Pradhan Mantri Kisan Urja Suraksha Evam Uthaan Mahabhiyaan (PM-KUSUM Scheme)',
    imgSrc: './images/cardimages/toFoodAgroBasedUnitsUnderAgriculture.png',
    content: [
      'Small renewable energy project of 2 MW',
      'Installation of standalone solar pumps and',
      'Solarization of existing grid connected agriculture pumps.',
      'Inspection Charges:',
      'Agriculture exposure upto Rs. 3.00 Lakhs- Nil',
      'Above Rs 3 lakhs to Rs 10 Lakhs - Rs 250',
      'Above Rs 10 Lakhs to Rs 1 Crore - Rs 1000',
      'Above Rs 1 Crore - Rs 5000'
    ]
  },
  
  7: {
    title: 'Scheme for Purchase of Agriculture Land',
    imgSrc: './images/cardimages/toFoodAgroBasedUnitsUnderAgriculture.png',
    content: [
      'Providing term finance to eligible farmers for purchase, development and cultivation of agricultural as well as fallow and Waste Lands.',
      'Quantum of loan will depend on the area of the land to be purchased and its valuation and also development cost',
      'Helps Small and Marginal farmers for buying more land'
    ]
  }
};

function CardDetails() {
  const { id } = useParams();
  const card = cardDetails[id];

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div>
      <h1>{card.title}</h1>
      <div className='cardiApplyOnlineContainer'>
        <div className="Carousel">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className='applyOnlineSection'>
          <p className='cardiApplyOnlinepara'>A package of abundances and value for your food business.</p>
        
          <NavLink to="/apply-now" className='cardiApplyOnlinebutton'>Apply Online</NavLink>
         
        </div>
      </div>
      <div className='Carddetailscontainer'>
        <ul className='Carddetailslist'>
          {card.content && card.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className='Assistancemaincontainer'>
        <h2>Need Assistance?</h2>
        <div className='Assistancephonenumnumbers'>
          <div className='Assistancephonenumcontent numbers'>
            <img src={phone} alt="phone"/>
            <p>Toll Free Number (Domestic):</p>
            <p>1800 5700</p>
            <p>1800 5000</p>
          </div>
          <div className='Assistancephonenumcontent tollfree'>
            <img src={phone} alt="phone"/>
            <p>Toll Free Number</p>
            <p>For Domestic Customers</p>
            <p>Calling From Abroad (24X7):</p>
            <p>+91 79-66296009</p>
          </div>
          <div className='Assistancephonenumcontent asist'>
            <img src={location} alt="location"/>
            <p>Locate</p>
            <p>Our Branch</p>
          </div>
          <div className='Assistancephonenumcontent help'>
            <img src={locationaccount} alt="location account"/>
            <p>Find</p>
            <p>Our BC Agent</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;