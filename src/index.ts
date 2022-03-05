//?----------------------------Requiring ThirdParty Libraries-----------------------------//
import express from 'express';
import cors from 'cors';
import http from 'http';
const app = express();
//-----------------------------------------------------------------------------------------

//?---------------------------------Config Libs to App------------------------------------//
app.use(express.json());
app.use(cors());
//-----------------------------------------------------------------------------------------

//?------------------------------------Server Setup---------------------------------------//
const PORT = process.env.PORT || 1337; // if undefined let it be 1337.
const httpsServer = http.createServer(app); //
httpsServer.listen(PORT, () => {
	console.log('🟢 Server is running ... ');
});
//-----------------------------------------------------------------------------------------

//?---------------------------------Test Endpoint-----------------------------------------//
app.get('/test', (req, res) => res.json({ status: 'OK', time: new Date().toTimeString() }));
//-----------------------------------------------------------------------------------------
