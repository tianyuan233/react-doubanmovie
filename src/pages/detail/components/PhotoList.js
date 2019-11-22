import React, { Component } from 'react'
import { Carousel } from 'antd'
const IMG_PROXY = '//images.weserv.nl/?url='

class PhotoList extends Component {
  render() {
    const { photos } = this.props
    return (
        <Carousel autoplay>
          {photos.map(photo => {
            return (
              <div key={photo.id}>
                <img alt='' src={IMG_PROXY + photo.medium} style={{width:'80%',margin:'0 auto'}}/>
              </div>
            )
          })}
        </Carousel>
    )
  }
}
export default PhotoList
