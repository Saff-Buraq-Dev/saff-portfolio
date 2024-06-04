import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";
const RecentWorksDefault = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".grid-items", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <Fragment>
      <div className="content works">
        {/* title */}
        <div className="title">Recent Works</div>
        {/* filters */}
        <div className="filter-menu filter-button-group">
          <div
            className={`f_btn ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="grid-item" />
              All
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("photo")}`}
            onClick={handleFilterKeyChange("photo")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="photo" />
              App
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("video")}`}
            onClick={handleFilterKeyChange("video")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="video" />
              Video
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("design")}`}
            onClick={handleFilterKeyChange("design")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="design" />
              Article
            </label>
          </div>
        </div>
        {/* content */}
        <div className="row grid-items border-line-v">
          {/* work item photo */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="images/works/similisnap.png" className="has-popup-image">
                  <img src="images/works/similisnap.png" alt="" />
                  <span className="info">
                    <span className="ion ion-image" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="https://github.com/Saff-Buraq-Dev/similisnap" target="_blank"
                  className="name has-popup-image"
                >
                  SimiliSnap
                </a>
                <div className="category">Serverless Python App</div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="images/works/robomed.png" className="has-popup-image">
                  <img src="images/works/robomed.png" alt="" />
                  <span className="info">
                    <span className="ion ion-image" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="https://github.com/Saff-Buraq-Dev/robomed" target="_blank"
                  className="name has-popup-image"
                >
                  RoboMed
                </a>
                <div className="category">Java / Typescript</div>
              </div>
            </div>
          </div>
          {/* work item video */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://youtu.be/KBrAY7hUTuI?si=F8jT_MfiCxheNlUz"
                  className="has-popup-video"
                >
                  <img src="images/works/youtube.png" alt="" />
                  <span className="info">
                    <span className="ion ion-videocamera" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="https://youtu.be/KBrAY7hUTuI?si=F8jT_MfiCxheNlUz"
                  className="name has-popup-video"
                >
                  Introduction to Cloud Computing
                </a>
                <div className="category">Video</div>
              </div>
            </div>
          </div>
          {/* work item video */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item video border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://youtube.com/shorts/sUF-78aseSQ?si=0jHEmKaQcJtUZrPC"
                  className="has-popup-video"
                >
                  <img src="images/works/aws.jpg" alt="" />
                  <span className="info">
                    <span className="ion ion-videocamera" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a
                  href="https://youtube.com/shorts/sUF-78aseSQ?si=0jHEmKaQcJtUZrPC"
                  className="name has-popup-video"
                >
                  AWS the leading Cloud Provider
                </a>
                <div className="category">Video</div>
              </div>
            </div>
          </div>
          {/* work item design */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="https://blog.gharbidev.com/blog-details/github-actions-iam-roles" target="_blank" className="has-popup-media">
                  <img src="images/works/github-oidc.gif" alt="" />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                </a>
                <div id="popup-3" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/github-oidc.gif" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="https://blog.gharbidev.com/blog-details/github-actions-iam-roles" target="_blank" className="name has-popup-media">
                  Configuring GitHub Actions with OIDC and IAM Roles for Secure, Keyless Access
                </a>
                <div className="category">Blog article</div>
              </div>
            </div>
          </div>
          {/* work item design */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="https://blog.gharbidev.com/blog-details/learning-resources" target="_blank" className="has-popup-media">
                  <img src="images/works/resources.jpeg" alt="" />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                </a>
                <div id="popup-2" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/works/resources.jpeg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="https://blog.gharbidev.com/blog-details/learning-resources" target="_blank" className="name has-popup-media">
                  A Curated List of Resources to Master AWS
                </a>
                <div className="category">Blog article</div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default RecentWorksDefault;
