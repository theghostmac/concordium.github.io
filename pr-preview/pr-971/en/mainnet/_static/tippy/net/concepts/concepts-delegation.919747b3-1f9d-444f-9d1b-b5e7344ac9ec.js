selector_to_html = {"a[href=\"../resources/glossary.html#term-Epoch\"]": "<dt id=\"term-Epoch\">Epoch</dt><dd><p>A time period that is approximately one hour on testnet and mainnet. At the start of each epoch, a <a class=\"reference internal\" href=\"#term-Leader-Election\"><span class=\"xref std std-term\">leadership election nonce</span></a> is computed based on the block nonces of the previous epoch. The leadership election nonce is valid for the duration of the epoch. Each epoch has a nominal ending, and when a block is finalized after this nominal ending then epoch transition occurs.</p></dd>", "a[href=\"../resources/glossary.html#term-Lottery-Power\"]": "<dt id=\"term-Lottery-Power\">Lottery Power</dt><dd><p>A validator\u2019s lottery power is its relative stake and is therefore proportional to the <a class=\"reference internal\" href=\"#term-Staked-Amount\"><span class=\"xref std std-term\">staked amount</span></a> of that validator. The lottery power is updated each <a class=\"reference internal\" href=\"#term-Pay-day\"><span class=\"xref std std-term\">pay day</span></a>, and is based on the stake distribution at the end of the epoch before last. (This delay ensures that the stake distribution is determined before the randomness that fixes the validators for the epoch; otherwise, stakeholders might redistribute their stake to luckier validators, which undermines the security of the system.) <a class=\"reference internal\" href=\"#term-Delegator\"><span class=\"xref std std-term\">Delegation</span></a> affects the lottery power of the validator by increasing their stake, thus increasing the odds of that validator being chosen to produce a block.</p></dd>", "a[href=\"../references/transactions.html#transactions\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Concordium Client transactions<a class=\"headerlink\" href=\"#concordium-client-transactions\" title=\"Link to this heading\">#</a></h1><p>You can perform all types of transactions with the <a class=\"reference internal\" href=\"../references/concordium-client.html#concordium-client\"><span class=\"std std-ref\">concordium-client</span></a>. To do so, you use specialized subcommands. For an introduction to transactions, see <a class=\"reference internal\" href=\"../concepts/concepts-transactions.html#transactions-overview\"><span class=\"std std-ref\">Transactions overview</span></a>.</p>", "a[href=\"#pools-and-rewards\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Pools and Rewards<a class=\"headerlink\" href=\"#pools-and-rewards\" title=\"Link to this heading\">#</a></h2><p>A validator opens a <a class=\"reference internal\" href=\"../resources/glossary.html#term-Staking-pool\"><span class=\"xref std std-term\">staking pool</span></a>, and other CCD holders delegate some stake to this pool. The probability that the validator running the pool is chosen to produce the next block is then proportional to the total stake in the pool. When the pool rewards are distributed, the validator takes a commission and the rest of the rewards are distributed to the pool members in proportion to their stakes in the pool. For example, suppose that a pool has 10,000 CCD. And suppose that in a 24 hour period this pool earns 30 CCD as reward and the commission of the validator is 10%. The validator receives 3 CCD as commission. The rest (27 CCD) is distributed to the members of the pool according to their relative stake in their pool. This means a party with 1,000 CCD in the pool will receive 2.7 CCD.</p><p>Pool rewards are in two categories: block rewards and transaction fee rewards. These can have separate commission rates. A validator sets the delegation commission for their pool. They can set both values to anything between 0% and 100%.</p>", "a[href=\"../resources/glossary.html#term-Cool-down-period\"]": "<dt id=\"term-Cool-down-period\">Cool-down period</dt><dd><p>A period of time during which a transaction is frozen. Examples of when cool-down periods apply include removing a validator and updating stake. The length of a cool-down period varies between transactions.</p></dd>", "a[href=\"../resources/glossary.html#term-Pay-day\"]": "<dt id=\"term-Pay-day\">Pay day</dt><dd><p>A pay day is the point at which new CCDs are minted and rewards to validators and delegators are distributed. The stakes of validators and delegators are updated each pay day (but the changes for each pay day are fixed one epoch before). Pay day is thus when new validators begin validation and updates to delegation and validation take effect, such as increasing stake, restaking preferences, adding delegation. In the case of decreasing stake or removing delegation or validation, there is a longer cool-down period, after which the change is executed at the <strong>next pay day after the cool-down period ends</strong>. The cool-down period is 3 weeks. Pay day is every 24 hours (i.e., 24 epochs) at approximately 09:00 UTC on Mainnet and approximately 12:00 UTC on Testnet. The list of lottery winners that are elected to be the leader for every round in that epoch is established at the beginning of the epoch.</p></dd>", "a[href=\"#delegation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Delegation<a class=\"headerlink\" href=\"#delegation\" title=\"Link to this heading\">#</a></h1><p>On the Concordium blockchain, <a class=\"reference internal\" href=\"../resources/glossary.html#term-Validator\"><span class=\"xref std std-term\">validators</span></a> run the protocol that generates blocks, and the action of creating and verifying blocks is an important part of what validators do. Validators are rewarded for every block that they create with a payment of some <a class=\"reference internal\" href=\"../resources/glossary.html#term-CCD\"><span class=\"xref std std-term\">CCD</span></a>. Because Concordium runs a proof-of-stake protocol, each validator needs to <a class=\"reference internal\" href=\"../resources/glossary.html#term-Staked-Amount\"><span class=\"xref std std-term\">stake an amount to produce blocks</span></a>, and the <a class=\"reference internal\" href=\"../resources/glossary.html#term-Lottery-Power\"><span class=\"xref std std-term\">probability of being selected to create the next block</span></a> is proportional to each validator\u2019s stake. So the payment may be seen as an interest on the validator\u2019s capital.</p><p>Not everyone with CCD has the resources needed to run a validator. <a class=\"reference internal\" href=\"../resources/glossary.html#term-Delegator\"><span class=\"xref std std-term\">Delegation</span></a> enables everyone to earn rewards for delegating some stake without the need to run a node or become a validator. Any party with CCD may delegate some of their capital to a validator. This increases the validator\u2019s chance of producing the next block and getting rewards, which are then shared with the delegators. This is a non-custodial solution: when a party delegates an amount of CCD to a validator, the CCDs are not transferred to the validator and remain under the party\u2019s control; they are just considered part of the validator\u2019s stake for the proof-of-stake protocol. Staked CCDs, both for delegators and validators, cannot be spent while staked. Unstaking CCDs is subject to a <a class=\"reference internal\" href=\"../resources/glossary.html#term-Cool-down-period\"><span class=\"xref std std-term\">cool-down period</span></a>.</p>", "a[href=\"../resources/ccd-scan.html#ccd-scan\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">CCDScan<a class=\"headerlink\" href=\"#ccdscan\" title=\"Link to this heading\">#</a></h1><p><a class=\"reference external\" href=\"https://ccdscan.io\">CCDScan</a> is a Concordium blockchain explorer. CCDScan effectively serves as a search engine for data on the Concordium blockchain and enables users to search for, explore, and analyze relevant on-chain data. CCDScan includes functionality to scan and gain insights into Concordium blockchain data, such as:</p>", "a[href=\"../snippets/delegation-faq.html#delegation-faq\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Delegation and validation FAQ<a class=\"headerlink\" href=\"#delegation-and-validation-faq\" title=\"Link to this heading\">#</a></h1><h2>For delegators<a class=\"headerlink\" href=\"#for-delegators\" title=\"Link to this heading\">#</a></h2>", "a[href=\"../resources/glossary.html#term-Passive-delegation\"]": "<dt id=\"term-Passive-delegation\">Passive delegation</dt><dd><p>A form of delegation where a delegator\u2019s stake is effectively distributed among all staking pools. It is not associated with a specific validator. Delegators earn lower rewards when delegating to passive delegation than when delegating to a specific staking pool. However, passive delegation is not affected by poor performance of a single validator.</p></dd>", "a[href=\"../resources/glossary.html#term-Delegator\"]": "<dt id=\"term-Delegator\">Delegator</dt><dd><p>An account that contributes stake to a staking pool, or to passive delegation. When an account becomes a delegator, the delegated amount of CCD is locked so that it cannot be spent or transferred while it is delegated. Delegators earn rewards, minus a commission to the validator, in proportion to their delegated stake.</p></dd>", "a[href=\"../resources/glossary.html#term-Staked-Amount\"]": "<dt id=\"term-Staked-Amount\">Staked Amount</dt><dd><p><a class=\"reference internal\" href=\"#term-Validator\"><span class=\"xref std std-term\">Validators</span></a> can have part of the balance of their account staked. The amount that is staked remains locked while staked and cannot be transferred or moved in any way. The staked amount is proportional to the <a class=\"reference internal\" href=\"#term-Lottery-Power\"><span class=\"xref std std-term\">lottery power</span></a> of a validator.</p><p><a class=\"reference internal\" href=\"#term-Delegator\"><span class=\"xref std std-term\">Delegators</span></a> can delegate stake to a staking pool or passive delegation. This affects the staked amount of the validator and thus their lottery power.</p></dd>", "a[href=\"#time-and-cool-downs\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Time and cool-downs<a class=\"headerlink\" href=\"#time-and-cool-downs\" title=\"Link to this heading\">#</a></h2><p>Changes to the pools take effect every 24 hours at <a class=\"reference internal\" href=\"../resources/glossary.html#term-Pay-day\"><span class=\"xref std std-term\">pay day</span></a>. So opening a pool, increasing the stake, moving the stake between pools or between passive delegation and a stakiing pool all take effect at the <a class=\"reference internal\" href=\"../resources/glossary.html#term-Pay-day\"><span class=\"xref std std-term\">pay day</span></a>. At pay day, rewards gathered over a 24 hour period are distributed at the same time. If, however, you make a change in delegation in the last <a class=\"reference internal\" href=\"../resources/glossary.html#term-Epoch\"><span class=\"xref std std-term\">epoch</span></a> before pay day, then the change has to wait until the second pay day.</p><p>But decreasing the stake (whether for delegators or validators) is subject to a cool-down period. In other words, once the transaction has been included in a block the cool-down period starts. Unstaking takes effect at the pay day event after the cool-down has elapsed, and the party\u2019s stake will be unlocked. During the cool down, the stake is still invested in the pool and earns rewards as before.</p>", "a[href=\"#bounding-the-size-of-pools\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Bounding the size of pools<a class=\"headerlink\" href=\"#bounding-the-size-of-pools\" title=\"Link to this heading\">#</a></h3><p>Concordium imposes two caps on the amount of stake in a single pool. The first cap bounds the size of a pool with respect to a fraction of all stake in pools (i.e., excluding passive delegation). For example, with the capital bound cap a pool cannot have more than 5% of all the stake in staking pools. This limit ensures that the pools remain distributed and prevents the crash of one validator from affecting the whole system. A party with lots of capital can run multiple validators to avoid this cap. This would increase decentralization.</p><p>The second cap is on the amount of stake in a pool with respect to the stake of the validator. For example, the total stake of a pool can be at most 6 times the stake of the validator. This bound is for security reasons as it prevents a party with a small stake from controlling too large a part of the system. Every validator\u2019s power is thus still proportional to their own stake, which is crucial for cryptographic security to hold.</p>", "a[href=\"#pool-reliability\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Pool reliability<a class=\"headerlink\" href=\"#pool-reliability\" title=\"Link to this heading\">#</a></h3><p>The rewards earned by a pool depend greatly on the reliability of the validator. If they miss producing a block they were selected to produce, or if they go offline, then less rewards will be distributed to the entire pool. If a validator misses a block, the blockchain knows who missed it. To help a delegator choose the best pool possible, statistics are available on <a class=\"reference external\" href=\"https://ccdscan.io\">CCDScan</a> about the performance of the different pools, the reliability of the validator, and the size of the pool.</p>", "a[href=\"../resources/glossary.html#term-Validator\"]": "<dt id=\"term-Validator\">Validator</dt><dd><p>A node that participates in the production of <a class=\"reference internal\" href=\"#term-Block\"><span class=\"xref std std-term\">blocks</span></a>, referred to as <em>validation</em>.</p></dd>", "a[href=\"../resources/glossary.html#term-Staking-pool\"]": "<dt id=\"term-Staking-pool\">Staking pool</dt><dd><p>A validator and delegators that collectively pool their stake to participate in the consensus protocol and earn rewards. The validator runs a validator node on behalf of the staking pool to produce blocks using the collective stake of the pool to determine its lottery power. Rewards are accrued to the pool each time the validator produces a block. Each pay day, the accrued rewards are distributed to the pool\u2019s participants in proportion to their relative stakes in the pool, with the validator (the pool owner) receiving an additional commission from the delegators\u2019 rewards.</p></dd>", "a[href=\"#summary\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Summary<a class=\"headerlink\" href=\"#summary\" title=\"Link to this heading\">#</a></h2><p>To earn rewards, a CCD holder can either delegate to passive delegation, to a staking pool, or become a validator. Being a validator oneself is the most challenging, as it requires resources to take part in the protocol, but it also provides the most rewards. Delegating to passive delegation provides the least rewards and requires the least actions from the investor. Delegating to a staking pool is somewhere between the two, both in terms of rewards and work, as it is recommended for a delegator to regularly check the performance of their pool\u2019s validator, and change pool if it underperforms.</p><p>See the <a class=\"reference internal\" href=\"../snippets/delegation-faq.html#delegation-faq\"><span class=\"std std-ref\">Delegation FAQ</span></a> for answers to the most frequently asked questions.</p>", "a[href=\"#passive-delegation\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Passive delegation<a class=\"headerlink\" href=\"#passive-delegation\" title=\"Link to this heading\">#</a></h3><p>For CCD holders who do not want to regularly check the performance of their pool, but just want a safe way of earning interest, <a class=\"reference internal\" href=\"../resources/glossary.html#term-Passive-delegation\"><span class=\"xref std std-term\">passive delegation</span></a> offers a low-risk low-reward alternative. Passive delegation is not associated with a specific validator; it can be thought of as distributing its capital to each staking pool in proportion to the pool\u2019s stake. It is not affected by the poor performance of a single validator. But the parameters are set in such a way that a party delegating to passive delegation earns less than by delegating to a reliable validator.</p><p>The commission rates for passive delegation are fixed at 25% for both block commissions and transaction commissions.</p>", "a[href=\"../guides/add-delegation.html#add-delegation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Delegate to a staking pool or passive delegation<a class=\"headerlink\" href=\"#delegate-to-a-staking-pool-or-passive-delegation\" title=\"Link to this heading\">#</a></h1><p>You can delegate stake from an account to a <a class=\"reference internal\" href=\"../resources/glossary.html#term-Staking-pool\"><span class=\"xref std std-term\">staking pool</span></a> or to <a class=\"reference internal\" href=\"../resources/glossary.html#term-Passive-delegation\"><span class=\"xref std std-term\">passive delegation</span></a>.</p><p>When you delegate some stake to a staking pool, it can influence the chances of the pool owner of the staking pool being selected to produce a block and receive block rewards and thus delegation rewards to you.</p>", "a[href=\"../resources/glossary.html#term-CCD\"]": "<dt id=\"term-CCD\">CCD</dt><dd><p>CCD is the currency of the Concordium blockchain. CCD can be used for multiple purposes:</p><p>The smallest subdivision of CCD is the \u00b5CCD (micro CCD), with 1 CCD = 1,000,000 \u00b5CCD. This means that CCD amounts are given with up to six decimal places of precision.</p></dd>", "a[href=\"#where-delegation-is-available\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Where delegation is available<a class=\"headerlink\" href=\"#where-delegation-is-available\" title=\"Link to this heading\">#</a></h2><p>You can <a class=\"reference internal\" href=\"../guides/add-delegation.html#add-delegation\"><span class=\"std std-ref\">delegate CCDs</span></a> in the Desktop Wallet, Concordium Legacy Wallet, Concordium Wallet for Mobile, and Concordium Wallet for Web. You can also delegate from <a class=\"reference internal\" href=\"../references/transactions.html#transactions\"><span class=\"std std-ref\">Concordium Client</span></a>. It is recommended that you use <a class=\"reference internal\" href=\"../resources/ccd-scan.html#ccd-scan\"><span class=\"std std-ref\">CCDScan</span></a> to research the various validators and pools prior to delegation if you plan to delegate to a specific pool.</p>"}
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