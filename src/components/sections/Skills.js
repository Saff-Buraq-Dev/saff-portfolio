import { Fragment } from "react";

const Slice = () => (
  <div className="slice">
    <div className="bar" />
    <div className="fill" />
  </div>
);

const Skills = () => {
  return (
    <Fragment>
      <div className="content skills">
        {/* title */}
        <div className="title">My Skills</div>
        {/* content */}
        <div className="row">
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-code" />
                </div>
                <div className="name">Coding</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">Java - Spring Boot</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "95%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Python - Django</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "95%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">TypeScript - React / Vue</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "85%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">SQL</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "85%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-laptop" />
                </div>
                <div className="name">Tools</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">AWS</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "95%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Terraform</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Git - Github</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list circles">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-flag" />
                </div>
                <div className="name">Languages</div>
              </div>
              <ul>
                <li>
                  <div className="name">French</div>
                  <div className="progress p100">
                    <span>100%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">English</div>
                  <div className="progress p90">
                    <span>90%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Arabic</div>
                  <div className="progress p100">
                    <span>100%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-list" />
                </div>
                <div className="name">Soft Skills</div>
              </div>
              <ul>
                <li>
                  <div className="name">Teamwork</div>
                </li>
                <li>
                  <div className="name">Communication</div>
                </li>
                <li>
                  <div className="name">Time management</div>
                </li>
                <li>
                  <div className="name">Continuous learning</div>
                </li>
                <li>
                  <div className="name">Creativity and innovation</div>
                </li>
                <li>
                  <div className="name">Leadership</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default Skills;
