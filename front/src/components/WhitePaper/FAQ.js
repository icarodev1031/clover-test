import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
const Faq = () => {
  const [open, setOpen] = useState(1);
  const handleCollapse = (id) => {
    if (open === id) {
      setOpen(!id);
    } else {
      setOpen(id);
    }
  };
  return (
    <div>
      <div style={{ marginBottom: "100px" }}>
        <Title
          className="gradienttext"
          sx={{
            color: "#c9e5d8",
            fontSize: "36px",
            lineHeight: "44px",
            paddingBottom: "24px",
            textTransform: "none",
          }}
        >
          Frequently Asked Questions
        </Title>

        <div>
          <div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(1)}>
              <label
                className={`${
                  open === 1 ? "question-open" : "question-close"
                } `}
              >
                What Is DeFi?
              </label>
              <div className="faq-icons">
                {open === 1 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 1 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "#b9e7d6",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  DeFi stands for <span style={{ color: "#bfd10a" }}>«decentralized finance»</span>. The goal is to
                  recreate traditional financial systems, such as banks and
                  exchanges, but <span style={{ color: "#bfd10a" }}>with crypto-currencies</span>. The difference is that
                  DeFi applications work <span style={{ color: "#bfd10a" }}>without a central service</span> exercising
                  control over the whole system.
                  <br />
                  <br /> For example, if we make a comparison between DeFi and
                  traditional finance: in DeFi, you hold your money and you
                  control where your money goes and how it is spent. Whereas in
                  traditional finance, your money is held by the banks and you
                  have to trust them not to mismanage your money, like lending
                  to risky borrowers.
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(2)}>
              <label
                className={`${
                  open === 2 ? "question-open" : "question-close"
                } `}
              >
                What is the SEED$ token?
              </label>
              <div className="faq-icons">
                {open === 2 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 2 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "#b9e7d6",
                    fontSize: "18px",
                    lineHeight: "26px",
                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                    paddingY: "20px",
                  }}
                >
                  The <span style={{ color: "#bfd10a" }}>SEED$ token</span> is the currency of the <span style={{ color: "#bfd10a" }}>Clover SEED$ game</span>.
                  <br />
                  It is used to buy NFT that will allow you to grow Clovers and
                  harvest more SEED$.
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(4)}>
              <label
                className={`${
                  open === 4 ? "question-open" : "question-close"
                } `}
              >
                Where can I buy SEED$ and where can I create my Clover Land?
              </label>
              <div className="faq-icons">
                {open === 4 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 4 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "#b9e7d6",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  1/ Buy SEED$ on{" "}
                  <span style={{ color: "#bdd10a" }}> PancakeSwap</span> or{" "}
                  <span style={{ color: "#bdd10a" }}>Poocoin.</span>
                  <br />
                  2/ Buy land with 10,000 SEED$ (for 1 CLOVER FIELD) on our{" "}
                  <span style={{ color: "#bdd10a" }}>web app.</span>
                  <br />
                  3/ Harvest rewards in SEED$ generated by your clovers in your
                  NFT Land
                  <br />
                  4/ <span style={{ color: "#bdd10a" }}>
                    Buy more NFT lands
                  </span>{" "}
                  or swap your tokens.
                  <br />
                  You can also trade your land on{" "}
                  <a href="https://nftrade.com/" target="_blank" rel="noreferrer" style={{ color: "#bdd10a" }}>https://nftrade.com/</a>
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(5)}>
              <label
                className={`${
                  open === 5 ? "question-open" : "question-close"
                } `}
              >
                How much does a Clover Land costs?
              </label>
              <div className="faq-icons">
                {open === 5 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 5 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "#b9e7d6",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  CloverField: NFT limited to 3,000 copies.
                  <br />
                  Price: 10,000 SEED$ tokens
                  <br />
                  Reward (depending on how luck you are) : 4% / 5% / 6% / 15%
                  per day
                  <br /> <br />
                  CloverYard: NFT limited to 30,000 copies.
                  <br />
                  Price: 1,000 SEED$ tokens
                  <br />
                  Reward : 2% / 2.5% / 3% / 6% per day
                  <br />
                  <br />
                  CloverPot: NFT limited to 300,000 copies.
                  <br />
                  Price: 100 SEED$ tokens
                  <br />
                  Reward : 1% / 1.5% / 2% / 4% per day
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(6)}>
              <label
                className={`${
                  open === 6 ? "question-open" : "question-close"
                } `}
              >
                Does Clover have Faucet limits?
              </label>
              <div className="faq-icons">
                {open === 6 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 6 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "#b9e7d6",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  All Staking rewards come from the Staking wallet :
                  <br />
                  «0xbED6f3b2e6557Fe370Cb7aEB0C116b695BFf1925».
                  <br />
                  <br />
                  This wallet starts with a sum of <span style={{ color: "#bfd10a" }}>1 Billion SEED$ tokens at the
                  launch of Clover</span>.
                  <br />
                  Then :<br />
                  -The wallet will be progressively shortened, as holders claim their rewards.
                  <br />
                  -The wallet will progressively increase, as holders will be minting their NFTs (80% of tokens used during the mint will go 
                  directly in thIs wallet).
                  <br />
                  <br />
                  This wallet can therefore be exhausted over time. It is good
                  to know that if this wallet reaches 1 Million SEED$ tokens,
                  the faucet will not be able to collect more seeds on your NFT
                  land staked. The game will be over (no more watering, no more
                  SEED$ rewards)
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(7)}>
              <label
                className={`${
                  open === 7 ? "question-open" : "question-close"
                } `}
              >
                Do I need to keep my computer running for my Clover Lands to be
                active?
              </label>
              <div className="faq-icons">
                {open === 7 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 7 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "#b9e7d6",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  No, you don’t.
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(8)}>
              <label
                className={`${
                  open === 8 ? "question-open" : "question-close"
                } `}
              >
                Where can I buy land?
              </label>
              <div className="faq-icons">
                {open === 8 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 8 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "#b9e7d6",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  Directly on our <span style={{ color: "#bdd10a" }}>app</span>{" "}
                  or on{" "}
                  <span>
                    <label
                      href="https://nftrade.com/"
                      target={"_blank"}
                      style={{ color: "#bdd10a" }}
                    >
                      https://nftrade.com/
                    </label>
                  </span>
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(9)}>
              <label
                className={`${
                  open === 9 ? "question-open" : "question-close"
                } `}
              >
                Does the team earn royalties when I trade my Clover SEED$ NFT?
              </label>
              <div className="faq-icons">
                {open === 9 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 9 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "#b9e7d6",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  Yes, the team will earn 5% royalties when you will trade
                  NFT on Marketplace.
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(10)}>
              <label
                className={`${
                  open === 10 ? "question-open" : "question-close"
                } `}
              >
                Do you have big team wallets with SEED$ tokens at launch?
              </label>
              <div className="faq-icons">
                {open === 10 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 10 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "#b9e7d6",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  No, the team didn’t have any SEED$ at launch.
                  <br />
                  <br />
                  The only wallets with SEED$ tokens at launch were:
                  <br />
                  -The <span style={{ color: "#bfd10a" }}>«Rewards Wallet»</span>
                  (0xbED6f3b2e6557Fe370Cb7aEB0C116b695BFf1925) which started
                  with 1 billion SEED$ and allows to pay the rewards of the
                  staked NFTs.
                  <br />
                  -The <span style={{ color: "#bfd10a" }}>«Safety Wallet»</span>
                  (0x4D19FBd6f06F2cE45A23eABa2A535c1E86eB4c16) which started
                  with 1 million SEED$ and allows the team to fix some bugs
                  (if needed).
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(11)}>
              <label
                className={`${
                  open === 11 ? "question-open" : "question-close"
                } `}
              >
                How often should I water my land?
              </label>
              <div className="faq-icons">
                {open === 11 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 11 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "#b9e7d6",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  Maximum every 48h, you will have to water your land.
                  <br />
                  Missing it will dry your Clover Land and stop your staked NFT
                  to earn rewards!
                  <br />
                  <br />
                  Any farmer will understand how important it is to irrigate his
                  land so that their SEED$ continue to grow. That’s why it will
                  be a mandatory to come and water your fields every 48 hours to
                  keep your farms growing and see your crop thrive (and to earn
                  more SEED$).
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(12)}>
              <label
                className={`${
                  open === 12 ? "question-open" : "question-close"
                } `}
              >
                Can I buy as much Land as I want?
              </label>
              <div className="faq-icons">
                {open === 12 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 12 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "#b9e7d6",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  Yes, but Lands will be limited.
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(13)}>
              <label
                className={`${
                  open === 13 ? "question-open" : "question-close"
                } `}
              >
                What happen when I Buy or I sell SEED$?
              </label>
              <div className="faq-icons">
                {open === 13 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 13 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "#b9e7d6",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  3 Taxes to remember: <br />
                  <br />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      "@media (max-width: 768px)": {
                        flexDirection: "column",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        minWidth: "220px",
                        marginBottom: "20px",
                      }}
                    >
                      SELL TAX : <span style={{ color: "#bfd10a" }}>5%</span>
                      <br />
                      <span style={{ color: "#bfd10a" }}> Liquidity Pool </span>
                      (3%)
                      <br />
                      <span style={{ color: "#bfd10a" }}> Team wallet </span>
                      (2%)
                      <br />
                      <br />
                      To protect the project, the team reserves the right to increase the sales tax at any time to avoid a sharp drop in price. Please note that in this case, 100% of the additional tax will be reinjected into the token buyback to favor our holders.
                    </Box>
                    <Box
                      sx={{
                        minWidth: "220px",
                        marginBottom: "20px",
                      }}
                    >
                      BUY TAX : <span style={{ color: "#00a65c" }}>3%</span>
                      <br />
                      <span style={{ color: "#00a65c" }}> Liquidity Pool </span>
                      (1%)
                      <br />
                      <span style={{ color: "#00a65c" }}> Team wallet </span>
                      (2%)
                    </Box>
                    <Box
                      sx={{
                        minWidth: "200px",
                      }}
                    >
                      SELL TAX FOR NON NFT OWNERS :{" "}
                      <span style={{ color: "#3d7066" }}>50%</span>
                      <br />
                      <span style={{ color: "#3d7066" }}> Liquidity Pool </span>
                      (20%)
                      <br />
                      <span style={{ color: "#3d7066" }}>
                        {" "}
                        Marketing wallet{" "}
                      </span>
                      (15%)
                      <br />
                      <span style={{ color: "#3d7066" }}> Team wallet </span>
                      (15%)
                      <br />
                      <br />
                      This NONFTTax can be enabled/disabled during the project.
                    </Box>
                  </Box>
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(14)}>
              <label
                className={`${
                  open === 14 ? "question-open" : "question-close"
                } `}
              >
                What happens when a Land is created?
              </label>
              <div className="faq-icons">
                {open === 14 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 14 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "#b9e7d6",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  When a Clover is created: <br />
                  <br />{" "}
                  <span style={{ paddingLeft: "50px" }}>
                    - <span style={{ color: "#bdd10a" }}>80%</span> SEED$ are
                    transferred to the rewards pool (in SEED$).
                  </span>
                  <br />
                  <span style={{ paddingLeft: "50px" }}>
                    - <span style={{ color: "#bdd10a" }}>15%</span> SEED$ are
                    added to the liquidity pool (50% in BNB / 50% in SEED$).
                  </span>
                  <br />{" "}
                  <span style={{ paddingLeft: "50px" }}>
                    -<span style={{ color: "#bdd10a" }}>3%</span> SEEDS are
                    transferred to the marketing wallet to ensure the
                    stabilization of the whole protocol and the token growth
                    (BNB).
                  </span>
                  <br />{" "}
                  <span style={{ paddingLeft: "50px" }}>
                    -<span style={{ color: "#bdd10a" }}>2%</span> SEED$ are
                    transferred to the team wallet (BNB).
                  </span>
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(15)}>
              <label
                className={`${
                  open === 15 ? "question-open" : "question-close"
                } `}
              >
                Can I sell my SEED$ when I want?
              </label>
              <div className="faq-icons">
                {open === 15 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 15 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "#b9e7d6",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  Of course, you can sell your SEED$ token when you want on
                  Pancakeswap or Poocoin.
                  <br />
                  To avoid sandwich-bots and optimize the liquidity pool, a fee
                  of 5% is collected on each SELLING transactions: <br />
                  <span style={{ paddingLeft: "50px" }}>
                    - 3% are added to the liquidity pool.
                  </span>
                  <br />
                  <span style={{ paddingLeft: "50px" }}>
                    - 2% are transferred to the team wallet.
                  </span>
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(16)}>
              <label
                className={`${
                  open === 16 ? "question-open" : "question-close"
                } `}
              >
                Why is SEED$ on the Binance Smart Chain?
              </label>
              <div className="faq-icons">
                {open === 16 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 16 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "#b9e7d6",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  SEED$ is on the Binance Smart Chain for 2 reasons:
                  <br />
                  <span style={{ paddingLeft: "50px" }}>
                    - This is the SmartChain that is most accessible to
                    everyone. Unlike the Ethereum network where high gas fees
                    make it impossible for most people to access.
                  </span>
                  <br />
                  <span style={{ paddingLeft: "50px" }}>
                    - It is the SmartChain that is widely recognized, and has a
                    very good image and a positive reputation.
                  </span>
                </Paragraph>
              </div>
            </div>
            <div className="faq-q-wrap" onClick={() => handleCollapse(17)}>
              <label
                className={`${
                  open === 17 ? "question-open" : "question-close"
                } `}
              >
                Do you have a tutorial to explain the CLOVER SEED$ concept?
              </label>
              <div className="faq-icons">
                {open === 17 ? (
                  <RemoveIcon className="FAQ-ICON" />
                ) : (
                  <AddIcon className="FAQ-ICON" />
                )}
              </div>
            </div>
            <div
              className={`${
                open === 17 ? "open" : "collapse"
              } bg-transparent border-b border-white`}
            >
              <div className="faq-answer">
                <Paragraph
                  sx={{
                    color: "#b9e7d6",
                    fontSize: "18px",
                    lineHeight: "26px",

                    textTransform: "none",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                >
                  Yes, you just have to follow this{" "}
                  <label><span style={{ color: "#bdd10a" }}>link.</span></label>
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

const Title = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `72px`,
  lineHeight: `80px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `#FFFFFF`,
});
const Paragraph = styled("span")({
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `28px`,
  lineHeight: `56px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `#b9e7d6`,
});
