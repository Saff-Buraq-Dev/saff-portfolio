import { Fragment } from "react";
const Quote = () => {
  return (
    <Fragment>
      <div className="content quote">
        {/* title */}
        <div className="title">
          <span>Quote</span>
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div className="revs-item">
              <div className="text">
                <div>
                  Everything fails all the time.
                </div>
              </div>
              <div className="user">
                <div className="img">
                  <img src="images/werner.jpeg" alt="Werner Vogels" />
                </div>
                <div className="info">
                  <div className="name">Werner Vogels</div>
                  <div className="company">VP & CTO at Amazon.com</div>
                </div>
                <div className="clear" />
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default Quote;
