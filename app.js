const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

let appointments = [
    { id: 1, date: "12 novembre 2024", staff: "Jeam", service: "Coupe Homme",  contact: "Pablo@gmail.com" },
    { id: 2, date: "12 novembre 2024", staff: "Michel", service: "Coupe Homme",  contact: "Pablojr@gmail.com" },
    { id: 3, date: "12 novembre 2024", staff: "MexicanDestroyer", service: "Coupe Homme",  contact: "ElTaco@gmail.com" },
];

let specialistes = [
  { id: 1, name: "Michelle", description: "Meilleur spécialiste" },
  { id: 2, name: "Valerie", description: "pire spécialiste" },
  { id: 3, name: "Jorgette", description: "pas pire spécialiste" },
];

let users = [
    { id: 1, name: "Pablo The king", email: "Pablo@gmail.com", phone: 123456, password: "12345"},
    { id: 2, name: "Pablo Jr", email: "Pablojr@gmail.com", phone: 123456, password: "12345"},
    { id: 3,  name: "ElTacoMan", email: "ElTaco@gmail.com", phone: 123456, password: "12345"},
];

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
//celle la je suis pas sur vu que un utilisateur pourrait pas vraiment avoir tout les information d'autre utilisateurs
/*
app.get("/users", (req, res) => {
  const userReferences = users.map((user) => `/user/${user.id}`);
  res.json(userReferences);
});
*/


app.get("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id); 
  const user = users.find((user) => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "Utilisateurs non trouvée" });
  }
});
app.get("/user/:id/appointment", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  const appointment = appointments.filter((appointment) => appointment.contact === user.email);
  if (user && appointment) {
    res.json(appointment);
  } else {
    res.status(404).json({ error: "Rendez-vous non trouvée" });
  }
});


app.post("/user", (req, res) => {
  //const userId = parseInt(req.params.id);
  const newUser = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password
  };
  users.push(newUser)
  res.status(201).json({ message: "Utilisateurs ajoutée avec succès", user: newUser });
});


app.put("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  if (user) {
    user.name = req.body.description;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.password = req.body.password;
    res.json({ message: "Utilisateur mise à jour avec succès", user });
  } else {
    res.status(404).json({ error: "Tâche non trouvée" });
  }
});

app.delete("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((user) => user.id !== userId);
  res.json({ message: "Utilisateur supprimée avec succès" });
});




//Appointment
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
      res.status(404).json({ error: 'Rendez-vous non trouvée' });
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
  res.status(201).json({ message: 'Rendez-vous ajoutée avec succès', appointment: newAppointment });
});

app.put('/appointment/:id', (req, res) => {
  const appointmentId = parseInt(req.params.id);
  const appointment = appointments.find(appointment => appointment.id === appointmentId);
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

app.delete('/appointment/:id', (req, res) => {
    const appointmentId = parseInt(req.params.id);
    appointments = appointments.filter(appointment => appointment.id !== appointmentId);
    res.json({ message: 'Rendez-vous supprimée avec succès' });
});

//Console log lorsque on se connecter au server
app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});

module.exports = app;