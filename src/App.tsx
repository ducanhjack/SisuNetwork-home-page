import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">

      {/* HEADER */}
      <input type="checkbox" hidden id='openMenuMobile' />
      <div className='header container-app'>
        <div className='header__logo__burger'>
            <label htmlFor='openMenuMobile' className='header__logo__burger-burger'>
              <i className="fas fa-bars"></i>
            </label>
            <img alt='thumbnail' src='https://sisu.network/assets/logo.e0e1a9e1.svg' className='header__logo__burger-logo' />
        </div>
        <div className='header_navigation'>
            <ul className='header_navigation_menu'>
                <li className='header_navigation_menu__item'>
                  <a href='#!' className='header_navigation_menu__item__link'>
                      Home
                  </a>
                </li>
                <li className='header_navigation_menu__item'>
                  <a href='#!' className='header_navigation_menu__item__link'>
                    Roadmap
                  </a>
                </li>
                <li className='header_navigation_menu__item'>
                  <a href='#!' className='header_navigation_menu__item__link'>
                    Testnet
                  </a>
                  <div className='header_navigation_menu__item-wrapSubmenu'>
                    <div className='header_navigation_menu__item-submenu'>
                      <div className='header_navigation_menu__item-menuItem'>
                          <p className='header_navigation_menu__item-menuItem-title'>
                            Sisu Testnet User Guide
                          </p>
                          <p className='header_navigation_menu__item-menuItem-des'>
                            An in-depth walkthrough of how to set up Sisu on ur machine
                          </p>
                          <a href='#!' className='header_navigation_menu__item-menuItem-link'>
                              <img  alt='thumbnail'  src='https://sisu.network/assets/info.804c2b30.svg' className='header_navigation_menu__item-menuItem-link-icon'/>
                              Reward Information
                          </a>
                          <a href='#!' className='header_navigation_menu__item-menuItem-link'>
                              <img alt='thumbnail'  src='https://sisu.network/assets/info.804c2b30.svg' className='header_navigation_menu__item-menuItem-link-icon'/>
                              Reward Information
                          </a>
                      </div>
                      <div className='header_navigation_menu__item-menuItem'>
                          <a href='#!' className='header_navigation_menu__item-menuItem-link'>
                              <img alt='thumbnail'  src='https://sisu.network/assets/info.804c2b30.svg' className='header_navigation_menu__item-menuItem-link-icon'/>
                              About the Testnet
                          </a>
                          <a href='#!' className='header_navigation_menu__item-menuItem-link'>
                              <img alt='thumbnail'  src='https://sisu.network/assets/layer.a60fbb98.svg' className='header_navigation_menu__item-menuItem-link-icon'/>
                              Testnet Dex
                          </a>
                          <a href='#!' className='header_navigation_menu__item-menuItem-link'>
                              <img alt='thumbnail'  src='https://sisu.network/assets/bar-chart.915fbb76.svg' className='header_navigation_menu__item-menuItem-link-icon'/>
                              Testnet Leaderboard
                          </a>
                          <a href='#!' className='header_navigation_menu__item-menuItem-link'>
                              <img alt='thumbnail'  src='https://sisu.network/assets/badge-check.f34fde14.svg' className='header_navigation_menu__item-menuItem-link-icon'/>
                              Submit your contribution
                          </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='header_navigation_menu__item'>
                  <a href='#!' className='header_navigation_menu__item__link'>
                    Blog
                  </a>
                </li>
            </ul>
            <div className='header_navigation_media'>
              <a href='#!' className='header_navigation__media__link'>
                <img  alt='thumbnail'  src="https://sisu.network/assets/discord.7e523063.svg" className='header_navigation__media__link__img' />
              </a>
              <a href='#!' className='header_navigation__media__link'>
                <img  alt='thumbnail'  src="https://sisu.network/assets/github.239577cc.svg" className='header_navigation__media__link__img' />
              </a>
            </div>
        </div>
        <div className='header_button_login'>
          <a href='#!' className='button button-login'>
            Login
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {/* HERO */}
      <div className='hero'>
        <div className='hero__bgColor'></div>
        <div className='container-app hero__data'>
            <div className='hero__data__info'>
              <p className='hero__data__info-title text-lg text-bold'>
                Unify the Fragmented Blockchain World
              </p>
              <p className='text-md'>
                Blockchain world is fragmented. Everyone is living in their own chain. Sisu network is the decentralized cross-chain communication network that allows native & NFT tokens swapping or remote contract execution for a more seamless blockchain experience
              </p>
              <button className='button button-cta'>
                Join our community
              </button>
            </div>
            <div className='hero__data__background'>
              <img  alt='thumbnail'  src="https://sisu.network/assets/slider-pic.772e7577.svg" className='hero__data__background__photo' />
            </div>
        </div>
      </div>

      {/* REINFORCING */}
      <div className='reinforcing container-app'>
        <div className='reinforcing-card reinforcing-card-pink'>
          <img src="https://sisu.network/assets/convert.2e6b6431.svg" className='reinforcing-card__thumbnail' alt='thumbnail' />
          <p className='reinforcing-card__title'>
              Easy Transfer
          </p>
          <p className='reinforcing-card__desc text-md'>
            Sisu supports native, NFT token swapping and contract data transfer. Move your assets cross chain seamlessly.
          </p>
        </div>
        <div className='reinforcing-card reinforcing-card-violet'>
          <img src="https://sisu.network/assets/trustless.8869ef2b.svg" className='reinforcing-card__thumbnail' alt='thumbnail' />
          <p className='reinforcing-card__title'>
          100% Trustless
          </p>
          <p className='reinforcing-card__desc text-md'>
          No one holds a chain's private key. All transactions stay decentralized.
          </p>
        </div>
        <div className='reinforcing-card reinforcing-card-blue'>
          <img src="https://sisu.network/assets/fingerprint.37eb76f2.svg" className='reinforcing-card__thumbnail' alt='thumbnail' />
          <p className='reinforcing-card__title'>
          Private Transactions
          </p>
          <p className='reinforcing-card__desc text-md'>
          Optional add-ons to make native token swapping private or obfuscated for extra security.
          </p>
        </div>
      </div>

      {/* REGISTER */}
      <div className='register'>
        <div className='register__bgColor'></div>
        <div className='register__logo'>
            <img className='register__logo-img' src="https://sisu.network/assets/logo.e0e1a9e1.svg" alt="logo" />
        </div>
        <div className='container-app register__data'>
            <div className='register__data__info'>
                <p className='register__data__info-title text-lg text-bold'>
                  Ready to Get Started?
                </p>
                <p className='register__data__info-subTitle text-lg text-bold'>
                  Register Now To Stay in the Loop
                </p>
            </div>
            <form className='register__data__form'>
              <input type="email" placeholder='Enter your mail...' required className='register__data__form-input' />
              <button className='button button-cta register__data__form-btnSubmit'>
                  Register now
              </button>
            </form>
        </div>
      </div>

      {/* FEATURE - SupportedChains */}
      <div className='features-SupportedChains container-app'>
        <p className='features-SupportedChains_title text-lg text-bold'>
          Supported
          <br />
          Chains
        </p>
        <div className='features-SupportedChains_thumbnail'>
          <img src="https://sisu.network/assets/logos.9d797205.svg" className='features-SupportedChains_thumbnail-img' alt='thumbnail' />
        </div>
      </div>

      {/* FEATURE - component */}
      <div className='features-component container-app'>
        <div className='features-component_thumbnail'>
          <img src="https://sisu.network/assets/decentralized.56f8d8ac.svg" className='features-component_thumbnail-img' alt='thumbnail' />
        </div>
        <div className='features-component_data'>
          <p className='features-component_data-title text-lg text-bold'>
            Decentralized Token
            <br />
            Swapping
          </p>
          <p className='features-component_data-des text-md'>
            Centralized exchanges can be more vulnerable to single point of failure. Sisu uses advanced cryptography algorithms for cross-chain communication that stays secure, decentralized, and with no private keys.
          </p>
          <div className='features-component_data_bullets'>
            <div className='features-component_data_bullet_item'>
              Swap native and NFT tokens cross-chain.
            </div>
            <div className='features-component_data_bullet_item'>
              No single point of failure.
            </div>
            <div className='features-component_data_bullet_item'>
            Secure and traceable communication.
            </div>
            <div className='features-component_data_bullet_item'>
            100% “trustless”
            </div>
          </div>
        </div>
      </div>

      <div className='features-component container-app features-component-reverse'>
        <div className='features-component_thumbnail'>
          <img src="https://sisu.network/assets/api.796ec0c7.svg" className='features-component_thumbnail-img' alt='thumbnail' />
        </div>
        <div className='features-component_data'>
          <p className='features-component_data-title text-lg text-bold'>
          Cross-chain
            <br />
            API Hub
          </p>
          <p className='features-component_data-des text-md'>
          Different chains can often have different smart contract languages that makes it harder to work cross-chain. Sisu allows developers to interact with cross-chain contracts as if they were a single chain
          </p>
          <div className='features-component_data_bullets'>
            <div className='features-component_data_bullet_item'>
            Interact cross-chain without learning a new language.
            </div>
            <div className='features-component_data_bullet_item'>
            Less effort dealing with updates.
            </div>
            <div className='features-component_data_bullet_item'>
            Secure and traceable communication.
            </div>
            <div className='features-component_data_bullet_item'>
            Write a contract once that you can use across chains.
            </div>
          </div>
        </div>
      </div>

      <div className='features-component container-app features-component-align-center'>
        <div className='features-component_thumbnail'>
          <img src="https://sisu.network/assets/private.6ff5123e.svg" className='features-component_thumbnail-img' alt='thumbnail' />
        </div>
        <div className='features-component_data'>
          <p className='features-component_data-title text-lg text-bold'>
              Private Transactions
          </p>
          <p className='features-component_data-des text-md'>
            Sisu supports privacy and security across our network. Small add-ons allow private transfers across chains.
          </p>
          <div className='features-component_data_bullets'>
            <div className='features-component_data_bullet_item'>
            Shielded cross-train transactions
            </div>
            <div className='features-component_data_bullet_item'>
            Optional privacy add-on features.
            </div>
          </div>
        </div>
      </div>

      {/* APP */}
      <div className='apps'>
        <div className='apps__bgColor'></div>
        <div className='container-app apps__data'>
            <p className='apps__data__title text-lg text-bold'>
              Apps that Can <br />
              Interact With <br />
              SiSu
            </p>
            <div className='apps__data__thumnail'>
              <img src='https://sisu.network//assets/app-logos.0ac3f089.svg' className='apps__data__thumnail-img' alt='thumbnail' />
            </div>
        </div>
      </div>

      {/* FAQ */}
      <div className='faq container-app'>
        <div className='faq__data'>
          <p className='faq__data__title text-lg text-bold'>
            Frequently Asked Questions
          </p>
          <div className='faq__data__list' >

              {/* FAQ ITEM */}
              <input type="radio" className='openFAQ' defaultChecked={true} hidden name='faq' id='faq-1' />
              <label htmlFor='faq-1' className='faq__data__item'>
                  <p className='faq__data__item-title text-md'>
                    What is Sisu?
                    <img className='faq__data__item-title-icon' src="https://sisu.network/assets/chevron-right.79595702.svg" alt='icon' />
                  </p>
                  <p className='faq__data__item-content'>
                    Sisu is a decentralized blockchain that powers cross-chain communication. We support cross-chain token swapping (e.g. native, ERC20 or ERC721) to facilitate digital monetary transactions like Bitcoin, Crypto, and other digital currencies. Sisu can support almost all modern blockchains, and we are adding more and more supported tokens as we progress. Our network also allows developers to interact with cross-chain contracts as if they are working on the same chain to reduce time spent learning new languages and help them build their own networks.
                  </p>
              </label>
              {/* END FAQ ITEM */}

              {/* FAQ ITEM */}
              <input type="radio" className='openFAQ' hidden name='faq' id='faq-2' />
              <label htmlFor='faq-2' className='faq__data__item'>
                  <p className='faq__data__item-title text-md'>
                  How does Sisu work?
                    <img className='faq__data__item-title-icon' src="https://sisu.network/assets/chevron-right.79595702.svg" alt='icon' />
                  </p>
                  <p className='faq__data__item-content'>
                  Sisu deploys gateway smart contracts (or account in the case of Bitcoin) at each chain. Users send requests to one of these contracts to initiate cross-chain transactions. This information is public and recorded by all Sisu nodes, maintaining decentralization. Each transaction request must be recorded by at least ⅔ nodes in the network to be considered final, and each transaction output must be signed by 80% of super validators in the network.
                  </p>
              </label>
              {/* END FAQ ITEM */}

              {/* FAQ ITEM */}
              <input type="radio" className='openFAQ' hidden name='faq' id='faq-3' />
              <label htmlFor='faq-3' className='faq__data__item'>
                  <p className='faq__data__item-title text-md'>
                  What is the advantage of Sisu over a centralized bridge?
                    <img className='faq__data__item-title-icon' src="https://sisu.network/assets/chevron-right.79595702.svg" alt='icon' />
                  </p>
                  <p className='faq__data__item-content'>
                  A common solution by many centralized bridges is to hold a single private key to control gateway contracts or AMM. This is a serious security issue as the private key could be hacked or the key holder could run away with the fund. Sisu leverages distributed key signing algorithms to secure cross-chain transactions. No private key is ever assembled even during the transaction signing. The decentralization nature of Sisu enables other teams to cross chain apps like DEX without KYC process to trade non-custodian assets. This simplifies the verification and registration process for end users who want to trade tokens or do yield farming.
                  </p>
              </label>
              {/* END FAQ ITEM */}

              {/* FAQ ITEM */}
              <input type="radio" className='openFAQ' hidden name='faq' id='faq-4' />
              <label htmlFor='faq-4' className='faq__data__item'>
                  <p className='faq__data__item-title text-md'>
                  Will there be a Sisu token?
                    <img className='faq__data__item-title-icon' src="https://sisu.network/assets/chevron-right.79595702.svg" alt='icon' />
                  </p>
                  <p className='faq__data__item-content'>
                  Yes, the token name is SISU and the distribution plan will be announced later by the development team.
                  </p>
              </label>
              {/* END FAQ ITEM */}

              {/* FAQ ITEM */}
              <input type="radio" className='openFAQ' hidden name='faq' id='faq-5' />
              <label htmlFor='faq-5' className='faq__data__item'>
                  <p className='faq__data__item-title text-md'>
                    How many Sisu tokens are there?
                    <img className='faq__data__item-title-icon' src="https://sisu.network/assets/chevron-right.79595702.svg" alt='icon' />
                  </p>
                  <p className='faq__data__item-content'>
                  Sisu can support almost all modern blockchain but we will start with Etherem-compatible blockchains. Next step is to include chains without smart contracts like Bitcoin, Litecoin, and finally, other newer chains like Solana, Avalanche.
                  </p>
              </label>
              {/* END FAQ ITEM */}

              {/* FAQ ITEM */}
              <input type="radio" className='openFAQ' hidden name='faq' id='faq-6' />
              <label htmlFor='faq-6' className='faq__data__item'>
                  <p className='faq__data__item-title text-md'>
                  Can Sisu support private transactions?
                    <img className='faq__data__item-title-icon' src="https://sisu.network/assets/chevron-right.79595702.svg" alt='icon' />
                  </p>
                  <p className='faq__data__item-content'>
                    Sisu is a decentralized blockchain that powers cross-chain communication. We support cross-chain token swapping (e.g. native, ERC20 or ERC721) to facilitate digital monetary transactions like Bitcoin, Crypto, and other digital currencies. Sisu can support almost all modern blockchains, and we are adding more and more supported tokens as we progress. Our network also allows developers to interact with cross-chain contracts as if they are working on the same chain to reduce time spent learning new languages and help them build their own networks.
                  </p>
              </label>
              {/* END FAQ ITEM */}

          </div>
        </div>
        <div className='faq__contact'>
          <img className='faq__contact__ic' src='https://sisu.network/assets/question-mark.4b67480a.svg' alt='icon' />
          <p className='faq__contact__title'>
            Have different questions?
          </p>
          <p className='faq__contact__desc'>
          Just ask us and we'll get back to you soon
          </p>
          <a href='#!'className='button button-cta faq__contact__desc__buttonEmail'>
            <i className="fas fa-envelope"></i> Shoot a Direct Mail
          </a>
        </div>
      </div>

       {/* REGISTER */}
      <div className='register'>
        <div className='register__bgColor'></div>
        <div className='register__logo'>
            <img className='register__logo-img' src="https://sisu.network/assets/logo.e0e1a9e1.svg" alt="logo" />
        </div>
        <div className='container-app register__data'>
            <div className='register__data__info'>
                <p className='register__data__info-title text-lg text-bold'>
                  Ready to Get Started?
                </p>
                <p className='register__data__info-subTitle text-lg text-bold'>
                  Register Now To Stay in the Loop
                </p>
            </div>
            <form className='register__data__form'>
              <input type="email" placeholder='Enter your mail...' required className='register__data__form-input' />
              <button className='button button-cta register__data__form-btnSubmit'>
                  Register now
              </button>
            </form>
        </div>
      </div>

      {/* FOOTER */}
      <div className='footer container-app'>
        <img className='footer__logo' src="https://sisu.network/assets/logo.e0e1a9e1.svg" alt='logo' />
        <p className='footer__text text-md text-bold'>
          Sisu, Inc. © 2022 All rights reserved.
        </p>
        <div className='footer__media'>
            <a href='#!' className='footer__media__link'>
              <img   alt='thumbnail' src="https://sisu.network/assets/twitter.f98dce68.svg" className='footer__media__link__img' />
            </a>
            <a href='#!' className='footer__media__link'>
              <img alt='thumbnail'  src="https://sisu.network/assets/discord.7e523063.svg" className='footer__media__link__img' />
            </a>
            <a href='#!' className='footer__media__link'>
              <img alt='thumbnail'  src="https://sisu.network/assets/github.239577cc.svg" className='footer__media__link__img' />
            </a>
        </div>
      </div>
    </div>
  );
}

export default App;
