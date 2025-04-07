import { FaUser, FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  return (
    <li className={s.contact}>
      <div>
        <p>
          <FaUser />
          <span>{name}</span>
        </p>
        <p>
          <FaPhoneAlt />
          <span>{number}</span>
        </p>
      </div>
      <button>Delete</button>
    </li>
  );
};

export default Contact;
