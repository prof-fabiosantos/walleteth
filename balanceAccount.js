const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/e8c1376f04e245fc8286ae1cd76c6977'));
 
//‎Carrega uma carteira do armazenamento local e a descriptografa.‎
web3.eth.accounts.wallet.load('senha');

accounts = web3.eth.accounts.wallet;
console.log('Lista de contas da carteira');
console.log(accounts);

console.log('Endereco da conta 0');
console.log(accounts[0].address);
$('#conta').html(accounts[0].address);

console.log('Chave privada da conta 0');
console.log(accounts[0].privateKey);
$('#chavePrivada').html(accounts[0].privateKey);

//saldo
console.log('Saldo da conta');
web3.eth.getBalance(accounts[0].address)
.then(console.log);

web3.eth.getBalance(accounts[0].address, function(err, result) {
  if (err) {
    console.log(err)
  } else {
    console.log(web3.utils.fromWei(result, "ether") + " ETH")
	$('#saldo').html(web3.utils.fromWei(result, "ether") + " ETH");
  }
})
 



