import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import ExperienceWrapper from '@/components/home/ExperienceWrapper'
import MoralCode from '@/components/home/MoralCode'

// Revalidate every 60 seconds (ISR)
export const revalidate = 60

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceWrapper />
      <MoralCode />
    </>
  )
}
