import { socialImgs } from "../constants";

const Footer = function () {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a href="/">Visit my blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((social) => (
            <a
              className="icon"
              target="_blank"
              href={social.url}
              key={social.url}
            >
              <img src={social.imgPath} alt="" />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            &copy; {new Date().getFullYear()} Adrian | JS Mastery All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
