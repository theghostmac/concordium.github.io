selector_to_html = {"a[href=\"https://en.wikipedia.org/wiki/HTTPS\"]": "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/HTTP_logo.svg/320px-HTTP_logo.svg.png\" alt=\"Wikipedia thumbnail\" style=\"float:left; margin-right:10px;\"><p><b>Hypertext Transfer Protocol Secure</b> (<b>HTTPS</b>) is an extension of the Hypertext Transfer Protocol (HTTP). It uses encryption for secure communication over a computer network, and is widely used on the Internet. In HTTPS, the communication protocol is encrypted using Transport Layer Security (TLS) or, formerly, Secure Sockets Layer (SSL). The protocol is therefore also referred to as <b>HTTP over TLS</b>, or <b>HTTP over SSL</b>.</p>", "a[href^=\"https://en.wikipedia.org/wiki/HTTPS#\"]": "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/HTTP_logo.svg/320px-HTTP_logo.svg.png\" alt=\"Wikipedia thumbnail\" style=\"float:left; margin-right:10px;\"><p><b>Hypertext Transfer Protocol Secure</b> (<b>HTTPS</b>) is an extension of the Hypertext Transfer Protocol (HTTP). It uses encryption for secure communication over a computer network, and is widely used on the Internet. In HTTPS, the communication protocol is encrypted using Transport Layer Security (TLS) or, formerly, Secure Sockets Layer (SSL). The protocol is therefore also referred to as <b>HTTP over TLS</b>, or <b>HTTP over SSL</b>.</p>", "a[href=\"wCCD-full-dApp.html#wccd-full-dapp\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Running your first full dApp<a class=\"headerlink\" href=\"#running-your-first-full-dapp\" title=\"Link to this heading\">#</a></h1><p>You are running your own local dApp now. If you want, you can compare it with our\n<a class=\"reference external\" href=\"https://wccd.testnet.concordium.com/\">testnet wCCD dApp</a> hosted on testnet or <a class=\"reference external\" href=\"https://wccd.mainnet.concordium.software/\">mainnet wCCD dApp</a> hosted on mainnet. You can use your Concordium Wallet for Web\nto connect to the dApp.</p>", "a[href=\"#setting-up-the-front-end\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Setting up the front end<a class=\"headerlink\" href=\"#setting-up-the-front-end\" title=\"Link to this heading\">#</a></h1><p>In this part, you will create a web front end. Users can interact with the smart contract easier\nby using your front end compared to interacting with the node directly.\nNon-tech users might find it inconvenient to interact with smart contracts via the Concordium node\nand some users may choose not to host their own Concordium node locally. This tutorial part will show you\na setup that alleviates the need for the user to host their own Concordium node.</p><p>You can lower the bar for entry by coding an appealing front end that provides additional information\nto your potential customers. Web front ends are a familiar sight nowadays, but to use\nthe front end, users will also need to download a browser wallet as a browser extension.\nThe installation and safe usage of the browser wallet might be new for people using your front end.\nProviding comprehensive explanations and step-by-step guides on your website on topics\nrelated to the browser wallet is important for a good user experience. The browser wallet\nconnects via <a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/HTTPS\">HTTPS</a> to a server that is connected to a Concordium node. This setup alleviates the\nneed for the user to host their own Concordium node.</p>", "a[href=\"../../../net/browser-wallet/setup-browser-wallet.html#setup-browser-wallet\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Set up the Concordium Wallet for Web<a class=\"headerlink\" href=\"#set-up-the-bw\" title=\"Link to this heading\">#</a></h1><p>The Concordium Wallet for Web is a digital wallet that enables you to create and manage your Concordium\n<a class=\"reference internal\" href=\"../../../net/resources/glossary.html#term-Identity\"><span class=\"xref std std-term\">identities</span></a> and <a class=\"reference internal\" href=\"../../../net/resources/glossary.html#term-Account\"><span class=\"xref std std-term\">accounts</span></a> and to create transactions, such as sending CCD.</p><p>To learn more about identities and accounts, see <a class=\"reference internal\" href=\"../../../net/concepts/id-accounts.html#reference-id-accounts\"><span class=\"std std-ref\">identities</span></a> and <a class=\"reference internal\" href=\"../../../net/references/manage-accounts.html#managing-accounts\"><span class=\"std std-ref\">accounts</span></a>.</p>", "a[href=\"#bw\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Concordium Wallet for Web<a class=\"headerlink\" href=\"#bw\" title=\"Link to this heading\">#</a></h2><p>A browser wallet is a piece of code that can be added as an extension to supported browsers such as <code class=\"docutils literal notranslate\"><span class=\"pre\">Chrome</span></code>.\nThe browser wallet allows you to interact with the chain and make transactions.\nCurrently, the Concordium Wallet for Web does this by connecting to a (gRPC) server that communicates with a node.\nThe Concordium Wallet for Web hosts the private keys corresponding to the accounts of the user.</p><p>Your front end code that is run in the browser constructs the transaction object\nand sends it to the Concordium Wallet for Web. The transaction object is signed by the private key hosted in the Concordium Wallet for Web\nand transmitted to the server via <code class=\"docutils literal notranslate\"><span class=\"pre\">HTTPS</span></code>. This server has access to a Concordium node and converts\nthe request (including the signed transaction object) that comes via <code class=\"docutils literal notranslate\"><span class=\"pre\">HTTPS</span></code> from the Concordium Wallet for Web\nto a request that the Concordium node can execute. The signed transaction is\ntransmitted via peer-to-peer communication to other Concordium nodes and becomes\npart of the Concordium blockchain.</p>", "a[href=\"#running-the-web-front-end\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Running the web front end<a class=\"headerlink\" href=\"#running-the-web-front-end\" title=\"Link to this heading\">#</a></h2><p>You have successfully added the Concordium Wallet for Web to your browser in the previous section.\nIn the next step of the tutorial, you are going to clone a wCCD demo front end written with the <a class=\"reference external\" href=\"https://reactjs.org/\">React library</a>\nand run it locally. The demo front end has the required packages installed to connect to the Concordium Wallet for Web\nand implements common flows to deal with the different states that the Concordium Wallet for Web could be in. For example,\nthe front end will display a <code class=\"docutils literal notranslate\"><span class=\"pre\">connect</span> <span class=\"pre\">wallet</span></code> button when loading the website. Furthermore, the front end has flows\nto react to the events when the user switches the account in the browser wallet or\nconnects/disconnects an account in the Concordium Wallet for Web to update the front end state accordingly.</p>"}
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