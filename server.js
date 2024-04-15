const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Update with your Angular app's origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Define your API endpoint to receive form data
app.post('/sendEmail', (req, res) => {
    // Form data
    const { shipmentData, recipientData, senderData } = req.body;

    // Construct the email message
    const emailMessage = `
        Shipment Data:
        Description: ${shipmentData.description}
        Optional Weight: ${shipmentData.optionalWeight}
        Optional Dimensions: ${shipmentData.optionalDimensions}
        Notes: ${shipmentData.notes}

        Recipient Data:
        Full Name: ${recipientData.fullName}
        Mobile Number: ${recipientData.mobileNumber}
        Optional Email: ${recipientData.optionalEmail}
        Delivery Address: ${recipientData.deliveryAddress}

        Sender Data:
        Full Name: ${senderData.fullName}
        Mobile Number: ${senderData.mobileNumber}
        Optional Email: ${senderData.optionalEmail}
        Delivery Address: ${senderData.deliveryAddress}
    `;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'Talataezz@gmail.com',
            pass: 'rcpw rgih jfzn ksnl'
        }
    });

    // Define email options
    const mailOptions = {
        from: 'Talataezz@gmail.com',
        to: 'mohamednab5051@gmail.com',
        subject: 'Form Submission',
        text: emailMessage
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email: ' + error.message);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
