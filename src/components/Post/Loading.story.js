import React from 'react';

import { storiesOf } from '@storybook/react';

import Loading from './Loading.jsx';

storiesOf('Loading', module)
    .addParameters({ jest: ['Loading'] })
    .add('default', () => <Loading />);
