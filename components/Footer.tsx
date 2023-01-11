import React from "react";

function Footer() {
  return (
    <footer className="p-4 md:py-8 ">
      <hr className="my-6 border-gray-400 lg:my-8 " />
      <span className="block text-md text-center">
        &copy; {new Date().getFullYear()}{" "}
        <a href="/" className="hover:underline">
          AD Performance Blog
        </a>
      </span>
    </footer>
  );
}

export default Footer;
