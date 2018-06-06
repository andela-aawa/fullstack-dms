import Auth from '../app/middlewares/Auth';
import Documents from '../app/controllers/DocumentController';
import Users from '../app/controllers/UserController';
import Roles from '../app/controllers/RoleController';

export default (app) => {
  // Roles API Endpoints
  app.post('/roles', Auth.verifyToken, Auth.permitAdmin, Roles.create);
  app.get('/roles', Auth.verifyToken, Auth.permitAdmin, Roles.list);
  app.get('/roles/:id', Auth.verifyToken, Auth.permitAdmin, Roles.retrieve);
  app.put('/roles/:id', Auth.verifyToken, Auth.permitAdmin, Roles.update);
  app.delete('/roles/:id', Auth.verifyToken, Auth.permitAdmin, Roles.destroy);

  // Users API Endpoints
  app.post('/users', Auth.validateUserInput, Users.create);
  app.get('/users', Auth.verifyToken, Users.list);
  app.get('/users/:id', Auth.verifyToken, Users.retrieve);
  app.put('/users/:id', Auth.verifyToken, Users.update);
  app.delete('/users/:id', Auth.verifyToken, Auth.permitAdmin, Users.destroy);
  app.get('/users/:id/documents', Auth.verifyToken, Documents.userDocuments);
  app.get('/search/users', Auth.verifyToken, Users.search);
  app.post('/users/login', Auth.validateLoginInput, Users.login);
  app.post('/users/logout', Users.logout);

  // Documents API Endpoints
  app.post('/documents', Auth.verifyToken, Documents.create);
  app.get('/documents', Auth.verifyToken, Documents.list);
  app.get('/documents/:id', Auth.verifyToken, Documents.retrieve);
  app.put('/documents/:id', Auth.verifyToken, Auth.permitOwner, Documents.update);
  app.get('/search/documents', Auth.verifyToken, Documents.search);
  app.delete('/documents/:id', Auth.verifyToken, Documents.destroy);
};
