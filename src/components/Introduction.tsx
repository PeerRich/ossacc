import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="max-w-3xl font-display text-4xl font-bold tracking-tight text-slate-900">
          Open Source: The invisible architect of our modern world
        </p>
        <p className="mt-4">
          As we accelerate into a future dominated by machines and artificial
          intelligence, we need to ensure that the systems human civilization
          relies on are secure, reliable, and aligned with our values. There is
          only one way to do this at scale: <strong>Open Source.</strong>
        </p>
        <p className="mt-4">
          That&apos;s why we need Open Source Accelerationism - <strong>oss/acc.</strong>
        </p>

        <ul role="list" className="mt-8 space-y-3">
          {[
            'Transparency and Trust',
            'Security and Reliability',
            'Innovation and Progress',
            'Accessibility and Inclusivity',
            'Customizability and Flexibility',
            'Longevity and Sustainability',
            'Ethical and Social Responsibility',
            'Global Collaboration and Cooperation',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="prose dark:prose-invert dark mt-8 w-full break-words">
          <ol className="space-y-4">
            <li>
              <p>
                <strong>Transparency and Trust:</strong> Open source
                software&apos;s code is accessible to everyone, allowing users
                to review, modify, and enhance it. This transparency fosters
                trust as it ensures there are no hidden functionalities or
                vulnerabilities that could compromise security.
              </p>
            </li>
            <li>
              <p>
                <strong>Security and Reliability:</strong> With a global
                community continuously examining the code, issues and
                vulnerabilities are quickly identified and fixed. This
                collaborative approach leads to more secure and reliable
                software, reducing the risk of cyber attacks and ensuring robust
                systems for critical infrastructure.
              </p>
            </li>
            <li>
              <p>
                <strong>Innovation and Progress:</strong> Open source encourages
                innovation by enabling developers worldwide to build upon
                existing solutions. This collaborative environment sparks
                creativity and accelerates technological progress, leading to
                better tools, applications, and systems that benefit society.
              </p>
            </li>
            <li>
              <p>
                <strong>Accessibility and Inclusivity:</strong> Open source
                software is often free or available at minimal cost, breaking
                down financial barriers to technology. It empowers individuals
                and communities, particularly in underserved regions, to access
                and use advanced tools, fostering digital inclusivity.
              </p>
            </li>
            <li>
              <p>
                <strong>Customizability and Flexibility:</strong> Users can
                tailor open source software to suit their specific needs. This
                flexibility allows for customization, adaptation, and
                integration into diverse environments, ensuring solutions that
                fit a wide array of contexts and requirements.
              </p>
            </li>
            <li>
              <p>
                <strong>Longevity and Sustainability:</strong> Open source
                projects are not dependent on the fate of a single entity.
                Communities sustain these projects, ensuring their longevity
                even if a particular organization or company fades away,
                providing continuity and stability.
              </p>
            </li>
            <li>
              <p>
                <strong>Ethical and Social Responsibility:</strong> Open source
                software embodies principles of collaboration, sharing, and
                knowledge dissemination. It aligns with ethical values by
                promoting the democratization of technology and fostering a
                culture of giving back to the community.
              </p>
            </li>
            <li>
              <p>
                <strong>Global Collaboration and Cooperation:</strong> Open
                source transcends borders and encourages collaboration among
                diverse communities worldwide. It harnesses the collective
                intelligence of individuals irrespective of their geographical
                location, fostering a global spirit of cooperation and shared
                advancement.
              </p>
            </li>
          </ol>
        </div>
        <p className="mt-8">
          A future built upon open source software cultivates an environment
          where technology serves humanity, empowers individuals, and creates a
          more secure, equitable, and prosperous world for all.
        </p>
        <p className="mt-8">
          Join the open source movement and sign the manifesto or{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
            href="https://twitter.com/search?q=I've%20signed%20the%20http://ossacc.com%20open%20source%20acceleration%20manifesto%20and%20you%20should%20do%20to!&src=typed_query"
          >
            see who already has signed it
          </a>
          .
        </p>
        <p className="mt-10">
          <Link
            href="https://twitter.com/intent/tweet?text=I've%20signed%20the%20ossacc.com%20open%20source%20acceleration%20manifesto%20and%20you%20should%20do%20to!"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Share on x.com
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
