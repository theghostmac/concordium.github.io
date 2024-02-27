selector_to_html = {"a[href=\"#rust-and-cargo\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Rust and Cargo<a class=\"headerlink\" href=\"#rust-and-cargo\" title=\"Link to this heading\">#</a></h2><p>First, <a class=\"reference external\" href=\"https://rustup.rs/\">install rustup</a>, which will install both <a class=\"reference external\" href=\"https://www.rust-lang.org/\">Rust</a> and <a class=\"reference external\" href=\"https://doc.rust-lang.org/cargo/\">Cargo</a> on your\nmachine.\nThen use <code class=\"docutils literal notranslate\"><span class=\"pre\">rustup</span></code> to install the Wasm target, which is used for compilation:</p>", "a[href=\"#install-tools-for-development\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Install tools for development<a class=\"headerlink\" href=\"#install-tools-for-development\" title=\"Link to this heading\">#</a></h1><p>Before you can start developing smart contracts, you need to setup the\nenvironment.</p>", "a[href=\"unit-test-contract.html#unit-test-contract-v0\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Unit test a contract in Rust<a class=\"headerlink\" href=\"#unit-test-a-contract-in-rust\" title=\"Link to this heading\">#</a></h1><p>This guide will show you how to write unit tests for a smart contract written in\nRust.\nFor testing a smart contract Wasm module, see <a class=\"reference internal\" href=\"local-simulate.html#local-simulate-v0\"><span class=\"std std-ref\">Locally simulate contract functions</span></a>.</p><p>A smart contract in Rust is written as a library and you can unit test it like a\nlibrary by annotating functions with a <code class=\"docutils literal notranslate\"><span class=\"pre\">#[test]</span></code> attribute.</p>", "a[href=\"../../net/references/concordium-client.html#concordium-client\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Concordium Client<a class=\"headerlink\" href=\"#concordium-client\" title=\"Link to this heading\">#</a></h1><p>The Concordium distribution ships with a CLI tool named <code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-client</span></code>.</p><p>By default <code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-client</span></code> performs its queries and sends transactions\nthrough a <a class=\"reference internal\" href=\"../../net/guides/run-node.html#run-a-node\"><span class=\"std std-ref\">local node</span></a>. If the node runs on a different machine\nor in a custom setup, the options <code class=\"docutils literal notranslate\"><span class=\"pre\">--grpc-ip</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">--grpc-port</span></code> can be used\nto set the <a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/IP_address\">IP address</a> and <a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/Port_(computer_networking)\">port number</a> where the node is accessible. These\nflags are supported by all <code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-client</span></code> commands. Note that as of version\n5.1.1, the <a class=\"reference external\" href=\"https://en.wikipedia.org/wiki/Port_(computer_networking)\">port number</a> must be the port where the GRPC V2 interface is enabled, in contrast to previous versions which required the port number of the V1 API of the Concordium node.</p>", "a[href=\"compile-module.html#compile-module-v0\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Compile a Rust smart contract module<a class=\"headerlink\" href=\"#compile-a-rust-smart-contract-module\" title=\"Link to this heading\">#</a></h1><p>This guide will show you how to compile smart contract module written in Rust to\na Wasm module.</p>", "a[href=\"#concordium-software\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Concordium software<a class=\"headerlink\" href=\"#concordium-software\" title=\"Link to this heading\">#</a></h2><p>The tool to deploy and interact with smart contracts is\n<a class=\"reference internal\" href=\"../../net/references/concordium-client.html#concordium-client\"><span class=\"std std-ref\">concordium-client</span></a>. It is distributed as part of the\n<a class=\"reference internal\" href=\"../../net/installation/downloads.html#downloads\"><span class=\"std std-ref\">Concordium software</span></a> package.</p>", "a[href=\"../../net/installation/downloads.html#downloads\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Downloads<a class=\"headerlink\" href=\"#downloads\" title=\"Link to this heading\">#</a></h1><p>This topic contains information about where you can download the Concordium Wallets and tools for Mainnet and Testnet.</p>", "a[href=\"#cargo-concordium\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Cargo Concordium<a class=\"headerlink\" href=\"#cargo-concordium\" title=\"Link to this heading\">#</a></h2><p>Cargo Concordium is the tool for developing smart contracts for the Concordium\nblockchain.\nIt can be used for <a class=\"reference internal\" href=\"compile-module.html#compile-module-v0\"><span class=\"std std-ref\">compiling</span></a> and\n<a class=\"reference internal\" href=\"unit-test-contract.html#unit-test-contract-v0\"><span class=\"std std-ref\">testing</span></a> smart contracts, and enables features such as\n<a class=\"reference internal\" href=\"build-schema.html#build-schema-v0\"><span class=\"std std-ref\">building contract schemas</span></a>.</p><p>To install <code class=\"docutils literal notranslate\"><span class=\"pre\">cargo-concordium</span></code> run:</p>", "a[href=\"../../net/guides/run-node.html#run-a-node\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Run a node with Docker<a class=\"headerlink\" href=\"#run-a-node-with-docker\" title=\"Link to this heading\">#</a></h1><p>In this guide, you learn how to run a node on your Linux computer that\nparticipates in the Concordium network. This means that you receive\nblocks and transactions from other nodes, as well as propagate\ninformation about blocks and transactions to the nodes in the Concordium\nnetwork. After following this guide, you will be able to:</p>", "a[href=\"build-schema.html#build-schema-v0\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Build a contract schema<a class=\"headerlink\" href=\"#build-a-contract-schema\" title=\"Link to this heading\">#</a></h1><p>This guide will show you how to build a smart contract schema, how to export it\nto a file, and/or embed the schema into the smart contract module, all using\n<code class=\"docutils literal notranslate\"><span class=\"pre\">cargo-concordium</span></code>.</p>", "a[href=\"#vscode-extension\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">VSCode extension<a class=\"headerlink\" href=\"#vscode-extension\" title=\"Link to this heading\">#</a></h3><p>The <a class=\"reference external\" href=\"https://marketplace.visualstudio.com/items?itemName=Concordium.concordium-smart-contracts\">VSCode extension</a> can help you develop Concordium smart contracts. The extension sets up the editor for development, installs the <code class=\"docutils literal notranslate\"><span class=\"pre\">cargo-concordium</span></code> smart contract development tool for all supported platforms, and provides commands in the editor for the essential workflows, such as building and testing smart contracts.</p><p>You can watch a video about how to use the VSCode extension.</p>"}
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