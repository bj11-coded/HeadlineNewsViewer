import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class New extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {

    let { title, description , img, link, publishedAt} = this.props

    const myStyle = {
        width: '400px',
        height: '450px',
        backgroundColor:'#eee'
    }
    return (
        <>
            <div className="row">
                <div className="card" style={myStyle}>
                    <div className="card-body" >
                        <img className='text-center' src={!img?'https://c.ndtvimg.com/2021-11/o66r0bb8_ms-dhoni-ipl_625x300_20_November_21.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605':img} alt="img" style={{maxHeight:'150px'}} />
                        <h5 className="card-title mt-2 mb-3" > <strong className='title' style={{minHight:'150px', maxHeight:'150px'}}>{title}...</strong></h5>
                        <p className="card-text mt-2" style={{ maxHeight:'100px', overflow:'hidden'}}>{description}</p>
                        <p className='card-text'> <small className='text-muted'> {publishedAt} </small></p>
                        <a href={link} target='_blank' rel='noreferrer'><button className='btn btn-sm' style={{ backgroundColor: '#EA5455', color: '#fff' }}> Details</button>
                    </a>
                    </div>

                </div> 
            </div>                  
        </>
    )
}
}
