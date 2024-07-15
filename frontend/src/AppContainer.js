// integration with django backend
// src/AppContainer.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AddRecipe from './AddRecipe';
import axios from 'axios';

const AppContainer = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = () => {
        axios.get('http://127.0.0.1:8000/api/recipes/')
            .then(response => {
                console.log('Fetched recipes:', response.data); // Debug log
                setRecipes(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the recipes!', error);
            });
    };

    const addNewRecipe = (recipe) => {
        console.log('Adding new recipe:', recipe); // Debug log
        setRecipes([...recipes, recipe]);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage recipes={recipes} />} />
                <Route path="/add-recipe" element={<AddRecipe addRecipe={addNewRecipe} />} />
            </Routes>
        </Router>
    );
};

export default AppContainer;




// // src/AppContainer.js
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import AddRecipe from './components/AddRecipe';
// import axios from 'axios';

// const AppContainer = () => {
//     const [recipes, setRecipes] = useState([]);

//     useEffect(() => {
//         fetchRecipes();
//     }, []);

//     const fetchRecipes = () => {
//         axios.get('http://your-ec2-public-dns/api/recipes/')
//             .then(response => {
//                 setRecipes(response.data);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the recipes!', error);
//             });
//     };

//     const addNewRecipe = (recipe) => {
//         setRecipes([...recipes, recipe]);
//     };

//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<HomePage recipes={recipes} />} />
//                 <Route path="/add-recipe" element={<AddRecipe addRecipe={addNewRecipe} />} />
//             </Routes>
//         </Router>
//     );
// };

// export default AppContainer;
