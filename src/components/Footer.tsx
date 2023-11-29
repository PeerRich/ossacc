import { GridPattern } from '@/components/GridPattern'

export function Footer() {
  return (
    <footer className="relative pb-20 pt-5 sm:pb-32 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-32 text-slate-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
      <a
        href="https://github.com/peerrich/ossacc"
        className="relative text-center text-sm text-slate-600"
      >
        <p>MIT &copy; {new Date().getFullYear()} oss/acc</p>
      </a>
    </footer>
  )
}
