import React, { useState } from 'react'
import Navbar from './Navbar'

const VotingEligibility = () => {


    const [input,setInput]=useState(
        {num:0}
    )
    
    const Inputhandler=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    const readInput=()=>{
        console.log(input)
        let res=''
        if(input.num>=18)
        {
            res='You are Eligible to vote'
        }
        else
        {
            res='You are not Eligible to vote'
        }
        setResult(res)
    }
    const [result,setResult]=useState()

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="card" style={{marginTop:100}}>
                            <div class="card-body">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Enter your Age</label>
                                        <input onChange={Inputhandler} name='num' value={input.num} type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button onClick={readInput} className="btn btn-success">Check</button>
                                    </div>
                                    <div>
                                        <h1><p className='text-primary'>{result}</p></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VotingEligibility