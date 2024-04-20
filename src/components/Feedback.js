const Feedback = ({ dark, testimonials }) => {
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_testimonials">
        <div className="container">
          <div className="orido_tm_main_title">
            <h3>
              <span>
                Valuable feedback
                <br />
                from my client
              </span>
            </h3>
          </div>
          {testimonials?.filter(curr => curr.enabled).map((curr, index) => (<div key={index} className="testimonials_in">
            <img src={curr.image.url} alt="" />
            <div className="info">
              <div className="text">
                <p>
                  “{curr.review}”
                </p>
              </div>
              <div className="details">
                <h3 className="name">
                  <span>{curr.name}</span>
                </h3>
                <span className="job">{curr.position}</span>
              </div>
            </div>
          </div>))}

          
        </div>
      </div>
    </div>
  );
};
export default Feedback;
