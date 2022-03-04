import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import BgDesktopImg from "./images/bg-header-desktop.svg";
import BgMobileImg from "./images/bg-header-mobile.svg";
import JobsList from "./components/JobsList/JobsList";
import TagsList from "./components/TagsList/TagsList";

const AppBox = styled.div`
  background-image: url(${BgDesktopImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: hsl(180, 29%, 50%);
  height: 170px;
`;
const Main = styled.main`
  background: hsl(180, 52%, 96%);
  font-family: Spartan, "Helvetica Neue", "Helvetica", sans-serif;
  line-height: 1.6;
`;
const Wrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  ${(props) =>
    props.marginTop &&
    css`
      margin-top: 100px;
    `}
`;

function App() {
  const [jobs, setJobs] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await fetch("/data.json");
        const jobs = await response.json();
        setJobs(jobs);
      } catch (err) {
        console.log(err.message);
      }
    };
    getJobs();
  }, []);
  const updateTags = (userTag) => {
    const isTagExist = tags.some((tag) => tag === userTag);
    if (!isTagExist) {
      setTags([...tags, userTag]);
    }
    console.log(isTagExist);
  };
  const clearTags = () => {
    setTags([]);
  };
  const removeTag = (userTag) => {
    setTags(tags.filter((tag) => tag !== userTag));
  };
  console.log(tags);
  return (
    <Main className="app">
      <AppBox className="app__box">
        <Wrapper>
          <TagsList removeTag={removeTag} tags={tags} clearTags={clearTags} />
        </Wrapper>
      </AppBox>
      <Wrapper marginTop="100px">
        <JobsList updateTags={updateTags} jobs={jobs} tags={tags} />
      </Wrapper>
    </Main>
  );
}

export default App;

/**
 *  Components
 *
 *  App
 *    TagsList
 *       TagItem
 *    JobsList
 *        JobItem
 *            Button
 *
 */
