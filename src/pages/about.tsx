import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
                <meta charSet="utf-8" />
                <title>About Me | Cnvrsion.com</title>
                <link rel="canonical" href="http://cnvrsion.com/about" />
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About the Author</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                Cnvrsion is an ecommerce blog designed to provide readers with a clear method to
                profitability in ecommerce. The blog is designed and run by me (Aldrin Clement).
                Since I don't like speaking about my self I thought I'd share what others have
                written about me.
              </p>
              <blockquote>
                <p>
                  Aldrin is an ecommerce wunderkind that graduated from college in his hometown by
                  age 20 and spent the next few years at Deloitte Digital helping top Fortune 500
                  companies bring their ecommerce departments into the modern age. If I could have had him continue working for me I would've in a heartbeat! ~ Manager
                </p>
                <br/>
                <p>A prolific
                  programmer, designer, and marketer, he's well versed in the entire technology and
                  marketing stack required for ecommerce. Through his experience he's cultivated and
                  documented a set of strategies and methods for building great ecommerce
                  experiences that he enjoys sharing with others. ~ Peer</p>
              </blockquote>
              <p>
                If you're like me when I started my ecommerce journey, you're probably thinking "where the hell do I start?". This blog is meant to help folks who are thinking the same thing I was many years ago.
              </p>

              
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
