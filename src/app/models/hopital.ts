import { Adresse } from "./adresse";
import { Contact } from "./contact";

export class Hopital {
    constructor(
        public nom : String,
        public matricule : String,
        public logo : String,
        public description : String,
        public actif : Boolean,
        public adresse : Adresse,
        public contact : Contact
    ){}
}
