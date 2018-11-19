import React from 'react';

import { storiesOf } from '@storybook/react';

storiesOf('Posts actions', module)
    .addParameters({ jest: ['actions/posts'] })
    .add('tests', () => <h1>Test: Posts actions</h1>);

