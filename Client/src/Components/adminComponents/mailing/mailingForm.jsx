import { useState } from "react";
import { useDispatch } from "react-redux";
import { postMailing } from "../../../redux/actions/action";
import "./mailingForm.css";

function MailingForm() {
  const [input, setInput] = useState({
    subject: "",
    message: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(postMailing(input));

    event.target.reset();

    setInput({
      subject: "",
      message: "",
    });
  };

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    console.log(input);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="inputs">
        <div className="divs">
          <label>Asunto:</label>
          <textarea
            name="subject"
            placeholder="Escribe el asunto de tu correo electrónico"
            rows="1"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="divs">
          <label>Mensaje:</label>
          <textarea
            name="message"
            placeholder="Escribe el mensaje del cuerpo de tu correo electrónico"
            rows="4"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="divs">
          <input
            type="submit"
            name="submit"
            value="Enviar"
            className="sendBtn"
          />
        </div>
      </form>
    </div>
  );
}
export default MailingForm;
