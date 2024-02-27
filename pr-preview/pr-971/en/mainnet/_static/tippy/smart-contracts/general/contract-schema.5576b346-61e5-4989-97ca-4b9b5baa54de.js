selector_to_html = {"a[href=\"#why-use-a-contract-schema\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Why use a contract schema<a class=\"headerlink\" href=\"#why-use-a-contract-schema\" title=\"Link to this heading\">#</a></h2><p>Data on the blockchain, such as the state of an instance and parameters passed\nto init and receive functions, is serialized as a sequence of bytes.\nThe serialization is optimized for efficiency, rather than human readability.</p><p>Usually these bytes have structure and this structure is known to the smart\ncontract as part of the contract functions, but outside of these functions it\ncan be difficult to make sense of the bytes. This is especially the case when\ninspecting a complex return value from or passing a complex parameters to a\nsmart contract function.\nIn the latter case, the byte array should either be serialized from structured data\nor written manually.</p>", "a[href=\"../guides/initialize-contract.html#init-passing-parameter-json\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Passing parameters in JSON format<a class=\"headerlink\" href=\"#passing-parameters-in-json-format\" title=\"Link to this heading\">#</a></h3><p>A parameter in JSON format can be passed if a <a class=\"reference internal\" href=\"../general/contract-schema.html#contract-schema\"><span class=\"std std-ref\">smart contract schema</span></a> is supplied, either as a file or embedded in the module.\nThe schema is used to serialize the JSON into binary.</p>", "a[href=\"../guides/build-schema.html#build-schema\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Build a contract schema<a class=\"headerlink\" href=\"#build-a-contract-schema\" title=\"Link to this heading\">#</a></h1><p>This guide will show you how to build a smart contract schema, how to export it\nto a file, and/or embed the schema into the smart contract module, all using\n<code class=\"docutils literal notranslate\"><span class=\"pre\">cargo-concordium</span></code>.</p>", "a[href=\"#embed-schemas-on-chain\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Embed schemas on-chain<a class=\"headerlink\" href=\"#embed-schemas-on-chain\" title=\"Link to this heading\">#</a></h2><p>Schemas are embedded into smart contract modules using the <a class=\"reference external\" href=\"https://webassembly.github.io/spec/core/appendix/custom.html\">custom\nsection</a> feature of Wasm modules.\nThis allows Wasm modules to include a named section of bytes, which does not\naffect the semantics of running the Wasm module.</p><p>The module can contain a schema in one of two different custom sections. This collection is a list of pairs, containing the name of the contract encoded\nin UTF-8 and the contract schema bytes. The section <code class=\"docutils literal notranslate\"><span class=\"pre\">concordium-schema</span></code> is the most common and is what the current tooling produces.</p>", "a[href=\"#the-schema-format\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">The schema format<a class=\"headerlink\" href=\"#the-schema-format\" title=\"Link to this heading\">#</a></h2><p>A schema can contain</p>", "a[href=\"#smart-contract-schemas\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Smart contract schemas<a class=\"headerlink\" href=\"#smart-contract-schemas\" title=\"Link to this heading\">#</a></h1><p>A smart contract schema is a description of how to represent bytes in a more\nstructured representation. It can be used by external tools when displaying the\nreturn value of a receive function and for specifying parameters using a\nstructured representation, such as JSON.</p>", "a[href=\"#should-you-embed-or-write-to-a-file\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Should you embed or write to a file?<a class=\"headerlink\" href=\"#should-you-embed-or-write-to-a-file\" title=\"Link to this heading\">#</a></h2><p>Whether a contract schema should be embedded or written to a file depends on\nyour situation.</p><p>Embedding the schema into the smart contract module distributes the schema\ntogether with the contract ensuring the correct schema is being used and also\nallows anyone to use it directly. The downside is that the smart contract module\nbecomes bigger in size and therefore more expensive to deploy.\nBut unless the smart contract uses very complex types for the parameters and\nreturn values, the size of the schema is likely to be negligible compared to the\nsize of the smart contract itself.</p>"}
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