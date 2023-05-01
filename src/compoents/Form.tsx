import React from 'react'

const Form = () => {
    return (
        <div>
            <div className="card card-body">
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="">Name</label>
                        <input type="text" className="form-control form-control-sm" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Email</label>
                        <input type="text" className="form-control form-control-sm" />
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary btn-lg">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form