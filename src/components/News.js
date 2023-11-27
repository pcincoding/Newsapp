import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 5,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }
    async updateNews() {
        this.props.setProgress(0);
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=018ff9a325424ef89e1ffe96e470bc4d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(50);
        let parsedData = await data.json();
        this.props.setProgress(75);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
        this.props.setProgress(100);
    };
    async componentDidMount() {
        this.updateNews();
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=018ff9a325424ef89e1ffe96e470bc4d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false });

    }
    capitalizeLetter=(string)=>{
        return string.charAt(0).toUpperCase()+ string.slice(1);
    }
    render(props) {
        return (
            <> 
            <h1 className='text-center' style={{ margin: '20px' }}>NewsParrot - Top {this.capitalizeLetter(this.props.category)} HeadLines</h1>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row my-3">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4 my-3" key={element.url}>
                                    <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>

                </InfiniteScroll>

            </>
        )
    }
}

export default News