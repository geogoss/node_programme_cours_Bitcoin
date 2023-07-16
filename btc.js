#!/usr/bin/env node

const axios = require('axios');

async function main() {

    // console.log(process.argv[2]);
    const currency = process.argv[2].toUpperCase();
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    
    const updatedAt = response.data.time.updated
    const rate = response.data.bpi[currency].rate
    console.log(`>1 BTC = ${rate} ${currency} (${updatedAt}) `);
}

main();



