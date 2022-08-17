import classes from './NewPlaceForm.module.css';
import { Grid, MenuItem, Rating, Switch } from '@mui/material';
import { Button, Container } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import { useCallback, useEffect, useState } from "react";
import useInput from '../hooks/use-input';

const NewPlaceForm: React.FC<{id: string}> = (props) => {
    const {
      value: title,
      isValid: titleIsValid,
      hasError: titleInputHasError,
      valueChangeHandler: titleChangeHandler,
      inputBlurHandler: titleBlurHandler,
      reset: resetTitleInput
    } = useInput("", (value: string) => value.trim() !== "" && value.length <= 100);

    const [subtitle, setSubtitle] = useState('');

    const {
        value: shortDescription,
        isValid: shortDescriptionIsValid,
        hasError: shortDescriptionInputHasError,
        valueChangeHandler: shortDescriptionChangeHandler,
        inputBlurHandler: shortDescriptionBlurHandler,
        reset: resetShortDescriptionInput
    } = useInput("", (value: string) => value.length <= 200);

    const [description, setDescription] = useState('');

    const {
        value: type,
        isValid: typeIsValid,
        hasError: typeInputHasError,
        valueChangeHandler: typeChangeHandler,
        inputBlurHandler: typeBlurHandler,
        reset: resetTypeInput
    } = useInput("", (value: string) => value.trim() !== "");

    const [categorization, setCategorization] = useState <number | null>(1);

    const {
        value: capacity,
        isValid: capacityIsValid,
        hasError: capacityInputHasError,
        valueChangeHandler: capacityChangeHandler,
        inputBlurHandler: capacityBlurHandler,
        reset: resetCapacityInput
    } = useInput(0, (value: number) => value > 0);

    const [imageUrl, setImageUrl] = useState('');

    const [freeCancellation, setFreeCancellation] = useState<boolean>();

    const {
        value: price,
        isValid: priceIsValid,
        hasError: priceInputHasError,
        valueChangeHandler: priceChangeHandler,
        inputBlurHandler: priceBlurHandler,
        reset: resetPriceInput
    } = useInput(0, (value: number) => value > 0);
    
    const [personCount, setPersonCount] = useState(0);
    const [location, setLocation] = useState<{id: string, name: string, imageUrl: string, postalCode: number, properties: number} | null>(null);
    const [postalCode, setPostalCode] = useState('');
    const [locationID, setLocationID] = useState('');

    const [locationsFromDatabase, setLocationsFromDatabase] = useState<{id: string, name: string, imageUrl: string, postalCode: number, properties: number}[]>([]);

    const fetchLocationsFromDatabase = useCallback(async () => {
        fetch("https://devcademy.herokuapp.com/api/Location")
            .then(response => {
                return response.json();
            }).then(data => {
                setLocationsFromDatabase(data);
            });
    }, []);

    useEffect(() => {
        fetchLocationsFromDatabase();
        if(props.id){
            console.log(props.id);
            
            fetch("https://devcademy.herokuapp.com/api/Accomodations/" + props.id)
            .then(response => {
                return response.json();
            }).then(data => {
                titleChangeHandler(data.title);
                shortDescriptionChangeHandler(data.shortDescription);
                setDescription(data.description);
                setCategorization(data.categorization);
                typeChangeHandler(data.type);
                capacityChangeHandler(data.capacity);
                setPersonCount(data.personCount);
                priceChangeHandler(data.price);
                setLocation(data.location);
                setPostalCode(data.location?.postalCode);
                setImageUrl(data.imageUrl);
                setFreeCancellation(data.freeCancelation);
                setLocationID(data.locationID)
            });
        }
    }, []);

    const chooseLocation = (id: string) => {
        console.log(locationsFromDatabase.find(location => location.id === id));
        setLocationID(id);
        setPostalCode(locationsFromDatabase.find(location => location.id === id)?.postalCode.toString() ?? "");
        setLocation(locationsFromDatabase.find(location => location.id === id) ?? null)
    }

    const isFormValid = () => {
        return titleIsValid && shortDescriptionIsValid && typeIsValid && capacityIsValid && priceIsValid;
    }

    const submitHandler = (event: any) => {
        event.preventDefault();
        
        console.log(title, subtitle, description, categorization, type, personCount, price, location, postalCode, imageUrl, freeCancellation);
        fetch("https://devcademy.herokuapp.com/api/Accomodations/" + props.id, {
            method: props.id ? 'PUT' : 'POST',
            body: JSON.stringify({title, subtitle, description, shortDescription, type, categorization, personCount, imageUrl, freeCancellation, price, location: {...location}, locationID, capacity}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => (
            window.location.reload()
        ));
    }

    return (
        <Container>
            <Grid className={classes["wrapper"]} container direction="column" justifyContent="flex-start" alignItems="flex-start">
                <h2 className={classes["header"]}>Add new place</h2>
                <form className={classes["form"]} onSubmit={submitHandler}>
                    <TextField error={titleInputHasError} fullWidth label="Listing name" variant="outlined" 
                        value={title} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            titleChangeHandler(event.target.value);
                        }}
                        onBlur={titleBlurHandler}
                        helperText={titleInputHasError ? "Mandatory and maximum 100 characters." : null}
                    />
                    <TextField error={shortDescriptionInputHasError} fullWidth label="Short description" variant="outlined" 
                        value={shortDescription} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            shortDescriptionChangeHandler(event.target.value);
                        }}
                        onBlur={shortDescriptionBlurHandler}
                        helperText={shortDescriptionInputHasError ? "Maximum of 100 characters." : null}
                    />
                    <TextField multiline rows={4} fullWidth label="Long description" variant="outlined" 
                        value={description} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setDescription(event.target.value);
                        }}
                    />
                    <Grid container direction="row" justifyContent="space-between" alignItems="baseline">
                        <p>Categorization</p>
                        <Rating name="simple-controlled" 
                            value={categorization} 
                            onChange={(event, newValue) => {
                                setCategorization(newValue);
                            }}
                        />
                    </Grid>
                    <TextField error={typeInputHasError} fullWidth select label="Accommodation type"
                        value={type} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            typeChangeHandler(event.target.value);
                        }}
                        onBlur={typeBlurHandler}
                        helperText={typeInputHasError ? "Type of accommodation is mandatory." : null}
                    >
                        <MenuItem value={"Room"}>Room</MenuItem>
                        <MenuItem value={"Apartment"}>Apartment</MenuItem>
                        <MenuItem value={"Mobile home"}>Mobile home</MenuItem>
                    </TextField>
                    <TextField error={capacityInputHasError} type="number" fullWidth label="Capacity" variant="outlined" 
                        value={capacity ?? 0} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            capacityChangeHandler(parseInt(event.target.value));
                        }}
                        onBlur={capacityBlurHandler}
                        helperText={capacityInputHasError ? "Capacity is mandatory." : null}
                    />
                    <TextField error={priceInputHasError} type="number" fullWidth label="Price" variant="outlined" 
                        value={price} 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            priceChangeHandler(parseInt(event.target.value));
                        }}
                        onBlur={priceBlurHandler}
                        helperText={priceInputHasError ? "Price is mandatory." : null}
                    />
                    <TextField fullWidth select label="Location" variant="outlined" 
                        value={location?.id || ""} 
                        onChange={(event: React.ChangeEvent<any>) => {
                            chooseLocation(event.target.value);
                        }}>
                        {locationsFromDatabase.map((location) => (
                            <MenuItem key={location.id} value={location.id}>{location?.name}</MenuItem>
                        ))}
                        
                    </TextField>
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
                            defaultChecked
                            value={freeCancellation} 
                            onChange={(event, newValue) => {
                                setFreeCancellation(newValue);
                              }}/>
                    </Grid>
                    <Grid  container direction="row-reverse" justifyContent="space-between" alignItems="baseline">
                        <Button disabled={!isFormValid()} type="submit" className={classes["button"]} variant="contained">ADD NEW PLACE</Button>
                    </Grid>
                </form>
            </Grid>
        </Container>
    );
}

export default NewPlaceForm;