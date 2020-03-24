import { Meteor } from 'meteor/meteor';
import { cors } from './config';
import Seeder from './db/seeder';
import { getFamous, createFamous } from './controllers/FamousController';

Meteor.startup(() => {
  // SEEDER
  Seeder.famous();

  // ROUTES
  Meteor.method(...getFamous); // url: 'get-famous'
  Meteor.method(...createFamous); // url: 'create-famous'

  // CROSS ORIGIN
  JsonRoutes.setResponseHeaders(cors);
});
