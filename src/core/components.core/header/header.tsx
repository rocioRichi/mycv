import "./header.css";
export function Header() {
  const urlBlueGitHub =
    "https://firebasestorage.googleapis.com/v0/b/coders2023-finalproject.appspot.com/o/micv%2FRecurso%204.svg?alt=media&token=eaed496c-e114-41f7-ab0c-9b4191bc6003";
  return (
    <>
      <header className="header">
        Rocio Ricciardiello
        <img
          src={urlBlueGitHub}
          className="header__avatargithub"
          alt="Git Hub logo"
        />
        <hr className="header__hr" />
      </header>
    </>
  );
}
