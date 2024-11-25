import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

/*Crea la tua prima React App!

Creiamo la tua prima applicazione React: usiamo create-react-app.

Assicurati di avere NodeJS  installato sul tuo Sistema. Usa il comando: node -v nel terminale. (dovresti vedere il numero della versione di node installata)
Usa il boilerplate con create-react-app  per creare la tua nuova applicazione React, sul Desktop o nella tua solita cartella per dei compiti.
Entra nella cartella del tuo nuovo progetto via terminale usando il comando cd .
Quando sei nella cartella del progetto (nello stesso livello dov’è presente il file  package.json), 
Lancia l’applicazione con npm start; dopo un po’ di tempo il browser dovrebbe aprire un nuovo tab e quando il processo di compilazione è finito 
dovresti vedere la pagina di benvenuto con il logo rotante di React.Crea un nuovo componente come funzione, chiamalo ButtonComponent: dovrebbe ritornare 
un tag ‘button’. Il testo del bottone dovrebbe essere passato tramite le Props del componente e visualizzato in mezzo ai tag  <button></button> .
Crea un nuovo componente come classe, chiamalo ImageComponent: dovrebbe ritornare un tag ‘img’. La fonte dell’immagine ‘src’ oltre che l’attributo ‘alt’ 
dovrebbero essere passate tramite Props del componente e assegnate al tag  <img /> .*/

function App() {
  return (
    <div className="testCard">
      <ButtonComponent text="Nuovo bottone" />
      <ButtonComponent text="Bottone 2" />
      <ImageComponent
        src="https://images.pexels.com/photos/29207345/pexels-photo-29207345/free-photo-of-classic-red-british-telephone-booth-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        alt="free-photo-of-classic-red-british-telephone-booth-in-autumn"
      />
      <ImageComponent
        src="https://images.pexels.com/photos/29467857/pexels-photo-29467857/free-photo-of-close-up-of-hand-playing-classic-piano-keys.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="free-photo-of-close-up-of-hand-playing-classic-piano-keys"
      />
    </div>
  );
}

export default App;
