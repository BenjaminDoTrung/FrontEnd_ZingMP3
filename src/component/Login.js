import {Field, Form, Formik} from "formik";
import axios from "axios";
import '../modalCss.css'
import Swal from 'sweetalert2';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
    let navigate = useNavigate();
    // let {user, setUser} = useState({})
    // const handleCreate = async (values) => {
    //     try {
    //         setUser =  await axios.post("http://localhost:8080/users/login", values)
    //         await Swal.fire({
    //             title: 'DNTC!',
    //             icon: 'success',
    //             timer: 1000, // Thời gian hiển thị thông báo (miligiây)
    //             showConfirmButton: false // Ẩn nút xác nhận
    //         })
    //
    //     } catch (error) {
    //         console.error('Lỗi khi tạo mới sản phẩm:', error);
    //         await Swal.fire('Đã xảy ra lỗi!', 'Vui lòng thử lại sau.', 'error');
    //     }
    // };
    return (
        <>
            <Formik initialValues={{
                userName: "",
                password: ""
            }}
                    enableReinitialize={true}
                    onSubmit={(values) => {
                        console.log(values)
                axios.post("http://localhost:8080/users/login", values).then((res)=>{
                    console.log("aaaaaa")
                    console.log(res)
                    // document.getElementById("modal").style.display = "none";
                    toast.success("Đăng nhập thành công", {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        className: "foo-bar",
                    })
                }).catch(()=>{
                    toast.success('Đăng nhập thất bại')
                })
            }}>
                <Form>
                    <div className="modal" id="modal">
                        <div className="modal_overlay">
                        </div>
                        <div className="modal_body">
                            <div className="modal_inner">
                                <div className="auth_form">
                                    <div className="auth_form_header">
                                        <div style={{textAlign: "center", marginTop: 70}}>
                                               <div className="mb-3" style={{textAlign: "center"}}>
                                                   <label htmlFor="userName" className="form-label" style={{marginTop: 20}}>User name</label>
                                                   <Field style={{width: 400, marginLeft: 50}} name={'userName'}
                                                          type="text"
                                                          className="form-control" id="userName"
                                                          aria-describedby="emailHelp"></Field>
                                               </div>
                                               <div className="mb-3" style={{textAlign: "center"}}>
                                                   <label htmlFor="password" className="form-label">Password</label>
                                                   <Field style={{width: 400, marginLeft: 50}} name={'password'}
                                                          type="text"
                                                          className="form-control" id="password"
                                                          aria-describedby="emailHelp"></Field>
                                               </div>
                                              <div style={{display: "flex",marginLeft:100}}>
                                                  <div>
                                                      <button onClick={()=>{
                                                          navigate('/')
                                                      }} className="btn btn-primary" style={{width: 100}}>Back</button>
                                                  </div>
                                                  <div>
                                                      <button onClick={()=>{
                                                          navigate('/register')
                                                      }} className="btn btn-primary" style={{width: 100}}>Register</button>
                                                  </div>
                                                  <div>
                                                      <button className="btn btn-primary" style={{width: 100}}>Login</button>

                                                  </div>
                                              </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}
