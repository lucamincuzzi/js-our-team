//Creazione dell'array di oggetti dei membri del team
const teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manger",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Desiger",
        photo: "barabara-ramos-graphic-designer.jpg"
    }
]
console.log("Array dei membri del team", teamMembers);

for(let i = 0; i < teamMembers.length; i++) {
    //stampa in console del nome, ruolo e stringa della foto
    //salvo in una variabile l'oggetto nell'array in iterazione
    curTeamMember = teamMembers[i];
    //per ogni oggetto, stampo in console il valore della chiave corrispondente
    console.log(curTeamMember.name);
    console.log(curTeamMember.role);
    console.log(curTeamMember.photo);
    //ausilio visivo per separare i membri in console
    console.log("-------------");
    //stampa in DOM dei suddetti valori
    //salvo in una variabile l'elemento unordered list
    const membersList = document.querySelector(".team-members");
    //inserisco ad ogni iterazione una stringa <li></li> contenente i valori in iterazione
    membersList.innerHTML += `<li>Nome: ${curTeamMember.name} | Ruolo: ${curTeamMember.role} | Percorso foto: ${curTeamMember.photo}`
}