import classes from './PlaceCard.module.css'

import Grid from '@mui/material/Grid';
import { Button, DialogTitle } from '@mui/material';
import NewPlaceForm from './forms/NewPlaceForm';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { useHistory } from 'react-router-dom';

const PlaceCard: React.FC<{home: {id: string, title: string, subtitle: string, description: string, shortDescription: string, type: string, categorization: number, personCount: number | null, imageUrl: string, freeCancelation: boolean, price: number, location: {id: string, name: string, imageUrl: string, postalCode: number, properties: number} | null, capacity: number}}> = (props) => {
    const [open, setOpen] = useState(false);
    const history = useHistory();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    function handleDelete() {
        fetch('https://devcademy.herokuapp.com/api/Accomodations/' + props.home.id, { 
            method: 'DELETE' 
        }).then( () => 
            window.location.reload()
        );
    }

    function handleEdit() {
        history.push({
            pathname: "/my-places/new",
            state: {id: props.home?.id}
        })
    }

    return (
        <Grid className={classes['card-place']} container direction="column" justifyContent="space-around" alignItems="baseline">
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle>
                    {"Delete listing?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {"Are you sure you want to delete this listing? This action cannot be reversed."}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>CANCEL</Button>
                    <Button onClick={handleDelete}>DELETE</Button>
                </DialogActions>
            </Dialog>
            <Grid item>
                <img className={classes['place-card-image']} src={props.home.imageUrl} width="500" height="600"/>
            </Grid>
            <Grid className={classes['place-title']} item>
                {props.home.title}
            </Grid>
            <Grid className={classes['place-location']} item>
                {props.home?.location?.name} 
            </Grid>
            <Grid className={classes['place-subtitle']} item>
                {props.home.subtitle}
            </Grid>
            <Grid item>
                <Grid container direction="row" justifyContent="space-around" alignItems="baseline">
                    <Grid item>
                        <Button onClick={handleEdit} className={classes['edit-button']}>EDIT</Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={handleClickOpen} className={classes['delete-button']}>DELETE PLACE</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default PlaceCard;