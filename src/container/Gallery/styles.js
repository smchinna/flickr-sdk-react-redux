import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  display: flex;
  margin: 40px 0px;
  flex-wrap: wrap;
  height: calc(100vh - 150px);
  overflow-y: auto;
`;

export const ImageCard = styled.div`
  width: calc(20% - 20px);
  height: 420px;
  color: white;
  font-size: 32px;
  padding: 10px;
  @media(max-width: 1200px) {
    width: calc(25% - 20px);
  }

  @media(max-width: 950px) {
    width: calc(33.3% - 20px);
  }

  @media(max-width: 680px) {
    width: calc(50% - 20px);
  }
  @media(max-width: 450px) {
    width: calc(100% - 20px);
  }
  .box {
    border: 1px solid lightgrey;;
    .info {
      overflow: hidden;
      padding: 10px;
      .title {
        color: #53a5d6;
        font-size: 16px;
        text-align: center;
        text-overflow: ellipsis;
        height: 19px;
        overflow: hidden !important;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        white-space: normal;
        word-wrap: break-word;
        background-color: white;
      }
    }
    .authorDetails {
      overflow: hidden;
      padding: 10px;
      display: flex;
      align-items: center;
      >img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 15px;
      }
      .name {
        color: #53a5d6;
        font-size: 16px;
        text-align: center;
        text-overflow: ellipsis;
        height: 19px;
        overflow: hidden !important;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        white-space: normal;
        word-wrap: break-word;
        background-color: white; 
      }
    }
  }
`;

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const NotFountText = styled.div`
  width: 100%;
  text-align: center;
  font-size: 25px;
`;

export const BackButton = styled.button`
  margin-top: 20px;
  border: none;
  background: white;
  border: 1px solid grey;
  padding: 15px;
  font-size: 14px;
  cursor: pointer;
  :hover {
    background-color: #c1e8dc69;
  }
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;