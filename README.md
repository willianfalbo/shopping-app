## Shopping App

Simple application for shopping. It was created for demonstration purpose only.

### Features

- Authentication: Sign-up, login, logout and reset password e-mail.
- Shopping: Paginated product listing, product details and so on.
- Cart: Add different products to cart and visualise checkout page.
- Orders & Payments: Create orders, enter credit card details, get pdf receipt and view orders.
- Product Management: Upload photos, create products, update and delete.

### Quick Preview

**Customer Area**
<kbd>
    <img src="./quick-preview.gif">
</kbd>

**Admin Area**
<kbd>
    <img src="./quick-preview-admin.gif">
</kbd>

### Quick Start

1. Run `npm i` to install package dependencies.

2. Run `cp .env.sample .env` to create the configuration file.
    > **NOTE:** Please make the proper changes in ".env" file. 
    >
    > \* For **sending e-mails**, you must create an account in [SendGrid](https://sendgrid.com). Then, navigate to "Settings > API Keys" menu, generate a new key and change your config file using the generated token.
    >
    > \* For **using payments**, you must create an account in [Stripe](https://stripe.com). Then, navigate to "Developers > API Keys" menu, copy the Publishable/Secret keys and change your config file using these tokens. ** **You must set an account name; otherwise, it will not work**.

3. Run `docker-compose up --build` to set up a quick database. _** You can skip this step if you don't want to use Docker._

    > **IMPORTANT:** Before running above command, make sure you have [docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed. * It runs the **docker-compose.yml** file.

4. Run `npm run seed` to Seed data into the database.

    > This command creates a couple of products and the Admin user (Username: `admin@gmail.com` / Password: `password`).

5. Run `npm run start:dev` for starting the server.

### Stack

- Node.js & Javascript
- MVC pattern & Express.js
- EJS as templating engine
- MongoDB database & Mongoose.js ODM
- Session authentication & Password-Hashing with bcrypt
- File uploads with Multer
- Nodemailer for sending e-mails & SendGrid
- Payment processing with Stripe
- Pdfkit for generating PDF documents
- Loggin files with Morgan

### Credits

This App was created based on [Maximilian Schwarzmüller](https://academind.com/team/#maximilian)'s course. [NodeJS - The Complete Guide](https://academind.com/learn/our-courses/).
