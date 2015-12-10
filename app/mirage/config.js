export default function() {

  this.namespace='api';

  this.get('/pokemon');
  this.get('/pokemon/:id');
  this.post('/pokemon');
  this.put('/pokemon/:id');
  this.del('/pokemon/:id');

  this.get('/items');
  this.get('/items/:id');
  this.post('/items');
  this.put('/items/:id');
  this.del('/items/:id');

  this.get('/generations');
  this.get('/generations/:id');
  this.post('/generations');
  this.put('/generations/:id');
  this.del('/generations/:id');

  this.get('/regions');
  this.get('/regions/:id');
  this.post('/regions');
  this.put('/regions/:id');
  this.del('/regions/:id');

}
