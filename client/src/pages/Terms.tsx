import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";

export default function Terms() {
  return (
    <Layout>
      <div className="bg-muted/30 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">LEGAL</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Terms of Service
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
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing or using Gigasys Technologies Inc.'s services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground mb-4">
                Gigasys provides enterprise software-as-a-service (SaaS) solutions including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Authentication and authorization services</li>
                <li>Billing and subscription management</li>
                <li>AI and workflow automation platforms</li>
                <li>Analytics and reporting tools</li>
                <li>Communication services (email, SMS, notifications)</li>
                <li>Localization and internationalization modules</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
              <p className="text-muted-foreground mb-4">
                To use certain features of our services, you must register for an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly update your account information as needed</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                For paid services, you agree to pay all applicable fees as described in your subscription plan. 
                Payments are non-refundable except as required by law or as explicitly stated in these terms. 
                We reserve the right to change our pricing with 30 days notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Acceptable Use</h2>
              <p className="text-muted-foreground mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit malware or harmful code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our services to send spam or unsolicited messages</li>
                <li>Interfere with the proper functioning of our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                Our services, including all content, features, and functionality, are owned by Gigasys and are 
                protected by copyright, trademark, and other intellectual property laws. You are granted a limited, 
                non-exclusive license to use our services in accordance with these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Service Level Agreement</h2>
              <p className="text-muted-foreground mb-4">
                We strive to maintain 99.99% uptime for our services. In the event of service disruptions, 
                we will use commercially reasonable efforts to restore service as quickly as possible. 
                Service credits may be available for extended outages as described in your subscription agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                To the maximum extent permitted by law, Gigasys shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages resulting from your use of our services. Our total 
                liability shall not exceed the amount paid by you in the twelve months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
              <p className="text-muted-foreground mb-4">
                Either party may terminate this agreement at any time. Upon termination, your right to use our 
                services will immediately cease. We will provide a reasonable period for you to export your data 
                before permanent deletion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We may update these terms from time to time. We will notify you of any material changes by 
                posting the new terms on our website and updating the "Last updated" date. Your continued use 
                of our services after such changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-muted-foreground">
                Email: legal@gigasys.com<br />
                Address: 123 Innovation Way, Suite 400, San Francisco, CA 94105
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
