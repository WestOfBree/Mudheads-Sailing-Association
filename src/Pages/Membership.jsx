import React from "react";
import memberForm from "../assets/membershipformMH-2026.pdf";
import { Form } from "react-router-dom";

function Membership() {
  return (
    <div className="row Membership__row">
      <div className="column Membership__column">
        <h2>Membership</h2>
        <div className="Membership__header">
          <h1>Use the form below to join or renew your Mudhead membership.</h1>
          <h3>
            {" "}
            Complete and submit the registration information below. After
            submitting, you will be directed to another page where you can pay
            via PayPal or credit card.
            <span className="red-text">
              Please select the proper membership level. Only those 18 and
              younger are junior level.
            </span>
          </h3>
          <h5>
            {" "}
            – OR – <br />
            <a href={memberForm} download>
              Download Membership Form – pdf
            </a>
            <br />
            *Dues are to be paid by 1/31/2026
          </h5>
        </div>
        <div className="Membership__form--container">
          <form className="membership__form">
            <label>
              Your Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Your Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Membership Level:
              <select name="membershipLevel" required>
                <option value="junior">Junior (18 and younger)</option>
                <option value="adult">Adult (19 and older)</option>
              </select>
            </label>
            <label>
              Address:
              <input type="text" name="address" />
            </label>
            <label>
              City:
              <input type="text" name="city" />
            </label>
            <label>
              State:
              <input type="text" name="state" />
            </label>
            <label>
              Zip Code:
              <input type="text" name="zip" />
            </label>
            <label>
              Your Phone Number:
              <input type="tel" name="phone" />
            </label>
            <label>
              Boat Affiliation (Name, Type, and Relationship to you):
              <input type="text" name="boatAffiliation" />
            </label>
            <label>Would you like to volunteer for events?</label>
            <select name="volunteer" required>
              <option value="yes">Yes! Sign me up!</option>
              <option value="no">No thank you, not at this time.</option>
            </select>
            <label>
              Check all that apply:
              <br />
              <input
                type="checkbox"
                name="volunteerOptions"
                value="raceCommittee"
              />{" "}
              RC Boat Commissioning Crew (April/May)
              <input
                type="checkbox"
                name="volunteerOptions"
                value="raceCommittee"
              />{" "}
              Race Committee (Weds. Nights - May/September)
              <input
                type="checkbox"
                name="volunteerOptions"
                value="raceCommittee"
              />{" "}
              Mid-Season Party (July)
              <input
                type="checkbox"
                name="volunteerOptions"
                value="raceCommittee"
              />{" "}
              Mudhead Benefit Cup Regatta (July)
              <input
                type="checkbox"
                name="volunteerOptions"
                value="raceCommittee"
              />{" "}
              Awards Banquet (September)
              <input
                type="checkbox"
                name="volunteerOptions"
                value="raceCommittee"
              />{" "}
              Annual Meeting & Holiday Party (December)
              <input
                type="checkbox"
                name="volunteerOptions"
                value="generalSupport"
              />{" "}
              General Support (Year 'Round)
            </label>
            <label>
              Ideas/Remarks/Juicy Tidbits for our Web Site?
              <textarea name="comments" rows="4" />
            </label>
            <button
              onClick={() =>
                alert(
                  "Thank you for your interest, however this page is still underconstruction and the submit form button does not work yet. Please contact mudheads.org for assistance"
                )
              }
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Membership;
