const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/e8c1376f04e245fc8286ae1cd76c6977'));

//criar conta	
let account = web3.eth.accounts.create();
console.log('Resultado da criacao da conta');
$('#conta').html(account.address);
$('#chavePrivada').html(account.privateKey);
console.log(account);


//criar carteira
let wallet = web3.eth.accounts.wallet.create();
console.log('Resultado da criacao da carteira');
$('#carteira').html(wallet.defaultKeyName);
console.log(wallet);

//adicionar a conta na carteira
let walletAccount = web3.eth.accounts.wallet.add(account);

console.log('Resultado da adicao da conta na carteira');
console.log(walletAccount);

// Armazena a carteira criptografada no armazenamento local‎. 
web3.eth.accounts.wallet.save('senha');
console.log('Carteira salva');










