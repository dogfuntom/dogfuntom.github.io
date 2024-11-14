## transparency

To prove that our video recommendation extension sustains privacy and is trustworthy, we opened most of the source (without license – in pedantic terminology, it’s *source available* instead of FOSS). Namely, the [frontend](https://github.com/dogfuntom/REEE) and the smart contract are buildless (no obfuscation, no minimization, no bundling) – i.e. former’s sources can be read in browser builtin tools and the latter’s – in BscScan.

## implementation

- front-end: Firefox and Chrome browser extensions; the format is WebExtension, which is almost the same as making a static HTML, CSS, JS website
- cryptocurrency as the rewards: a typical ERC20 (fungible token) smart contract in Ethereum (more accurately, in Binance)
- back-end for the reward system: REST server app (done using Express) and PostgreSQL database, both hosted on the *DigitalOcean App Platform*
- MetaMask integration (Ethereum JSON-RPC)

## conclusion

We published an alpha version of the extension for free and attempted to promote it on relevant social media groups/hashtags/subreddits. Of course, the aforementioned rewards were a part of our marketing strategy. After getting a disappointing number of users, we had to cancel the project.
