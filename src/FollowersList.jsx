import axios from "axios";
import React, { useState, useEffect } from "react";

const FollowersList = () => {
  const [usersList, setUsersList] = useState([]);
  const [userFollowes, setUserFollows] = useState("");
  const [userFollowTo, setUserFollowTo] = useState("");
  const handleChange = (event) => {
    console.log(event.target.value);
    console.log("user id >>>>", event.target.value);

    setUserFollows(event.target.value);
  };
  const handleChangeFollow = (event) => {
    console.log(event.target.value);
    setUserFollowTo(event.target.value);
  };
  function followUser() {
    const url = `https://luck-admin.luckyroofs.com/api/social-users/${userFollowes}`;
    axios({
      method: "put",
      url: url,
      data: {
        data: {
          following: userFollowTo,
        },
      },
      headers: {
        Authorization:
          "Bearer bbae7281ff6b6caa4d1a82ddcab07530c77e47264afbf760f1871e9b7a272763eb6320d72c065901e98f0383594e358ca1c210cf316a2684dd76e5c0b967e0a7f895bab07734fb656853559f189f44772bd3eb738fa1ce353583231ec1c5d7edd619a2afb2b90297e2769309bf7e691107f1431fd3aa74310cee8c46131e5195",
      },
    }).then((response) =>
      dispatchEvent({ type: "INCREMENT", payload: response.data.data })
    );
  }

  function AllUserDetails() {
    const url =
      "https://luck-admin.luckyroofs.com/api/social-users/4?populate=*";
    axios({
      method: "get",
      url: url,
      headers: {
        Authorization:
          "Bearer bbae7281ff6b6caa4d1a82ddcab07530c77e47264afbf760f1871e9b7a272763eb6320d72c065901e98f0383594e358ca1c210cf316a2684dd76e5c0b967e0a7f895bab07734fb656853559f189f44772bd3eb738fa1ce353583231ec1c5d7edd619a2afb2b90297e2769309bf7e691107f1431fd3aa74310cee8c46131e5195",
      },
    })
      .then((response) => response.data)
      .then((data) => {
        console.log("Allist", data.data);
      });
  }

  function userList() {
    console.log("API clled");
    const url = "https://luck-admin.luckyroofs.com/api/social-users?populate=*";
    axios({
      method: "get",
      url: url,
      headers: {
        Authorization:
          "Bearer bbae7281ff6b6caa4d1a82ddcab07530c77e47264afbf760f1871e9b7a272763eb6320d72c065901e98f0383594e358ca1c210cf316a2684dd76e5c0b967e0a7f895bab07734fb656853559f189f44772bd3eb738fa1ce353583231ec1c5d7edd619a2afb2b90297e2769309bf7e691107f1431fd3aa74310cee8c46131e5195",
      },
    })
      .then((response) => response.data)
      .then((data) => {
        console.log("list", data.data);
        setUsersList(data.data);
      });
  }

  useEffect(() => {
    userList();
    AllUserDetails();
  }, []);
  return (
    <div>
      <div className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="card mb-4 p-3">
                <div className="card-body p-4 d-flex flex-row">
                  <div className="form-outline flex-fill mx-2">
                    <label for="sel1" class="form-label">
                      <h4>Select User:</h4>
                    </label>
                    <select
                      class="form-select"
                      onChange={handleChange}
                      name="userlist"
                      id="user-select"
                    >
                      {usersList.map((option, index) => (
                        <option
                          key={index}
                          id={option.id}
                          value={option.id}
                          //   value={option.attributes.firstName}
                        >
                          {option.attributes.firstName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-outline flex-fill mx-2">
                    <label for="sel1" class="form-label">
                      <h4>Following To:</h4>
                    </label>
                    <select
                      class="form-select"
                      onChange={handleChangeFollow}
                      name="userlist"
                      id="user-select"
                    >
                      {usersList.map((option, index) => (
                        <option key={index} value={option.id}>
                          {option.attributes.firstName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn col-3 btn-danger btn-md mx-auto"
                  onClick={followUser}
                >
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="card mb-4 p-3">
                <h1>Create Account</h1>
                {usersList.map((n, index) => (
                  <div className="card-body p-4 d-flex flex-row">
                    <div className="card col-5">
                      <div
                        className="card-horizontal"
                        style={{ display: "flex", flex: "1 1 auto" }}
                      >
                        <div class="img-square-wrapper p-3">
                          <img
                            className=""
                            src="profile.png"
                            alt="Card image cap"
                            style={{ width: "50px" }}
                          />
                        </div>
                        <div className="card-body" style={{ width: "20%" }}>
                          <h4 className="card-title">
                            {usersList[1].attributes.firstName}
                          </h4>
                          <p className="card-text">
                            {usersList[1].attributes.email}
                          </p>
                        </div>
                      </div>
                    </div>
                    ;
                    <div className="col-2 py-3">
                      {usersList[1].attributes.followers.data.map((li) =>
                        li.id === n.id && li.id === n.id ? (
                          <img
                            className=""
                            src="left_to_right.png"
                            alt="Card image cap"
                            style={{ width: "50px" }}
                          />
                        ) : (
                          <p></p>
                        )
                      )}
                      {usersList[1].attributes.following.data.map((li) =>
                        li.id === n.id && li.id === n.id ? (
                          <img
                            className=""
                            src="right_to_left.png"
                            alt="Card image cap"
                            style={{ width: "50px" }}
                          />
                        ) : (
                          <p></p>
                        )
                      )}
                      {usersList[1].attributes.following.length === 0 ? (
                        <p>no data</p>
                      ) : (
                        <p></p>
                      )}
                    </div>
                    <div className="card col-5">
                      <div
                        className="card-horizontal"
                        style={{ display: "flex", flex: "1 1 auto" }}
                      >
                        <div className="img-square-wrapper p-3">
                          <img
                            className=""
                            src="profile.png"
                            alt="Card image cap"
                            style={{ width: "50px" }}
                          />
                        </div>
                        <div className="card-body" style={{ width: "20%" }}>
                          <h4 className="card-title">
                            {n.attributes.firstName}
                          </h4>
                          <p className="card-text">{n.attributes.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowersList;
