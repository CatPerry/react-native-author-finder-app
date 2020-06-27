import registerRootComponent from 'expo/build/launch/registerRootComponent';
import 'isomorphic-fetch';

import { App } from './components/App';

registerRootComponent(App);
