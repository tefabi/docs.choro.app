import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { JSX } from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Choro Documentation
        </Heading>
        <p className="hero__subtitle">
          Complete documentation for the modern design platform
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="https://choro.app"
            style={{marginLeft: '0.5rem', marginTop: '0.5rem'}}>
            Visit Choro.app
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
          {/* Getting Started Card */}
          <div className="col col--12 col--md-6 col--lg-4 margin-bottom--lg">
            <div className="homepage-feature" style={{height: '100%'}}>
              <div className="text--center padding--md">
                <h3>Getting Started</h3>
                <p>
                  Learn how to create stunning designs with Choro in minutes. 
                  Step-by-step guide from login to your first design.
                </p>
                <div style={{
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.5rem',
                  marginTop: '1rem'
                }}>
                  <Link 
                    className="button button--outline button--primary"
                    to="/docs/getting-started">
                    Quick Start Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Plans Card */}
          <div className="col col--12 col--md-6 col--lg-4 margin-bottom--lg">
            <div className="homepage-feature" style={{height: '100%'}}>
              <div className="text--center padding--md">
                <h3>Payment Plans</h3>
                <p>
                  Explore our flexible pricing options. From Basic to Expert plans, 
                  find the perfect fit for your design needs.
                </p>
                <div style={{
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.5rem',
                  marginTop: '1rem'
                }}>
                  <Link 
                    className="button button--outline button--primary"
                    to="/docs/payment">
                    View Plans
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Legal & Privacy Card */}
          <div className="col col--12 col--md-6 col--lg-4 margin-bottom--lg">
            <div className="homepage-feature" style={{height: '100%'}}>
              <div className="text--center padding--md">
                <h3>Legal & Privacy</h3>
                <p>
                  Comprehensive privacy policy and legal documentation. 
                  Learn how we protect your data and respect your rights.
                </p>
                <div style={{
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.5rem',
                  marginTop: '1rem'
                }}>
                  <Link 
                    className="button button--outline button--primary"
                    to="/docs/legal/privacy-policy">
                    Privacy Policy
                  </Link>
                  <Link 
                    className="button button--outline button--primary"
                    to="/docs/legal/terms-of-service">
                    Terms of Service
                  </Link>
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
      description="Complete documentation for Choro - the modern AI-powered design platform for instant professional visuals">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className="padding-vert--lg" style={{backgroundColor: 'var(--ifm-background-surface-color)'}}>
          <div className="container">
            <div className="row">
              <div className="col col--12 col--lg-8" style={{margin: '0 auto'}}>
                <div className="text--center padding--md">
                  <h2>Need Help?</h2>
                  <p className="margin-bottom--lg">
                    Our team is here to help you create amazing designs. 
                    Reach out through any of these channels.
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Link 
                      className="button button--primary"
                      href="https://wa.me/254742233797"
                      style={{flex: '1 1 auto', minWidth: '200px', maxWidth: '300px'}}>
                      💬 WhatsApp
                    </Link>
                    <Link 
                      className="button button--outline button--primary"
                      href="mailto:info@choro.app"
                      style={{flex: '1 1 auto', minWidth: '200px', maxWidth: '300px'}}>
                      📧 Email Support
                    </Link>
                    <Link 
                      className="button button--outline button--primary"
                      href="https://choro.app"
                      style={{flex: '1 1 auto', minWidth: '200px', maxWidth: '300px'}}>
                      🌐 Visit Website
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