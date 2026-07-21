export type PolicyList = {
  type: 'ul' | 'ol';
  items: string[];
  afterParagraph: number;
};

export type PolicySection = {
  id: string;
  title: string;
  content: {
    paragraphs: string[];
    lists: PolicyList[];
  };
};

export const policySections: PolicySection[] = [
  {
    id: 'pp1',
    title: '1. Definitions and Interpretation',
    content: {
      paragraphs: [],
      lists: [
        {
          type: 'ul',
          afterParagraph: 0,
          items: [
            '"NIMTA" means the NAOWA Institute of Management and Technology, Abuja, established under the auspices of the Nigerian Army Officers\' Wives Association (NAOWA) and approved by the National Board for Technical Education (NBTE).',
            '"Scheme" means the NIMTA Empowerment Training Scheme described on this website and in the official Programme Document.',
            '"Applicant" means any individual who submits an application for admission.',
            '"Student" means an individual who has been admitted, has satisfied the applicable fee, and has commenced a programme.',
            '"Scholarship" means a financial award that reduces or eliminates the tuition fee payable by an eligible Student.',
            '"Tier One Beneficiary" means a Student who is the biological or legally adopted child of a serving or retired commissioned officer of the Nigerian Army.',
            '"Tier Two Beneficiary" means a Student who is the biological or legally adopted child of a serving or retired member of the Nigerian uniformed services at any rank other than a commissioned Nigerian Army officer, including soldiers and other ranks of the Nigerian Army, and personnel of the Nigerian Navy, Nigerian Air Force, Nigerian Police Force, and recognised paramilitary services.',
            '"Tier Three" means a Student who does not qualify under Tier One or Tier Two.',
            '"SSCE" means the Senior Secondary Certificate Examination or an equivalent qualification recognised by WAEC, NECO, or NABTEB.',
            '"Part Two Order" means the official Nigerian Army administrative record documenting a serviceman\'s family particulars.',
          ],
        },
      ],
    },
  },
  {
    id: 'pp2',
    title: '2. Eligibility and Entry Requirements',
    content: {
      paragraphs: [
        '2.1 Minimum Academic Qualification. The Scheme is open to any individual who has completed the Senior Secondary Certificate Examination (SSCE) or holds an equivalent qualification. No university degree, HND, or OND is required. Applicants holding higher qualifications remain fully eligible.',
        '2.2 Age. Applicants must be at least 17 years of age at the time of application. There is no upper age limit.',
        '2.3 Nationality. The Scheme is open to Nigerian citizens. Non-citizens may apply at the standard commercial fee and are not eligible for scholarship tiers.',
        '2.4 Required Documents for All Applicants. Every Applicant must submit (a) SSCE certificate or statement of result, (b) a valid means of identification, and (c) one recent passport photograph.',
        '2.5 Additional Required Documents for Tier One Applicants. An Applicant claiming Tier One status must additionally submit all three of the following documents, (a) a Letter of Introduction from the parent officer\'s unit or command, (b) a clear copy of the parent\'s valid Nigerian Army identity card, and (c) the relevant Part Two Order evidencing the family relationship. An application claiming Tier One status without all three documents will be processed as Tier Three unless the deficiency is remedied within the verification window.',
        '2.6 Verification of Claims. All eligibility claims, including claims of military affiliation, are subject to verification against official records. Submission of false or forged documents results in immediate disqualification, cancellation of any admission, forfeiture of fees paid, and may be reported to the appropriate military or civil authority.',
      ],
      lists: [],
    },
  },
  {
    id: 'pp3',
    title: '3. Scholarship Policy and Fee Obligations',
    content: {
      paragraphs: [
        '3.1 Tier One, Children of Nigerian Army Officers (100%). A verified Tier One Beneficiary is entitled to one (1) full scholarship covering 100% of tuition, on their first application only, for one programme of their choosing. Any subsequent application by a Tier One Beneficiary, whether in the same or a future cohort, attracts the full commercial fee. This rule is permanent and admits no exceptions.',
        '3.2 Tier Two, Children of Soldiers and Other Ranks (50%). A verified Tier Two Beneficiary is entitled to a 50% scholarship on their first application and a 50% discount on their second application. From the third application onward, the full commercial fee applies.',
        '3.3 Tier Three, Standard Admission. Tier Three Applicants pay the full commercial fee for every programme in which they enrol. No scholarship applies at any stage.',
        '3.4 Non-Transferability. Scholarship entitlements are personal to the individual and may not be transferred, gifted, or assigned.',
        '3.5 No Cash Value. A scholarship reduces the applicable tuition fee only. It has no cash value and cannot be redeemed for cash or credit.',
        '3.6 False Tier Claims. A Student found to have falsely claimed a scholarship tier must immediately pay the full commercial fee, may be expelled without refund, and may be reported to the relevant authorities.',
        '3.7 Payment Deadline. All applicable fees must be paid in full within seven (7) working days of the Admission Letter. Places not confirmed within this window are released to the waiting list.',
      ],
      lists: [],
    },
  },
  {
    id: 'pp4',
    title: '4. Application, Admission and Enrolment',
    content: {
      paragraphs: [
        '4.1 Applications must be made through official NIMTA channels only. NIMTA accepts no liability for applications or payments made through unofficial channels.',
        '4.2 Complete applications are processed within five (5) working days. Incomplete applications are not reviewed until completed.',
        '4.3 Admission is offered conditionally and becomes unconditional only upon document verification and fee confirmation by the NIMTA finance office.',
        '4.4 Where a programme reaches capacity, eligible Applicants are placed on a waiting list and contacted in order of application date.',
        '4.5 NIMTA reserves the right to decline any application, subject to applicable Nigerian law.',
        '4.6 Deferral. A confirmed Student may defer once to the next available cohort, free of charge, provided the request is made in writing at least 14 calendar days before the cohort start date. A second deferral attracts a &#8358;10,000 administrative fee.',
      ],
      lists: [],
    },
  },
  {
    id: 'pp5',
    title: '5. Attendance and Participation',
    content: {
      paragraphs: [
        '5.1 A minimum of 80% attendance is required for certification. Students below this threshold must repeat affected modules or the programme, subject to applicable fees.',
        '5.2 Arrival more than 15 minutes after the scheduled start is recorded as partial absence. Three instances of lateness may be recorded as one full absence at the discretion of the Programme Coordinator.',
        '5.3 Medical emergencies, bereavement, and other exceptional circumstances must be reported in writing within 48 hours with supporting documentation, and are reviewed individually by the Welfare Officer.',
        '5.4 Online Students must attend a minimum of 80% of scheduled live sessions. Recorded replays are supplementary and do not count toward attendance.',
        '5.5 All projects and assessments must be submitted by their deadlines. Extensions require prior written approval and are granted at NIMTA\'s sole discretion.',
      ],
      lists: [],
    },
  },
  {
    id: 'pp6',
    title: '6. Assessment and Certification',
    content: {
      paragraphs: [
        '6.1 Assessment is practical, portfolio-based and project-driven. Written examinations are used only where explicitly stated in a programme curriculum.',
        '6.2 The minimum overall pass mark is 60%. Students achieving 80% or above are awarded a Distinction.',
        '6.3 A failed project or assessment may, at NIMTA\'s discretion and subject to any applicable fee, be resubmitted once. A second failure results in programme failure.',
        '6.4 Certificates are issued in the graduating Student\'s name, signed by the Director-General of NIMTA and the President of NAOWA, within 30 days of the Graduation Date.',
        '6.5 NIMTA may withhold a certificate where fees are outstanding, a disciplinary investigation is open, or academic dishonesty has been established.',
        '6.6 Each certificate carries a unique serial number verifiable through the NIMTA alumni database. Forgery or misrepresentation of a NIMTA certificate is a criminal offence under Nigerian law.',
      ],
      lists: [],
    },
  },
  {
    id: 'pp7',
    title: '7. Student Conduct and Discipline',
    content: {
      paragraphs: [
        '7.1 Students must conduct themselves professionally, respectfully and honestly at all times, on campus, online, and in all communications with NIMTA staff, instructors and fellow Students.',
        '7.2 The following constitute grounds for disciplinary action up to and including expulsion:',
        '7.3 Disciplinary matters follow due process, including written notification, an opportunity to respond, and a decision within 10 working days. Appeals lie to the Director-General within 5 working days of the decision.',
        '7.4 Students expelled on disciplinary grounds forfeit all fees paid and are ineligible for re-admission for a minimum of two (2) years.',
      ],
      lists: [
        {
          type: 'ul',
          afterParagraph: 2,
          items: [
            'Academic dishonesty or plagiarism',
            'Harassment, bullying or intimidation of any person',
            'Theft of, or damage to, NIMTA property or equipment',
            'Fraud or misrepresentation in any application or assessment',
            'Conduct that brings NIMTA or NAOWA into disrepute',
            'Possession or use of illegal substances on NIMTA premises',
            'Violation of health and safety regulations',
          ],
        },
      ],
    },
  },
  {
    id: 'pp8',
    title: '8. Fees, Refunds and Payment Terms',
    content: {
      paragraphs: [
        '8.1 Fees are as published on the official NIMTA website and stated in each Admission Letter. Fees are reviewed annually, and changes are announced at least 60 days before the next intake.',
        '8.2 Fees are payable only through NIMTA\'s official bank accounts or authorised payment gateway.',
        '8.3 Refund Schedule',
      ],
      lists: [
        {
          type: 'ul',
          afterParagraph: 3,
          items: [
            'Cancellation 14 or more days before cohort start, 100% refund, less a &#8358;5,000 administrative charge.',
            'Cancellation 7 to 13 days before cohort start, 50% refund.',
            'Cancellation within 7 days of start, or after commencement, no refund.',
            'Programme cancellation by NIMTA, 100% refund within 14 working days.',
            'Scholarship holders. No cash refund is payable in any scenario in respect of the scholarship-covered portion, as no cash was received for it.',
          ],
        },
      ],
    },
  },
  {
    id: 'pp9',
    title: '9. Intellectual Property',
    content: {
      paragraphs: [
        '9.1 All course materials, curricula, and learning resources are the intellectual property of NIMTA and/or its instructors, and may not be reproduced, distributed or sold without prior written consent.',
        '9.2 Original work created by a Student (portfolios, designs, code, garments, food products) remains the Student\'s intellectual property. NIMTA may, with consent, feature student work for promotional or educational purposes. Consent may be withdrawn in writing at any time.',
        '9.3 NIMTA may photograph or record training activities for promotional use. Students who do not consent must notify NIMTA in writing at enrolment. This will be recorded and respected.',
      ],
      lists: [],
    },
  },
  {
    id: 'pp10',
    title: '10. Data Protection and Privacy',
    content: {
      paragraphs: [
        '10.1 NIMTA is the data controller for personal data collected under the Scheme and processes it in accordance with the Nigeria Data Protection Act 2023 (NDPA) and the Nigeria Data Protection Regulation (NDPR).',
        '10.2 Data collected includes identity and contact details, educational qualifications, military affiliation documentation, health information where relevant, and payment records.',
        '10.3 Data is processed to manage applications and admissions, verify eligibility claims, deliver programmes, issue certificates, communicate with Students, and improve the Scheme.',
        '10.4 Data may be shared with the Nigerian Army records office (solely for verification of Tier One documentation), NBTE (for accreditation), and payment processors (for transactions). NIMTA does not sell personal data.',
        '10.5 Application records are retained for 7 years. Academic records are retained indefinitely for certificate verification. Financial records are retained for 7 years in line with Nigerian tax law.',
        '10.6 Individuals may request access to, correction of, or deletion of their personal data, subject to legal retention obligations, by contacting the NIMTA Data Officer (Section 15).',
      ],
      lists: [],
    },
  },
  {
    id: 'pp11',
    title: '11. Health, Safety and Welfare',
    content: {
      paragraphs: [
        '11.1 NIMTA maintains its premises and equipment to appropriate safety standards and owes a duty of care to all Students.',
        '11.2 Students must follow all safety instructions, particularly in kitchens, dye studios and technical labs.',
        '11.3 Accidents and incidents must be reported immediately. NIMTA maintains public liability insurance and completes an incident report for every occurrence.',
        '11.4 Students are encouraged to disclose relevant medical conditions at enrolment so reasonable adjustments can be made. All health information is treated confidentially.',
        '11.5 NIMTA is not responsible for loss or theft of personal belongings on its premises.',
      ],
      lists: [],
    },
  },
  {
    id: 'pp12',
    title: '12. Limitation of Liability',
    content: {
      paragraphs: [
        '12.1 NIMTA\'s aggregate liability to any Student or Applicant is limited to the total fees actually paid by that individual to NIMTA.',
        '12.2 NIMTA is not liable for loss of income, opportunity or business, for any failure to achieve employment or business outcomes after graduation, for third-party acts or omissions, or for Force Majeure events including natural disasters, government action, public health emergencies and civil unrest.',
        '12.3 Nothing in this Policy excludes liability for death or personal injury caused by NIMTA\'s negligence, or any liability that cannot be excluded under Nigerian law.',
      ],
      lists: [],
    },
  },
  {
    id: 'pp13',
    title: '13. Amendments',
    content: {
      paragraphs: [
        '13.1 NIMTA may amend this Policy at any time. Material changes are notified to enrolled Students at least 30 days before taking effect.',
        '13.2 Curricula, schedules and instructor assignments may change where operationally necessary. Such changes do not ground a refund unless they fundamentally alter the nature of the programme.',
        '13.3 The version published on the NIMTA website is the current and controlling version.',
      ],
      lists: [],
    },
  },
  {
    id: 'pp14',
    title: '14. Dispute Resolution and Governing Law',
    content: {
      paragraphs: [
        '14.1 Disputes should first be raised in writing with the NIMTA Registrar\'s Office, which will engage in good faith to resolve them.',
        '14.2 Unresolved disputes may, after 30 days, be referred to mediation before a mutually agreed mediator in Abuja, FCT.',
        '14.3 Failing mediation, disputes are subject to the exclusive jurisdiction of the courts of the Federal Capital Territory, Abuja.',
        '14.4 This Policy is governed by the laws of the Federal Republic of Nigeria.',
      ],
      lists: [],
    },
  },
  {
    id: 'pp15',
    title: '15. Contact',
    content: {
      paragraphs: [],
      lists: [
        {
          type: 'ul',
          afterParagraph: 0,
          items: [
            'Admissions Office, admissions@nimta.edu.ng',
            'Registrar\'s Office, registrar@nimta.edu.ng',
            'Data Officer, data@nimta.edu.ng',
            'Telephone, +234 814 128 3720',
            'Address, NAOWA Institute of Management and Technology, Mambilla Barracks Road, Asokoro, Abuja, FCT, Nigeria',
            'Office Hours, Monday to Friday, 8:00 AM to 4:00 PM WAT',
          ],
        },
      ],
    },
  },
];

export const policyUpdated =
  'Last Updated January 2025. This is the current and controlling version of the NIMTA Empowerment Training Scheme Programme Policy and Terms.';
