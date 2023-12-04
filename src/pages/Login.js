import React from 'react';

const Login = () => {
    return (
        <>
            <div>
                <div className="row">
                    <div className="offset-4 col-6">
                        <form>
                            <div className="mb-3" style={{width: 500}}>
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            </div>
                            <div className="mb-3" style={{width: 500}}>
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"></input>
                            </div>
                            <div style={{width: 500, textAlign: "center"}}>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;