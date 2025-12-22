import react from "react";

function Post({ Link }) {
  return (
    <div>
      <h1>Mudhead Annual Meeting / Holiday Party</h1>
      <p>
        When: Wednesday, December 17, 2025 Time: 1755 – 2200 (5:55 – 10pm)
        Where: Par 4 (at Shennecossett Golf Course), 93 Plant St, Groton, CT
        Tickets: $50 in advance / $60 door – cut off 12/12/25 at 10am or $60
        rate will apply – no exceptions! 
      </p>
      <p className="grey-text"> Please pay with the ticket link below or send checks, made out to MRMHSA to: PO
        Box 117, West Mystic, CT 06388
      </p>
      <button className="button__primary">Get Tickets</button>
      <p></p>
    </div>
  );
}
export default Post;
