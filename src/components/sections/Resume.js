import { Fragment } from "react";
const ResumeSection = () => {
  return (
    <Fragment>
      <div className="content resume">
        {/* title */}
        <div className="title">Resume</div>
        {/* content */}
        <div className="row">
          {/* experience */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-briefcase" />
              </div>
              <div className="name">Experience</div>
            </div>
            <div className="resume-items">
              <div className="resume-item border-line-h active">
                <div className="date">2023 - 2024</div>
                <div className="name">Cloud administrator</div>
                <div className="company">Hydro-Québec</div>
                <p>
                  Administered over 300 AWS accounts, ensuring efficient and secure cloud operations.
                </p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">2022 - 2023</div>
                <div className="name">Full Stack Developer</div>
                <div className="company">Onscope</div>
                <p>
                  Led the design, development, and deployment of two main applications integrating Java, Spring Boot, Vue.js, and Python.
                </p>
              </div>
            </div>
          </div>
          {/* education */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-university" />
              </div>
              <div className="name">Education</div>
            </div>
            <div className="resume-items">
              <div className="resume-item border-line-h">
                <div className="date">2020 - 2024</div>
                <div className="name">Université du Québec à Montréal</div>
                <div className="company">Montreal</div>
                <p>
                  {`Bachelor's`} Degree in Computer Science and Software Engineering.
                </p>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default ResumeSection;