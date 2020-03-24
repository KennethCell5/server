import Famous from '../models/Famous';

export const createFamous = [
  'update-famous',
  function(request) {
    Famous.update(
      { _id: request.id },
      {
        $set: { firstname: request.firstname }
      }
    );

    return Famous.findOne({ _id: request.id });
  },
  {
    url: 'update-famous',
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
