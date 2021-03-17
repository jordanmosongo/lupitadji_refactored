import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
 
  constructor() { }
  questions : Question[] = [
    new Question("Comment puis-je chercher un service dont j'ai besoin ?", 
      "Pas de panique, connectez-vous à l'internet au moyen de votre téléphone ou ordinateur. " + 
      "Descendez vers le bas jusqu'à la section nos services. Autrement, sur la barre de menu de l'application " + 
      "cliquez sur l'icône de recherche et tapez le nom du service que vous souhaitez", true),

    new Question("Comment puis-je accéder à l'hôpital le plus proche ?", 
      "Encore très simple, cliquer sur le service souhaité, les hôpitaux l'offrent apparaîtront. " + 
      "Un message apparaîtra pour vous indiquer l'hôpital qui est plus proche de vous ainsi que les coordonnés nécessaires pour y arriver", false),
    
    new Question("Comment connaître ma position par rapport à ces hôpitaux ?", 
      "Une fois connecté, rassurez-vous d'avoir activé l'option géolocalisation dans vos paramêtres. " + 
      "Cela permettra de géolocaliser en fonction de ces hôpitaux. ", false),
    new Question("Que faire pour donner mon appréciation quant à l'utilisation de cette application ? ", 
      "Vos feedbacks nous importent le plus! Laissez-nous juste un message ayant soin de spécier l'objet", false)  
      
  ];
   ngOnInit(): void {
  }
  answer(position : number){
    for(let i = 0; i < this.questions.length; i++) {
      if(i != position) {
        this.questions[i].state = false;
      }
    }
    this.questions[position].state = true;
  }

}
