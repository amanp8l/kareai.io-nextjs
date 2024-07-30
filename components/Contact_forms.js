const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const fs = require('fs');
const cors = require('cors');

// Ensure the credentials file path is correct
const keys = JSON.parse(fs.readFileSync('credentials.json'));

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const client = new google.auth.JWT(
  keys.client_email,
  null,
  keys.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize((err, tokens) => {
  if (err) {
    console.error('Error authorizing client:', err);
    return;
  }
  console.log('Connected to Google Sheets API');
});

const spreadsheetId = '1UEOySy_D7SBwAuv3zAeGfPIL_Vq54LMHxTKf0NH2pqE'; // Your Google Sheet ID

app.post('/contact', async (req, res) => {
  const { firstName, lastName, companyName, jobTitle, emailAddress, phoneNumber, message, agreedTerms } = req.body;

  if (!firstName || !lastName || !emailAddress || !agreedTerms) {
    return res.status(400).send('Missing required fields');
  }

  const sheets = google.sheets({ version: 'v4', auth: client });

  const request = {
    spreadsheetId,
    range: 'Sheet1!A2:H2', // Adjust the range as needed
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      values: [
        [firstName, lastName, companyName, jobTitle, emailAddress, phoneNumber, message, agreedTerms]
      ],
    },
  };

  try {
    const response = await sheets.spreadsheets.values.append(request);
    console.log('Data submitted successfully:', response.data);
    res.status(200).send('Data submitted successfully');
  } catch (err) {
    console.error('Error submitting data:', err);
    res.status(500).send('Error submitting data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
