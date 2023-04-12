import "./education.css";

export function Education() {
  return (
    <section className="education">
      <ul className="education__ul">
        <li>
          2022.09 - 2023.03 Informática, <b>Javascript Full Stack</b>Development
          Isdi Coders, Madrid
        </li>
        <li>
          2022.07 - 2022.12 Informática, Certificado de Profesionalidad Grado
          III Desarrollo <b>Aplicaciones Web</b>. 550horas Academia Crespo,
          Torrelavega
        </li>
        <li>
          2017.09 - 2018.06 Formacion, Certificado Oficial de Formación
          <b>Pedagógica y Didáctica</b> Universidad Internacional de Andalucia,
          Sevilla
        </li>
        <li>
          2007.09 - 2009.06 Oficios Ténicos, Técnico Superior en
          <b>Madera y Mueble</b>
          IES Ricardo Bernardo, Solares
        </li>
        <li>
          {" "}
          2003.09 -2004.06 Diseño, <b>Técnico Multimedia </b>Kensington &
          Chelsea College, Londres
        </li>
      </ul>
    </section>
  );
}
