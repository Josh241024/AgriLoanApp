import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Ensure this CSS file exists and is properly linked
import logo from './images/assistance/logo.png';
const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or token here (if using authentication)
    // For example, remove a token from localStorage
    localStorage.removeItem('authToken');
    
    // Redirect to login page
    navigate('/logindupe');
  };

  return (
    <div>
      <div className="headerpart">
        <div className='name'>
        <img src={logo} className='nameimg' alt="Bank of Baroda Logo" />
        <h1 className='Name'>AMJ</h1>
        </div>
      </div>
      <div className="navbar">
        <Dropdown title="Accounts">
          <a href="#">Savings Accounts</a>
          <a href="#">Salary Accounts</a>
          <a href="#">Current Account</a>
          <a href="#">Term Deposit</a>
          <a href="#">bob LITE Savings Account</a>
          <a href="#">bob BRO Saving Account</a>
          <a href="#">bob Family Savings Accounts Segment</a>
          <a href="#">bob Advantage Saving Account</a>
          <a href="#">bob Champ Account</a>
          <a href="#">bob Super Savings Account</a>
          <a href="#">bob Jeevan Suraksha Saving Account</a>
          <a href="#">bob SB Self Help Group</a>
          <a href="#">bob Mahila Shakti Saving Account</a>
          <a href="#">bob Pensioners Savings Bank Account</a>
          <a href="#">bob Platinum Saving Bank Account</a>
          <a href="#">bob Professional Saving Bank Account</a>
          <a href="#">bob Senior Citizen Privilege Scheme</a>
          <a href="#">bob Bank Mitra Bachat Khata</a>
          <a href="#">Government Savings Account (bob Govt. Bodies SB Account)</a>
          <a href="#">View All Saving Accounts</a>
          <a href="#">Open a Savings Account Digitally</a>
          <a href="#">Application Form</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
          <a href="#">View All Accounts</a>
        </Dropdown>
        <Dropdown title="Loans">
          <a href="#">Home Loan</a>
          <a href="#">Vehicle Loan</a>
          <a href="#">Personal Loans</a>
          <a href="#">AMJ Yoddha Loans for Defence Personnel</a>
          <a href="#">Education Loan</a>
          <a href="#">Other Loans</a>
          <a href="#">Gold Loan</a>
          <a href="#">Mortgage Loan</a>
          <a href="#">Fintech</a>
          <a href="#">AMJ Yoddha Home Loan</a>
          <a href="#">AMJ Yoddha Auto Loan</a>
          <a href="#">AMJ Yoddha Two-Wheeler Loan</a>
          <a href="#">AMJ Yoddha Loan to Defence Pensioners</a>
          <a href="#">AMJ Yoddha Education Loans</a>
          <a href="#">JanSamarth Portal</a>
          <a href="#">Application Form</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
          <a href="#">Sachet Portal</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Grievance Redressal</a>
          <a href="#">List of DLAs</a>
          <a href="#">List of LSPs</a>
          <a href="#">List of Recovery Agents</a>
          <a href="#">View All Loans</a>
        </Dropdown>
        <Dropdown title="Investments">
          <a href="#">Govt. Deposit Schemes/Bonds</a>
          <a href="#">Investment Products</a>
          <a href="#">Atal Pension Yojana</a>
          <a href="#">Sovereign Gold Bonds</a>
          <a href="#">E-Kisan Vikas Patra Scheme, 2014</a>
          <a href="#">Floating Rate Savings Bonds (RBI bonds)</a>
          <a href="#">Gold Monetization Scheme</a>
          <a href="#">Senior Citizen Savings Deposit Scheme</a>
          <a href="#">Public Provident Fund</a>
          <a href="#">Sukanya Samriddhi Yojana</a>
          <a href="#">National Pension Scheme</a>
          <a href="#">Mahila Samman Savings Certificate (MSSC), 2023</a>
          <a href="#">Open AMJ 3 in 1 Demat & Trading Account Digitally</a>
          <a href="#">Online Closure of CDSL Demat Account</a>
          <a href="#">Application Form</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
          <a href="#">View All Investments</a>
        </Dropdown>
        <Dropdown title="Digital Products">
          <a href="#">Digital Payment</a>
          <a href="#">Cards</a>
          <a href="#">Instant Banking</a>
          <a href="#">Merchant Payment Solutions</a>
          <a href="#">bob World (Mobile Banking)</a>
          <a href="#">bob World Internet Banking</a>
          <a href="#">bob World UPI</a>
          <a href="#">bobWorld Digital Rupee</a>
          <a href="#">bob World Wave - A Wearable Contactless Payment Smart Watch</a>
          <a href="#">bob World Merchant (POS)</a>
          <a href="#">bob World Internet</a>
          <a href="#">Application Form</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
          <a href="#">View All Digital Products</a>
        </Dropdown>
        <Dropdown title="Other Services">
          <a href="#">Miscellaneous</a>
          <a href="#">Aadhar Seva Kendra</a>
          <a href="#">ASBA Facility</a>
          <a href="#">Collection Services</a>
          <a href="#">Custom Duty Payment</a>
          <a href="#">ECS</a>
          <a href="#">e-stamping</a>
          <a href="#">Fintech Alliance</a>
          <a href="#">Get your Form 16A</a>
          <a href="#">Government Business Schemes</a>
          <a href="#">One Time Settlement</a>
          <a href="#">Pension Saarthi</a>
          <a href="#">Preventive Vigilance Initiative</a>
          <a href="#">Settlement of Death Claim</a>
          <a href="#">Video based Life Certificate</a>
          <a href="#">Statewise Bank Goods and Services Tax Identification Number (GSTIN)</a>
          <a href="#">View All Miscellaneous</a>
          <a href="#">Application Form</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
          <a href="#">View All Other Services</a>
        </Dropdown>
        <Dropdown title="My Status" className="Status">
           <button className='' onClick={handleLogout}>My loans</button>
           <button className=''onClick={handleLogout}>My Savings</button>
        </Dropdown>
        <Dropdown title="Notifications" className="Notifications">
           <button className='' onClick={handleLogout}>My loans</button>
           <button className=''onClick={handleLogout}>My Savings</button>
        </Dropdown>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

const Dropdown = ({ title, children }) => {
  return (
    <div className="dropdown">
      <button className="dropbtn">{title}</button>
      <div className="dropdown-content">
        {children}
      </div>
    </div>
  );
};

export default Header;
