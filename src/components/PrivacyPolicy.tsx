'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="pt-16"> {/* Account for fixed navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
          >
            ← Back to Home
          </Link>
        </nav>

        {/* Page Header */}
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 tracking-tight">
            Quincy AI — Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Effective date: September 13, 2025
          </p>
        </header>

        {/* Policy Content */}
        <div className="prose prose-invert max-w-none">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-300 leading-relaxed mb-6">
              Quincy AI (&ldquo;Quincy&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides an AI co-pilot that helps teams understand BC permitting requirements. This Privacy Policy explains what we collect, how we use it, how we share it, and your choices. We handle personal information in line with British Columbia&apos;s PIPA and Canada&apos;s PIPEDA. If you are in the EU/UK, we also describe rights under the GDPR.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="text-gray-500 mr-3">1)</span>
              What we collect
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed ml-6">
              <p>
                <strong className="text-white">Waitlist & contact info</strong> you submit (e.g., name, email, company, role, notes).
              </p>
              <p>
                <strong className="text-white">Project materials</strong> you choose to share during early access (&ldquo;Customer Content&rdquo;), such as addresses, lot details, drawings/plans, feasibility notes.
              </p>
              <p>
                <strong className="text-white">Technical data</strong> for security and basic analytics (e.g., IP address, device/browser info, timestamps).
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="text-gray-500 mr-3">2)</span>
              How we use information
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed ml-6">
              <p>
                <strong className="text-white">Provide early access and onboarding</strong> (create/manage your waitlist spot, evaluate beta fit, schedule intro calls).
              </p>
              <p>
                <strong className="text-white">Respond to inquiries</strong> and send requested information.
              </p>
              <p>
                <strong className="text-white">Generate high-level feasibility snapshots</strong> in early access (using Customer Content to outline requirements with citations; no auto-submission).
              </p>
              <p>
                <strong className="text-white">Operate, secure, and improve</strong> our website and early-access workflows.
              </p>
              <p>
                <strong className="text-white">Email updates</strong> about early access and product information; you can unsubscribe at any time. Under CASL, commercial emails require consent, sender identification, and a working unsubscribe, which we provide.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="text-gray-500 mr-3">3)</span>
              Customer Content: confidentiality & AI use
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed ml-6">
              <p>
                <strong className="text-white">Your content remains yours.</strong> We treat Customer Content as confidential and use it only to provide early-access services you request and to maintain security.
              </p>
              <p>
                <strong className="text-white">No model training without your consent.</strong> We do not use Customer Content to train or fine-tune AI models unless you give explicit written permission.
              </p>
              <p>
                <strong className="text-white">Access is limited</strong> to authorized staff and vetted service providers bound by confidentiality and data-protection obligations.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="text-gray-500 mr-3">4)</span>
              Legal bases & compliance notes
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed ml-6">
              <p>
                <strong className="text-white">Canada (PIPA/PIPEDA):</strong> we collect, use, and disclose personal information for reasonable purposes you&apos;d expect; you can request access and corrections and withdraw consent (subject to legal limits).
              </p>
              <p>
                <strong className="text-white">EU/UK (GDPR), if applicable:</strong> depending on context, we rely on consent (marketing), contract (providing requested early-access services), and legitimate interests (security/operations). Individuals have GDPR data-subject rights (access, rectification, erasure, restriction, portability, objection).
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="text-gray-500 mr-3">5)</span>
              Sharing & service providers
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed ml-6">
              <p>
                We use third-party service providers (e.g., hosting, form intake, email delivery, basic analytics) to operate our site and early-access workflows. They may process personal information only under our instructions and with appropriate safeguards. We may disclose information to comply with law, protect rights and safety, or as part of a corporate transaction (with notice).
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="text-gray-500 mr-3">6)</span>
              Data location & international transfers
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed ml-6">
              <p>
                Our infrastructure and providers may store or process information outside your province or country (including the U.S.). When information is transferred internationally, we use contractual and other safeguards consistent with PIPA/PIPEDA, and&mdash;where GDPR applies&mdash;recognized transfer mechanisms.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="text-gray-500 mr-3">7)</span>
              Security
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed ml-6">
              <p>
                We apply industry-standard measures (e.g., TLS encryption in transit, least-privilege access, credential and audit controls). No method is 100% secure; we continually work to strengthen protections and address issues promptly.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="text-gray-500 mr-3">8)</span>
              Retention & deletion
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed ml-6">
              <p>
                <strong className="text-white">Waitlist and communications data</strong> are retained until you unsubscribe or request deletion; then removed within a reasonable period unless we must keep them by law.
              </p>
              <p>
                <strong className="text-white">Customer Content</strong> is retained only as needed for your onboarding/analysis and then deleted or returned on request, subject to legal requirements.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="text-gray-500 mr-3">9)</span>
              Your choices & rights
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed ml-6">
              <p>
                <strong className="text-white">Unsubscribe</strong> from marketing at any time via the link in our emails.
              </p>
              <p>
                <strong className="text-white">Access, correction, deletion, and consent withdrawal:</strong> contact us using the details below.
              </p>
              <p>
                If unresolved, you may contact BC&apos;s Office of the Information and Privacy Commissioner (OIPC) or the Office of the Privacy Commissioner of Canada (OPC).
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="text-gray-500 mr-3">10)</span>
              Contact us
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed ml-6">
              <p>
                <strong className="text-white">Email:</strong> <a href="mailto:hello@QuincyAI.com" className="text-sky-200 hover:text-sky-100 transition-colors">hello@QuincyAI.com</a>
              </p>
              <p>
                <strong className="text-white">Mailing address:</strong> Quincy AI, Vancouver, BC, Canada
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="text-gray-500 mr-3">11)</span>
              Changes to this Policy
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed ml-6">
              <p>
                We may update this Policy from time to time. We&apos;ll post the new effective date and, if changes are material, provide a prominent notice.
              </p>
            </div>
          </section>
        </div>

        {/* Back to Top */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}