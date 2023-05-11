import { useState } from "react";
import "./App.css";
function App() {

  const [values , setValues] = useState({});

  function isFormSubmissionError(response) {
    return response.status === "validation_failed";
  }

  const formSubmissionHandler = (event) => {
  event.preventDefault();

  const formElement = event.target,
    { action, method } = formElement,
    body = new FormData(formElement);

  fetch(action, {
    method,
    body
  })
    .then((response) => response.json())
    .then((response) => {
      // Determine if the submission is not valid
      if (isFormSubmissionError(response)) {
        // Handle the case when there are validation errors
        const errorMessage = response.message;
        alert(errorMessage);
      } else {
        // Handle the happy path
        window.location.reload();
      }
    })
    .catch((error) => {
      // Handle the case when there's a problem with the request
      console.log(`There is an error ${error}`)
    });
};

window.onload = function() {
  const formElement = document.querySelector("form");
  formElement.addEventListener("submit", formSubmissionHandler);  

};
  

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues({ ...values, [name]: value });
    
  };

  let sum = 0; 

  for (const key in values) {
    sum += Number(values[key]);
  }



  return (
    <section className="cf7-form">
      <form id="custom_form" action="https://gandhineru.com/subscription/wp-json/contact-form-7/v1/contact-forms/173/feedback" method="post" >
        
        <input type="hidden" value = "5000" name="base-website" id="base_website_price"/>
        
        <label htmlFor="technologyType"> Technology 
          <select name="techology" id="technologyType" onChange={handleInputChange}>
            <option value="">Select an option</option>
            <option value="3000">WordPress</option>
            <option value="5000">Webflow</option>
            <option value="4000">Framer</option>
            <option value="15000">React</option>
          </select>
        </label><br/>

        <label htmlFor="websiteType"> What are you looking for? 
          <select name="websiteType" id="websiteType" onChange={handleInputChange}>
            <option value="">Select an option</option>
            <option value="20000">Static website</option>
            <option value="50000">Dynamic website</option>
            <option value="80000">business website</option>
            <option value="100000">one page site</option>
            <option value="150000">E-commerce website</option>
          </select>
        </label><br/>

        <label htmlFor="NumOfPage"> Number of pages 
          <select name="NumOfPage" id="NumOfPage" onChange={handleInputChange}>
            <option value="">Select an option</option>
            <option value="200">1 - 4</option>
            <option value="500">5 - 8</option>
            <option value="800">9 - 20</option>
            <option value="1000">20 - 25</option>
            <option value="15000">Unlimited</option>
          </select>
        </label><br/>

        <label htmlFor="wantDomain"> Do You Want Domain
        <select name="wantDomain" id="wantDomain" onChange={handleInputChange}>
            <option value="">Select an option</option>
            <option value="1500">Yes</option>
            <option value="0">No</option>
        </select>
        </label><br/>

        <label htmlFor="wantHosting"> Do You Want Hosting
        <select name="wantHosting" id="wantHosting" onChange={handleInputChange}>
            <option value="">Select an option</option>
            <option value="5000">Yes</option>
            <option value="0">No</option>
        </select>
        </label><br/>

        <label htmlFor="wantGsuite"> Do You Want Google Suite for Emails
        <select name="wantGsuite" id="wantGsuite" onChange={handleInputChange}>
            <option value="">Select an option</option>
            <option value="3000">Yes</option>
            <option value="0">No</option>
        </select>
        </label><br/>
        
        <label htmlFor="Pages"> Do You Want Google Suite for Emails
        <select name="Pages" id="Pages" onChange={handleInputChange}>
        <option value="">-- Select an Option --</option>
  <option value="home">Home</option>
  <option value="about">About Us</option>
  <option value="contact">Contact Us</option>
  <option value="services">Services</option>
  <option value="career">Career</option>
  <option value="gallery">Gallery</option>
  <option value="product">Product</option>
  <option value="product-detail">Product Detail</option>
  <option value="portfolio">Portfolio</option>
  <option value="media">Media</option>
  <option value="testimonial">Testimonial</option>
  <option value="clients">Clients</option>
  <option value="enquiry">Enquiry</option>
  <option value="quote">Get A Quote</option>
  <option value="blog">Blog</option>
  <option value="vision">Vision Page</option>
  <option value="mission">Mission Page</option>
  <option value="team">Team</option>
  <option value="faq">FAQ's</option>
  <option value="news">News</option>
  <option value="events">Events</option>
  <option value="awards">Awards</option>
  <option value="achievement">Achievement</option>
  <option value="csr">CSR</option>
  <option value="terms">Terms & Conditions</option>
  <option value="privacy">Privacy Policy</option>
  <option value="refund">Refund Policy</option>
  <option value="cancellation">Cancellation Policy</option>
  <option value="studies">Studies</option>
  <option value="industries">Industries</option>
  <option value="sitemap">Site Map</option>
  <option value="complaint">Complaint</option>
        </select>
        </label><br/>
        

        
        
        <button type="submit">submit</button>

      </form>

      <div className="totle-cost">
        <h1>{sum}</h1>
      </div>
    </section>
  );
}

export default App;
