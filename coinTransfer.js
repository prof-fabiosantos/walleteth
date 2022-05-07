const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/e8c1376f04e245fc8286ae1cd76c6977'));

//‎Carrega uma carteira do armazenamento local e a descriptografa.‎
web3.eth.accounts.wallet.load('senha');

//obtem a lista de contas da carteira
let accounts = web3.eth.accounts.wallet;

// Lista de Chain ID's:
    const chainList = {
        mainnet: 1,
        morden: 2,
        ropsten: 3,
        rinkeby: 4,
        ubiqMainnet: 8,
        ubiqTestnet: 9,
        rootstockMainnet: 30,
        rootstockTestnet: 31,
        kovan: 42,
        ethereumClassicMainnet: 61,
        ethereumClassicTestnet: 62,
        ewasmTestnet: 66,
        gethPrivateChains: 1337
    };
//define 1 segundo de espera	
const expectedBlockTime = 1000;

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}



async function sendETH() {
	
		input_value = $('#value').val();
		console.log("Quantidade de ETH: "+input_value);
		input_address = $('#addressRecipient').val();
		console.log("Endereço do Destinatário: "+input_address);
		
		web3.eth.sendTransaction({
			gasLimit: web3.utils.toHex('53000'),
			from: accounts[0].address,
			to: input_address,
			value: input_value,
			chainId: web3.utils.toHex(chainList.rospten)
				
		}, async function(error, transactonHash){
				let transactionReceipt = null
				//A fim de esperar que a transação seja minerada pela rede,
				//vamos pesquisar continuamente a transaçãoReceipt a partir de nossa instância web3 até que seja diferente de nulo
				while (transactionReceipt == null) { 
					transactionReceipt = await web3.eth.getTransactionReceipt(transactonHash); //verifica se a transação especificada foi bem sucedida
					await sleep(expectedBlockTime) //faz com que o programa espere entre cada solicitação para o recebimento da transação
				}
				$('#hash').html(transactonHash);		
				$('#animacao').hide();
				console.log(transactonHash);
				if (transactonHash == null)
					console.log(error);
		});
}

