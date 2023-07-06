import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import {
  FormControlLabel,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";

export default function Formular() {
  const [adminForm, setAdminForm] = useState({
    gender: "",
    civility: "",
    lastName: "",
    maidenName: "",
    firstName: "",
    birthdate: "",
    familySituation: "",
    professionalSituation: "",
    profession: "",
    numberChildren: "",
    numberStreet: "",
    streetName: "",
    zipCode: "",
    city: "",
    country: "",
    phoneNumber: "",
    mobilePhoneNumber: "",
    email: "",
  });

  function handleChange(e) {
    const value = e.target.value;

    setAdminForm({
      ...adminForm,
      [e.target.name]: value,
    });
    console.log(adminForm.email);
  }

  return (
    <div style={{ display: "flex", marginTop: "60px"}}>
      <div>
        <Typography variant="h6" sx={{ fontSize: 16, display:"flex", justifyContent:"start", marginBottom:"48px" }}>
          La fiche administrative
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: 14, fontWeight: "bold", my: "2rem", display:"flex", justifyContent:"start" }}
        >
          Etat civil
        </Typography>
        <FormControl size="small" variant="standard">
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "5rem" }}>
              <FormLabel id="gender" sx={{ fontSize: 14, fontWeight: 600 }}>
                Sexe
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="gender-form"
                name="row-gender-form"
              >
                <FormControlLabel
                  value="2"
                  name="gender"
                  control={<Radio />}
                  label={
                    <Typography variant="h6" sx={{ fontSize: 14 }}>
                      Femme
                    </Typography>
                  }
                  onChange={handleChange}
                />
                <FormControlLabel
                  value="1"
                  name="gender"
                  control={<Radio />}
                  label={
                    <Typography variant="h6" sx={{ fontSize: 14 }}>
                      Homme
                    </Typography>
                  }
                  onChange={handleChange}
                />
                <FormControlLabel
                  value="0"
                  name="gender"
                  control={<Radio />}
                  label={
                    <Typography variant="h6" sx={{ fontSize: 14 }}>
                      Non binaire
                    </Typography>
                  }
                  onChange={handleChange}
                />
              </RadioGroup>
            </div>
            <div>
              <FormLabel id="civility" sx={{ fontSize: 14, fontWeight: 600 }}>
                Civilité
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="civility-form"
                name="row-civility-form"
              >
                <FormControlLabel
                  value="3"
                  name="civility"
                  control={<Radio />}
                  label={
                    <Typography variant="h6" sx={{ fontSize: 14 }}>
                      Sans
                    </Typography>
                  }
                  onChange={handleChange}
                />
                <FormControlLabel
                  value="1"
                  name="civility"
                  control={<Radio />}
                  label={
                    <Typography variant="h6" sx={{ fontSize: 14 }}>
                      Monsieur
                    </Typography>
                  }
                  onChange={handleChange}
                />
                <FormControlLabel
                  value="0"
                  name="civility"
                  control={<Radio />}
                  label={
                    <Typography variant="h6" sx={{ fontSize: 14 }}>
                      Mademoiselle
                    </Typography>
                  }
                  onChange={handleChange}
                />
                <FormControlLabel
                  value="2"
                  name="civility"
                  control={<Radio />}
                  label={
                    <Typography variant="h6" sx={{ fontSize: 14 }}>
                      Madame
                    </Typography>
                  }
                  onChange={handleChange}
                />
              </RadioGroup>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <TextField
              id="patient-lastname"
              name="lastName"
              label="Nom"
              variant="standard"
              onChange={handleChange}
              sx={{ mr: "10.5rem", mt: "2rem" }}
            />
            <TextField
              id="patient-maiden-name"
              label="Nom de jeune fille"
              variant="standard"
              name="maidenName"
              onChange={handleChange}
              sx={{ ml: "2rem", mt: "2rem" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <TextField
              id="patient-firstname"
              label="Prénom"
              variant="standard"
              name="firstName"
              onChange={handleChange}
              sx={{ mr: "10.5rem", mt: "2rem" }}
            />
            <TextField
              id="patient-birthdate"
              label="Date de naissance"
              variant="standard"
              name="birthdate"
              onChange={handleChange}
              sx={{ ml: "2rem", mt: "2rem" }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <FormControl
              sx={{ width: "22%", mt: "2rem", mr: "12rem" }}
              variant="standard"
            >
              <InputLabel id="family-situation-label">
                Situation familiale
              </InputLabel>
              <Select
                labelId="family-situation-label"
                id="family-situation"
                name="familySituation"
                value={adminForm.familySituation}
                onChange={handleChange}
                sx={{ width: "12rem" }}
              >
                <MenuItem value={0}>Célibataire</MenuItem>
                <MenuItem value={1}>Marié</MenuItem>
                <MenuItem value={2}>Divorcé</MenuItem>
                <MenuItem value={3}>Veuf/veuve</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{ width: "22%", mt: "2rem", ml: "1.5rem" }}
              variant="standard"
            >
              <InputLabel id="professional-situation-label">
                Situation professionnelle
              </InputLabel>
              <Select
                labelId="professional-situation-label"
                id="professional-situation"
                name="professionalSituation"
                value={adminForm.professionalSituation}
                onChange={handleChange}
                sx={{ width: "12rem" }}
              >
                <MenuItem value={0}>Sans emploi</MenuItem>
                <MenuItem value={1}>Salarié</MenuItem>
                <MenuItem value={2}>Indépendant</MenuItem>
                <MenuItem value={3}>Retraité</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ display: "flex" }}>
            <TextField
              id="profession"
              label="Profession"
              variant="standard"
              name="profession"
              onChange={handleChange}
              sx={{ mr: "10.5rem", mt: "2rem" }}
            />
            <FormControl
              sx={{ width: "22%", mt: "2rem", ml: "2rem" }}
              variant="standard"
            >
              <InputLabel id="number-children-label">
                Nombre d'enfant
              </InputLabel>
              <Select
                labelId="number-children-label"
                id="number-children"
                name="numberChildren"
                value={adminForm.numberChildren}
                onChange={handleChange}
                sx={{ width: "12rem" }}
              >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3+</MenuItem>
              </Select>
            </FormControl>
          </div>
        </FormControl>
        <Divider variant="middle" sx={{ mt: "3rem", width: "50%" }} />
        <Typography
          variant="h6"
          sx={{ fontSize: 14, mt: "3rem", fontWeight: "bold", display:"flex", justifyContent:"start" }}
        >
          Adresse et contact
        </Typography>
        <div style={{ display: "flex" }}>
          <TextField
            id="patient-number-street"
            label="Numéro de la rue"
            variant="standard"
            name="numberStreet"
            onChange={handleChange}
            sx={{ mt: "2rem", mr: "10.5rem" }}
          />
          <TextField
            id="patient-street"
            label="Nom de la rue"
            variant="standard"
            name="streetName"
            onChange={handleChange}
            sx={{ ml: "2rem", mt: "2rem" }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <TextField
            id="patient-zipcode"
            label="Code postal"
            variant="standard"
            name="zipCode"
            onChange={handleChange}
            sx={{ mt: "2rem", mr: "10.5rem" }}
          />
          <TextField
            id="patient-city"
            label="Ville"
            variant="standard"
            name="city"
            onChange={handleChange}
            sx={{ ml: "2rem", mt: "2rem" }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <TextField
            id="patient-country"
            label="Pays"
            variant="standard"
            name="country"
            onChange={handleChange}
            sx={{ mt: "2rem", mr: "10.5rem" }}
          />
          <TextField
            id="patient-phone"
            label="Téléphone fixe"
            variant="standard"
            name="phoneNumber"
            onChange={handleChange}
            sx={{ ml: "2rem", mt: "2rem" }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <TextField
            id="patient-mobile-phone"
            label="Téléphone mobile"
            variant="standard"
            name="mobilePhoneNumber"
            onChange={handleChange}
            sx={{ mt: "2rem", mr: "10.5rem" }}
          />
          <TextField
            id="patient-email"
            label="Email"
            variant="standard"
            name="email"
            onChange={handleChange}
            sx={{ ml: "2rem", mt: "2rem" }}
          />
        </div>
        <Divider variant="middle" sx={{ mt: "3rem", width: "50%" }} />
      </div>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ ml: "2rem", height: "50rem" }}
      />
    </div>
  );
}
