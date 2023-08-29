import axios from "axios";

export const loginFun = async (email, password) => {
  return await axios.post("http://localhost:5000/login", {
    emailId: email,
    password: password,
  });
};

export const fetchDocterList = async () => {
  let token = sessionStorage.getItem("jwt");
  return await axios.get("http://localhost:5000/doctorList", {
    headers: {
      Authorization: `${token}`,
    },
  });
};

export const registrationFun = async (
  fullName,
  address,
  mobileNo,
  emailId,
  password
) => {
  console.log(address);
  return await axios.post("http://localhost:5000/signup", {
    fullName,
    address,
    mobileNo,
    emailId,
    password,
  });
};

export const fetchDocterProfile = async (id) => {
  return await axios.get(`http://localhost:5000/docterProfile/${id}`);
};
