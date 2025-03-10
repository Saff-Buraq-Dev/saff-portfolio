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
                  href="https://www.credly.com/badges/2e551850-8844-41ed-81d4-b30dfa0325f6/public_url"
                >
                  <img src="images/aws-certified-developer-associate.png" alt="AWS certified Developer associate" />
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
                  href="https://www.credly.com/badges/d8324061-f5e2-4c77-83c2-0fe230907a35/public_url"
                >
                  <img src="images/terraform.webp" alt="Terraform certified associate" />
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
                  href="https://www.credly.com/badges/ffd934b2-d711-47c5-bdd1-b51ef237cee8/public_url"
                >
                  <img src="images/aws-certified-ai-practitioner.png" alt="AWS certified AI practitioner" />
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
                  href="https://www.credly.com/badges/fbda65fc-e041-44fe-acb2-53a144a6a4fe/public_url"
                >
                  <img src="images/aws-certified-cloud-practitioner.png" alt="AWS certified Cloud practitioner" />
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
