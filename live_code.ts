// variables
let isDone: boolean = true; // booléen
// isDone = "true"; erreur de typage
console.log(isDone);

let nombre: number = 10;
let nom: string = "Desjardins";

let autre: any = "laurent";
autre = false;

// tableeaux
let nombres: number[] = [1 ,2 ,3, 4, 5];
let others: Array<number> = [6, 7, 8, 9, 10];

let ensemble: any[] = [1, true, "ok"];

console.log(ensemble[0]);
ensemble[0] = 2;
console.log(ensemble);

// enum
enum Couleur {Rouge, Vert, Bleu};
enum Tarif {Gratuit, Premium, Basic};

let couleurPreferee = Couleur.Rouge;

// fonctions
function addition(a: number, b: number): number {
  return a + b;
}
console.log(addition(10, 20));
let f = function(n: number): number {
  return n * 2;
}
f(10);

// let g = (a, b) => a + b;

/* let h = function(a, b) {
  return a + b;
}*/

class Client {  
  // propriétés
  nom: string;
  prenom: string;
  adresse: string;
  age: number;

  // constructeur
  constructor(nom: string,prenom:string,adresse:string,age:number) {
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.age = age;

  }

  // methodes
  changerAdresse(nouvelleAdresse) {
    this.adresse = nouvelleAdresse;
  }
}// fermeture de la classe 
 

let client_1 = new Client("Desjardins", "laurent", "1 rue de rivoli", 48);
console.log(client_1.age);
