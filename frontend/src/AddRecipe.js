// integration with django backend
// src/AddRecipe.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddRecipe = ({ addRecipe }) => {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipe = { name, ingredients };

        console.log('Submitting recipe:', recipe); // Debug log

        axios.post('http://127.0.0.1:8000/api/recipes/', recipe)
            .then(response => {
                console.log('Recipe added!', response.data); // Debug log
                addRecipe(response.data);
                navigate('/');
            })
            .catch(error => {
                console.error('There was an error adding the recipe!', error);
            });
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Add Recipe</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Recipe Name"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Ingredients (comma separated)"
                    fullWidth
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    margin="normal"
                />
                <Button variant="contained" color="primary" type="submit">
                    Add Recipe
                </Button>
            </form>
        </Container>
    );
};

export default AddRecipe;




// // src/AddRecipe.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { TextField, Button, Container, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const AddRecipe = ({ addRecipe }) => {
//     const [name, setName] = useState('');
//     const [ingredients, setIngredients] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const recipe = { name, ingredients };

//         axios.post('http://your-ec2-public-dns/api/recipes/', recipe)
//             .then(response => {
//                 console.log('Recipe added!', response.data);
//                 addRecipe(response.data);
//                 navigate('/');
//             })
//             .catch(error => {
//                 console.error('There was an error adding the recipe!', error);
//             });
//     };

//     return (
//         <Container>
//             <Typography variant="h4" gutterBottom>Add Recipe</Typography>
//             <form onSubmit={handleSubmit}>
//                 <TextField
//                     label="Recipe Name"
//                     fullWidth
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     margin="normal"
//                 />
//                 <TextField
//                     label="Ingredients (comma separated)"
//                     fullWidth
//                     value={ingredients}
//                     onChange={(e) => setIngredients(e.target.value)}
//                     margin="normal"
//                 />
//                 <Button variant="contained" color="primary" type="submit">
//                     Add Recipe
//                 </Button>
//             </form>
//         </Container>
//     );
// };

// export default AddRecipe;
