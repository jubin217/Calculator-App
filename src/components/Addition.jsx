import React, { useState } from 'react'
import Navbar from './Navbar'

const Addition = () => {




    const [input, setInput] = useState(
        { num1: 0, num2: 0 }
    )
    const Inputhandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const readInput = () => {
        console.log(input)
        let n1 = parseInt(input.num1)
        let n2 = parseInt(input.num2)
        if (isNaN(n1) || isNaN(n2)) {
            alert("Please enter a number")
        }
        else {
            let sum = parseInt(input.num1) + parseInt(input.num2)
            setResult(sum)
        }
    }
    const [result, setResult] = useState(0)

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="card" style={{ marginTop: 100 }}>
                            <div class="card-body">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6col-xxl-6">
                                        <label htmlFor="" className="form-label">Enter first number</label>
                                        <input onChange={Inputhandler} name='num1' value={input.num1} type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6col-xxl-6">
                                        <label htmlFor="" className="form-label">Enter second Number</label>
                                        <input onChange={Inputhandler} name='num2' value={input.num2} type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6col-xxl-6">
                                        <button onClick={readInput} className="btn btn-success">Add</button>
                                    </div>
                                    <div>
                                        <label htmlFor="" className="form-label"><h1>Result is: <b className='text-primary' >{result}</b></h1></label>
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

export default Addition