import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 25%;
  @media(max-width: 1200px) {
    width: 33%
  }
  @media(max-width: 900px) {
    width: 50%;
  }
  @media(max-width: 600px) {
    width: 100%;
  }
`;

const Box = styled.div`
  padding: 7px;
  width: calc(100% - 14px);
`;

const ImageBox = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const ImgCircle = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid #03A9F4;
  padding: 3px;
`;

const ContentBox = styled.div`
  display: flex;
  padding: 10px 15px;
  width: calc(100% - 30px);
  border: 1px solid grey;
  cursor: pointer;
  :hover {
    background-color: #c1e8dc69;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 100px);
  overflow: hidden;
  .name {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .start {
    font-size: 12px;
    margin: 7px 0px;
    color: grey;
  }
  .flex {
    display: flex;
    .people {
      margin-right: 10px;
      margin-top: 5px;  
    }
  }
`;


class GroupCard extends Component {
  render() {
    const { img, name, redirectToGallery, item } = this.props;
    return (
      <Wrapper>
        <Box>
          <ContentBox onClick={() => redirectToGallery(item)}>
            <ImageBox>
              <ImgCircle src={img} alt={name}/>
            </ImageBox>
            <Flex>
              <div className="name" title={name}>
                {name}
              </div>
              <div className="flex">
                <div className="people">
                  <div className="start">Members</div>
                    <div>{item.members}</div>
                </div>
                <div className="people">
                  <div className="start">Photos</div>
                    <div>{item.pool_count}</div>
                </div>
              </div>
              <div className="flex">
                {/* <div className="people">12</div>
                <div className="gallery">12</div> */}
              </div>
            </Flex>
          </ContentBox>
        </Box>
      </Wrapper>
    )
  }
}

export default GroupCard;
