import React from 'react';
import SpotlightCard from '../components/SpotlightCard';

const Privacy: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 animate-fade-in">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-black text-white mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-gray-400">Effective Date: March 18, 2025, 8:23 PM PST</p>
      </div>

      <SpotlightCard className="rounded-[2.5rem] p-8 md:p-12 space-y-10 text-gray-300 leading-relaxed font-light">
        
        <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. INTRODUCTION</h2>
            <p>
                This Privacy Policy (“Policy”) governs the collection, use, storage, and disclosure of information obtained from users (“Users”) of our services. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Policy. If you identify any inaccuracies or misrepresentations in this Policy, please notify us promptly at contact@adore.rest.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. INFORMATION COLLECTION</h2>
            <p className="mb-4">We collect and process the following categories of data:</p>
            <ul className="space-y-2">
                <li><strong>2.1. User Identifiers:</strong> User IDs, usernames, and nicknames.</li>
                <li><strong>2.2. Guild Information:</strong> Guild IDs and Guild names.</li>
                <li><strong>2.3. Communication Data:</strong> Channel IDs, Role IDs, Message IDs, and message timestamps.</li>
                <li><strong>2.4. Command Arguments:</strong> Information provided as arguments when executing commands.</li>
                <li><strong>2.5. Historical Data:</strong>
                    <ul className="list-disc pl-8 mt-2 space-y-1 marker:text-blurple">
                        <li>Last deleted message content (up to nineteen (19) entries, retained for no longer than two (2) hours).</li>
                        <li>Message edit history (up to nineteen (19) entries, retained for no longer than two (2) hours).</li>
                    </ul>
                </li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. PURPOSE OF DATA COLLECTION AND PROCESSING</h2>
            <div className="space-y-4">
                <p><strong>3.1.</strong> We collect and process User data solely for legitimate operational purposes, including:</p>
                <ul className="list-[lower-alpha] pl-8 space-y-1">
                    <li>Facilitating command execution and core system functionality.</li>
                    <li>Debugging and technical maintenance (command invocation information).</li>
                    <li>Supporting specific features, such as the “namehistory” command (nickname and username changes) and the “gnames” command (Guild name changes).</li>
                    <li>Aggregating data necessary for system operation and feature functionality.</li>
                </ul>
                <p><strong>3.2.</strong> All collected data is retained only for the durations specified in Section 2.</p>
            </div>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. THIRD-PARTY DISCLOSURE</h2>
            <ul className="space-y-4">
                <li><strong>4.1.</strong> We do not sell, trade, rent, or transfer User information to third parties.</li>
                <li><strong>4.2.</strong> We reserve the right to disclose information as required by applicable law or to comply with legal processes.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. DATA SUBJECT RIGHTS</h2>
            <div className="space-y-6">
                <div>
                    <p className="mb-2"><strong>5.1. Right to Erasure:</strong> Users may request deletion of their personal data by emailing contact@adore.rest. Requests must:</p>
                    <ul className="list-[lower-alpha] pl-8 space-y-1">
                        <li>Specify the exact information to be deleted;</li>
                        <li>Provide sufficient proof of account ownership;</li>
                        <li>Allow up to fourteen (14) days for processing.</li>
                    </ul>
                </div>
                <div>
                    <p className="mb-2"><strong>5.2. Right to Access:</strong> Users may request a copy of all data stored about them by emailing contact@adore.rest. Responses may take up to seven (7) days.</p>
                </div>
                <div>
                    <p className="mb-2"><strong>5.3. Self-Service Data Management:</strong></p>
                    <ul className="list-disc pl-8 space-y-1 marker:text-blurple">
                        <li>Users may clear their own nickname and username change history through the “namehistory” command.</li>
                        <li>Guild administrators may clear Guild name change history through the “gnames” command.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. POLICY AMENDMENTS</h2>
            <ul className="space-y-4">
                <li><strong>6.1.</strong> We may modify, amend, or update this Policy at any time without prior notice.</li>
                <li><strong>6.2.</strong> Continued use of the services after any modifications constitutes acceptance of the updated Policy.</li>
                <li><strong>6.3.</strong> Violations of our Terms of Service, including this Privacy Policy, may result in permanent termination of access to all Adore services.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. CONTACT INFORMATION</h2>
            <p>
                For questions or concerns about this Privacy Policy, please contact us at: <a href="mailto:contact@adore.rest" className="text-blurple hover:underline">contact@adore.rest</a>
            </p>
        </section>
      </SpotlightCard>
    </div>
  );
};

export default Privacy;