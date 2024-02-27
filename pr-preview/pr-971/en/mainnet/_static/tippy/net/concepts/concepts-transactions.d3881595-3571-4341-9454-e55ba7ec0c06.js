selector_to_html = {"a[href=\"#tools\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Tools<a class=\"headerlink\" href=\"#tools\" title=\"Link to this heading\">#</a></h2><h3>The Desktop Wallet<a class=\"headerlink\" href=\"#the-desktop-wallet\" title=\"Link to this heading\">#</a></h3><p>The Desktop Wallet is a digital wallet that enables you to create and manage your Concordium identities, credentials, and accounts from your desktop and to create transactions such as sending CCD, adding a validator, and exporting and importing account information.</p>", "a[href=\"#the-bw\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">The Concordium Wallet for Web<a class=\"headerlink\" href=\"#the-bw\" title=\"Link to this heading\">#</a></h3><p>The Concordium Wallet for Web is a web wallet extension that enables you to create and manage your Concordium identities and accounts, to create simple transactions, validate and delegate, and to connect to dApps.</p>", "a[href=\"../references/transactions.html#transactions\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Concordium Client transactions<a class=\"headerlink\" href=\"#concordium-client-transactions\" title=\"Link to this heading\">#</a></h1><p>You can perform all types of transactions with the <a class=\"reference internal\" href=\"../references/concordium-client.html#concordium-client\"><span class=\"std std-ref\">concordium-client</span></a>. To do so, you use specialized subcommands. For an introduction to transactions, see <a class=\"reference internal\" href=\"../concepts/concepts-transactions.html#transactions-overview\"><span class=\"std std-ref\">Transactions overview</span></a>.</p>", "a[href=\"#transactions-overview\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Transactions overview<a class=\"headerlink\" href=\"#transactions-overview\" title=\"Link to this heading\">#</a></h1><p>A transaction on the Concordium blockchain is an operation which applies some change to the chain. All transactions are recorded on the chain and once recorded, they are immutable. A transaction always has one sender <a class=\"reference internal\" href=\"../resources/glossary.html#term-Account\"><span class=\"xref std std-term\">account</span></a> and is signed using the <a class=\"reference internal\" href=\"../resources/glossary.html#term-Private-keys\"><span class=\"xref std std-term\">keys</span></a> of this account.</p><p>The most basic transaction is the CCD transfer that is used to send CCD from one account to another. However, there are several transaction types on the Concordium blockchain.</p>", "a[href=\"#transaction-fees\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Transaction fees<a class=\"headerlink\" href=\"#transaction-fees\" title=\"Link to this heading\">#</a></h2><p>Every transaction has a well-defined <em>fee</em>, and the fee of each transaction depends on the transaction type. When the transaction is submitted to the chain, the fee is deducted from the sender\u2019s account and paid to the Concordium network as a fee for carrying out the transaction. The fee is measured in the unit NRG which corresponds to CCD according to a variable conversion factor (currently 1 NRG = 0.0001 CCD). The cost of transaction fees is stable in Euros, and therefore the price in CCD varies depending on the CCD to EUR exchange rate. Read more about conversions between CCD, NRG, and Euros in <a class=\"reference internal\" href=\"../references/query-node.html#exchange-rates\"><span class=\"std std-ref\">Exchange rates</span></a>.</p><p>The fee will always be deducted from the <strong>Balance</strong> of the account, so it is important to have some available CCDs to cover fees.</p>", "a[href=\"../references/concordium-client.html#concordium-client\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Concordium Client<a class=\"headerlink\" href=\"#concordium-client\" title=\"Link to this heading\">#</a></h1><p>The Concordium distribution ships with a CLI tool named <code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-client</span></code>.</p><p>By default <code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-client</span></code> performs its queries and sends transactions\nthrough a <a class=\"reference internal\" href=\"../guides/run-node.html#run-a-node\"><span class=\"std std-ref\">local node</span></a>. If the node runs on a different machine\nor in a custom setup, the options <code class=\"docutils literal notranslate\"><span class=\"pre\">--grpc-ip</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">--grpc-port</span></code> can be used\nto set the <a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/IP_address\">IP address</a> and <a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/Port_(computer_networking)\">port number</a> where the node is accessible. These\nflags are supported by all <code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-client</span></code> commands. Note that as of version\n5.1.1, the <a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/Port_(computer_networking)\">port number</a> must be the port where the GRPC V2 interface is enabled, in contrast to previous versions which required the port number of the V1 API of the Concordium node.</p>", "a[href=\"../resources/glossary.html#term-Transaction-Sequence-Number\"]": "<dt id=\"term-Transaction-Sequence-Number\">Transaction Sequence Number</dt><dd><p>A sequence number that orders <a class=\"reference internal\" href=\"#term-Transaction\"><span class=\"xref std std-term\">transaction</span></a> on a given <a class=\"reference internal\" href=\"#term-Account\"><span class=\"xref std std-term\">account</span></a>. In a ledger, all transactions for an account must be ordered with consecutive transaction sequence numbers, starting from 1. Transaction sequence numbers ensure that a transaction cannot be repeated in the ledger, and that the transactions occur in the order intended by the sender account holder.</p></dd>", "a[href=\"../resources/glossary.html#term-Account\"]": "<dt id=\"term-Account\">Account</dt><dd><p>An addressable store of funds on the blockchain. An account is associated with one or more <em>account keys</em> that can be used to authorize transactions originating from the account, as well as with an <a class=\"reference internal\" href=\"#term-Encryption-key\"><span class=\"xref std std-term\">encryption key</span></a> that can be used to send shielded transfers to the account. An account is also associated with the account holder\u2019s <a class=\"reference internal\" href=\"#term-Identity\"><span class=\"xref std std-term\">identity</span></a>, although this association is encrypted for anonymity. This anonymity can only be revoked by <a class=\"reference internal\" href=\"#term-Anonymity-revoker\"><span class=\"xref std std-term\">anonymity revokers</span></a>, in cooperation with the account\u2019s <a class=\"reference internal\" href=\"#term-Identity-Provider\"><span class=\"xref std std-term\">identity provider</span></a>.</p></dd>", "a[href=\"#the-mw-gen1\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">The Concordium Legacy Wallet<a class=\"headerlink\" href=\"#the-mw-gen1\" title=\"Link to this heading\">#</a></h3><p>The Concordium Legacy Wallet is a digital smartphone wallet that enables you to create and manage your Concordium identities and accounts, to create simple and shielded transactions, validate and delegate, and to export and import your accounts and identities. If you are a validator who runs a staking pool, it is not possible for pool owners to set the commissions in the Concordium Legacy Wallet; they are fixed at 10%. If you want to be able to adjust commissions, you must use the Concordium Wallet for Mobile or Concordium Wallet for Web. For information about the process, see <a class=\"reference internal\" href=\"../mobile-wallet-gen2/faq.html#wallet-migrate\"><span class=\"std std-ref\">the delegation FAQ</span></a>.</p>", "a[href=\"../references/concordium-client.html#concordium-client-import-accounts-keys\"]": "<h4 class=\"tippy-header\" style=\"margin-top: 0;\">Import accounts and keys from the Wallet apps<a class=\"headerlink\" href=\"#import-accounts-and-keys-from-the-wallet-apps\" title=\"Link to this heading\">#</a></h4><p>Import the keys of one or more accounts from a JSON file exported from the\nConcordium Legacy Wallet.</p><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">--name</span></code> option selects which account to import and imports it with this\nname. If it\u2019s omitted, all accounts in the file are imported under their\nexisting names.</p>", "a[href=\"../references/query-node.html#exchange-rates\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Exchange rates<a class=\"headerlink\" href=\"#exchange-rates\" title=\"Link to this heading\">#</a></h2><p>Conversion rates between NRG, CCD, and Euros can fluctuate between blocks. To get a best estimate of the current\nexchange rates, query the chain parameters of the <a class=\"reference internal\" href=\"../resources/glossary.html#term-Best-block\"><span class=\"xref std std-term\">best block</span></a>:</p>", "a[href=\"../guides/deciding-wallet.html#choosing-wallet\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Deciding between the wallets<a class=\"headerlink\" href=\"#deciding-between-the-wallets\" title=\"Link to this heading\">#</a></h1><h2>Why you need a wallet<a class=\"headerlink\" href=\"#why-you-need-a-wallet\" title=\"Link to this heading\">#</a></h2><p>You need a <a class=\"reference internal\" href=\"../resources/glossary.html#term-Wallet\"><span class=\"xref std std-term\">wallet</span></a> to interact with the Concordium blockchain and to manage your CCD. Currently, there are four first party wallets available: the Concordium Desktop Wallet, the Concordium Wallet for Mobile, Concordium Legacy Wallet, and the Concordium Wallet for Web. This topic outlines the major differences that you should be aware of when you decide which wallet to use.</p><p>The wallets are developed by Concordium Software and can only be used to hold <a class=\"reference internal\" href=\"../resources/glossary.html#term-CCD\"><span class=\"xref std std-term\">CCD</span></a>, the native token of the Concordium blockchain. You can\u2019t use these wallets for any other cryptocurrencies.</p>", "a[href=\"../resources/glossary.html#term-Private-keys\"]": "<dt id=\"term-Private-keys\">Private keys</dt><dd><p>A random, secret string that is used in cryptography and cryptocurrency to prove ownership of an account and sign transactions to send, spend, delegate, and stake CCDs. A wallet consists of a set of public addresses and private keys. Anyone can deposit cryptocurrency in a public address, but funds cannot be removed from an address without the corresponding private key.</p></dd>", "a[href=\"#the-desktop-wallet\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">The Desktop Wallet<a class=\"headerlink\" href=\"#the-desktop-wallet\" title=\"Link to this heading\">#</a></h3><p>The Desktop Wallet is a digital wallet that enables you to create and manage your Concordium identities, credentials, and accounts from your desktop and to create transactions such as sending CCD, adding a validator, and exporting and importing account information.</p>", "a[href=\"#the-mw-gen2\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">The Concordium Wallet for Mobile<a class=\"headerlink\" href=\"#the-mw-gen2\" title=\"Link to this heading\">#</a></h3><p>The Concordium Wallet for Mobile is a second generation digital smartphone wallet that enables you to create and manage your Concordium identities and accounts, to create simple and shielded transactions, validate and delegate, add and manage tokens, connect to dApps, and to export and import your accounts and identities.</p>", "a[href=\"../resources/glossary.html#term-Block\"]": "<dt id=\"term-Block\">Block</dt><dd><p>The basic unit of the blockchain, which is produced by a <a class=\"reference internal\" href=\"#term-Validator\"><span class=\"xref std std-term\">validator</span></a>. A block contains a (possibly empty) list of <a class=\"reference internal\" href=\"#term-Transaction\"><span class=\"xref std std-term\">transactions</span></a>, and has a pointer to a previous block (with the exception of the <a class=\"reference internal\" href=\"#term-Genesis-Block\"><span class=\"xref std std-term\">genesis block</span></a>). A block and its predecessors form a chain, and the sequence of transactions they contain form a ledger. Each block has a <a class=\"reference internal\" href=\"#term-Slot\"><span class=\"xref std std-term\">slot time</span></a> that records when it was produced. A block also contains information relating to consensus, for instance establishing which validator created the block, and that the validator was entitled to do so.</p></dd>", "a[href=\"#command-line-tool\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Command-line tool<a class=\"headerlink\" href=\"#command-line-tool\" title=\"Link to this heading\">#</a></h3><p>The Concordium distribution ships with a command-line tool named <a class=\"reference internal\" href=\"../references/concordium-client.html#concordium-client\"><span class=\"std std-ref\">concordium-client</span></a>. It is designed as a low-level interface to the Concordium blockchain. It cannot be used to create identities, but it can <a class=\"reference internal\" href=\"../references/concordium-client.html#concordium-client-import-accounts-keys\"><span class=\"std std-ref\">import accounts</span></a> exported from the other wallets. Once an account has been imported, the tool can be used to do CCD transfers from the account, as well as send all other <a class=\"reference internal\" href=\"../references/transactions.html#transactions\"><span class=\"std std-ref\">transaction</span></a> types supported by the Concordium blockchain.</p><p>To learn more about the differences between the wallets, see <a class=\"reference internal\" href=\"../guides/deciding-wallet.html#choosing-wallet\"><span class=\"std std-ref\">Deciding between the wallets</span></a>.</p>", "a[href=\"#how-transactions-work\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">How transactions work<a class=\"headerlink\" href=\"#how-transactions-work\" title=\"Link to this heading\">#</a></h2><p>When a validator receives a transaction from a participant on the chain, it performs a few basic checks to verify that the transaction is eligible for <em>inclusion</em> in a <a class=\"reference internal\" href=\"../resources/glossary.html#term-Block\"><span class=\"xref std std-term\">block</span></a>. Transactions that meet all checks are considered <em>successful</em> and their changes are applied to the chain. If any of the checks fail, the transaction is ignored.</p><p>In some situations, transactions are included in the blockchain but recorded as <em>rejected</em>. This can happen, for example, if a sender tries to overdraw their account. If a transaction is rejected, the transaction fee is still deducted from the sender account but other than that, it has no effect.</p>"}
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