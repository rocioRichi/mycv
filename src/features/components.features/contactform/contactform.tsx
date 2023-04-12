import { SyntheticEvent, useMemo } from "react";
import { InfoCompany } from "../../../models/infoCompany";
import { useInfoCompany } from "../../hooks.features/use.infocompany";
import { InfoCompanyRepo } from "../../repo.features/infocompany.repo/infocompany.repo";

import "./contactform.css";

export default function ContactForm() {
  const repo = useMemo(() => new InfoCompanyRepo(), []);
  const { userCompany } = useInfoCompany(repo);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = event.currentTarget as HTMLFormElement;
    const inputs = formData.querySelectorAll("input");

    const Company: Partial<InfoCompany> = {
      email: inputs[0].value,
      company: inputs[1].value,
      telephone: inputs[2].value,
    };

    userCompany(Company);

    formData.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="contactform">
      <p className="contactform__willbesent">
        My contact details will be sent by email
      </p>
      <label>
        <input
          type="email"
          className="contactform__input"
          required
          name="email"
        />
        Email*
      </label>

      <label>
        <input type="text" className="contactform__input" name="company" />
        Company
      </label>

      <label>
        <input type="text" className="contactform__input" name="telephone" />
        Telephone
      </label>

      <label className="contactform__label_buttom">
        <button className="contactform__buttom" type="submit" value="Submit">
          Submit
        </button>
      </label>
    </form>
  );
}
