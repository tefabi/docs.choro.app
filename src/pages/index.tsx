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
            to="https://choro.app">
            Visit Choro.app
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageGallery() {
  return (
    <section className="padding-vert--xl" style={{backgroundColor: 'var(--ifm-background-color)'}}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Explore stunning designs created with Choro</Heading>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
          marginTop: '2rem',
          marginBottom: '2rem'
        }}>
          <div style={{gridRow: 'span 2'}}>
            <img 
              src="/img/sample_6.jpg" 
              alt="Design Example 1" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }} 
            />
          </div>
          
          <div>
            <img 
              src="/img/sample_5.webp" 
              alt="Design Example 2" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }} 
            />
          </div>
          
          <div>
            <img 
              src="/img/sample_9.webp" 
              alt="Design Example 3" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }} 
            />
          </div>
          
          <div>
            <img 
              src="/img/sample_1.webp" 
              alt="Design Example 4" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }} 
            />
          </div>
          
          <div style={{gridRow: 'span 2'}}>
            <img 
              src="/img/sample_2.webp" 
              alt="Design Example 5" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }} 
            />
          </div>
          
          <div>
            <img 
              src="/img/sample_3.webp" 
              alt="Design Example 6" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }} 
            />
          </div>

          <div>
            <img 
              src="/img/sample_4.webp" 
              alt="Design Example 7" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageFeatures() {
  return (
    <section className="padding-vert--lg" style={{backgroundColor: 'var(--ifm-background-surface-color)'}}>
      <div className="container">
        <div className="row">
          {/* Row 1: Getting Started & Payment Plans side-by-side */}
          <div className="col col--6 margin-bottom--md">
            <div className="homepage-feature" style={{height: '100%', padding: '2rem', borderRadius: '8px'}}>
              <div className="text--center">
                <h3>Getting Started</h3>
                <p>
                  Learn how to create stunning designs with Choro in minutes. 
                  Step-by-step guide from login to your first design.
                </p>
                <Link 
                  className="button button--outline button--primary"
                  to="/docs/getting-started">
                  Quick Start Guide
                </Link>
              </div>
            </div>
          </div>

          <div className="col col--6 margin-bottom--md">
            <div className="homepage-feature" style={{height: '100%', padding: '2rem', borderRadius: '8px'}}>
              <div className="text--center">
                <h3>Payment Plans</h3>
                <p>
                  Explore our flexible pricing options. From Basic to Expert plans, 
                  find the perfect fit for your design needs.
                </p>
                <Link 
                  className="button button--outline button--primary"
                  to="/docs/payment">
                  View Plans
                </Link>
              </div>
            </div>
          </div>

          {/* Row 2: Legal & Privacy - full width */}
          <div className="col col--12">
            <div className="homepage-feature" style={{padding: '2rem', borderRadius: '8px'}}>
              <div className="text--center">
                <h3>Legal & Privacy</h3>
                <p>
                  Comprehensive privacy policy and legal documentation. 
                  Learn how we protect your data and respect your rights.
                </p>
                <div style={{
                  display: 'flex', 
                  gap: '1rem', 
                  justifyContent: 'center',
                  marginTop: '1rem',
                  flexWrap: 'wrap'
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
        <HomepageGallery />
        <HomepageFeatures />
        <section className="padding-vert--md" style={{backgroundColor: 'var(--ifm-background-color)'}}>
          <div className="container">
            <div className="text--center">
              <h2>Need Help?</h2>
              <p style={{marginBottom: '1.5rem'}}>
                Our team is here to help you create amazing designs.
              </p>
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <Link 
                  className="button button--primary"
                  href="https://wa.me/254742233797">
                  💬 WhatsApp
                </Link>
                <Link 
                  className="button button--outline button--primary"
                  href="mailto:info@choro.app">
                  📧 Email
                </Link>
                <Link 
                  className="button button--outline button--primary"
                  href="https://choro.app">
                  🌐 Website
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}