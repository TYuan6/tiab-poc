import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { storyblokInit, apiPlugin } from '@storyblok/react';

import Page from './components/Page';
import Teaser from './components/Teaser';
import Grid from './components/Grid';
import Feature from './components/Feature';

storyblokInit({
  accessToken: 'zqsx9hYQIA3lclhQdHFK7Att',
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
