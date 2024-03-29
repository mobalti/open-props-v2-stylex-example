import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section {...stylex.props(style.section)}>
        <div {...stylex.props(style.container)}>
          <div {...stylex.props(style.wrapper)}>
            <header>
              <h2 {...stylex.props(style.heading2)}>
                Your Travel journey {''}
                <span {...stylex.props(style.highlight)}>starts here</span>
              </h2>
            </header>
            <div {...stylex.props(style.content)}>
              <a href="#" {...stylex.props(style.mainCard)}>
                <div {...stylex.props(style.mainCardVisual)}>
                  <Image
                    {...stylex.props(style.mainCardImage)}
                    src="/images/main-img.avif"
                    alt="Travel Discover"
                    width="384"
                    height="203"
                  />
                </div>
                <div {...stylex.props(style.meta)}>
                  <h1 {...stylex.props(style.heading1)}>
                    Enhance your voyage with tips, tools and more
                  </h1>
                  <div {...stylex.props(style.controls)}>
                    <div {...stylex.props(style.buttonLink)}>
                      Explore Booking Center
                    </div>
                  </div>
                </div>
              </a>
              <ul {...stylex.props(style.cards)}>
                <li>
                  <a href="#" {...stylex.props(style.card, style.paddingEnd)}>
                    <div {...stylex.props(style.cardVisual)}>
                      <Image
                        {...stylex.props(style.cardImage)}
                        src="/images/img-1.avif"
                        alt="music event"
                        width="194"
                        height="135"
                      />
                    </div>
                    <h3 {...stylex.props(style.heading3)}>
                      Plan all your trips with Travel Business Center
                    </h3>
                  </a>
                </li>
                <li>
                  <a href="#" {...stylex.props(style.card, style.paddingEnd)}>
                    <div {...stylex.props(style.cardVisual)}>
                      <img
                        {...stylex.props(style.cardImage)}
                        src="/images/img-2.avif"
                        alt="Greek Island"
                        width="194"
                        height="135"
                      />
                    </div>
                    <h3 {...stylex.props(style.heading3)}>
                      Connect with Trip Partners to enhance your experience
                    </h3>
                  </a>
                </li>
                <li>
                  <a href="#" {...stylex.props(style.card)}>
                    <div {...stylex.props(style.cardVisual)}>
                      <img
                        {...stylex.props(style.cardImage)}
                        src="/images/img-3.avif"
                        alt="Hotel with mountain view"
                        width="194"
                        height="135"
                      />
                    </div>
                    <h3 {...stylex.props(style.heading3)}>
                      Unleash your wanderlust with Travel Academy
                    </h3>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const MD_N_ABOVE = '@media (width >= 768px)';
const LG_ONLY = '@media (768px <= width < 1024px)';
const LG_N_BELOW = '@media (width < 1024px)';
const LG_N_ABOVE = '@media (width >= 1024px)';

const style = stylex.create({
  section: {
    display: 'grid',
    placeItems: 'center',
    inlineSize: '100%',
    backgroundColor: 'white',
    paddingBlock: 'var(--size-fluid-4)',
  },
  container: {
    display: 'grid',
    placeItems: 'center',
    gap: 'var(--size-7)',
    backgroundColor: 'white',
    padding: 'var(--size-7)',
    blockSize: '100%',
    inlineSize: 'min(100%, 1152px)',
  },
  wrapper: {
    display: 'grid',
    gap: 'var(--size-7)',
  },
  heading2: {
    fontSize: {
      default: 'var(--font-size-5)',
      [MD_N_ABOVE]: 'var(--font-size-6)',
    },
  },
  highlight: {
    color: 'var(--brand-1)',
  },
  content: {
    display: 'grid',
    gap: 'var(--size-7)',
    gridTemplateColumns: {
      [LG_N_ABOVE]: '44ch 1fr',
    },
  },
  mainCard: {
    display: 'grid',
    gap: 'var(--size-3)',
    backgroundColor: 'var(--brand-2)',
    font: 'inherit',
    color: 'inherit',
    padding: 'var(--size-6)',
    borderRadius: 'var(--radius-3)',
    textDecoration: {
      default: 'none',
      ':hover': 'underline',
    },

    gridTemplateRows: {
      [LG_N_ABOVE]: '1fr min-content;',
    },

    gridTemplateColumns: {
      [LG_ONLY]: '260px 1fr',
    },
  },
  mainCardVisual: {
    containerType: 'size',
    inlineSize: '100%',
    blockSize: {
      [LG_N_BELOW]: 218,
    },
  },
  mainCardImage: {
    objectFit: 'contain',
    inlineSize: '100%',
    blockSize: '100%',
    borderRadius: 'inherit',
    transition: 'scale 0.3s var(--ease-1)',
    scale: {
      ':hover': '1.07',
    },
  },
  meta: {
    display: 'grid',
    gap: 'var(--size-5)',
  },
  heading1: {
    maxInlineSize: 'var(--size-content-1)',
    textWrap: 'balance',
    fontSize: {
      default: 'var(--font-size-5)',
      [MD_N_ABOVE]: 'var(--font-size-6)',
    },
  },
  controls: {
    display: 'grid',
    placeItems: 'center start',
  },
  buttonLink: {
    display: 'inline-grid',
    placeItems: 'center',
    textAlign: 'center',
    fontWeight: 'var(--font-weight-7)',
    paddingInline: 'var(--size-3)',
    color: 'white',
    paddingBlock: 'var(--size-4)',
    borderRadius: 'var(--radius-4)',
    transition: 'background-color 0.2s var(--ease-1)',
    backgroundColor: {
      default: 'black',
      ':hover': 'var(--color-13)',
      ':active': 'black',
    },

    fontSize: {
      default: 'var(--sm-font-size)',
      [MD_N_ABOVE]: 'var(--font-size-1)',
    },
  },
  cards: {
    listStyle: 'none',
    padding: 0,
    display: 'grid',
    gap: 'var(--size-7)',
  },
  card: {
    display: 'grid',
    gap: 'var(--size-7)',

    font: 'inherit',
    color: 'inherit',
    textDecoration: {
      default: 'none',
      ':hover': 'underline',
    },

    gridTemplateColumns: {
      [MD_N_ABOVE]: 'min-content 1fr',
    },
  },
  paddingEnd: {
    paddingBlockEnd: '2.5rem',
    borderBottom: 'var(--border-size-1) solid var(--color-3)',
  },
  cardVisual: {
    borderRadius: 'var(--radius-3)',
    overflow: 'clip',

    blockSize: {
      default: 218,
      [MD_N_ABOVE]: 135,
    },

    inlineSize: {
      default: '100%',
      [MD_N_ABOVE]: 194,
    },
  },
  cardImage: {
    objectFit: 'cover',
    inlineSize: '100%',
    blockSize: '100%',
    borderRadius: 'inherit',
    transition: 'scale 0.2s var(--ease-1)',
    scale: {
      ':hover': 1.07,
    },
  },
  heading3: {
    fontSize: 'var(--font-size-4)',
    textWrap: 'pretty',
    maxInlineSize: {
      [LG_ONLY]: '25ch',
    },
  },
});
