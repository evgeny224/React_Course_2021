import React, { useEffect, useState } from "react";
import PageWrapper from "../../Components/Common/PageWrapper";
import MainContent from "../../Components/MainContent";

const MainPage: React.FC = () => {
  const [contentVisibility, setContentVisibility] = useState(false);
  //   const [stateSecond, setStateSecond] = useState(0);
  console.log("manin page container mount");
  useEffect(() => {
    console.log("manin page container mount");
  }, []);

  //   useEffect(() => {
  //     console.log(`stateSecond=${stateSecond}`);
  //   }, [stateSecond]);

  return (
    <PageWrapper>
      {contentVisibility && <MainContent />}
      <button
        type="button"
        onClick={() => setContentVisibility((prev) => !prev)}>
        {contentVisibility ? "Скыть текст" : "Показать текст"}
      </button>
      {/* <button type="button" onClick={() => setStateSecond((prev) => prev + 1)}>
        UPDATE SECOND BUTTON
      </button> */}
    </PageWrapper>
  );
};
export default MainPage;
