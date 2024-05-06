const ContactInfo = () => {
  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">Get in Touch</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.4119440289905!2d-73.6520635239001!3d45.5420380710753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc918e600907e77%3A0x27d06033ba7463ee!2s9130%20Rue%20Saint-Urbain%2C%20Montr%C3%A9al%2C%20QC%20H2N%201S7%2C%20Canada!5e0!3m2!1sen!2sbd!4v1715032681310!5m2!1sen!2sbd"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <div className="info-list">
            <ul>
              <li>
                <strong>Phone . . . . .</strong> +514 713 0322
              </li>

              <li>
                <strong>Email </strong> sgharbi@gharbidev.com
              </li>
              <li>
                <strong>Work . . . . .</strong> Available
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default ContactInfo;
