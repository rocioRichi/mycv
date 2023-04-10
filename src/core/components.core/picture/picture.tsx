import "./picture.css";

export function Picture() {
  const urlAvatar =
    "https://firebasestorage.googleapis.com/v0/b/coders2023-finalproject.appspot.com/o/micv%2Favat_comp_sonrisa_color.png?alt=media&token=0b0b50cb-fe5b-4e7c-a796-bc69bd3b1b9e";
  return <img src={urlAvatar} className="avatarimage" alt="Rocio`s Avatar" />;
}
