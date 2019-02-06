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
                written about me.
              </p>
              <blockquote>
                <p>
                  Aldrin is an ecommerce wunderkind that graduated from college in his hometown by
                  age 20 and spent the next few years at Deloitte Digital helping top Fortune 500
                  companies bring their ecommerce departments into the modern age. If I could have had him continue working for me I would've in a heartbeat!
                </p>
                <br/>
                <p>A prolific
                  programmer, designer, and marketer, he's well versed in the entire technology and
                  marketing stack required for ecommerce. Through his experience he's cultivated and
                  documented a set of strategies and methods for building great ecommerce
                  experiences that he enjoys sharing with others.</p>
              </blockquote>
              <p>
                If you're like me when I started my ecommerce journey, you're probably thinking "where the hell do I start?". When I first began working on first ecommerce store I was desperate to work for myself. I wanted to make a living for myself rather than working a 9-5 job. I'd seen people posting about their success online and wanted that lifestyle but I was still a little skeptical. After all there's no such thing as a free lunch. 
              </p>

              <p>Unsurprisingly, when I started I had a much harder time than I anticipated. I had about $500 saved and blew the first $300 getting my logo, site, hosting, and apps installed leaving me about $200 for advertising. Definitely not what I would do if I could do it again. </p>
              <p>I then started playing it much safer.</p>
              <p>I spent more time focusing on finding a great product. One I'd be proud to sell and customers would love. Then I spent hours studying the niche and identifying customer pain points and how businesses in the space operate.</p>
              <p>This process was painful and time consuming.</p>
              <p>So after spending more than 200 hours studying a niche and evaluating products I put together a comprehensive list of steps to evaluate products and a niche effectively and this has become my bread and butter for my dropshipping businesses.</p>

              <p> And better yet I'm going to share some of those documented processes for FREE on this blog and via my private email list.</p>
              <p>
               While almost no other eCommerce folks provide a systematic way to learn more about the niche, I've found much greater success in my targeting as well as lower costs in my operations (lower testing costs, fewer returns and refunds, etc) by systematically evaluating customers and businesses in the niche. 
              </p>
              <p> Now you don't have to be an expert in the niche but I have a few key areas that I look at in order to better understand the target customer and market.</p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
