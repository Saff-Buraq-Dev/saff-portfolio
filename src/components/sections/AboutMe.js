import { Fragment } from "react";
const bio_ = `<p>
<strong>Hello! I’m Safouene Gharbi.</strong>
Aspiring Cloud Developer with a demonstrated history of designing and deploying dynamically scalable, highly available, fault-tolerant, and reliable full-stack applications on AWS. Proficient in Docker containers, DevOps practices, Java, Python, Typescript, Software as a Service (SaaS), Microservices, and CI/CD pipelines.
</p>`;
const AboutMe = ({ bio }) => {
  return (
    <Fragment>
      <div className="content about">
        {/* title */}
        <div className="title">
          <span className="first-word">About</span> Me
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div
              className="text-box"
              dangerouslySetInnerHTML={{ __html: bio ? bio : bio_ }}
            ></div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default AboutMe;