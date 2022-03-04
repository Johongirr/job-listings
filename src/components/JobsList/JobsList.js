import React from "react";
import JobItem from "../JobItem/JobItem";
import styled from "styled-components";

function JobsList({ jobs, updateTags, tags }) {
  const jobsList = tags.length
    ? jobs.filter((job) => {
        const types = [job.role, job.level, ...job.languages, ...job.tools];
        console.log(types, tags);
        return tags.some((tag) => types.includes(tag));
      })
    : jobs;
  console.log(jobsList);
  return jobsList?.map((job) => (
    <JobItem key={job.id} job={job} updateTags={updateTags} />
  ));
}

export default JobsList;
