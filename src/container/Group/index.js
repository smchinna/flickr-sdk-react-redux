import React, { Component } from 'react';
import { connect } from 'react-redux';
import Autocomplete from 'react-autocomplete';
import { withRouter } from 'react-router-dom';

import GroupCard from '../../components/GroupCard';

import { CustomInput, GroupWrapper, SearchWrapper, NoData } from './styles';

import { getGroupAction, makeEmptyGallery } from '../../redux/actions'

class Group extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      searchText: ''
    }
    this.timer = ''
  }

  changeSearchText = (e) => {
    this.setState({
      searchText: e.target.value
    })
    this.throttleFunc(this.callSearchAPI, 500)
  }

  callSearchAPI = (setGroupData) => {
    const { getGroupAction } = this.props;
    const { searchText } = this.state;
    getGroupAction({ text: searchText, setGroupData })
  }

  throttleFunc = (callFunc, delay) => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      callFunc()
    }, delay)
  } 

  changeDropDownValue = (value) => {
    this.setState({
      searchText: value
    }, () => {
      this.callSearchAPI('setGroupData');
    })
  } 

  getAutoCompleteUI = () => {
    const { groupAutoFillData } = this.props;
    const { searchText } = this.state;
    return(
      <Autocomplete
        wrapperStyle={{ display: 'block'}}
        getItemValue={(item) => item.name}
        items={groupAutoFillData}
        renderInput={(props) => <CustomInput {...props}/>}
        renderItem={(item, isHighlighted) =>
          <div style={{ background: isHighlighted ? 'lightgray' : 'white', padding: '10px 5px' }}>
            {item.name}
          </div>
        }
        value={searchText}
        onChange={(e) => this.changeSearchText(e)}
        onSelect={(val) => this.changeDropDownValue(val)}
      />
    )
  }

  redirectToGallery = (item) => {
    console.log(item)
    const { history, makeEmptyGallery } = this.props;
    makeEmptyGallery()
    history.push(`/gallery/${item.nsid}`)
  }

  getGroupDetailsUI = () => {
    const { groupData, groupApiCalled } = this.props;
    const { searchText } = this.state;
    if(groupData.length > 0) {
      return groupData.map((item, index) => (
        <GroupCard 
          img={item.iconurls && item.iconurls.default} 
          name={item.name} 
          key={index} 
          redirectToGallery={this.redirectToGallery} 
          item={item}
        />
      ))
    } else if(searchText && searchText.trim() !== '' && groupApiCalled) {
      return <NoData>{`No Group Name Like this ${searchText}, search some other name!!!`}</NoData>
    } else {
      return <></>
    }
  }

  render() {
    return (
      <div>
        <SearchWrapper>
          <div className="searchGroup">
            Search By Group Name
          </div>
          {this.getAutoCompleteUI()}
        </SearchWrapper>
        <GroupWrapper>
          {this.getGroupDetailsUI()}
        </GroupWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  groupAutoFillData: state.group.groupAutoFillData,
  groupData: state.group.groupData,
  groupApiCalled: state.group.groupApiCalled
})

const mapDispatchToProps = (dispatch) => ({
  getGroupAction: (data) => dispatch(getGroupAction(data)),
  makeEmptyGallery: () => dispatch(makeEmptyGallery())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Group));
