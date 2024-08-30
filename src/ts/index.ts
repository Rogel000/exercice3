import {Etudiant} from "./students";
import {Matieres} from "./matieres";

let etudiants: Etudiant[] = [
    {
        prenom: "José",
        nom: "Garcia",
        matieres: {
            français: 16,
            anglais: 7,
            humour: 14
        }
    },
    {
        prenom: "Antoine",
        nom: "De Caunes",
        matieres: {
            français: 15,
            anglais: 6,
            humour: 16,
            informatique: 4,
            sport: 10
        }
    }
]

let displayEtudiant = (etudiant: Etudiant) : string => {
return `Etudiant ${etudiant.nom} ${etudiant.prenom}`
}
let displayNotesEtudiant = (etudiant: Etudiant): string => {
  let notes: string= "";
  for(let matiere in etudiant.matieres){
    notes += `${matiere}:  ${etudiant.matieres[matiere]} \n `;
  }
  return notes;
}

let calculMoyenne = (matieres: Matieres) : number => {
    let total = 0;
    for(let matiere in matieres){
        total += matieres[matiere];
    }
    return total / Object.keys(matieres).length;
}

etudiants.forEach(etudiant => {
    console.log("#### DEBUT etudiant ####")
    console.log(displayEtudiant(etudiant));
    console.log(displayNotesEtudiant(etudiant));
    console.log(`La moyenne est de ${calculMoyenne(etudiant.matieres).toFixed(2)}` )
    console.log("#### FIN etudiant ####")
});
