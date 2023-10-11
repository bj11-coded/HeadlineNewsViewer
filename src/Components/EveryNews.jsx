import React, { Component } from 'react'
import New from '../Components/New'


export default class EveryNews extends Component {

    constructor() {
        super();
        this.state = {
          newsList: [],
          loading: false,
          page:1
        };
      }

      // async updatedData () {
      //   let url =
      //   `https://newsapi.org/v2/everything?q=apple&from=2023-06-05&to=2023-06-05&sortBy=popularity&apiKey=c25c45f5a758475c8ff797da3b521a4e&page=${this.state.page}`;
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // this.setState({ newsList: parsedData.articles });
      // this.state = {
      //     page: this.state.page + 1,
      //     newsList : parsedData.articles
      // }
      // }

      async componentDidMount() {
        let url =
          "https://newsapi.org/v2/everything?q=tesla&from=2023-06-24&sortBy=publishedAt&apiKey=c25c45f5a758475c8ff797da3b521a4e";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ newsList: parsedData.articles });
        console.log(this.setState({newsList: parsedData.articles}));
      }

      handelNextClick = async()=>{
        let url =
              `https://newsapi.org/v2/everything?q=apple&from=2023-06-05&to=2023-06-05&sortBy=popularity&apiKey=c25c45f5a758475c8ff797da3b521a4e&page=${this.state.page + 1 }`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({ newsList: parsedData.articles });
            this.state = {
                page: this.state.page + 1,
                newsList : parsedData.articles
            }

      // this.state.page + 1;
      // this.updatedData
      }

      handlePrevClick = async()=>{
         let url =
              `https://newsapi.org/v2/everything?q=apple&from=2023-06-05&to=2023-06-05&sortBy=popularity&apiKey=c25c45f5a758475c8ff797da3b521a4e&page=${this.state.page - 1 }`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({ newsList: parsedData.articles });
        this.state = {
            page: this.state.page - 1,
            newsList : parsedData.articles
        }
      // this.state.page - 1;
      // this.updatedData
      }



  render() {
    const line ={
        height:'5px',
        color:'#EA5455'
    }   
    return (
      <>
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-md-12">
                    <h2 className='float-right'> Today's News <hr className='line' style={line}/></h2>
                </div>
            </div>        
            
            <div className="row">
            {this.state.newsList.map((element)=>{
                    return <div className="col-md-4 mb-3 col-sm-12" key={element.url}>
                    <New
                        title={element.title ? element.title.slice(0, 40) : ""}
                        description={element.description ? element.description : ""}
                        img={element.urlToImage}
                        link={element.url}
                        publishedAt = {element.publishedAt}
                    />                
                </div>  
                })}
                <div className="row">
                    <div className="col-md-6 ">
                         <button className="btn btn-outline-primary " disabled={this.state.page<=1} onClick={this.handlePrevClick} style={{float:'right' }}> &larr;  Prev</button>
                    </div>
                   <div className="col-md-6">
                        <button className="btn btn-outline-primary" onClick={this.handelNextClick} style={{float:'left'}}> Next  &rarr;</button>
                   </div>
                    
                </div>
            </div>
        </div>
      </>
    )
  }
}

