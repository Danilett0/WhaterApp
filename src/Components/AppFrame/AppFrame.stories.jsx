import React from   'react';
import AppFrame from './AppFrame';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
    title: 'AppFrame',
    component: AppFrame
}

export const AppFrameExample = () => (
    <Router>
        <AppFrame>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae excepturi nobis rem eaque aspernatur, esse laboriosam enim nisi maxime animi obcaecati, temporibus quo, consequatur iure incidunt quas inventore. Ad.
        </AppFrame>
    </Router>
   
)

