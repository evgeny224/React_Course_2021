import React, { useEffect } from "react";

const MainContent: React.FC = () => {
  const handler = () => {
    console.log("Click!");
  };
  useEffect(() => {
    console.log("main content mount");
    document.body.addEventListener("click", handler);
    return () => {
      document.body.removeEventListener("click", handler);
      console.log("main content unmount!");
    };
  }, []);
  return (
    <div>
      <h1>Main Page Content </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        consequuntur tempora sint alias, molestiae assumenda molestias
        repudiandae. Perspiciatis aliquam magnam, porro illo explicabo
        architecto consectetur, odit, vero at debitis assumenda.
      </p>
    </div>
  );
};

export default MainContent;
