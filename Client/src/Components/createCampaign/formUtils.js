// formUtils.js
import {validateCampaign} from "./validateCampaign"
export function handleSubmit(info, dispatch, postCampaign) {
    const formattedEndDate = `${info.endDate.year}-${info.endDate.month}-${info.endDate.day}`;
    const formattedInfo = {
      ...info,
      endDate: formattedEndDate,
    };
  
    dispatch(postCampaign(formattedInfo));
  }
  
  export function handleChange(info, setInfo, setErrors, e) {
    let updatedInfo;
  
    if (e.target.name === "day" || e.target.name === "month" || e.target.name === "year") {
      updatedInfo = {
        ...info,
        endDate: {
          ...info.endDate,
          [e.target.name]: e.target.value,
        },
      };
    } else {
      updatedInfo = {
        ...info,
        [e.target.name]: e.target.value,
      };
    }
  
    setInfo(updatedInfo);
    setErrors(validateCampaign(updatedInfo));
  }
  
  export function disableFunction(errors) {
    for (let err in errors) {
      if (errors[err] !== "") {
        return true;
      }
    }
    return false;
  }
  