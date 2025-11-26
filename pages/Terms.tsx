import React from 'react';
import SpotlightCard from '../components/SpotlightCard';

const Terms: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 animate-fade-in">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-black text-white mb-4 tracking-tight">Terms of Service</h1>
        <p className="text-gray-400">Effective Date: August 19, 2025, 6:23 PM PST</p>
      </div>

      <SpotlightCard className="rounded-[2.5rem] p-8 md:p-12 space-y-10 text-gray-300 leading-relaxed font-light">
        
        <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. ACCEPTANCE OF TERMS</h2>
            <p>
                By accessing or using Adore’s services (“Services”), including but not limited to visiting the Adore website located at adore.rest (“Website”) or adding the Adore Bot (“Bot”) to your Discord server, you (“User”) acknowledge that you have read, understood, and agree to be bound by these Terms of Service (“Agreement”). If you do not agree to these terms, you are prohibited from using the Services and must discontinue use immediately.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. DEFINITIONS</h2>
            <p className="mb-4">For purposes of this Agreement:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-blurple">
                <li>“Adore,” “we,” “us,” “our” refer to Adore and its affiliates, directors, officers, employees, and agents.</li>
                <li>“Services” refers to all products, features, applications, websites, and services operated by Adore.</li>
                <li>“User,” “you,” “your” refer to any individual or entity using the Services.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. COMPLIANCE WITH LAWS AND DISCORD POLICIES</h2>
            <ul className="space-y-4">
                <li><strong>3.1</strong> Users must comply with all applicable local, state, national, and international laws.</li>
                <li><strong>3.2</strong> Users acknowledge that using the Services is also subject to Discord’s Terms of Service and Community Guidelines; violations of Discord’s rules constitute violations of this Agreement.</li>
                <li><strong>3.3</strong> Users must report violations of laws or Discord policies to Adore at contact@adore.rest.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. PROHIBITED WEBSITE ACTIVITIES</h2>
            <p className="mb-4">Users are prohibited from:</p>
            <ul className="space-y-2">
                <li><strong>4.1</strong> Attempting to exploit, hack, disrupt, or gain unauthorized access to the Website or its systems.</li>
                <li><strong>4.2</strong> Using the Website for unlawful, fraudulent, or malicious purposes.</li>
                <li><strong>4.3</strong> Scraping, collecting, or harvesting information from the Website without authorization.</li>
                <li><strong>4.4</strong> Framing or mirroring any part of the Website without written permission.</li>
                <li><strong>4.5</strong> Copying, reproducing, distributing, or claiming ownership of any Website content, design, or proprietary information.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. PROHIBITED BOT ACTIVITIES AND ENFORCEMENT</h2>
            <div className="space-y-6">
                <div>
                    <p className="mb-4"><strong>5.1</strong> Users are prohibited from:</p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-blurple">
                        <li>Violating Discord’s Terms of Service or Community Guidelines.</li>
                        <li>Reproducing, duplicating, copying, selling, or reselling any portion of the Bot’s functionality.</li>
                        <li>Enabling or encouraging others to reproduce Adore’s features or services.</li>
                        <li>Exploiting bugs, glitches, or vulnerabilities in the Bot.</li>
                        <li>Operating a Discord server previously terminated for policy violations.</li>
                        <li>Organizing or encouraging harassment, raids, or targeted attacks against Adore or its staff.</li>
                    </ul>
                </div>
                <div>
                    <p className="mb-4"><strong>5.2 Enforcement Rights:</strong> Adore may, at its sole discretion:</p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-blurple">
                        <li>Terminate access to the Services with or without notice.</li>
                        <li>Restrict, disable, or remove content.</li>
                        <li>Take legal action, including reporting Users to law enforcement.</li>
                        <li>Pursue all legal and equitable remedies.</li>
                        <li>Investigate and prosecute violations fully.</li>
                    </ul>
                </div>
                <p><strong>5.3 No Waiver:</strong> Failure to enforce any term does not constitute a waiver.</p>
            </div>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. REFUNDS AND ACCOUNT RESTRICTIONS</h2>
            <p><strong>6.1</strong> If a User receives a refund under any circumstance, Adore reserves the right to blacklist the User’s Discord account and permanently forbid access to all Adore Services.</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. LICENSE AND SUBSCRIPTION TERMS</h2>
            <ul className="space-y-4">
                <li><strong>7.1</strong> Purchasing a subscription or one-time payment grants the User a non-exclusive, revocable, non-transferable license to use the Services. This includes one (1) free transfer of the Bot to a different Discord server, as described in Section 8.</li>
                <li><strong>7.2</strong> Accessing, purchasing, or using the Services constitutes agreement to this entire Agreement.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. TRANSFERS</h2>
            <ul className="space-y-4">
                <li><strong>8.1</strong> Each subscription includes one (1) free transfer of the Bot to another server. Additional transfers require a new subscription.</li>
                <li><strong>8.2</strong> Any exceptions or overrides are at Adore’s sole discretion.</li>
                <li><strong>8.3</strong> Adore is not liable for losses caused by a server being deleted or terminated by Discord or third parties.</li>
                <li><strong>8.4</strong> All completed transfers are final and irreversible.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. THIRD-PARTY RELATIONSHIPS AND LIABILITY</h2>
            <ul className="space-y-4">
                <li><strong>9.1</strong> Adore is not affiliated with any Discord server or community using its Services.</li>
                <li><strong>9.2</strong> Adore does not control the actions or content of any third party.</li>
                <li><strong>9.3</strong> Adore disclaims all liability for actions, content, or behavior of any server or User using the Services.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. SERVICE AVAILABILITY AND TERMINATION</h2>
            <ul className="space-y-4">
                <li><strong>10.1</strong> Adore does not guarantee uninterrupted or secure access to the Services.</li>
                <li><strong>10.2</strong> Adore may restrict, refuse, or terminate Services at its sole discretion.</li>
                <li><strong>10.3</strong> Adore may terminate User access immediately for any breach.</li>
                <li><strong>10.4</strong> Terms that naturally survive termination will remain in effect.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. INDEMNIFICATION</h2>
            <p>Users agree to defend and indemnify Adore and its affiliates against all claims, damages, and liabilities arising from violations of this Agreement or misuse of the Services.</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. LIMITATION OF LIABILITY</h2>
            <p>Adore is not liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from use or inability to use the Services.</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. AMENDMENTS</h2>
            <ul className="space-y-4">
                <li><strong>13.1</strong> Adore may modify this Agreement at any time without notice.</li>
                <li><strong>13.2</strong> Continued use of the services after updates constitutes acceptance.</li>
                <li><strong>13.3</strong> Violations of updated terms may result in immediate termination.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. MISCELLANEOUS</h2>
            <ul className="space-y-4">
                <li><strong>14.1</strong> If any provision is unenforceable, it will be limited to the minimum extent required.</li>
                <li><strong>14.2</strong> This Agreement is the complete and exclusive agreement between Adore and the User.</li>
            </ul>
        </section>
        
        <div className="pt-8 border-t border-white/5 text-center text-gray-500">
             <p>For questions, contact <a href="mailto:contact@adore.rest" className="text-blurple hover:underline">contact@adore.rest</a>.</p>
        </div>
      </SpotlightCard>
    </div>
  );
};

export default Terms;