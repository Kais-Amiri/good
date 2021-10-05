import * as patienActions from "../../actionsTypes/patientActionsTypes/patientActionsTypes";

export const getAllDoctors = () => {
  return {
    type: patienActions.GET_ALL_DOCTORS,
  };
};

export const getAllDoctorsSucced = (payload) => {
  return {
    type: patienActions.GET_ALL_DOCTORS_SUCCED,
    payload,
  };
};

export const getAllDoctorsFailed = (payload) => {
  return {
    type: patienActions.getAllDoctorsFailed,
    payload,
  };
};
