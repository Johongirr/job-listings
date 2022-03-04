import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";
import TagItem from "../TagItem/TagItem";

const TagCard = styled.div`
  position: relative;
  border-radius: 5px;
  top: 125px;
  box-shadow: 3px 6px 20px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 30px;
  display: flex;
  z-index: 1;
  align-items: center;

  justify-content: space-between;
`;
const TagBox = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  flex-wrap: wrap;
  row-gap: 10px;
`;
const TagBtn = styled.button`
  border: 0;
  border-bottom: 2px solid hsl(180, 29%, 50%);
  color: hsl(180, 29%, 50%);
  background-color: transparent;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
`;

function TagsList({ tags, clearTags, removeTag }) {
  // const [cardHeight, setCardHeight] = useState(83);
  // const el = useRef();
  // useEffect(() => {
  //   el.current.style.top = `${125 - (el.current.clientHeight - cardHeight)}px`;
  //   setCardHeight(el.current.clientHeight);
  // }, [tags]);
  console.log(tags);
  return (
    <TagCard>
      <TagBox>
        {tags?.map((tag) => (
          <TagItem tag={tag} key={tag} removeTag={removeTag} />
        ))}
      </TagBox>
      <TagBtn onClick={() => clearTags()}>Clear</TagBtn>
    </TagCard>
  );
}

export default TagsList;
