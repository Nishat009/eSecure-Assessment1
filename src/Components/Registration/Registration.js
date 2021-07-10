import React, { useState } from "react";
import icon from "../../images/icon.png";
import "./Registration.css";
const Registration = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [information, setInformation] = useState({
    email: "",
    address: "",
    firstName: "",
    lastName: "",
    district: "",
    userName: "",
    gender: "",
    phoneNumber: "",
    agreed: false,
  });

  const phoneValidation = (phoneNumber) => {
    const isPhoneNumValid = /^(?:\+88|88)?(01[3-9]\d{8})$/.test(phoneNumber);
    return isPhoneNumValid;
  };
  const emailValidation = (email) => {
    const isPhoneEmailValid = /\S+@\S+\.\S+/.test(email);
    return isPhoneEmailValid;
  };

  const handleBlur = (e) => {
    const newInfo = { ...information };
    newInfo[e.target.name] = e.target.value;
    setInformation(newInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !information.address &&
      !information.district &&
      !information.userName &&
      !emailValidation(information.email) &&
      !phoneValidation(information.phoneNumber) &&
      !information.firstName &&
      !information.gender &&
      !information.lastName
    ) {
      setErrorMessage("Enter Your Correct Information");
      return;
    }

    console.log(information);
  };

  return (
    <section className="container-fluid row mx-0 px-0">
      <div className="col-md-12 p-5 pl-5  ">
        <img className="image" src={icon} alt="" />
        <h2 className="text-brand  fw-bolder  text-center">Registration</h2>
        <form
          onSubmit={handleSubmit}
          class="row g-3 text-center mt-5 m-5 rounded container "
        >
          <div className="col-md-6">
            <input
              type="text"
              onBlur={handleBlur}
              name="firstName"
              class="form-control mt-2"
              placeholder="First Name"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              onBlur={handleBlur}
              name="lastName"
              class="form-control mt-2"
              placeholder="Last Name"
              required
            />
          </div>

          <div className="col-md-6">
            <input
              type="email"
              onBlur={handleBlur}
              name="email"
              class="form-control mt-2"
              placeholder="Email Address"
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              onBlur={handleBlur}
              name="phoneNumber"
              class="form-control mt-2"
              placeholder="Phone"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="userName"
              onBlur={handleBlur}
              class="form-control mt-2"
              placeholder="Username"
              required
            />
          </div>

          <div className="col-md-6">
            <input
              type="textArea"
              onBlur={handleBlur}
              name="address"
              class="form-control mt-2"
              placeholder="Address"
              required
            />
          </div>
          <div class="col-md-6">
            <select
              id="inputDistrict"
              class="form-control mt-2"
              placeholder="District"
              required
              name="district"
              onBlur={handleBlur}
            >
              <option>District</option>
              <option>Sirajganj</option>
              <option>Dhaka</option>
              <option>Tangail</option>
              <option>Rajshahi</option>
              <option>Dinajpur</option>
              <option>Bogura</option>
            </select>
          </div>
          <div className="col-md-6 p-2 text-left">
            <label class="form-label">Gender</label>
            <br />
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                onBlur={handleBlur}
                type="radio"
                name="gender"
                id="inlineRadio1"
                value="female"
              />
              <label class="form-check-label" for="inlineRadio1">
                Female
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                onBlur={handleBlur}
                type="radio"
                name="gender"
                id="inlineRadio2"
                value="male"
              />
              <label class="form-check-label" for="inlineRadio2">
                Male
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                onBlur={handleBlur}
                type="radio"
                name="gender"
                id="inlineRadio3"
                value="other"
              />
              <label class="form-check-label" for="inlineRadio3">
                Other
              </label>
            </div>
          </div>
          <div class="row mb-3 ">
            <div class="col-md-12 ml-1">
              <div class="form-check">
                <input
                  onBlur={handleBlur}
                  value="true"
                  name="agreed"
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  I want to receive inspiration , marketing promotion and
                  updates via email.
                </label>
              </div>
            </div>
          </div>

          <div className="col-md-12  align-items-center">
            <input
              type="submit"
              disabled={
                !emailValidation(information.email) ||
                !information.userName ||
                !information.firstName ||
                !phoneValidation(information.phoneNumber) ||
                !information.address ||
                !information.lastName ||
                !information.district ||
                !information.gender
              }
              style={{ backgroundColor: "#DCDCDC" }}
              className="mt-3 btn w-100"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registration;
