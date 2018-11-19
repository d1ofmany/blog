import React from 'react';

import { storiesOf } from '@storybook/react';

storiesOf('Posts reducer', module)
    .addParameters({ jest: ['reducers/posts'] })
    .add('tests', () => <h1>Test: Posts reducers</h1>);