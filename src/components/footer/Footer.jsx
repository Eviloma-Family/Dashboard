import React from "react";

function Footer() {
  return (
    <footer className="p-4 mx-8 mt-4 border-t-2 border-secondaryWhite h-16 flex flex-wrap items-center text-white relative bottom-0">
      © 2022 All rights reserved. Made by
      <div className="text-[#5620c0] mx-1">HighError</div> using
      <div className="text-[#61dbfb] mx-1">React</div> and
      <div className="text-[#38bdf8] ml-1">TailwindCSS</div>.
    </footer>
  );
}

export default Footer;
