import React from "react";
import styled, { css } from "styled-components";
import Button from "../Button/Button";

const Card = styled.div`
  box-shadow: 3px 6px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: white;
  margin-bottom: 30px;
  padding: 30px;
  ${(props) =>
    props.featured &&
    props.new &&
    css`
      border-left: 7px solid hsl(180, 29%, 50%);
    `}
`;
const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardContent = styled.div`
  margin-left: 15px;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
`;

const CardTitle = styled.h1``;

const CardAction = styled.div``;
const CardList = styled.footer`
  display: flex;
`;

function JobItem({ job, updateTags }) {
  return (
    <Card className="card" featured={job.featured} new={job.new}>
      <CardBox className="card__container">
        <CardBox className="card__box">
          <img
            className="card__img"
            src={job.logo}
            alt={`logo of the ${job.company} company `}
          />
          <CardContent className="card__text-box">
            <Box>
              <p className="card__company-name">{job.company}</p>
              {job.new && <p className="card__new-job">NEW!</p>}
              {job.featured && <p className="card__featured">FEATURED</p>}
            </Box>
            <CardTitle className="card__title">{job.position}</CardTitle>
            <CardList className="card__list">
              <li className="card__item">
                <span className="card__job-details card__job-post-date">
                  {job.postedAt}
                </span>
              </li>

              <li className="card__item">
                <span className="card__job-details card__job-type">
                  {job.contract}
                </span>
              </li>
              <li className="card__item">
                <span className="card__job-details card__job-location">
                  {job.location}
                </span>
              </li>
            </CardList>
          </CardContent>
        </CardBox>
        <CardAction className="card__btn-box">
          <Button updateTags={updateTags}>{job.role}</Button>
          <Button updateTags={updateTags}>{job.level}</Button>
          {job?.languages?.map((language, i) => (
            <Button key={i} updateTags={updateTags}>
              {language}
            </Button>
          ))}
          {job?.tools?.map((tool, i) => (
            <Button key={i} updateTags={updateTags}>
              {tool}
            </Button>
          ))}
        </CardAction>
      </CardBox>
    </Card>
  );
}

export default JobItem;
