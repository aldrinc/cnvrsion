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
      <title>About</title>
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
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                Cnvrsion is an ecommerce blog designed to provide readers with a clear method to
                profitability in ecommerce. The blog is designed and run by me (Aldrin Clement).
                Since I don't like speaking about my self I thought I'd share what others have
                written about me since then its not considered bragging.
              </p>
              <blockquote>
                <p>
                  Aldrin is an ecommerce wunderkind that graduated from college in his hometown by
                  age 20 and spent the next few years at Deloitte Digital helping top Fortune 500
                  companies bring their ecommerce departments into the modern age. 
                </p>
                <br/>
                <p>A prolific
                  programmer, designer, and marketer, he's well versed in the entire technology and
                  marketing stack required for ecommerce. Through his experience he's cultivated and
                  documented a set of strategies and methods for building great ecommerce
                  experiences that he enjoys sharing with others.</p>
              </blockquote>
              <p>
                If you're like me when I started my ecommerce journey, you're probably thinking "where the hell do I start?". When I first began working on first ecommerce store I was desperate to work for myself. I wanted to make a living for myself rather than working a 9-5 job. I'd seen people posting about their success online and wanted in on the action. 
              </p>

              <p>Unsurprisingly, when I started I had a much harder time than I anticipated. I had about $500 saved and blew the first $300 getting my logo, site, hosting, and apps installed. Definitely not what I would do if I could do it again. </p>
              <p>
                If you need help with using Ghost, you'll find a ton of useful articles on{' '}
                <a href="https://help.ghost.org">our knowledgebase</a>, as well as extensive{' '}
                <a href="https://docs.ghost.org">developer documentation</a>.
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
