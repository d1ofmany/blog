import { configure, addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';

import results from '../.test-results.json';

const req = require.context('../src/', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(
  withTests({
    results,
  })
);

configure(loadStories, module);
