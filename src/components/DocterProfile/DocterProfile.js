import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import docterpic from "../../assets/d2.jpg";
import classes from "../DocterProfile/DocterProfile.module.css";
import { fetchDocterProfile } from "../loginService";

const DocterProfile = () => {
  const [docter, setDocter] = useState();
  const params = useParams();
  const docterId = params.id;
  console.log(docter);
  const fetchProfile = async () => {
    try {
      let fetchDocter = await fetchDocterProfile(docterId);
      console.log(fetchDocter);
      if (fetchDocter.status === 200) {
        setDocter(fetchDocter.data);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [docterId]);

  return (
    <div>
      {docter && (
        <div
          className={`container card  ${classes["profile-container"]}  mt-5 `}
        >
          <div>
            <img
              src={docter.image}
              alt="Docterpic"
              className={classes.cardImg}
            />
          </div>
          <div className={classes.profileInfo}>
            <h2 className={classes.name}>{docter.name}</h2>
            <div>{docter.education}</div>
            <div className={classes.speciality}>{docter.specialty}</div>
            <div>{docter.experience}</div>
            <div className={classes.address}>{docter.address}</div>
            <div>{docter.info}</div>
            <button className={`mt-4 ${classes["button"]}`}>
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocterProfile;
