selector_to_html = {"a[href=\"#events\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Events<a class=\"headerlink\" href=\"#events\" title=\"Link to this heading\">#</a></h2>", "a[href=\"../tutorials/nft-minting/index.html#nft-index\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Mint an NFT<a class=\"headerlink\" href=\"#mint-an-nft\" title=\"Link to this heading\">#</a></h1><p>In this tutorial, you are going to mint an NFT on Concordium blockchain. First you will learn the basics to set up your development environment. Note that in this tutorial most of the commands are for UNIX-like systems and will not work on Windows.</p><p>All development is completed using <code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-client</span></code> and includes the following examples:</p>", "a[href=\"../tutorials/piggy-bank/deploying.html#piggy-bank-deploying\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Deploying the piggy bank smart contract<a class=\"headerlink\" href=\"#deploying-the-piggy-bank-smart-contract\" title=\"Link to this heading\">#</a></h1><p>This is the third <a class=\"reference internal\" href=\"../tutorials/piggy-bank/index.html#piggy-bank\"><span class=\"std std-ref\">part of a tutorial</span></a> on smart contract\ndevelopment.\nSo far you have written and tested a piggy bank smart contract in the <a class=\"reference external\" href=\"https://www.rust-lang.org/\">Rust</a> programming language.</p><p>This part focuses on how you can deploy your developed piggy bank smart contract to the Concordium testnet and interact with it.</p>", "a[href=\"../tutorials/sft-minting/index.html#sft-index\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Mint a semi-fungible token<a class=\"headerlink\" href=\"#mint-a-semi-fungible-token\" title=\"Link to this heading\">#</a></h1><p>In this tutorial, you will learn how to mint semi-fungible tokens on Concordium testnet with <code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-client</span></code>, the Concordium command line interface tool.  In the <a class=\"reference internal\" href=\"../tutorials/nft-minting/index.html#nft-index\"><span class=\"std std-ref\">NFT minting tutorial</span></a>, you learned many things, including how you can mint an NFT on Concordium and set up your development environment with node configurations, wallet and key exports, build, deploy, initialize, mint and transfer. The process in this tutorial will be the same as the first tutorial: first is the wallet setup and key exports, then the storage solutions and preparation of metadata, and finally the development part including minting, transferring and querying balances.</p><p>Before you start this tutorial, if you have not completed your development environment setup, see <a class=\"reference internal\" href=\"../tutorials/setup-env.html#setup-env\"><span class=\"std std-ref\">Setup the development environment</span></a>. This tutorial assumes you\u2019ve already configured your environment, have a node running, and installed your web wallet and exported its key.</p>", "a[href=\"#deploying-and-initializing-smart-contracts\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Deploying and initializing smart contracts<a class=\"headerlink\" href=\"#deploying-and-initializing-smart-contracts\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#faq-for-ethereum-developers\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">FAQ for Ethereum developers<a class=\"headerlink\" href=\"#faq-for-ethereum-developers\" title=\"Link to this heading\">#</a></h1><p>The following Frequently Asked Questions about Concordium\nfocuses on helping developers with an Ethereum/solidity\nbackground to understand the Concordium blockchain and its smart contract ecosystem.</p><p>Feel free to participate and add your questions to the <a class=\"reference external\" href=\"https://support.concordium.software/\">Concordium software support channels</a>.</p>", "a[href=\"../general/contract-instances.html#contract-instance-upgradeability\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Upgradeability<a class=\"headerlink\" href=\"#upgradeability\" title=\"Link to this heading\">#</a></h2><p>A V1 smart contract instance can choose to upgrade its module to a new V1 smart contract\nmodule using the <strong>upgrade</strong> host function.\nThe host function takes a reference to a deployed smart contract module to use for\nthe upgraded instance and can only be called from a receive function.\nThe host function returns whether the upgrade succeeded, allowing the instance\nto decide the next step. If the upgrade is successful any new invocations of the\nupgraded instance uses the smart contract code in the new module.</p>", "a[href=\"#standards\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Standards<a class=\"headerlink\" href=\"#standards\" title=\"Link to this heading\">#</a></h2>", "a[href=\"../tutorials/nft-marketplace/index.html#nft-marketplace-index\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">NFT marketplace smart contract tutorial<a class=\"headerlink\" href=\"#nft-marketplace-smart-contract-tutorial\" title=\"Link to this heading\">#</a></h1><p>In this tutorial you will create an NFT Marketplace. The <a class=\"reference external\" href=\"https://github.com/chainorders/concordium-nft-tutorials\">contract</a> provides some functionalities, such as minting semi-fungible, and non-fungible tokens, buying and selling NFTs with fixed prices, setting commissions for your marketplace, and setting royalties for your NFTs to get some fees from secondary sales in this marketplace. Before you start, it is important to note that this is not a beginner-level tutorial; it does not cover the basics like downloads, node configurations, wallet setup and export, and so on.</p><p>This tutorial will be the first part of the Marketplace. There will be no UI interaction. You will invoke the functions with <code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-client</span></code>. In the end, while implementing a dApp, what you have to do is implement a client that connects your backend with the blockchain. <code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-client</span></code> is that client and does that. In the second part which will be released soon, you will implement this marketplace from scratch with an empty React template.</p>", "a[href=\"#concordium-smart-contracts\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Concordium smart contracts<a class=\"headerlink\" href=\"#concordium-smart-contracts\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#miscellaneous\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Miscellaneous<a class=\"headerlink\" href=\"#miscellaneous\" title=\"Link to this heading\">#</a></h2>", "a[href=\"../general/contract-schema.html#contract-schema\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Smart contract schemas<a class=\"headerlink\" href=\"#smart-contract-schemas\" title=\"Link to this heading\">#</a></h1><p>A smart contract schema is a description of how to represent bytes in a more\nstructured representation. It can be used by external tools when displaying the\nreturn value of a receive function and for specifying parameters using a\nstructured representation, such as JSON.</p>", "a[href=\"#concordium-tools\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Concordium tools<a class=\"headerlink\" href=\"#concordium-tools\" title=\"Link to this heading\">#</a></h2>", "a[href=\"../../net/concepts/concepts-transactions.html#transactions-overview\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Transactions overview<a class=\"headerlink\" href=\"#transactions-overview\" title=\"Link to this heading\">#</a></h1><p>A transaction on the Concordium blockchain is an operation which applies some change to the chain. All transactions are recorded on the chain and once recorded, they are immutable. A transaction always has one sender <a class=\"reference internal\" href=\"../../net/resources/glossary.html#term-Account\"><span class=\"xref std std-term\">account</span></a> and is signed using the <a class=\"reference internal\" href=\"../../net/resources/glossary.html#term-Private-keys\"><span class=\"xref std std-term\">keys</span></a> of this account.</p><p>The most basic transaction is the CCD transfer that is used to send CCD from one account to another. However, there are several transaction types on the Concordium blockchain.</p>", "a[href=\"../tutorials/piggy-bank/testing.html#piggy-bank-testing\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Testing the piggy bank smart contract<a class=\"headerlink\" href=\"#testing-the-piggy-bank-smart-contract\" title=\"Link to this heading\">#</a></h1><p>This is the second <a class=\"reference internal\" href=\"../tutorials/piggy-bank/index.html#piggy-bank\"><span class=\"std std-ref\">part of a tutorial</span></a> on smart contract\ndevelopment.\nSo far you have written a piggy bank smart contract in the <a class=\"reference external\" href=\"https://www.rust-lang.org/\">Rust</a> programming\nlanguage.\nThis part will focus on how you can write integration-tests for your piggy bank smart\ncontract using the <a class=\"reference external\" href=\"https://docs.rs/concordium-smart-contract-testing/latest/concordium_smart_contract_testing/\"><code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-smart-contract-testing</span></code></a> library.\nThe library simulates part of a blockchain <em>locally</em> to allow you to create one or more contracts and interact with them in the tests.</p>", "a[href=\"../tutorials/piggy-bank/writing.html#piggy-bank-writing\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Writing the piggy bank smart contract<a class=\"headerlink\" href=\"#writing-the-piggy-bank-smart-contract\" title=\"Link to this heading\">#</a></h1><p>This is the first <a class=\"reference internal\" href=\"../tutorials/piggy-bank/index.html#piggy-bank\"><span class=\"std std-ref\">part of a tutorial</span></a> on smart contract\ndevelopment. In this part you will focus on how to write a smart contract in the\n<a class=\"reference external\" href=\"https://www.rust-lang.org/\">Rust</a> programming language using the <code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-std</span></code> library.</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};