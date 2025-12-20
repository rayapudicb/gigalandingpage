import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";

export default function Privacy() {
  return (
    <Layout>
      <div className="bg-muted/30 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">LEGAL</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: December 2024
          </p>
        </div>
      </div>
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Gigasys Technologies Inc. ("Gigasys", "we", "us", or "our") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                use our services, websites, and applications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Account information (name, email, company)</li>
                <li>Payment and billing information</li>
                <li>Communications and support requests</li>
                <li>Usage data and analytics</li>
                <li>Technical information (IP address, browser type, device info)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent security incidents</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Service providers who perform services on our behalf</li>
                <li>Professional advisors (lawyers, accountants, auditors)</li>
                <li>Law enforcement when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal information, 
                including encryption, access controls, and regular security assessments. However, no method of 
                transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Delete your data</li>
                <li>Object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to collect and track information about your 
                browsing activities. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-muted-foreground">
                Email: privacy@gigasys.com<br />
                Address: 123 Innovation Way, Suite 400, San Francisco, CA 94105
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
