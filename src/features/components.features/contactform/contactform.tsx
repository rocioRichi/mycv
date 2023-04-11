import { SyntheticEvent, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InfoCompany } from "../../../models/infoCompany";
import { useUsers } from "../../hooks.features/use.users";
import { UsersRepo } from "../../repo.features/users.repo/users.repo";
import "./register.form.css";

export default function Contact() {
  const repo = useMemo(() => new UsersRepo(), []);
  const { userRegister } = useUsers(repo);
  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = event.currentTarget as HTMLFormElement;
    const inputs = formData.querySelectorAll("input");

    const newCompany: InfoCompany = {
      email: inputs[0].value,
      company: inputs[1].value,
      attention: inputs[2].value,


    userCompany(newCompany);

    formData.reset();
  };

  return (
    <>

      <form onSubmit={handleSubmit} className="registerform">
        <label className="registerlabel">
          <input
            type="text"
            className="registerform-input"
            required
            name="email"
          />
          Email
        </label>

        <label className="registerlabel">
          <input
            type="text"
            className="registerform-input"
            required
            name="company"
          />
          Company
        </label>
        <label className="registerlabel">
          <input
            type="text"
            className="registerform-input"
            name="atention"
          />
          To the attention
        </label>

      </form>
    </>
  );
}
}
