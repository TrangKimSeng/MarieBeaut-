const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

let users = [
  { id: 1, email: "Faire les courses", nom: "Pablo The king" },
  { id: 2, email: "Faire les courses", nom: "Pablo Jr" },
  { id: 3, email: "Faire les courses", nom: "Pablito" },
];
let specialistes = [
  { id: 1, nom: "Michelle" },
  { id: 2, nom: "Valerie" },
  { id: 3, nom: "Jorgette" },
];
//C'est une route GET qui renvoie un tableau contenant les URLs
// de référence pour chaque tâche. Pour chaque tâche dans le
//tableau users, elle crée une URL de la forme /user/[id].


/*
app.get("/rdv", (req, res) => {
  const userReferences = rendez_vous.map((rdv) => `/rdv/${rdv.date}`);
  res.json(userReferences);
});
*/


//Spécialiste
/* EndPoints pour get tout les specialistes */
app.get("/specialistes", (req, res) => {
  const userReferences = specialistes.map(
    (specialiste) => `/specialiste/${specialiste.id}`
  );
  res.json(userReferences);
});

/* EndPoints pour get un specialiste selon son id */
app.get("/specialiste/:id", (req, res) => {
  const specialisteId = parseInt(req.params.id);
  const specialiste = specialistes.find(
    (specialiste) => specialiste.id === specialisteId
  );
  if (specialiste) {
    res.json(specialiste);
  } else {
    res.status(404).json({ error: "Specialiste non trouvée" });
  }
});

//Users
/*Des endPoints relier au user TODO: A revoir*/
//Les user peuvent faire tout avec les RDV tant que ca soit avec son id
app.get("/users", (req, res) => {
  const userReferences = users.map((user) => `/user/${user.id}`);
  res.json(userReferences);
});

app.get("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "Tâche non trouvée" });
  }
});
app.get("/user/:id/rdv", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  const rdv = rendez_vous.filter((rdv) => rdv.client_id === userId);
  if (user && rdv) {
    res.json(rdv);
  } else {
    res.status(404).json({ error: "Tâche non trouvée" });
  }
});

app.post("/user/:id/rdv", (req, res) => {
  const userId = parseInt(req.params.id);
  const newRdv = {
    client_id: userId,
    date: req.body.date,
  };
  rendez_vous.push(newRdv);
  res.status(201).json({ message: "RDV ajoutée avec succès", rdv: newRdv });
});

app.put("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  if (user) {
    user.description = req.body.description;
    res.json({ message: "Tâche mise à jour avec succès", user });
  } else {
    res.status(404).json({ error: "Tâche non trouvée" });
  }
});

app.delete("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((user) => user.id !== userId);
  res.json({ message: "Tâche supprimée avec succès" });
});




//Appointment
let appointments = [
    { id: 1, date: "12 novembre 2024", staff: "Jeam", service: "Coupe Homme",  contact: "superemail@gmail.com" },
    { id: 2, date: "12 novembre 2024", staff: "Michel", service: "Coupe Homme",  contact: "Jean@gmail.com" },
    { id: 3, date: "12 novembre 2024", staff: "MexicanDestroyer", service: "Coupe Homme",  contact: "Marc@gmail.com" },
];

app.get("/appointments", (req, res) => {
  const appointmentReferences = appointments.map(appointment => `/Appointment: ${appointment.id}, ${appointment.service}, par ${appointment.staff}`);
  res.json(appointmentReferences);
})

app.get('/appointment/:id', (req, res) => {
  const appointmentId = parseInt(req.params.id);
  const appointment = appointments.find(appointment => appointment.id === appointmentId);

  if (appointment) {
      res.json(appointment);
  } else {
      res.status(404).json({ error: 'Rendez-vou non trouvée' });
  }
});

app.post('/appointment', (req, res) => {
  const newAppointment = {
      id: req.body.id,
      date: req.body.date,
      staff: req.body.staff,
      service: req.body.service,
      contact: req.body.contact

  };
  appointments.push(newAppointment);
  res.status(201).json({ message: 'Tâche ajoutée avec succès', appointment: newAppointment });
});

app.put('/appointment/:id', (req, res) => {
  const appointmentId = parseInt(req.params.id);
  const appointment = appointmentss.find(appointment => appointment.id === appointmentId);
  if (appointment) {
    appointment.date = req.body.date;
    appointment.staff = req.body.staff;
    appointment.service = req.body.service;
    appointment.contact = req.body.contact;
    res.json({ message: 'Rendez-vous mise à jour avec succès', appointment });
  } else {
      res.status(404).json({ error: 'Rendez-vous non trouvée' });
  }
});

app.delete('/task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== taskId);
    res.json({ message: 'Tâche supprimée avec succès' });
});

//Console log lorsque on se connecter au server
app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
