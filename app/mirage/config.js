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

}
