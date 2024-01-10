import React from 'react';
import './styles.css';
import Image from 'next/image';
import SolarImage from './Solar_image.jpg'; 
import CashImage from './cash_loan.jpg'; 
import IndustryImage from './industry.jpg'; 

const HongTable = () => {
  return (
    <table className="white-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>For</th>
          <th>Potential impact</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>

          <Image src={SolarImage} alt="Solar" style={{ width: '300px', height: '100px' }} />

            
          </td>
          <td>Reducing your CO2 emissions</td>
          <td>~24.5% gain in Enviromental Score </td>

          <td className="button-container">
            <button className="apply-button">Apply Now</button>
            <button className="know-more-button">Know More</button>
          </td>
        </tr>
        <tr className="mt-4">
          <td>

          <Image src={CashImage} alt="Solar" style={{ width: '300px', height: '100px' }} />

            
          </td>
          <td>Providing you with zero collateral capital funding</td>
          <td>Migration to sustainable infrastructure </td>
          
          <td className="button-container">
            <button className="apply-button">Apply Now</button>
            <button className="know-more-button">Know More</button>
          </td>
        </tr>
        <tr>
          <td>

          <Image src={IndustryImage} alt="Solar" style={{ width: '300px', height: '100px' }} />

            
          </td>
          <td>Buying fuel efficient,low maintenance machinery</td>
          <td> ~18% reduction in OpEx </td>
          
          <td className="button-container">
            <button className="apply-button">Apply Now</button>
            <button className="know-more-button">Know More</button>
          </td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  );
};

export default HongTable;
