import React from 'react'
import styled from 'styled-components';


const StyledKeyPoints = styled.section`
.project-keypoints-wrapper{
  margin: 0.5rem 2rem  0 3rem;
  display: flex;
  gap: 1rem;
}
.project-keypoints{
  margin: 0.5rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 2.2rem;
  font-weight: normal;
  text-align: left;
  span{
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textPrimary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  }
}
`;


const KeyPoints = ({ keyPoints }) => {
  return (
    <StyledKeyPoints>
      <div className='max-width'>
        {keyPoints?.map((keyPoint, index) => {
          return (
            <div className='project-keypoints-wrapper'>
            {"-"}
            <div
            className="project-keypoints"
            dangerouslySetInnerHTML={{ __html: keyPoint }}
          ></div>
          </div>);
        })}
      </div>
    </StyledKeyPoints>
  )
}

export default KeyPoints;
