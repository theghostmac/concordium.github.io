selector_to_html = {"a[href=\"../concepts/id-accounts.html#reference-id-accounts\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Identities<a class=\"headerlink\" href=\"#reference-id-accounts\" title=\"Link to this heading\">#</a></h1><p>Accounts and identities are strongly linked on the Concordium Platform. To be able to hold, send, or receive <a class=\"reference internal\" href=\"../resources/glossary.html#term-CCD\"><span class=\"xref std std-term\">CCD</span></a> or become a validator on the Concordium blockchain, you need an <a class=\"reference internal\" href=\"../resources/glossary.html#term-Account\"><span class=\"xref std std-term\">account</span></a> and an identity. This is regardless of whether you are using the Concordium Legacy Wallet, Concordium Wallet for Mobile, Desktop Wallet, or Concordium Client for your transactions.</p><p>Before you can use the Concordium Platform, an <a class=\"reference internal\" href=\"../resources/glossary.html#term-Identity-Provider\"><span class=\"xref std std-term\">identity provider</span></a> must verify and record your real-world identity. This identification is performed when you create your first account.</p>", "a[href=\"../resources/glossary.html#glossary\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Glossary of Concordium Terms<a class=\"headerlink\" href=\"#glossary-of-concordium-terms\" title=\"Link to this heading\">#</a></h1><p>Also see the Concordium <a class=\"reference external\" href=\"https://go.concordium.com/hubfs/White%20paper%20-%20RWR/Concordium%20White%20Paper%20v1.8.pdf\">whitepaper</a> for more details on the terms described below.</p>", "a[href=\"../references/manage-accounts.html#managing-accounts\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Accounts<a class=\"headerlink\" href=\"#accounts\" title=\"Link to this heading\">#</a></h1><p>Accounts and <a class=\"reference internal\" href=\"../resources/glossary.html#term-Identity\"><span class=\"xref std std-term\">identities</span></a> are strongly linked on the Concordium Platform. To be able to hold, send, or receive <a class=\"reference internal\" href=\"../resources/glossary.html#term-CCD\"><span class=\"xref std std-term\">CCD</span></a> or become a <a class=\"reference internal\" href=\"../resources/glossary.html#term-Validator\"><span class=\"xref std std-term\">validator</span></a> on the Concordium blockchain, you need an account and an identity. This is regardless of whether you are using the Concordium Wallet for Mobile, the Concordium Legacy Wallet, Desktop Wallet, or Concordium Client for your transactions.</p><p>You must have a verified identity and a user identity certificate issued by an authorized <a class=\"reference internal\" href=\"../resources/glossary.html#term-Identity-Provider\"><span class=\"xref std std-term\">identity provider</span></a> to create accounts on the Concordium Platform. For more information about identities, see <a class=\"reference internal\" href=\"../concepts/id-accounts.html#reference-id-accounts\"><span class=\"std std-ref\">Identities</span></a>.</p>", "a[href=\"#learn-about-concordium\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Learn about Concordium<a class=\"headerlink\" href=\"#learn-about-concordium\" title=\"Link to this heading\">#</a></h1><p>The Concordium blockchain is a compliance ready blockchain backed by science that enables private and public transactions. It offers high throughput, fast transactions, and predictable fees, allowing businesses, developers, and traders to harness blockchain\u2019s true power and potential.</p><p>Before you start using the Concordium blockchain, it\u2019s a good idea to understand some basic concepts about our unique blockchain, such as <a class=\"reference internal\" href=\"../concepts/id-accounts.html#reference-id-accounts\"><span class=\"std std-ref\">identities</span></a> and <a class=\"reference internal\" href=\"../references/manage-accounts.html#managing-accounts\"><span class=\"std std-ref\">accounts</span></a>. The <a class=\"reference internal\" href=\"../resources/glossary.html#glossary\"><span class=\"std std-ref\">glossary</span></a> is also a useful resource.</p>"}
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