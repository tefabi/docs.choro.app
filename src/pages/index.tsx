import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Choro Documentation
        </Heading>
        <p className="hero__subtitle">
          Complete documentation for the modern communication platform
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started 🚀
          </Link>
          <Link
            className="button button--primary button--lg margin-left--md"
            to="/docs/legal/privacy-policy">
            View Privacy Policy
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className="homepage-feature">
              <div className="text--center">
                <h3>📋 Legal & Privacy</h3>
                <p>
                  Comprehensive privacy policy and legal documentation to keep you informed
                  about how we handle your data and protect your privacy.
                </p>
                <Link 
                  className="button button--outline button--primary"
                  to="/docs/legal/privacy-policy">
                  Privacy Policy
                </Link>
                <Link 
                  className="button button--outline button--primary margin--sm"
                  to="/docs/legal/terms-of-service">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className="homepage-feature">
              <div className="text--center">
                <h3>🚀 Getting Started</h3>
                <p>
                  Quick setup guides, installation instructions, and everything you need 
                  to get up and running with Choro in minutes.
                </p>
                <div className="button button--outline button--secondary">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className="homepage-feature">
              <div className="text--center">
                <h3>📖 User Guide</h3>
                <p>
                  Detailed documentation covering all features, best practices, 
                  and advanced usage patterns for power users.
                </p>
                <div className="button button--outline button--secondary">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Complete documentation for Choro - the modern communication platform for messaging, groups, and real-time collaboration">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className="padding-vert--lg" style={{backgroundColor: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <div className="text--center">
                  <h2>Need Help?</h2>
                  <p className="margin-bottom--lg">
                    Our team is here to help you get the most out of Choro. 
                    Reach out through any of these channels.
                  </p>
                  <div className="button-group">
                    <Link 
                      className="button button--primary margin--sm"
                      href="mailto:info@choro.app">
                      📧 Email Support
                    </Link>
                    <Link 
                      className="button button--outline button--primary margin--sm"
                      href="https://www.choro.app">
                      🌐 Visit Website
                    </Link>
                    <Link 
                      className="button button--outline button--primary margin--sm"
                      href="https://github.com/tefabi/docs.choro.app/issues">
                      🐛 Report Issue
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
