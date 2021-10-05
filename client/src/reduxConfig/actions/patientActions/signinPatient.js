import * as patientActions from "../../actionsTypes/patientActionsTypes/patientActionsTypes";

export const signinPatient = () => {
  return {
    type: patientActions.PATIENT_SIGNIN,
  };
};

export const signinPatientSucced = (payload) => {
  return {
    type: patientActions.PATIENT_SIGNIN_SUCCED,
    payload,
  };
};

export const signupPatientFailed = () => {
  return {
    type: patientActions.PATIENT_SIGNIN_FAILED,
    payload,
  };
};
