import React from "react";

import {
  TiSocialPinterestCircular,
  TiSocialYoutube,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialFacebook,
  } from "react-icons/ti";


  import { FooterICON } from "./index";
  const Footer = () => { 
    const social = [
      {
  link: "#",
  name: "Facebook",
  icon: <TiSocialFacebook />,
  },
  {
    link: "#",
    name: "Facebook",
    icon: <TiSocialFacebook />,
    },
    {
      link: "#",
      name: "Facebook",
      icon: <TiSocialFacebook />,
      },
      {
        link: "#",
        name: "Facebook",
        icon: <TiSocialFacebook />,
        },
        {
          link: "#",
          name: "Facebook",
          icon: <TiSocialFacebook />,
          },
];
  
return (
  <footer className="footer" id="site-footer">
  <canvas id="can"></canvas> <div className="container"> <div className="row">
  <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12
  col-sm-offset-0 col-xs-12">
  <div className="widget w-info">
  <a href="/" className="site-logo"> -------<img src="img/logo-primary.png" alt="" />
  <FooterICON />
  </a>
  <p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, l
aboriosam? Voluptas excepturi, libero u
nde ipsum
 laudantium odit dolo
rem consequatur, recusandae maxime ut quas veritati
s rerum. Voluptates magni necessitatibus quam dolores?


  </p>
  </div>
  
  
<div className="widget w-contacts"> 
<ul className="socials
socials--white">
{social.map((social, index) => (
<li key={index}
className="social-item">
<a href={social.link}
className="woox-icon">
{social.icon}
</a>
</li>
))}
</ul>
</div>
I
  </div>
  </div>
  </div>
  
<div className="sub-footer"> <div className="container">
<div className="row">
-...-<div
className="col-lg-6
col-lg-offset-3 col-md-6
col-md-offset-3 col-sm-12
col-sm-offset-0 col-xs-12">
<span>@ All right reserved 2024</span>
<span>
<a href="/">The Woox</a> - ICO and
cryptocurrency web 3
</span>


</div>
</div>
</div>
</div>
  </footer>
)};
  export default Footer;
