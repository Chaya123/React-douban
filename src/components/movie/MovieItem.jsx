import React from 'react'
export default class  extends React.Component {
    constructor(props) {
        super(props)
        this.state ={}
    }
    render() {
        return <div>
           <img src={this.getImages(this.props.images.small)} alt="" referrerPolicy ="never"/>
           <h4>电影名称:{this.props.title}</h4>
           <h4>上映年份:{this.props.year}</h4>
           <h4>电影类型:{this.props.genres.join(',')}</h4>
        </div>
    }
    getImages = ( _url ) => {
        if( _url !== undefined ){
          let _u = _url.substring( 7 );
          return 'https://images.weserv.nl/?url=' + _u;
        }
      }
}