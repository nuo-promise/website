import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { getScrollTop, getLink } from '../../../utils';
import Header from '../../components/header';
import Button from '../../components/button';
import Footer from '../../components/footer';
import Language from '../../components/language';
import Item from './featureItem';
import homeConfig from '../../../site_config/home';
import './index.scss';

class Home extends Language {

  constructor(props) {
    super(props);
    this.state = {
      headerType: 'primary',
      current: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const scrollTop = getScrollTop();
      if (scrollTop > 66) {
        this.setState({
          headerType: 'normal',
        });
      } else {
        this.setState({
          headerType: 'primary',
        });
      }
    });
  }

  itemClick= (index) => {
    this.setState({ current: index });
  }

  render() {
    const language = this.getLanguage();
    const dataSource = homeConfig[language];
    const { headerType, current } = this.state;
    const currentPlugin = dataSource.plugins[current];
    const allPlugins = dataSource.plugins.map((item) => {
      const { name, brand } = item;
      return { name, brand };
    });
    const headerLogo = headerType === 'primary' ? '/img/dromara.png' : '/img/dromara.png';
    return (
      <div className="home-page">
        <section className="top-section">
          <Header
            currentKey="home"
            type={headerType}
            logo={headerLogo}
            language={language}
            onLanguageChange={this.onLanguageChange}
          />
          <div className="home-carousel">
            {allPlugins && allPlugins.map((item, index) => {
              const { name, brand } = item;
              return (
                <div onClick={() => { this.itemClick(index); }} key={index} className={classnames({ 'vertical-middle': true, 'vertical-selected': index === current })}>
                  <div className="product-name">
                    <h2>{name}</h2>
                  </div>
                  <p className="product-desc">
                    {brand.briefIntroduction}
                  </p>
                  <div className="button-area">
                    {brand.buttons.map((b, bIndex) => (
                      <Button
                        type={b.type}
                        key={bIndex}
                        link={b.link}
                        target={b.target}
                      >
                        {b.text}
                      </Button>
                    ))}
                </div>
                </div>
              );
            })}
          </div>
          <div className="animation animation1" />
          <div className="animation animation2" />
          <div className="animation animation3" />
          <div className="animation animation4" />
          <div className="animation animation5" />
        </section>
        <section className="introduction-section">
          <div className="introduction-body">
            <div className="introduction">
              <h3>{currentPlugin.introduction.title}</h3>
              <p>{currentPlugin.introduction.desc}</p>
            </div>
            <img src={getLink(currentPlugin.introduction.img)} />
          </div>
        </section>
        <section className="feature-section">
          <h3>{currentPlugin.features.title}</h3>
          <ul>
          {
            currentPlugin.features.list.map((feature, i) => (
              <Item feature={feature} key={i} />
            ))
          }
          </ul>
        </section>
        <section className="users-section">
          <h3>{currentPlugin.users.title}</h3>
          <p>{currentPlugin.users.desc}</p>
          <div className="users">
          {
            currentPlugin.users.list.map((user, i) => (
              <img src={getLink(user)} key={i} />
            ))
          }
          </div>
        </section>
        <Footer logo="/img/dubbo_gray.png" language={language} />
      </div>
    );
  }
}

document.getElementById('root') && ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;