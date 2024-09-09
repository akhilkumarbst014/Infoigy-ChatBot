import React, { useState } from 'react';
import './Form.css'; // Custom CSS for additional styling

const Form = () => {
  const [step, setStep] = useState(1);
  const [nationality, setNationality] = useState('');
  const [cityOptions, setCityOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fathersName: '',
    dob: '',
    age: '',
    category: '',
    nationality: '',
    identificationMark: '',
    addressLine1: '',
    addressLine2: '',
    zipCode: '',
    city: '',
    state: '',
    country: '',
    guardianName: '',
    guardianOccupation: '',
    relationshipWithChild: '',
    annualIncome: '',
    sourceOfIncome: '',
    bpl: '',
    rationCardNo: '',
    guardianAadharNo: '',
    guardianAadharImage: null,
    guardianIncomeCertificateNo: '',
    guardianIncomeCertificateImage: null,
    accountHolderName: '',
    bankAccountNo: '',
    bankName: '',
    ifscCode: '',
    panCardNo: '',
  });

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => setStep(step - 1);

  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'file' ? files[0] : value,
    });
  };

  const handleNationalityChange = (e) => {
    const selectedCountry = e.target.value;
    setNationality(selectedCountry);
    setFormData({ ...formData, nationality: selectedCountry });
    // Update cityOptions and stateOptions based on the selected country
  };

  const validateStep = (step) => {
    // Add validation logic for each step
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.dob && formData.age;
      case 2:
        return formData.addressLine1 && formData.zipCode && formData.city && formData.state && formData.country;
      case 3:
        return formData.guardianName && formData.guardianOccupation && formData.relationshipWithChild;
      case 4:
        return formData.accountHolderName && formData.bankAccountNo && formData.bankName && formData.ifscCode && formData.panCardNo;
      default:
        return false;
    }
  };

  const getStepContent = () => {
    switch (step) {
      case 1:
        return (
          <form className="form-container">
            <h2>Personal Details</h2>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" />
            </div>
            <div className="form-group">
              <label htmlFor="fathersName">Father's/Mother's Name</label>
              <input type="text" id="fathersName" value={formData.fathersName} onChange={handleChange} placeholder="Enter father’s or mother’s name" />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" value={formData.dob} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input type="number" id="age" value={formData.age} onChange={handleChange} placeholder="Enter your age" />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category" value={formData.category} onChange={handleChange}>
                <option value="">Select Category</option>
                <option value="General">General</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="OBC">OBC</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="nationality">Nationality</label>
              <select id="nationality" value={formData.nationality} onChange={handleNationalityChange}>
                <option value="">Select Nationality</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                {/* Add more countries here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="identificationMark">Identification Mark</label>
              <input type="text" id="identificationMark" value={formData.identificationMark} onChange={handleChange} placeholder="Enter any identification mark" />
            </div>
          </form>
        );
      case 2:
        return (
          <form className="form-container">
            <h2>Contact Details</h2>
            <div className="form-group">
              <label htmlFor="addressLine1">Address Line 1</label>
              <input type="text" id="addressLine1" value={formData.addressLine1} onChange={handleChange} placeholder="Address Line 1" />
            </div>
            <div className="form-group">
              <label htmlFor="addressLine2">Address Line 2</label>
              <input type="text" id="addressLine2" value={formData.addressLine2} onChange={handleChange} placeholder="Address Line 2" />
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Zip/Postal Code</label>
              <input type="text" id="zipCode" value={formData.zipCode} onChange={handleChange} placeholder="Zip/Postal Code" />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <select id="city" value={formData.city} onChange={handleChange}>
                <option value="">Select City</option>
                {cityOptions.map((city) => <option key={city} value={city}>{city}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="state">State/Province</label>
              <select id="state" value={formData.state} onChange={handleChange}>
                <option value="">Select State/Province</option>
                {stateOptions.map((state) => <option key={state} value={state}>{state}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select id="country" value={formData.country} onChange={handleChange}>
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                {/* Add more countries here */}
              </select>
            </div>
          </form>
        );
      case 3:
        return (
          <form className="form-container">
            <h2>Guardian Details</h2>
            <div className="form-group">
              <label htmlFor="guardianName">Guardian Name</label>
              <input type="text" id="guardianName" value={formData.guardianName} onChange={handleChange} placeholder="Enter guardian's name" />
            </div>
            <div className="form-group">
              <label htmlFor="guardianOccupation">Guardian Occupation</label>
              <input type="text" id="guardianOccupation" value={formData.guardianOccupation} onChange={handleChange} placeholder="Enter guardian's occupation" />
            </div>
            <div className="form-group">
              <label htmlFor="relationshipWithChild">Relationship with Child</label>
              <input type="text" id="relationshipWithChild" value={formData.relationshipWithChild} onChange={handleChange} placeholder="Enter relationship with child" />
            </div>
            <div className="form-group">
              <label htmlFor="annualIncome">Annual Income</label>
              <input type="text" id="annualIncome" value={formData.annualIncome} onChange={handleChange} placeholder="Enter annual income" />
            </div>
            <div className="form-group">
              <label htmlFor="sourceOfIncome">Source of Income</label>
              <input type="text" id="sourceOfIncome" value={formData.sourceOfIncome} onChange={handleChange} placeholder="Enter source of income" />
            </div>
            <div className="form-group">
              <label htmlFor="bpl">BPL</label>
              <input type="text" id="bpl" value={formData.bpl} onChange={handleChange} placeholder="Enter BPL details" />
            </div>
            <div className="form-group">
              <label htmlFor="rationCardNo">Ration Card No.</label>
              <input type="text" id="rationCardNo" value={formData.rationCardNo} onChange={handleChange} placeholder="Enter ration card number" />
            </div>
            <div className="form-group">
              <label htmlFor="guardianAadharNo">Guardian Aadhar No.</label>
              <input type="text" id="guardianAadharNo" value={formData.guardianAadharNo} onChange={handleChange} placeholder="Enter guardian's Aadhar number" />
            </div>
            <div className="form-group">
              <label htmlFor="guardianAadharImage">Guardian Aadhar Image</label>
              <input type="file" id="guardianAadharImage" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="guardianIncomeCertificateNo">Guardian Income Certificate No.</label>
              <input type="text" id="guardianIncomeCertificateNo" value={formData.guardianIncomeCertificateNo} onChange={handleChange} placeholder="Enter guardian's income certificate number" />
            </div>
            <div className="form-group">
              <label htmlFor="guardianIncomeCertificateImage">Guardian Income Certificate Image</label>
              <input type="file" id="guardianIncomeCertificateImage" onChange={handleChange} />
            </div>
          </form>
        );
      case 4:
        return (
          <form className="form-container">
            <h2>Bank Details</h2>
            <div className="form-group">
              <label htmlFor="accountHolderName">Account Holder Name</label>
              <input type="text" id="accountHolderName" value={formData.accountHolderName} onChange={handleChange} placeholder="Enter account holder's name" />
            </div>
            <div className="form-group">
              <label htmlFor="bankAccountNo">Bank Account No.</label>
              <input type="text" id="bankAccountNo" value={formData.bankAccountNo} onChange={handleChange} placeholder="Enter bank account number" />
            </div>
            <div className="form-group">
              <label htmlFor="bankName">Bank Name</label>
              <input type="text" id="bankName" value={formData.bankName} onChange={handleChange} placeholder="Enter bank name" />
            </div>
            <div className="form-group">
              <label htmlFor="ifscCode">IFSC Code</label>
              <input type="text" id="ifscCode" value={formData.ifscCode} onChange={handleChange} placeholder="Enter IFSC code" />
            </div>
            <div className="form-group">
              <label htmlFor="panCardNo">PAN Card No.</label>
              <input type="text" id="panCardNo" value={formData.panCardNo} onChange={handleChange} placeholder="Enter PAN card number" />
            </div>
          </form>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="form-wrapper">
      <div className="progress-bar-container">
        <ul className="progressbar">
          <li className={step >= 1 ? 'completed active' : ''} data-icon="👤">
            <span>Personal Details</span>
          </li>
          <li className={step >= 2 ? 'completed active' : ''} data-icon="📞">
            <span>Contact Details</span>
          </li>
          <li className={step >= 3 ? 'completed active' : ''} data-icon="👨‍👩‍👧‍👦">
            <span>Guardian Details</span>
          </li>
          <li className={step >= 4 ? 'completed active' : ''} data-icon="🏦">
            <span>Bank Details</span>
          </li>
        </ul>
      </div>
      <div className="form-content">
        {getStepContent()}
      </div>
      <div className="form-navigation">
        {step > 1 && <button onClick={handlePrevious}>Previous</button>}
        {step < 4 && <button onClick={handleNext}>Next</button>}
        {step === 4 && <button type="submit">Submit</button>}
      </div>
    </div>
  );
};

export default Form;