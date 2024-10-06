import React, { useState } from 'react';
import { TextField, Button, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material';

const StudentForm = () => {
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
        event.preventDefault();

        const response = await fetch('https://formspree.io/f/xbljryvb', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Form submitted successfully!');
        } else {
            alert('There was an error submitting the form.');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ backgroundColor: "white" }}>
            <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />

            <FormControl component="fieldset" margin="normal" fullWidth>
                <FormLabel component="legend">Year</FormLabel>
                <RadioGroup
                    aria-label="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                >
                    <FormControlLabel value="1st" control={<Radio />} label="1st Year" />
                    <FormControlLabel value="2nd" control={<Radio />} label="2nd Year" />
                </RadioGroup>
            </FormControl>

            <FormControl component="fieldset" margin="normal" fullWidth>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
            </FormControl>

            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
};

export default StudentForm;
