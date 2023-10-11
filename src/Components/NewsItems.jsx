import React, { Component } from 'react'

export default class NewsItems extends Component {

    render() {

        let { title, description , imgUrl, detailLink, publishedAt} = this.props

        const myStyle = {
            width: '400px',
            height: '450px',
            backgroundColor:'#eee'
        }   
        return (
            <>
                <div className="row">
                    <div className="card" style={myStyle}>
                        <div className="card-body">
                            <img className='text-center' src={imgUrl} alt="img" style={{maxHeight:'150px'}} />
                            <h5 className="card-tit le mt-2 mb-3" > <strong className='title' style={{minHight:'150px', maxHeight:'150px'}}>{title}...</strong></h5>
                            <p className="card-text mt-2" style={{ maxHeight:'100px', overflow:'hidden'}}>{description}</p>
                            <p className='card-text'> <small className='text-muted'> {publishedAt} </small></p>
                            <a href={detailLink}><button className='btn btn-sm' style={{ backgroundColor: '#EA5455', color: '#fff' }}  detailLink> Details</button>
                        </a>
                        </div>
                    </div>
                </div>                  
            </>
        )
    }
}
