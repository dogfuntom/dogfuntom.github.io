Users share YouTube watch history with us and get video recommendations (what did users with similar histories watch), and also get corresponding quantities of our coins.

## transparency

To prove that our video recommendation extension sustains privacy and is trustworthy, we made it [source-available](https://en.wikipedia.org/wiki/Source-available_software) ([without a license](https://choosealicense.com/no-permission/)). Furthermore, it’s [buildless](https://modern-web.dev/guides/going-buildless/getting-started/) – no obfuscation, no minimization, no bundling. Similarly, the smart contract is [audit-friendly](#blockchain-smart-contract-fungible-token).

## implementation

- front-end: Firefox and Chrome browser extensions; the format is WebExtension, which is almost the same as making a static HTML, CSS, JS website
- cryptocurrency as the rewards: a typical ERC20 (fungible token) smart contract in Ethereum (more accurately, in Binance)
- back-end for the reward system: REST server app (done using Express) and PostgreSQL database, both hosted on the *DigitalOcean App Platform*
- MetaMask integration (Ethereum JSON-RPC)

## conclusion

We published an alpha version of the extension for free and attempted to promote it on relevant social media groups/hashtags/subreddits. Of course, the aforementioned rewards were a part of our marketing strategy. After getting a disappointing number of users, we had to cancel the project.
