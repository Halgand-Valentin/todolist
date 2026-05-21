import { Box, Button, Grid, TextField, Typography } from "@mui/material";

//********** Component **********//
const AddForm = () => {
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Typography variant="h6" marginLeft={1}>
          Ajouter une tâche
        </Typography>
        <TextField required id="outlined-required" label="Tâche" fullWidth />
      </div>
      <div style={{ marginLeft: 10 }}>
        <Button variant="contained">Ajouter</Button>
      </div>
    </Box>
  );
};
AddForm.displayName = "AddForm";
export default AddForm;
