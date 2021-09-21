require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift renew stick exchange give process slot gift'; 
let testAccounts = [
"0xda032b29342586b4c0f22ac442ed4d5afc22915c7df68a7b299dfc3844607ba0",
"0x34244a3d4aab8d91ccbc9dffe811c5492b999af74e282ae3519276822c12c875",
"0x624c8067dba31446532a05856b16bc90211fa1de7cdb01db7b0cc696b1626410",
"0x28ae8f5a2c9cfc87185be452022eecdbd812648cca031dba0224e83160881a72",
"0xe3260cbc3891f0ecbf538537fad5d7241dca49d17b30663727f18a9b14c90f23",
"0x3546f79f6942be520e190d1d0d80b5ab876cbcbc27a9d7960840176329cf54dc",
"0x5fecaaf91a4f83a63ce3d2e5096efc3678625070da690b11b8681c5e933fe500",
"0xfd5171cae659fd9e7944628e124af758233c90929cf0868f56eff4cdba06afe2",
"0xeec8154d296bc262b14ef78698fb7ae931b547b98745b72bb595902abcbadbcb",
"0x0666d501b53801bc9c99b4ecda3a544dc0b0b2c91462736564a509db282fb46f"
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
            version: '^0.8.0'
        }
    }
};

