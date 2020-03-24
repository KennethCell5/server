import Famous from '../models/Famous';

export const createFamous = [
  'create-famous',
  function(request) {
    return FamousList.insert(request);
  },
  {
    url: 'create-famous',
    getArgsFromRequest: function(request) {
      return [request.body];
    }
  }
];

export const getFamous = [
  'get-famous',
  function(request) {
    return Famous.find({}).fetch();
  },
  {
    url: 'get-famous',
    getArgsFromRequest: function(request) {
      return [request.body];
    }
  }
];
