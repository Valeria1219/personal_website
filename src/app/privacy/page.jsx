import { Shield, BarChart3, Cookie, ExternalLink, Mail } from 'lucide-react'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: January 29, 2026
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-8">
          {/* Introduction */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
              Introduction
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This privacy policy explains how this website collects and uses data when you visit.
            </p>
          </section>

          {/* Analytics */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Analytics
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This website uses <strong className="text-foreground">PostHog</strong> for analytics purposes. 
              PostHog helps me understand how visitors interact with the site, which pages are most popular, 
              and how I can improve the user experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              PostHog may collect the following information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
              <li>Pages you visit on this site</li>
              <li>Time spent on pages</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>General location (country/city level)</li>
              <li>Referring website</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              PostHog does not collect personally identifiable information unless you explicitly provide it. 
              For more information about PostHog's privacy practices, please visit{' '}
              <a 
                href="https://posthog.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                PostHog's Privacy Policy
                <ExternalLink className="w-3 h-3" />
              </a>.
            </p>
          </section>

          {/* Cookies */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Cookie className="w-5 h-5 text-primary" />
              Cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This website uses cookies to enable analytics functionality. You can disable cookies in your 
              browser settings if you prefer not to be tracked.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">
              Third-Party Links
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This website may contain links to external sites. I am not responsible for the privacy 
              practices of these external sites.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              Contact
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this privacy policy, please contact me at{' '}
              <a 
                href="mailto:valeria.varga.erzsebet@gmail.com"
                className="text-primary hover:underline"
              >
                valeria.varga.erzsebet@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
