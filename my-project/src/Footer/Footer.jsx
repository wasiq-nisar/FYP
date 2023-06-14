import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-black mx-3 flex w-full">
        <div className="c1 w-1/5">
          <h1 className="text-bold text-2xl">MY LOGO</h1>
          <div className="flex gap-3">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
        <div className="c2 w-1/5">
          <ul>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
        <div className="c3 w-1/5">
          <ul>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
        <div className="c4 w-2/5">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=pucit old campus&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <a href="https://capcuttemplate.org/">Capcut Templates</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
