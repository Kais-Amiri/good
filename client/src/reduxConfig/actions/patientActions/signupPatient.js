import * as patientActions from "../../actionsTypes/patientActionsTypes/patientActionsTypes";

export const signupPatient = () => {
  return {
    type: patientActions.PATIENT_SIGNUP,
  };
};

export const signupPatientSucced = (payload) => {
  return {
    type: patientActions.PATIENT_SIGNUP_SUCCED,
    payload,
  };
};

export const signupPatientFailed = (payload) => {
  return {
    type: patientActions.PATIENT_SIGNUP_FAILED,
    payload,
  };
};
