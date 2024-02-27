selector_to_html = {"a[href=\"ccd-scan-blocks.html#blocks-view\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CCDScan Blocks overview<a class=\"headerlink\" href=\"#ccdscan-blocks-overview\" title=\"Link to this heading\">#</a></h1><p>The Blocks overview shows information about the blocks created during the selected time range in the filter.</p>", "a[href=\"#home\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Home<a class=\"headerlink\" href=\"#home\" title=\"Link to this heading\">#</a></h3><p>On the Home page that appears when you navigate to CCDScan, you see the following information:</p>", "a[href=\"#ccdscan\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CCDScan<a class=\"headerlink\" href=\"#ccdscan\" title=\"Link to this heading\">#</a></h1><p><a class=\"reference external\" href=\"https://ccdscan.io\">CCDScan</a> is a Concordium blockchain explorer. CCDScan effectively serves as a search engine for data on the Concordium blockchain and enables users to search for, explore, and analyze relevant on-chain data. CCDScan includes functionality to scan and gain insights into Concordium blockchain data, such as:</p>", "a[href=\"ccd-scan-transactions.html#home-screen-transaction\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Transaction details<a class=\"headerlink\" href=\"#transaction-details\" title=\"Link to this heading\">#</a></h2><p>When you click a transaction hash, transaction information appears. The information is different depending upon whether the transaction was successful or rejected.</p>", "a[href=\"ccd-scan-accounts.html#home-screen-sender\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Sender/Account details<a class=\"headerlink\" href=\"#sender-account-details\" title=\"Link to this heading\">#</a></h2><p>When you select a sender or account, the following appears.</p>", "a[href=\"#delegation-and-staking-pools\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Delegation and staking pools<a class=\"headerlink\" href=\"#delegation-and-staking-pools\" title=\"Link to this heading\">#</a></h2><p>The CCDScan tool allows validators to view information that helps them to <a class=\"reference internal\" href=\"../guides/baker-pool.html#baker-pool\"><span class=\"std std-ref\">manage their validator and pool responsibly</span></a>. It also allows potential delegators to <a class=\"reference internal\" href=\"../guides/baker-pool.html#baker-pool\"><span class=\"std std-ref\">research validators and pools</span></a>.</p>", "a[href=\"ccd-scan-staking.html#bakers-view\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CCDScan Staking overview<a class=\"headerlink\" href=\"#ccdscan-staking-overview\" title=\"Link to this heading\">#</a></h1><p>The Staking overview shows information about validators during the selected time range in the filter:</p>", "a[href=\"ccd-scan-accounts.html#accounts-view\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CCDScan Accounts overview<a class=\"headerlink\" href=\"#ccdscan-accounts-overview\" title=\"Link to this heading\">#</a></h1><p>The Accounts overview shows information about accounts during the selected time range in the filter.</p>", "a[href=\"ccd-scan-blocks.html#home-screen-block\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Block details<a class=\"headerlink\" href=\"#block-details\" title=\"Link to this heading\">#</a></h2><p>When you click a block hash, the following appears:</p>", "a[href=\"../guides/baker-pool.html#baker-pool\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Validator management<a class=\"headerlink\" href=\"#validator-management\" title=\"Link to this heading\">#</a></h1><p>A <a class=\"reference internal\" href=\"../concepts/concepts-baker.html#baker-concept\"><span class=\"std std-ref\">validator</span></a> is a node that participates in the network by producing new blocks that are added to the chain. There are some recommended best practices around validation, particularly when a validator runs a <a class=\"reference internal\" href=\"../resources/glossary.html#term-Staking-pool\"><span class=\"xref std std-term\">staking pool</span></a>. A validator can choose to open a staking pool to which others can <a class=\"reference internal\" href=\"../concepts/concepts-delegation.html#delegation-concept\"><span class=\"std std-ref\">delegate</span></a> some of their stake.</p>", "a[href=\"ccd-scan-staking.html#home-screen-baker\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Validator details<a class=\"headerlink\" href=\"#validator-details\" title=\"Link to this heading\">#</a></h2><p>When you click a validator ID, the following appears:</p>", "a[href=\"ccd-scan-transactions.html#transactions-view\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CCDScan Transactions overview<a class=\"headerlink\" href=\"#ccdscan-transactions-overview\" title=\"Link to this heading\">#</a></h1><p>The Transactions overview shows information about the transactions during the selected time range in the filter.</p>", "a[href=\"#use-ccdscan\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Use CCDScan<a class=\"headerlink\" href=\"#use-ccdscan\" title=\"Link to this heading\">#</a></h2><p>CCDScan shows information about <a class=\"reference internal\" href=\"ccd-scan-blocks.html#blocks-view\"><span class=\"std std-ref\">blocks</span></a>, <a class=\"reference internal\" href=\"ccd-scan-transactions.html#transactions-view\"><span class=\"std std-ref\">transactions</span></a>, <a class=\"reference internal\" href=\"ccd-scan-accounts.html#accounts-view\"><span class=\"std std-ref\">accounts</span></a>, <a class=\"reference internal\" href=\"ccd-scan-staking.html#bakers-view\"><span class=\"std std-ref\">staking</span></a>, and smart contracts.</p>"}
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