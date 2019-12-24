import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { SearchWrapper } from '../Group/styles';
import { GalleryWrapper, ImageCard, FlexBox, NotFountText, 
  BackButton, NotFoundWrapper } from './styles';

import { getGalleryAction } from '../../redux/actions';

class Gallery extends Component {

  componentWillMount() {
    const { history } = this.props;
    let url = history.location.pathname;
    let exactPath = '/gallery';
    if(url === exactPath || url === `${exactPath}/`) {
      this.pushURL('/groups')
    }
  }
  
  componentDidMount() {
    const { history } = this.props;
    let url = history.location.pathname;
    let arr = url.split('/');
    if(arr && arr.length>2 && arr[2]) {
      this.callGalleryAPI();
    } else {
      this.pushURL('/groups');
    }
  }

  fireOnScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if(bottom) {
      const { totalGalleryPage, activeGalleryPage } = this.props;
      if(activeGalleryPage+1 <= totalGalleryPage) {
        this.callGalleryAPI()
      }
    }
  }

  callGalleryAPI = () => {
    const { history } = this.props;
    let url = history.location.pathname;
    let arr = url.split('/');
    const { activeGalleryPage, getGalleryAction } = this.props;
    getGalleryAction(arr[2],activeGalleryPage+1)
  }

  getMasonaryUI = () => {
    const { galleryData } = this.props;
    return(
      <FlexBox ref="galleryRef">
        { (galleryData && galleryData.length > 0) ?
          galleryData.map((obj, i) => {
            return (
              <ImageCard key={i}>
                <div className="box">
                  <div className="info">
                    <div className="title" title={obj.title}>{obj.title}</div>
                  </div>
                  <img src={obj.url_c ? obj.url_c : (obj.url_m ? obj.url_m : '')} alt={obj.title} style={{ width: '100%', height: '300px'}}/>
                  <div className="authorDetails">
                    <img src={(obj.iconurls && obj.iconurls.default) ? obj.iconurls.default : ''} alt="user"/>
                    <div className="name" title={obj.ownername}>{obj.ownername}</div>
                  </div>
                </div>
              </ImageCard>
            )}
          )
          :
          this.notFoundUI('No photo available')
        }
      </FlexBox>
    )
  }

  pushURL = (url) => {
    const { history } = this.props;
    history.push(url)
  }

  notFoundUI = (text) => {
    return (
      <NotFoundWrapper>
        <NotFountText>
          {text}
        </NotFountText>
        <BackButton onClick={() => this.pushURL('/groups')}>
          Go back to Group page
        </BackButton>
      </NotFoundWrapper>
    )
  }

  render() {
    const { groupNotFound, galleryAPICalled } = this.props;
    return ( 
      <div>
        <SearchWrapper>
          <div className="searchGroup">
            Gallery View
          </div>
        </SearchWrapper>
        { galleryAPICalled 
          ?
          <GalleryWrapper onScroll={(e) => this.fireOnScroll(e)}>
            {groupNotFound ? this.notFoundUI('Group Not Found') : this.getMasonaryUI()}
          </GalleryWrapper>
          :
          <NotFoundWrapper>Loading</NotFoundWrapper>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  galleryData: state.group.galleryData,
  totalGalleryPage: state.group.totalGalleryPage,
  totalPhotos: state.group.totalPhotos,
  activeGalleryPage: state.group.activeGalleryPage,
  groupNotFound: state.group.groupNotFound,
  galleryAPICalled: state.group.galleryAPICalled
})

const mapDispatchToProps = (dispatch) => ({
  getGalleryAction: (id, page) => dispatch(getGalleryAction(id, page))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Gallery))