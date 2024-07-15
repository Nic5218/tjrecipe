// integration with django backend
// src/HomePage.js
import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ recipes }) => {
    const navigate = useNavigate();

    const handleAddRecipe = () => {
        navigate('/add-recipe');
    };

    return (
        <div>
            <Typography variant="h2" gutterBottom>Recipe List</Typography>
            <Button variant="contained" color="primary" onClick={handleAddRecipe}>
                Add Recipe
            </Button>
            <Grid container spacing={4} style={{ marginTop: '20px' }}>
                {recipes.map(recipe => (
                    <Grid item key={recipe.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {recipe.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {recipe.ingredients}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default HomePage;





// // src/HomePage.js
// import React from 'react';
// import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const HomePage = ({ recipes }) => {
//     const navigate = useNavigate();

//     const handleAddRecipe = () => {
//         navigate('/add-recipe');
//     };

//     return (
//         <div>
//             <Typography variant="h2" gutterBottom>Recipe List</Typography>
//             <Button variant="contained" color="primary" onClick={handleAddRecipe}>
//                 Add Recipe
//             </Button>
//             <Grid container spacing={4} style={{ marginTop: '20px' }}>
//                 {recipes.map(recipe => (
//                     <Grid item key={recipe.id} xs={12} sm={6} md={4}>
//                         <Card>
//                             <CardContent>
//                                 <Typography variant="h5" component="div">
//                                     {recipe.name}
//                                 </Typography>
//                                 <Typography variant="body2" color="textSecondary">
//                                     {recipe.ingredients}
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </div>
//     );
// };

// export default HomePage;
