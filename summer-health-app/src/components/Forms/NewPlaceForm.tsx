import classes from './NewPlaceForm.module.css';
import { Grid, MenuItem, Rating, Switch } from '@mui/material';
import { Button, Container } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";

const NewPlaceForm = () => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');
    const [categorization, setCategorization] = useState <number | null>(null);
    const [type, setType] = useState('');
    const [personCount, setPersonCount] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [freeCancellation, setFreeCancellation] = useState<boolean>();


    const submitHandler = (event: any) => {
        event.preventDefault();
        console.log(title, subtitle, description, categorization, type, personCount, price, location, postalCode, imageUrl, freeCancellation);
    }

    return (
        <Container>
            <Grid className={classes["wrapper"]} container direction="column" justifyContent="flex-start" alignItems="flex-start">
                <h2 className={classes["header"]}>Add new place</h2>
                <form className={classes["form"]} onSubmit={submitHandler}>
                    <TextField fullWidth label="Listing name" variant="outlined" 
                        value={title} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setTitle(event.target.value);
                            }}/>
                    <TextField fullWidth label="Short description" variant="outlined" 
                        value={subtitle} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setSubtitle(event.target.value);
                            }}/>
                    <TextField multiline rows={4} fullWidth label="Long description" variant="outlined" 
                        value={description} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setDescription(event.target.value);
                            }}/>
                    <Grid container direction="row" justifyContent="space-between" alignItems="baseline">
                        <p>Categorization</p>
                        <Rating name="simple-controlled" 
                            value={categorization} 
                            onChange={(event, newValue) => {
                                setCategorization(newValue);
                              }}/>
                    </Grid>
                    <TextField fullWidth select label="Accommodation type"
                        value={type} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setType(event.target.value);
                        }}>
                        <MenuItem value={1}>Apartment</MenuItem>
                        <MenuItem value={2}>Room</MenuItem>
                        <MenuItem value={3}>Mobile home</MenuItem>
                    </TextField>
                    <TextField type="number" fullWidth label="Capacity" variant="outlined" 
                        value={personCount} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setPersonCount(event.target.value);
                            }}/>
                    <TextField type="number" fullWidth label="Price" variant="outlined" 
                        value={price} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setPrice(event.target.value);
                            }}/>
                    <TextField fullWidth label="Location" variant="outlined" 
                        value={location} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setLocation(event.target.value);
                            }}/>
                    <TextField fullWidth label="Postal code" variant="outlined" 
                        value={postalCode} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setPostalCode(event.target.value);
                            }}/>
                    <TextField fullWidth label="Listing image URL" variant="outlined" 
                        value={imageUrl} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setImageUrl(event.target.value);
                            }}/>
                    <Grid container direction="row" justifyContent="space-between" alignItems="baseline">
                        <p>Free cancellation available</p>
                        <Switch
                            value={freeCancellation} 
                            onChange={(event, newValue) => {
                                setFreeCancellation(newValue);
                              }}/>
                    </Grid>
                    <Grid  container direction="row-reverse" justifyContent="space-between" alignItems="baseline">
                        <Button type="submit" className={classes["button"]} variant="contained">ADD NEW PLACE</Button>
                    </Grid>
                </form>
            </Grid>
        </Container>
    );
}

export default NewPlaceForm;