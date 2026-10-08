import { Link } from 'react-router-dom'

type FaqItem = {
  category: string
  question: string
  answer: string
  image: string
  imageAlt: string
}

const faqItems: FaqItem[] = [
  {
    category: 'ORIGIN',
    question: 'Where are your products made?',
    answer:
      'Everything we make is made in the USA. We don’t outsource our manufacturing, so we can stay close to the process and the people who make our products.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'A craftsperson working at a manufacturing bench',
  },
  {
    category: 'MAKING',
    question: 'How do you approach ethical manufacturing?',
    answer:
      'We believe the people behind our products deserve safe working conditions, respect, and fair treatment. Ethical practices guide how we make every product.',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Colleagues working together around a table',
  },
  {
    category: 'MATERIALS',
    question: 'What materials do you use?',
    answer:
      'We prioritize sustainable materials, including reusable materials wherever possible, and look for thoughtful ways to reduce waste.',
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Green landscape representing care for the environment',
  },
  {
    category: 'COMMUNITY',
    question: 'What values guide our company?',
    answer:
      'We support LGBTQ+ rights and minority rights. We want everyone in our community to feel respected, included, and able to thrive.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'A group of friends spending time together outdoors',
  },
  {
    category: 'OUR TEAM',
    question: 'How do you support your employees?',
    answer:
      'Our employees are an important part of what makes our work possible. We offer great benefits and aim to create a supportive, inclusive workplace.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'A bright, welcoming shared workspace',
  },
]

export default function FaqPage() {
  return (
    <main id="top" className="faq-page">
      <Link className="product-back-link" to="/#collection">
        <span aria-hidden="true">←</span> Back to collection
      </Link>
      <section aria-labelledby="faq-title">
        <p className="eyebrow">A LITTLE MORE ABOUT US</p>
        <h1 id="faq-title">Frequently asked questions.</h1>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <article className="faq-item" key={item.category}>
              <img className="faq-image" src={item.image} alt={item.imageAlt} loading="lazy" />
              <div className="faq-answer">
                <span className="faq-number">
                  {String(index + 1).padStart(2, '0')} / {item.category}
                </span>
                <h2>{item.question}</h2>
                <p>{item.answer}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="faq-contact">
          Still curious?{' '}
          <a href="#" onClick={(event) => event.preventDefault()}>
            Get in contact
          </a>
          .
        </p>
      </section>
    </main>
  )
}
