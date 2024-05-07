import { Fragment } from "react";
const Clients = () => {
  return (
    <Fragment>
      <div className="content clients">
        {/* title */}
        <div className="title">Certifications</div>
        {/* content */}
        <div className="row client-items">
          {/* client item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.credly.com/badges/91634c7c-a16b-4a43-9949-7092af73b554/public_url"
                >
                  <img src="images/aws.png" alt="AWS Solutions Architect Associate" />
                </a>
              </div>
            </div>
          </div>
          {/* client item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.credly.com/badges/91634c7c-a16b-4a43-9949-7092af73b554/public_url"
                >
                  <img src="images/terraform.webp" alt="Terraform certified associate" />
                </a>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default Clients;
