import react from "react";

function Post({ Link }) {
  return (
    <div className="row">
      <div className="column">
        <div className="post__header">
          <img
            id="post__header-image"
            src="https://mudhead.org/wp-content/uploads/2025/09/MHHolidaypostcard_2025_square.jpg"
            alt=""
          />
          <h2 className="post__title">
            Mudhead Annual Meeting / Holiday Party
          </h2>
          <p>
            When: Wednesday, December 17, 2025 Time: 1755 – 2200 (5:55 – 10pm)
            Where: Par 4 (at Shennecossett Golf Course), 93 Plant St, Groton, CT
            Tickets: $50 in advance / $60 door – cut off 12/12/25 at 10am or $60
            rate will apply – no exceptions!
          </p>
          <p className="grey-text">
            {" "}
            Please pay with the ticket link below or send checks, made out to
            MRMHSA to: PO Box 117, West Mystic, CT 06388
          </p>
        </div>
        <button className="button__primary click">Get Tickets</button>
        <div className="post__content--wrapper">
          <h4>Bring a basket… or a Bottle… or a Bottle in a Basket!</h4>
          <p>
            Please help us have an AMAZING RAFFLE! <br />
            We ask that each boat put together a $100 +/- value boat-themed
            basket (or a bottle if you aren’t feeling creative!) Each boat
            contributes a basket i.e. <br />
            19th Nervous Breakdown = Rolling Stones
            <br />
            Swag Swiss Cheese = Cheese Items
            <br />
            Thunder Chicken = Gift certificate for chicken
            <br />
            You get the idea! Please commit no later than December 1. Please
            send confirmation & description & value of basket to Courtney
            courtney@cmbcreativegroup.com 
            <p>Deliver (or arrange for pick up) to
            Courtney Moore before December 13th. Bringing it with you to the
            party – Let us know that too!<br />
            THANK YOU FOR YOUR GENEROSITY!
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Post;
