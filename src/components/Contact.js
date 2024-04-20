const Contact = ({ aboutData, youtubeData, email, socialHandles }) => {
  const {embedId} = (youtubeData && youtubeData[0]) ?? ''
  return (
    <div className="orido_tm_section" id="contact">
      <div className="orido_tm_contact">
        <div className="container">
          <div className="infobox">
            <div className="video_button">
              <a
                className="popup-youtube"
                href={`https://www.youtube.com/watch?v=${embedId}`}
              >
                <img
                  className="anim_circle"
                  src="https://cdn.pixabay.com/photo/2017/06/23/02/35/youtube-2433301_960_720.png"
                  alt=""
                />
                <img className="svg" src="img/svg/play.svg" alt="" />
              </a>
            </div>
            <div className="text">
              <h3>{`Let's`} work together</h3>
              <p>
                You can express yourself however you want and whenever you want,
                for free. You can customize a template or make your own.
              </p>
            </div>
            <div className="orido_tm_boxed_button">
              <a href={`mailto:${email ?? ''}`}>
                Say Hello <img className="svg" src="img/svg/send.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="connect">
            <div className="left">
              <ul>
                <li>
                  <span className="name">Call:</span>
                  <p>
                    <a className="line_effect" href="#">
                      {aboutData?.phoneNumber}
                    </a>
                  </p>
                </li>
                <li>
                  <span className="name">Email:</span>
                  <p>
                    <a className="line_effect" href="#">
                      {email ?? ''}
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
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
          </div>
        </div>
        <span className="element">
          <img className="svg" src="img/svg/elements.svg" alt="" />
        </span>
        <span className="element2">
          <img className="svg" src="img/svg/element-2.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default Contact;
