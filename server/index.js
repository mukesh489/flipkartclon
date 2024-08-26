import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { v4 as uuid } from 'uuid';
import helmet from 'helmet';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Routes from './routes/route.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8081;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use('/', Routes);

Connection();
DefaultData();

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {
    MID: process.env.PAYTM_MID,
    WEBSITE: process.env.PAYTM_WEBSITE,
    CHANNEL_ID: process.env.PAYTM_CHANNEL_ID,
    INDUSTRY_TYPE_ID: process.env.PAYTM_INDUSTRY_TYPE_ID,
    ORDER_ID: uuid(),  // Consider generating this per transaction
    CUST_ID: process.env.PAYTM_CUST_ID,
    TXN_AMOUNT: '100',
    CALLBACK_URL: 'http://localhost:3000/callback',
    EMAIL: 'my6888147@gmail.com',
    MOBILE_NO: '1234567852'
};
