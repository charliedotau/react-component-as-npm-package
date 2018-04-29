/*** src/index.js   ***/
import React from 'react';

import GiphySelect from 'react-giphy-select';
import 'react-giphy-select/lib/styles.css';

import './styles.css';
const MyComponent = () => (
    <div>
    <h1>Hello from My Component</h1>
    <p>here are some gifs</p>
    <GiphySelect />

    </div>

);
export default MyComponent;