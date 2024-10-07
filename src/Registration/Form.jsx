import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel,FormLabel,RadioGroup,FormControlLabel,Radio
    
 } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function Form() {
    const [loading, setLoading] = useState(false); // State for loading status

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        year: '',
        gender: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        setLoading(true); // Set loading to true when submitting

        event.preventDefault();

        try {
            const response = await fetch('https://eventregistration.fun:8000/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Form submitted successfully! Please check your Gmail/spam folder for the QR code.');
            } else if (response.status === 409) {
                alert('Email is already registered! Please check your Gmail/spam for the QR code.');
            } else {
                alert('There was an error submitting the form.');
            }

        } catch (error) {
            alert('Network error: ' + error.message);
        } finally {
            setLoading(false); // Reset loading status
        }
    };

    return (
        <div id="Container" >
            <form onSubmit={handleSubmit} className="container">
    <div className="input-container">
        <div className="input-content">
            <div className="input-dist" style={{ color: 'white' }}>
                <span id="SubscribeTXT">Register</span>

                <div className="input-type-2">
                    <TextField
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                        label="Name"
                        required
                        fullWidth
                        sx={{
                            input: { color: 'white' },
                            label: { color: 'white' },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: 'white' },
                                '&:hover fieldset': { borderColor: 'white' },
                                '&.Mui-focused fieldset': { borderColor: 'white' },
                            },
                        }}
                    />
                    <TextField
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                        label="Email"
                        required
                        type="email"
                        fullWidth
                        sx={{
                            input: { color: 'white' },
                            label: { color: 'white' },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: 'white' },
                                '&:hover fieldset': { borderColor: 'white' },
                                '&.Mui-focused fieldset': { borderColor: 'white' },
                            },
                        }}
                    />
                </div>

                {/* Year Radio Buttons */}
                <FormControl component="fieldset" margin="normal" sx={{ color: 'white' }}>
                    <FormLabel component="legend" sx={{ color: 'white' }}>Year</FormLabel>
                    <RadioGroup
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        row
                    >
                        <FormControlLabel
                            value="1st"
                            control={
                                <Radio
                                    sx={{
                                        color: 'white',
                                        '&.Mui-checked': { color: 'white' }
                                    }}
                                />
                            }
                            label="1st Year"
                        />
                        <FormControlLabel
                            value="2nd"
                            control={
                                <Radio
                                    sx={{
                                        color: 'white',
                                        '&.Mui-checked': { color: 'white' }
                                    }}
                                />
                            }
                            label="2nd Year"
                        />
                    </RadioGroup>
                </FormControl>

                {/* Gender Radio Buttons */}
                <FormControl component="fieldset" margin="normal" sx={{ color: 'white' }}>
                    <FormLabel component="legend" sx={{ color: 'white' }}>Gender</FormLabel>
                    <RadioGroup
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        row
                    >
                        <FormControlLabel
                            value="male"
                            control={
                                <Radio
                                    sx={{
                                        color: 'white',
                                        '&.Mui-checked': { color: 'white' }
                                    }}
                                />
                            }
                            label="Male"
                        />
                        <FormControlLabel
                            value="female"
                            control={
                                <Radio
                                    sx={{
                                        color: 'white',
                                        '&.Mui-checked': { color: 'white' }
                                    }}
                                />
                            }
                            label="Female"
                        />
                        <FormControlLabel
                            value="other"
                            control={
                                <Radio
                                    sx={{
                                        color: 'white',
                                        '&.Mui-checked': { color: 'white' }
                                    }}
                                />
                            }
                            label="Other"
                        />
                    </RadioGroup>
                </FormControl>

                <button>Submit</button>
            </div>
        </div>
    </div>
</form>

        
        </div>
    );
}

export default Form;
