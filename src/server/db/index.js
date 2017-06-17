import { ObjectID } from 'mongodb';

const Key = () => (new ObjectID()).toHexString();

export default Key;
