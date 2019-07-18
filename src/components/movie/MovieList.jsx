import React from 'react'
import { Spin, Alert } from 'antd';
import fetchJSONP from 'fetch-jsonp'
import MovieItem from './MovieItem.jsx'

export default class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            movies: [],
            nowPage: parseInt(props.match.params.page) || 1,
            pageSize: 14, //每页显示条数
            total: 0, //当前电影分类下，总共有多少条数据
            isloading: true,
            movieType: props.match.params.type
        }
    }

    componentWillMount() {
        this.loadMovieListByTypeAndPage()
    }
      
    loadMovieListByTypeAndPage = () => {

        const start = this.state.pageSize*(this.state.nowPage-1)
        //``模板字符串
        const url = `https://api.douban.com/v2/movie/${this.state.movieType}?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${start}&count=${this.state.pageSize}`
        fetchJSONP(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                isloading: false,
                movies: data.subjects,
                total: data.total
            })
        })
    }
    render() {
        return <div>
            {this.renderList()}  
        </div>
    }
    renderList =() => {
        if(this.state.isloading) {
            return <Spin tip="Loading...">
            <Alert
            message="正在请求电影列表"
            description="精彩内容马上呈现."
            type="info"
            />
          </Spin>
        } else {
            return <div>
                {this.state.movies.map(item => {
                    return <MovieItem {...item} key={item.id}></MovieItem>
                })}
            </div>
        }
    }
}