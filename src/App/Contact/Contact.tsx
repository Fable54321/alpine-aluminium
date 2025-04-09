import styles from "./Contact.module.css";
import Success  from "../../Components/Success/Success";

import { useEffect, useState } from "react";

const Contact = () => {
  const [nom, setNom] = useState("");
  const [Numero, setNumero] = useState("");
  const [courriel, setCourriel] = useState("");
  const [message, setMessage] = useState("");
  const [, setFile] = useState<File | undefined>();
  const [fileList, setFileList] = useState<FileList | undefined>();
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
  const target = event.target as HTMLInputElement;

  const testFileList = target.files;
  const fileCount= testFileList ? testFileList.length : 0;
  let totalFileSize = 0;

  if(testFileList) {
    for(const file of testFileList) {
      totalFileSize += file.size;
    }
  }

  if (totalFileSize > 10000000) {
    alert("Le poids total des fichiers est supérieur à 10Mo");
    return;
  }

  else if (fileCount + (fileList?.length ?? 0) > 5) {
    alert("Le nombre de fichier est supérieur à 5");
    return;
  }

  const newFileList = new DataTransfer();

 
  if (fileList) {
   
    
    for (let i = 0; i < fileList.length; i++) {
      newFileList.items.add(fileList[i]);
    }
  }

 
  if (target.files) {
    for (let i = 0; i < target.files.length; i++) {
      newFileList.items.add(target.files[i]);
    }
  }

  
  setFileList(newFileList.files);

     setFile(target.files?.[0]);
    
  }

  useEffect(()=> {
    if (!nom || !regexName.test(nom))  {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!Numero || !regexPhoneNumber.test(Numero)) {
      setNumberError(true);
    } else {
      setNumberError(false);
    }

    if (!courriel || !emailRegex.test(courriel)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!message || !min20charRegex.test(message)) {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
  },[nom, Numero, courriel, message])

  const regexPhoneNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const regexName = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const min20charRegex = /^.{20,}$/;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (!Numero || !regexPhoneNumber.test(Numero)) {
    setNumberError(true);
  }

  if (!nom || !regexName.test(nom)) {
    setNameError(true);
  }

  if (!message || !min20charRegex.test(message)) {
    setMessageError(true);
  }

  if (!courriel || !emailRegex.test(courriel)) {
    setEmailError(true);
  } else {
    setEmailError(false);
    setNameError(false);
    setNumberError(false);
    setMessageError(false);

    const formData = new FormData();

    formData.append("nom", nom);
    formData.append("Numero", Numero);
    formData.append("courriel", courriel);
    formData.append("message", message);
    if (fileList) {
      Array.from(fileList).forEach((file) => {
        formData.append("attachment", file);
      });
    }

     fetch("http://first-server.ca-central-1.elasticbeanstalk.com/send-email", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    
    setNumero("");
    setCourriel("");
    setMessage("");
   setFile(undefined);
    setFileList(undefined);
    setNameError(false);
    setNumberError(false);
    setEmailError(false);
    setMessageError(false);
    setSuccess(true);
  }
};

  return (
    
    <section className={styles["contact"]}>
      <div style={{display: !success ? "none" : "flex", justifyContent: "center"}}>
      <Success 
       setNom ={setNom} 
       nom= {nom}
       setSuccess={setSuccess}
      />
      </div>
      <div className={styles["contact__form--wrapper"]}>
        <div className={styles["contact__border--1"]}> </div>
        <h2 className={styles["contact__title"]}>Vous avez une question ?</h2>
        <p className={styles["contact__text"]}>
          Il nous fera plaisir de vous répondre dans les plus brefs délais.{" "}
        </p>
        <form onSubmit={handleSubmit} className={styles["contact__form"]}>
          <label className={styles["contact__form__label"]} htmlFor="nom">
            Nom
          </label>
          <div className={styles["contact__form__input--wrapper"]}>
            <input
              className={`${styles["contact__form__input"]} ${
                nameError ? styles["input--error"] : ""
              }`}
              type="text"
              name="nom"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
            <p
              className={`${
                nameError
                  ? styles["contact__form__error"]
                  : styles["contact__form__error--hidden"]
              }`}
            >
              Veuillez Entrer un nom valide
            </p>
          </div>
          <label className={styles["contact__form__label"]} htmlFor="Numero">
            Numéro de téléphone
          </label>
          <div className={styles["contact__form__input--wrapper"]}>
            <input
              className={`${styles["contact__form__input"]} ${
                numberError ? styles["input--error"] : ""
              }`}
              type="tel"
              name="Numero"
              id="Numero"
              value={Numero}
              onChange={(e) => setNumero(e.target.value)}
            />
            <p
              className={`${
                numberError
                  ? styles["contact__form__error"]
                  : styles["contact__form__error--hidden"]
              }`}
            >
              Veuillez entrer un numéro de téléphone valide
            </p>
          </div>

          <label className={styles["contact__form__label"]} htmlFor="courriel">
            Courriel
          </label>
          <div className={styles["contact__form__input--wrapper"]}>
            <input
              className={`${styles["contact__form__input"]} ${
                emailError ? styles["input--error"] : ""
              }`}
              type="email"
              name="courriel"
              id="courriel"
              value={courriel}
              onChange={(e) => setCourriel(e.target.value)}
            />
            <p
              className={`${
                emailError
                  ? styles["contact__form__error"]
                  : styles["contact__form__error--hidden"]
              }`}
            >
              Veuillez entrer un courriel valide
            </p>
          </div>

          <label className={styles["contact__form__label"]} htmlFor="message">
            Message
          </label>
          <div className={styles["contact__form__input--wrapper"]}>
            <textarea
              className={`${styles["contact__form__message"]} ${
                messageError ? styles["input--error"] : ""
              }`}
              name="message"
              id="message"
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <p
              className={`${
                messageError
                  ? styles["contact__form__error--message"]
                  : styles["contact__form__error--hidden"]
              }`}
            >
              Veuillez soumettre un message d'au moins 20 caractères
            </p>
          </div>
          <div className={styles["contact__form__file--wrapper"]}>
            <label
              className={styles["contact__form__label--file"]}
              htmlFor="attachment"
            >
              {" "}
              Joindre une photo{" "}
            </label>
            <p className={styles["contact__form__text--file"]}>maximum 5 fichiers <br/> maximum 10 Mo</p>
          </div>
            {fileList && fileList.length > 0 && (
              <p>{fileList.length} files selected</p>
            )} 
          <input
            onChange={handleOnChange}
            className={styles["contact__form__input--file"]}
            type="file"
            name="attachment"
            id="attachment"
            accept="image/*"
            multiple
          />

          <button
            role="button"
            className={styles["contact__form__button"]}
            type="submit"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

