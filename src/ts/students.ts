import {Matieres} from "./matieres";

export interface Etudiant {
    prenom: string;
    nom: string;
    matieres: Matieres;
    moyenne?: number;
}