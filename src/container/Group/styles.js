import styled from "styled-components";

export const CustomInput = styled.input`
  height: 34px;
  padding: 0px 25px;
  font-size: 16px;
  width: 300px;
`;

export const GroupWrapper = styled.div`
  display: flex;
  padding: 0px 20px;
  margin: 40px 0px;
  flex-wrap: wrap;
`;

export const SearchWrapper = styled.div`
  padding-top: 40px;
  >div {
    display: flex !important;
    justify-content: center;
  }
  .searchGroup {
    margin-bottom: 10px;
    color: #1c736b;
    font-size: 18px;
  }
`;

export const NoData = styled.div`
  width: 100%;
  text-align: center;
  color: red;
`;