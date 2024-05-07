import Link from '@docusaurus/Link';
import Discord from '@site/static/img/discord.svg';
import GitHub from '@site/static/img/github.svg';
import Medium from '@site/static/img/medium.svg';
import Bora from '@site/static/img/bora.svg';
import Nimi from '@site/static/img/nimi.svg';
import Spacebbit from '@site/static/img/spacebbit.svg';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styled from '@emotion/styled';
import ThemedImage from '@theme/ThemedImage';
import '../css/custom.css';

import { ArrowUpRight as LinkIcon, BookOpen, HelpCircle, Info } from 'react-feather';


export const actions = [
  {
    title: 'What is Nimbora',
    icon: HelpCircle,
    to: '/docs/concepts/overview',
    text: 'Learn how to interact with L1 & L2 strategies on Nimbora',
    image: Spacebbit
  },
  {
    title: 'Integrate with Nimbora',
    icon: BookOpen,
    to: '/docs/sdks/sdk/overview',
    text: 'Learn how to integrate Nimbora with your application',
    image: Nimi
  },
  {
    title: 'Nimbora Smart Contracts',
    icon: Info,
    to: '/docs/contracts/architecture/overview',
    text: 'Learn how to start using Nimbora smart contracts',
    image: Bora
  }
  
]

export const dAppGuides = [
  {
    title: 'Deposit',
    to: '/docs/sdks/sdk/guides/deposit',
    text: 'Learn how to deposit funds into Nimbora smart contracts',
  },
  {
    title: 'Withdraw',
    to: '/docs/sdks/sdk/guides/withdraw',
    text: 'Learn how to withdraw funds from Nimbora smart contracts',
  },
  {
    title: 'Token Manager',
    to: '/docs/sdks/sdk/guides/token_manager',
    text: 'Learn how to use the Token Manager contract',
  },
]

export const strategyGuides = [
  {
    title: 'LUSD Strategy',
    to: '/docs/concepts/strategies/liquity',
    text: 'Learn how to borrow LUSD',
  },
  // {
  //   title: 'sDAI Strategy',
  //   to: '/docs/concepts/strategies/sdai',
  //   text: 'Learn how to deposit DAI',
  // },
  // {
  //   title: 'Liquid Staking',
  //   to: '/docs/concepts/strategies/liquidStaking',
  //   text: 'Learn how to stake ETH',
  // }

]

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: 0.5rem;
`

const LinkIconWrapper = styled.div`
  opacity: 0.25;
`

const TopSection = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0;
  max-width: auto;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    max-width: 100%;
    margin: 0 1rem;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const TwoRow = styled(Row)`
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const LinkRow = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  a h3 {
    color: black !important;
  }
`

const Card = styled.div`
  display: flex;
  max-height: 250px;
  min-width: 350px;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 20px;
  border: 1px solid var(--ifm-color-emphasis-200);
  /* flex: 1 1 0px; */

  &:hover {
    border: 1px solid var(--ifm-color-emphasis-400);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`

const ShadowCard = styled(Card)`
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  background-color: #ffffff10;
  backdrop-filter: blur(10px);
  min-height: 200px;
  /* background-color: var(--ifm-color-emphasis-0); */
`

const DocsHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  position: relative;
`

const StyledImage = styled(ThemedImage)`
  position: relative;
  z-index: -1;
  width: 100%;
  object-fit: cover;
`

const StyledTitleImage = styled(StyledImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  position: absolute;
  opacity: 0.2;
  mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
`

const HideMedium = styled.div`
  @media (max-width: 960px) {
    display: none;
  }
`

const CenterCard = styled(Card)`
  min-width: 250px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 24px;

  h3 {
    margin-bottom: 0.25rem;
  }

  p {
    margin-bottom: 0px;
  }
`

const StyledIcon = styled.div`
  svg {
    fill: var(--ifm-font-color-base);
  }
`

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={'Nimbora Docs | Nimbora Yield Dex'} description='Welcome to Nimbora Docs! Learn more about how to use Nimbora. Get informed about Nimbora mechanism, SDK and more'>
      <Container>
      <DocsHeader>
          <div
            style={{
              padding: '4rem 0  ',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h1 style={{ fontWeight: 600 }}> Welcome to Nimbora Docs</h1>
          </div>
          
          <Row>
            {actions.map((action) => (
              
                <Link style={{ textDecoration: 'none' }} to={action.to}>
                  <ShadowCard key={action.title}>
                    <TopSection>
                      <IconWrapper>
                        <action.icon style={{ width: '24px' }} />
                      </IconWrapper>
                    <action.image className="card-image" alt={action.title} />
                      <LinkIconWrapper>
                        <LinkIcon />
                      </LinkIconWrapper>
                    </TopSection>
                    <h3 style={{ marginBottom: '.75rem', fontWeight: 500 }}>{action.title}</h3>
                    <p style={{ marginBottom: '0.5rem', fontWeight: 300 }}>{action.text}</p>
                  </ShadowCard>
                </Link>
            ))}
          </Row>
        </DocsHeader>
        <TwoRow
          style={{
            gap: '56px',
            marginTop: '4rem',
          }}
        >
          <div>
            <h2>Learn how to use Nimbora Strategies</h2>
            <p>Explore these guided tutorials to get started interacting with different startegies</p>
            <div>
              {strategyGuides.map((action) => (
                <Link style={{ textDecoration: 'none' }} key={action.title} to={action.to}>
                  <Card key={action.title} style={{ marginBottom: '1rem' }}>
                    <LinkRow>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h3 style={{ marginBottom: '0rem' }}>{action.title}</h3>
                      </div>
                      <LinkIconWrapper>
                        <LinkIcon />
                      </LinkIconWrapper>
                    </LinkRow>
                    <p style={{ marginBottom: '0rem', fontWeight: 300 }}>{action.text}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2>Integrate your dAPP</h2>
            <p>Explore these guided tutorials to get started integrating with Nimbora in your dApp.</p>
            <div>
              {dAppGuides.map((action) => (
                <Link style={{ textDecoration: 'none' }} key={action.title} to={action.to}>
                  <Card key={action.title} style={{ marginBottom: '1rem' }}>
                    <LinkRow>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h3 style={{ marginBottom: '0rem' }}>{action.title}</h3>
                      </div>
                      <LinkIconWrapper>
                        <LinkIcon />
                      </LinkIconWrapper>
                    </LinkRow>
                    <p style={{ marginBottom: '0rem', fontWeight: 300 }}>{action.text}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </TwoRow>
        <hr />
        <Row>
          <Link style={{ textDecoration: 'none' }} href={'http://discord.gg/nimbora'}>
            <CenterCard>
              <Discord style={{ width: '48px', height: '48px' }} />
              <div>
                <h3>Discord</h3>
                <p>Join our Developer Community.</p>
              </div>
            </CenterCard>
          </Link>
          <Link style={{ textDecoration: 'none' }} href={'https://medium.com/@Nimbora'}>
            <CenterCard>
              <StyledIcon>
                <Medium style={{ width: '48px', height: '48px' }} />
              </StyledIcon>
              <div>
                <h3>Medium</h3>
                <p>Discuss governance and more.</p>
              </div>
            </CenterCard>
          </Link>
          <Link style={{ textDecoration: 'none' }} href={'https://github.com/0xSpaceShard'}>
            <CenterCard>
              <StyledIcon>
                <GitHub style={{ width: '48px', height: '48px' }} />
              </StyledIcon>
              <div>
                <h3>GitHub</h3>
                <p>View all Nimbora repositories.</p>
              </div>
            </CenterCard>
          </Link>
        </Row>
      </Container>
    </Layout>
  );
}

