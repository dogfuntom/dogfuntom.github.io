Users share YouTube watch history with us and get video recommendations (what did users with similar histories watch), and also get corresponding quantities of our coins.

## transparency

To prove that our video recommendation extension sustains privacy and is trustworthy, we made it [source-available](https://en.wikipedia.org/wiki/Source-available_software) ([without a license](https://choosealicense.com/no-permission/)). Furthermore, it’s [buildless](https://modern-web.dev/guides/going-buildless/getting-started/) – no obfuscation, no minimization, no bundling. Similarly, the smart contract is [audit-friendly](#blockchain-smart-contract-fungible-token).

## implementation

### frontend (the extension)

At first we wanted to fork [youtube-watchmarker](https://github.com/sniklaus/youtube-watchmarker) that “asks” YouTube for user's watch history. Soon we figured out that for our use cases “asking” the browser is better.

### blockchain, smart contract, fungible token

At first, we created a [completely ordinary ERC20/BEP20 “currency”][token] by publishing onto the Binance's BNB Smart Chain a completely simple smart contract written in Solidity.

Luckily, before we began using it we realized that there's a potential for easy yet huge cost optimization – one big operation is radically cheaper than many small ones. So, we added our own methods – wrappers that take arrays in place of single values and call the wrapped builtin methods in a loop.

While at it, we figured that for transparency a simple import is better than dependency-free approach. After this change our [modifications are isolated and apparent](https://vscode.blockscan.com/56/0x41664b1316fceac8578801bd6eb130ef0cfbec69), and the rest is done by a [trustable third party](https://docs.openzeppelin.com/contracts/4.x/erc20) with conveniently proper distribution of code across files and folders.

### backends

#### MetaMask wallet

At the time wallet standards were at their infancy and the wallets hardly tried to cooperate in establishing them. Thus, it wasn't possible to support a choice of wallets without half of code being hacks and workarounds. Anyway, only MetaMask had both the popularity and the decent official documentation.

As a result, we [used eth_signTypedData_v4](https://github.com/dogfuntom/REEE/tree/2f0ae9ebea3e416d53d8ad0c91d7e0ce380bd071/metaMaskPage).

## conclusion

We published an alpha version of the extension for free and attempted to promote it on relevant social media groups/hashtags/subreddits. Of course, the aforementioned rewards were a part of our marketing strategy. After getting a disappointing number of users, we had to cancel the project.
