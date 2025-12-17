import React from "react";

interface LogoProps {
  src?: string;
  alt?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ src = "/logo2.png", alt = "Logo", className = "" }) => (
  <img src={src} alt={alt} className={className} />
);

export default Logo;