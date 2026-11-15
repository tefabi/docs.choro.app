import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { JSX } from 'react';

const galleryImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover' as const,
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Choro: AI Image Generator
        </Heading>
        <p className="hero__subtitle">
          Turn a text prompt into professional visuals in seconds. Guides, pricing and help for choro.app.
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

function HomepageIntro() {
  return (
    <section className="padding-vert--lg">
      <div className="container">
        <div className="text--center" style={{maxWidth: '760px', margin: '0 auto'}}>
          <Heading as="h2">What is Choro?</Heading>
          <p>
            Choro (<Link to="https://choro.app">choro.app</Link>) is an AI image generator. Describe what you want in plain
            words and Choro creates high-quality images for social media posts, portraits, marketing,
            product shots, posters and more, with no design skills needed. These docs
            show you how to get started, choose a plan, and get the best results from Choro.
          </p>
        </div>
      </div>
    </section>
  );
}

function HomepageGallery() {
  return (
    <section className="padding-vert--xl" style={{backgroundColor: 'var(--ifm-background-color)'}}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Images created with Choro AI</Heading>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
          marginTop: '2rem',
          marginBottom: '2rem'
        }}>
          {/* TODO: replace each alt with a short description of what the image actually shows */}
          <div style={{gridRow: 'span 2'}}>
            <img src="/img/sample_7.png" alt="AI-generated image created with Choro, example 1" loading="lazy" style={galleryImageStyle} />
          </div>
          <div>
            <img src="/img/sample_5.webp" alt="AI-generated image created with Choro, example 2" loading="lazy" style={galleryImageStyle} />
          </div>
          <div>
            <img src="/img/sample_9.png" alt="AI-generated image created with Choro, example 3" loading="lazy" style={galleryImageStyle} />
          </div>
          <div>
            <img src="/img/sample_5.jpg" alt="AI-generated image created with Choro, example 4" loading="lazy" style={galleryImageStyle} />
          </div>
          <div style={{gridRow: 'span 2'}}>
            <img src="/img/sample_2.png" alt="AI-generated image created with Choro, example 5" loading="lazy" style={galleryImageStyle} />
          </div>
          <div>
            <img src="/img/sample_3.webp" alt="AI-generated image created with Choro, example 6" loading="lazy" style={galleryImageStyle} />
          </div>
          <div>
            <img src="/img/sample_4.webp" alt="AI-generated image created with Choro, example 7" loading="lazy" style={galleryImageStyle} />
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
                  Learn how to generate your first AI image with Choro in minutes.
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
                  Explore Choro's flexible pricing options. From Basic to Expert plans,
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
      title="Choro AI Image Generator: Docs & Guides"
      description="Choro is an AI image generator. Create professional visuals from a text prompt, see pricing plans, and get started at choro.app.">
      <HomepageHeader />
      <main>
        <HomepageIntro />
        <HomepageGallery />
        <HomepageFeatures />
        <section className="padding-vert--md" style={{backgroundColor: 'var(--ifm-background-color)'}}>
          <div className="container">
            <div className="text--center">
              <h2>Need Help?</h2>
              <p style={{marginBottom: '1.5rem'}}>
                Our team is here to help you create amazing images with Choro.
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