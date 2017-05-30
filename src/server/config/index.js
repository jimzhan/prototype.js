import objectAssign from 'object-assign';

import app from './app';
import db from './db';
import security from './security';

export default objectAssign(app, db, security);
