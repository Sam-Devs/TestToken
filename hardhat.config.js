/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
task("Balance", "Print account's balance")
.addParam("account", "The account's address")
.setAction(async taskArgs=> {
  const account = await web3.utils.toChecksumAddress(taskArgs.account);
  const balance = await web3.eth.getbalance(account);
  console.log(web3.utils.fromWei(balance, 'ether'), "ETH");
})

module.exports = {
  solidity: "0.7.3",
};
