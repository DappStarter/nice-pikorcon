require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun foot alley remember saddle erase hunt immense army gauge'; 
let testAccounts = [
"0xaf2ad43f032c8c310f0b30a3b25bfd3c31443a1efb9e8d299b3e5b131f534a98",
"0x5d3e6f43e136c3411c9a83afcf10169a10791582b51ce701f34315a364a372f4",
"0x3e4fcd94d1a973cf38aeeb1f9426caaf41d2a84dee66d17670e80c56a1dee0e3",
"0x009023df236bb5899f1f81e571f2855eef7e23247d2de307bb74371feea3309e",
"0x81f4758e9ddd823bf159b0e5a4d98a080da3884a8c75477a1fd29386584f6691",
"0x7b7eb2873a5d909bf3e1c0b832c6b78fc3ee815dd08d0211b0dc3644c365ffdd",
"0x57ba56ef6f82e7c7e0578fd4d57ac081646724e8a2dcfb119a7ddcef0018a059",
"0x2ef915c95076c275355e204ce19f2511085d5e1d547da5a84d3d1d17f39d789d",
"0x37716d31dcbac85f50757cb864755ba3117b7257551ab0d8dc964bebd4518ebd",
"0x1400d7e10c9fd39fc76f3020d4a3314c7e2ee65c7754b3704352ea6ff64d6486"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
