import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  function getData() {
    axios
      .get("https://luck-admin.luckyroofs.com/api/social-users?populate=*", {
        headers: {
          Authorization:
            "Bearer bbae7281ff6b6caa4d1a82ddcab07530c77e47264afbf760f1871e9b7a272763eb6320d72c065901e98f0383594e358ca1c210cf316a2684dd76e5c0b967e0a7f895bab07734fb656853559f189f44772bd3eb738fa1ce353583231ec1c5d7edd619a2afb2b90297e2769309bf7e691107f1431fd3aa74310cee8c46131e5195",
        },
      })
      .then((response) =>
        dispatchEvent({ type: "INCREMENT", payload: response.data.data })
      );
  }

  const navigate = useNavigate();
  const [uname, setUname] = useState("");
  const [ulastName, setUlastName] = useState("");
  const [email, setEmail] = useState("");

  function goToFollowScreen() {
    navigate("/followers");
  }
  function submitData() {
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (regEmail.test(email)) {
      console.log("uname", uname, "ulastName", ulastName, "email", email);
      // axios.get('')
      const url = "https://luck-admin.luckyroofs.com/api/social-users";
      axios({
        method: "post",
        url: url,
        data: {
          data: {
            firstName: uname,
            lastName: ulastName,
            email: email,
          },
        },
        headers: {
          Authorization:
            "Bearer bbae7281ff6b6caa4d1a82ddcab07530c77e47264afbf760f1871e9b7a272763eb6320d72c065901e98f0383594e358ca1c210cf316a2684dd76e5c0b967e0a7f895bab07734fb656853559f189f44772bd3eb738fa1ce353583231ec1c5d7edd619a2afb2b90297e2769309bf7e691107f1431fd3aa74310cee8c46131e5195",
        },
      })
        .then((response) => response.data)
        .then((data) => {
          console.log(data);
          dispatch({ type: "USER_DETAIL", payload: data });
          navigate("/followers");
        });
    } else {
      console.log("invalid email");
    }
  }

  return (
    <div>
      <div className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="card mb-4 p-3">
                <h1>Create Account</h1>
                <div className="card-body p-4 d-flex flex-row">
                  <div className="form-outline flex-fill">
                    <input
                      type="text"
                      placeholder="First Name"
                      onChange={(e) => setUname(e.target.value)}
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-outline flex-fill mx-2">
                    <input
                      type="text"
                      placeholder="Last Name"
                      onChange={(e) => setUlastName(e.target.value)}
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-outline flex-fill">
                    <input
                      type="text"
                      placeholder="Email Id"
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={submitData}
                  className="btn col-3 btn-danger btn-md mx-auto mb-3"
                >
                  SUBMIT
                </button>
                <button
                  type="button"
                  onClick={goToFollowScreen}
                  className="btn col-3 btn-danger btn-md mx-auto"
                >
                  Go To Follow List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
