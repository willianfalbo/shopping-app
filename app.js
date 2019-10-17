const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressHbs = require('express-handlebars');

const errorController = require('./controllers/errorController');
const User = require('./models/user');

const app = express();

// configuration for handlebars
app.engine(
  'hbs',
  expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
  })
);
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminRoutes = require('./routes/adminRoute');
const shopRoutes = require('./routes/shopRoute');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('5baa2528563f16379fc8a610')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://shoppingapp:wSIFMCulwjjeecF4@freecluster-uyaue.mongodb.net/shopping-db?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(result => {
    User.findById('5baa2528563f16379fc8a610')
    .then(user => {
      if (!user) {
        const user = new User({
          _id: '5baa2528563f16379fc8a610',
          name: 'Willian',
          email: 'willian@gmail.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(3000);
    console.log('listening on port 3000');
  })
  .catch(err => {
    console.log(err);
  });
