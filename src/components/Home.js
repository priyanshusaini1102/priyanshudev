const Home = ({ dark, aboutData, socialHandles }) => {
  return (
    <div className="orido_tm_hero orido_tm_section" id="home">
      <div className="container">
        <div className="content">
          <div className="details">
            <div className="short">
              <h3>
                {aboutData?.name} <img className="svg" src="img/svg/hi.svg" alt="" />
              </h3>
              <span className="job">{aboutData?.title}</span>
            </div>
            <div className="text">
              <p>
                {aboutData?.subTitle}
              </p>
            </div>
            <div className="buttons">
              <div className="orido_tm_boxed_button">
                <a className="anchor" href="#contact">
                  Say Hello{" "}
                  <img className="svg" src="img/svg/send.svg" alt="" />
                </a>
              </div>
              <div className="orido_tm_simple_button">
                <a className="line_effect anchor" href="#portfolio">
                  My Works{" "}
                  <img className="svg" src="img/svg/top-arrow.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="orido_tm_follow">
          <span>Follow me:</span>
          <ul>
            {socialHandles?.map((socialHandle, index)=>(<li key={index}>
              <a href={socialHandle?.url}>
                <img className="svg" src={socialHandle?.image.url} alt="image"/>
              </a>
            </li>)
            )}
          </ul>
        </div>
      </div>
      <div className="orido_tm_down">
        <a className="anchor" href="#about">
          <img
            className="svg"
            src={`img/svg/${dark ? "down_button_light" : "down_button"}.svg`}
            alt=""
          />
        </a>
      </div>
      <div className="avatar">
        <div className="img">
          <img src={aboutData?.avatar.url} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Home;
