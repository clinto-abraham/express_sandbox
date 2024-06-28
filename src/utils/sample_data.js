const { convertAmountToWords } = require("../services/calculate_service");

const retail_mortgage_sample_data = {
    filePath: '/home/gm/Development/absa/bitbucket (deprecated)/dev/absa.eforms.abl/code/src/res/views/pages/retail_mortgage.ejs',
    referenceNo: 'HL20240627MOR122',
    metaData: {
      CID: '150017002',
      NIC: 'B0807700601739',
      'Primary Applicant Name': 'BAHADOOR BABOO BALKRESHANSING',
      'Loan Amount.': '8176000',
      'Interest rate': '6.15',
      Tenor: '204',
      Branch: '3',
      'Type of Loan': 'Home Loan',
      'Market Segment': 'Premier',
      'Joint Application': 'false',
      'Customer details': '<p><strong>Background of Client:</strong></p>\r\n' +
        '<p>Mr Baboo Balkreshansing BAHADOOR also known as Vailesh Bahadoor, has 52 years old and resides at Fond du Sac. He is married to Lokeshwaree Bahadoor (surname at birth Ramcharitar), aged 51 years old. He is the Managing Director of Chem-Plus Ltd and owns 50% of the said company and the other 50% is owned by his wife.</p>\r\n' +
        '<p>He has more than 20 years of experience in the chemical industry and has worked with IBL Chemicals for several years prior to setting up his own business in 2004.</p>\r\n' +
        '<p>&nbsp;</p>\r\n' +
        '<p><strong>About the company:</strong></p>\r\n' +
        '<p>Chem-Plus has been incorporated in 16 March 2004. The company is an independent specialist chemical distributor and representative agent supplying mainly Mauritius and Indian Ocean customers&rsquo;.</p>\r\n' +
        '<p>As at 30 June 2022, the company registered a turnover of MUR 520m and a net profit of MUR 35m.</p>\r\n' +
        '<p>&nbsp;</p>',
      'Guarantor details': '<ul>\r\n' +
        '<li>Guarantor &ndash; Mrs Lokeshwaree Bahadoor (surname at birth Ramcharitar), his wife married under legal system of community of goods.</li>\r\n' +
        '</ul>',
      'Other relevant details': '<p>Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 30<sup>th</sup> March 2023</p>\r\n' +
        '<p>Borrower Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Mr Baboo Balkreshansing BAHADOOR also known as Vailesh</p>\r\n' +
        '<p>Current Exposure &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : MUR 4,051,998.00</p>\r\n' +
        '<p>Proposed Exposure&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : MUR 8,176,000.00</p>\r\n' +
        '<p>Type of Facility&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Home Loan</p>\r\n' +
        '<p>Purpose of Facility &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Acquisition of property and financing of charges</p>\r\n' +
        '<p>Loan Tenor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 17 Years</p>\r\n' +
        '<p>Pricing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 6.15%p.a, i.e ABSA PLR &ndash; 1.30%p.a (ABSA PLR currently being 7.45%)</p>\r\n' +
        '<p>&nbsp;</p>\r\n' +
        '<p><strong>Proposed Exposure Table</strong></p>\r\n' +
        '<p><strong>&nbsp;</strong></p>\r\n' +
        '<table width="565">\r\n' +
        '<tbody>\r\n' +
        '<tr>\r\n' +
        '<td width="128">\r\n' +
        '<p><strong>Facility Type</strong></p>\r\n' +
        '</td>\r\n' +
        '<td width="67">\r\n' +
        '<p><strong>Tenor</strong></p>\r\n' +
        '</td>\r\n' +
        '<td width="118">\r\n' +
        '<p><strong>Proposed Limit</strong></p>\r\n' +
        '</td>\r\n' +
        '<td width="65">\r\n' +
        '<p><strong>Pricing</strong></p>\r\n' +
        '</td>\r\n' +
        '<td width="186">\r\n' +
        '<p><strong>&nbsp;</strong></p>\r\n' +
        '</td>\r\n' +
        '</tr>\r\n' +
        '<tr>\r\n' +
        '<td width="128">\r\n' +
        '<p><strong><u>Existing Exposure</u></strong></p>\r\n' +
        '</td>\r\n' +
        '<td width="67">\r\n' +
        '<p><strong>&nbsp;</strong></p>\r\n' +
        '</td>\r\n' +
        '<td width="118">\r\n' +
        '<p><strong>&nbsp;</strong></p>\r\n' +
        '</td>\r\n' +
        '<td width="65">\r\n' +
        '<p><strong>&nbsp;</strong></p>\r\n' +
        '</td>\r\n' +
        '<td width="186">\r\n' +
        '<p><strong>&nbsp;</strong></p>\r\n' +
        '</td>\r\n' +
        '</tr>\r\n' +
        '<tr>\r\n' +
        '<td width="128">\r\n' +
        '<p>Housing Loan</p>\r\n' +
        '</td>\r\n' +
        '<td width="67">\r\n' +
        '<p><strong>11 years</strong></p>\r\n' +
        '</td>\r\n' +
        '<td width="118">\r\n' +
        '<p><strong>4,051,998</strong></p>\r\n' +
        '</td>\r\n' +
        '<td width="65">\r\n' +
        '<p><strong>6.35%</strong></p>\r\n' +
        '</td>\r\n' +
        '<td width="186">\r\n' +
        '<p><strong>&nbsp;</strong></p>\r\n' +
        '</td>\r\n' +
        '</tr>\r\n' +
        '<tr>\r\n' +
        '<td width="128">\r\n' +
        '<p>Housing Loan</p>\r\n' +
        '</td>\r\n' +
        '<td width="67">\r\n' +
        '<p><strong>11 years</strong></p>\r\n' +
        '</td>\r\n' +
        '<td width="118">\r\n' +
        '<p><strong>2,487,159</strong></p>\r\n' +
        '</td>\r\n' +
        '<td width="65">\r\n' +
        '<p><strong>6.75%</strong></p>\r\n' +
        '</td>\r\n' +
        '<td width="186">\r\n' +
        '<p><strong>To be repaid from new loan </strong></p>\r\n' +
        '</td>\r\n' +
        '</tr>\r\n' +
        '<tr>\r\n' +
        '<td width="128">\r\n' +
        '<p>&nbsp;</p>\r\n' +
        '</td>\r\n' +
        '<td width="67">\r\n' +
        '<p><strong>&nbsp;</strong></p>\r\n' +
        '</td>\r\n' +
        '<td width="118">\r\n' +
        '<p><strong>&nbsp;</strong></p>\r\n' +
        '</td>\r\n' +
        '<td width="65">\r\n' +
        '<p><strong>&nbsp;</strong></p>\r\n' +
        '</td>\r\n' +
        '<td width="186">\r\n' +
        '<p><strong>&nbsp;</strong></p>\r\n' +
        '</td>\r\n' +
        '</tr>\r\n' +
        '<tr>\r\n' +
        '<td width="128">\r\n' +
        '<p><strong><u>New Exposure</u></strong></p>\r\n' +
        '</td>\r\n' +
        '<td width="67">&nbsp;</td>\r\n' +
        '<td width="118">&nbsp;</td>\r\n' +
        '<td width="65">&nbsp;</td>\r\n' +
        '<td width="186">\r\n' +
        '<p>&nbsp;</p>\r\n' +
        '</td>\r\n' +
        '</tr>\r\n' +
        '<tr>\r\n' +
        '<td width="128">\r\n' +
        '<p>Housing Loan</p>\r\n' +
        '</td>\r\n' +
        '<td width="67">\r\n' +
        '<p>17 Years</p>\r\n' +
        '</td>\r\n' +
        '<td width="118">\r\n' +
        '<p>8,176,000</p>\r\n' +
        '</td>\r\n' +
        '<td width="65">\r\n' +
        '<p>6.15%</p>\r\n' +
        '</td>\r\n' +
        '<td width="186">\r\n' +
        '<p>&nbsp;</p>\r\n' +
        '</td>\r\n' +
        '</tr>\r\n' +
        '<tr>\r\n' +
        '<td width="128">\r\n' +
        '<p>TOTAL</p>\r\n' +
        '</td>\r\n' +
        '<td width="67">&nbsp;</td>\r\n' +
        '<td width="118">\r\n' +
        '<p>12,228,000</p>\r\n' +
        '</td>\r\n' +
        '<td width="65">&nbsp;</td>\r\n' +
        '<td width="186">\r\n' +
        '<p>&nbsp;</p>\r\n' +
        '</td>\r\n' +
        '</tr>\r\n' +
        '</tbody>\r\n' +
        '</table>',
      Title: 'Mr',
      'First Name': 'BABOO BALKRESHANSING',
      'Family Name': 'BAHADOOR',
      'Date of Birth': '1970/07/08',
      'Mobile phone': '52534197',
      'Email address': 'vailesh@chemplusltd.com',
      'Residential Address': 'ROYAL ROAD FOND DU SAC',
      'Purpose of facility': 'Buy a freehold property',
      'Type of property': '',
      'Purpose of facility details': '<p><strong>Purpose : </strong></p>\r\n' +
        '<p>Repay loan 13-1952910 : Mur 2,512,000</p>\r\n' +
        '<p>Payment of 70% acquisition of property Lot 52 Beau Plan : Mur 5,189,800</p>\r\n' +
        '<p>Registration fees: Mur 370,000</p>\r\n' +
        '<p>Facility Fees : Mur 50,000</p>\r\n' +
        '<p>Fixed Charged registration: Mur 54,200</p>',
      'Type of acquisition': '2nd and subsequent purchases',
      Contribution: 'Own funds',
      'Contribution for land': '2224200',
      'Contribution for construction': '',
      'Contribution for other projects': '',
      'Total contribution': '2224200',
      'Type of interest rate': 'Floating',
      'Interest rate per annum': '6.15%(PLR-1.3)',
      'Standing order date': '2023/06/23',
      'Detailed calculation for gross income (to be filled by RM)': '',
      'Type of repayment': 'Monthly',
      'Staggerred Repayment': [ [Object] ],
      'Joint Repayment': '64709.10',
      'Joint Stressed Repayment': '74174.04',
      'Joint Stressed Existing Loan Repayment': '29760.75',
      'Joint Existing Loan Repayment': '39681',
      'Joint Card +Overdraft': '5600',
      'Joint Total Expenses': '0',
      'Joint Gross Income': '220000',
      'Joint Loan DSR': '47.45',
      'Joint Stressed Loan DSR': '47.24',
      'Joint Loan and Revolving DSR': '50.00',
      'Joint Stressed Loan and Revolving DSR': '49.79',
      'Credit card application': [ [Object] ],
      'Document (eg payslip) to be uploaded by RM': {
        attachmentId: '2c0c5276502c4fc2801f5b195c468083',
        name: 'IT011A_17246051_03Oct2022.pdf',
        mimeType: 31,
        superType: 0,
        creationTime: '2023-06-12T06:42:27.083Z',
        size: 394357,
        lastEditedUtc: '',
        url: ''
      },
      'Type of security offered (details)': '-\t1st rank Fixed and Floating Charge of MUR 5,189,800 on property being acquired situated at Beau Plan \r\n' +
        '-\tExisting Fixed and Floating Charged on Property situated at 501 M2 Fond Du Sac for Mur 3,000,000\r\n' +
        '-\tLife insurance cover assigned in favour of ABML\r\n' +
        '-\tGuarantor – Mrs Lokeshwaree Bahadoor (surname at birth Ramcharitar), his wife married under legal system of community of goods.\r\n' +
        '-\tCheque to be issued in favour of Notary',
      'Guarantor applicable': 'true',
      'Caution hypothecaire': 'na',
      'Present value of security being given as collateral (MUR)': '',
      'Details of security being given as collateral': '<p>Normal land.&nbsp;</p>',
      'Total Value of Property': '11914000',
      'LTV Ratio': '68.63',
      'Account Number': '',
      'Lien by': '',
      'Amount of Lien': '',
      'Details of Guarantor/s': [ [Object] ],
      'Is applicant a PEP?.': 'false',
      Conditions: '<ul>\r\n' +
        '<li>1<sup>st</sup> rank Fixed and Floating Charge of MUR 5,189,800 on property being acquired situated at</li>\r\n' +
        '<li>Existing Fixed and Floating Charged on Property situated at 501 M2 Fond Du Sac for Mur 3,000,000</li>\r\n' +
        '<li>Life insurance cover assigned in favour of ABML</li>\r\n' +
        '<li>Guarantor &ndash; Mrs Lokeshwaree Bahadoor (surname at birth Ramcharitar), his wife married under legal system of community of goods.</li>\r\n' +
        '<li>Cheque to be issued in favour of Notary</li>\r\n' +
        '</ul>',
      Deviation: '<p>Stress DSR Exceed Policy - Support from HOP included in file&nbsp;</p>',
      Recommendations: '<p><strong>&nbsp;</strong></p>\r\n' +
        '<ul>\r\n' +
        '<li>DSR without Stress Factor is within norms</li>\r\n' +
        '<li>Support from Head of Premier for DSR with Stress Factor</li>\r\n' +
        '<li>Customer is the shareholder of Chem Plus together with his wife. The company is doing a profit of Mur 35m</li>\r\n' +
        '<li>LTV within norms</li>\r\n' +
        '<li>Customer is guarantor on some facilities held by Chem-Plus. This is normal since he is the director and shareholder of the company. The company has all the means to honour his commitments.</li>\r\n' +
        '</ul>',
      'Purpose of loan is for purchase/construction of a residential property': '["Yes"]',
      'Purchase/Construction of my/our first housing unit': 'false',
      'Any additional unit': 'true',
      'Marketing Communications: I do not wish to receive marketing communications from Absa and/or other members of the Absa Group': 'false',
      'Fees and Charges': [ [Object] ],
      'Other Fees and Charges': [ [Object], [Object] ],
      Date: '2023/06/12',
      'Does Absa Bank (Mauritius) Ltd already hold a fixed charge on property being given as security for this facility?': 'true',
      'If yes, amount of fixed charge held': '3000000',
      'Does the loan request pertain to refinancing a credit facility from another institution through the new mortgage?': 'false',
      'Total outstanding balance of ALL credit facilities being refinanced from OTHER institutions through the new Mortgage': '',
      'Loan amount for which registration fees will be borne by the bank': '',
      'Did you take up any secured facility within the last 12 months?': 'false',
      'Is the request EXCLUSIVELY for purchase of house/apartment OR construction?': 'false',
      'Is the property being given as security in the name of borrower?': 'true',
      'Guarantor Involved?': 'true',
      'Fixed Charge prepared in-house': 'true',
      'Will we need to determine the future value of security for LTV Calculation purposes?': 'true',
      "Borrower's signature": '{"lines":[[[88.2,52.27],[89.2,52.27],[90.2,52.27]],[[202.2,21.75],[201.2,22.75],[198.2,25.75],[198.2,27.75],[197.2,34.75],[198.2,50.75],[202.2,57.75],[206.2,60.75],[216.2,65.75],[234.2,69.75],[246.2,69.75],[258.2,66.75],[270.2,58.75],[279.2,50.75],[287.2,40.75],[290.2,34.75],[290.2,32.75],[290.2,30.75],[290.2,28.75],[290.2,27.75],[289.2,27.75],[288.2,27.75],[287.2,27.75],[286.2,27.75],[286.2,28.75],[285.2,29.75],[285.2,32.75],[285.2,36.75],[286.2,38.75],[286.2,38.75],[287.2,39.75],[288.2,39.75],[288.2,38.75],[288.2,36.75],[286.2,34.75],[283.2,34.75],[281.2,33.75],[278.2,33.75],[277.2,33.75],[274.2,34.75],[274.2,39.75],[273.2,42.75],[273.2,48.75],[273.2,53.75],[275.2,57.75],[283.2,59.75],[288.2,59.75],[298.2,53.75],[301.2,50.75],[306.2,43.75],[309.2,38.75],[309.2,34.75],[309.2,33.75],[307.2,32.75],[306.2,31.75],[304.2,30.75],[302.2,30.75],[300.2,30.75],[300.2,30.75],[302.2,31.75],[302.2,31.75],[305.2,31.75],[305.2,32.75],[306.2,33.75],[304.2,31.75],[299.2,26.75],[295.2,24.75],[294.2,23.75],[293.2,23.75],[294.2,26.75],[296.2,31.75],[298.2,33.75],[299.2,34.75],[300.2,35.75],[299.2,35.75],[295.2,31.75],[290.2,28.75],[285.2,26.75],[283.2,23.75],[283.2,24.75],[284.2,24.75],[285.2,24.75],[286.2,24.75],[287.2,24.75],[288.2,24.75]],[[238.2,26.75],[240.2,26.75]]]}',
      'Date (Sig)': '2023/06/12',
      "Borrower's Signature (1)": '',
      'Date (Sig1)': '',
      'Date (GS)': '',
      "GUarantor's signature (if applicable 1)": '',
      'Date (GS1)': '',
      'KYC Docs': null,
      Payslips: null,
      Statements: null,
      'Other documents': null,
      'Appeal comments': "<p>Kindly consider appeal since customer's MCIB is now clean.</p>",
      Appeal: [ [Object] ],
      'Sanctioner assigned': '',
      'Dedupe check done.  If yes, which product was approved:': '',
      'Approval date': '',
      'Related party check done.  If yes:': '',
      'Top 100 check': 'false',
      'Company name': '',
      Category: '',
      'Redundancy List': 'false',
      'BD 01 List': 'true',
      'EWL check': 'false',
      'Unique Reference': '',
      'Does Borrower Act as Guarantor?': 'true',
      'Has Borrower given any Personal Guarantee?': 'false',
      'Are there any arrears on loan for which borrower is acting as Guarantor?': 'No',
      'Does the loan meet our Credit Acceptance Parameters?': 'true',
      'Overall Remarks on credit facilities where Borrower acts as Guarantor': '<p>Upon review of MCIB, client did not at as guarantor. No red flags noted.</p>',
      'Is Applicant on Related Party List?': 'false',
      'I confirm that the borrower/s is/are not a related part, associated related party or has/have the same surname as AGL direct related party.': 'No-Not a Related Party',
      'I confirm that the guarantor/s are not a related party, associated related party or have the same surname as AGL direct related party.': 'No-Not  a Related Party',
      'Credit card sanctioned': 'Platinum',
      'Comments from sanctioner (DSR)': '<p>DSR within threshold as per normal pricing. However, DSR under ISF exceeds threshold. Business support held on file.</p>',
      'Comments from sanctioner (LTV)': '<p>Within LTV threshold of 70% as per CAP</p>',
      'Within policy?': 'true',
      'If No, Application Declined?': '',
      "Underwriter's Decision": 'Refer',
      'Refer to:': '',
      "Sanctioner's Decision": '',
      "Assessor's Comments/Recommendations": '<p>1. Good past track records noted 2. Within DSR threshold 3. Life insurance cover being provided 4. L</p>',
      'Decline reason': '',
      'Anciliary facilities': 'Mur 4,052,000',
      'Institution where credit card liabilities are held': 'n/a',
      'Institution where loan liabilities are held': 'n/a',
      'Institution where overdraft liabilities are held': 'n/a',
      'Institution where hire purchase liabilities are held': 'n/a',
      'Number of months': '',
      'Amount of lien on credit balance': '',
      'A. A site/location plan by a sworn land surveyor.': '[""]',
      "'Confirmation to the satisfaction of the Bank that remaining tenor of lease is at least 50 years as from date of first disbursement.": '',
      'Market value of residential property': '8176000',
      'Draft deed of sale in name of': 'Borrower',
      'Draft deed of sale (Value)': '8176000',
      'Customer Name': '',
      Reference: '',
      'Estimation of construction costs': '',
      'Market value of freehold residential property': '',
      'Estimate of property after construction': '',
      'Market value of freehold residential property after renovation': '',
      'Upon resignation or termination of your     employment with this Bank:': '',
      'Certificate from:': '',
      'Submission of letter from:': '',
      Percentage: '',
      'Contribution:': '',
      'a. First tranche shall be released upon submission of construction cost estimates to the satisfaction of the Bank.': '',
      'b. Subsequent tranches to be released upon submission of registered architects/building engineers/quantity surveyors showing progress of works, amount spent to date and projected expenditure to completion to the satisfaction of the Bank.': '',
      '3. The Bank reserves the right to review the terms and conditions of the loan agreement or recall the whole facility should the bank be made aware, at any point in time during the term of the Agreement, of any adverse information surrounding the Borrower or Borrower’s employment situation.': '[""]',
      'Payment from loan proceeds': '5189800',
      'Payment from contribution': '2224200',
      '5. Payment to be effected in favour of the notary.': '[""]',
      '6. You agree to pay all relevant fees and associated costs incurred for the removal of any security you have provided to us from our purview (including and not limited to fees for erasure of charges).': '[""]'
    },
    ApplicantPersonalDetails: {
      Title: 'Mr',
      'First Name': 'BABOO BALKRESHANSING',
      'Family Name': 'BAHADOOR',
      'ID/Passport Number': 'B0807700601739',
      Nationality: 'Mauritius',
      'Date of Birth': '1970/07/08',
      'Marital Status': 'Married',
      'Number of dependents': '0',
      'Age of dependents(Comma separated)': '',
      'Home phone': '2662249',
      'Mobile phone': '52534197',
      'Work phone': '2493100',
      'Email addresss': 'vailesh@chemplusltd.com',
      'Residential Address Line 1': 'ROYAL ROAD',
      'Residential Address Line 2': 'FOND DU SAC',
      'Postal Address Line 1': '',
      'Postal Address Line 2': '',
      'Postal Address Line 3': '',
      'Time at current residential address': '8 YEARS 8 MONTHS',
      'Ownership type': 'Living with Family',
      'Please specify, if other': '',
      'Value of property owned (in MUR)': '15',
      'Outstanding Homeloan/Mortgage (in MUR)': '6466287'
    },
    SecondaryApplicant: {},
    RefereeDetails: {
      Name: '',
      Address: '',
      'Relationship Type': '',
      'Known Since': '',
      'Home phone': '0',
      'Mobile phone': '0',
      'Work phone': '0'
    },
    ApplicantEmployerDetails: {
      Applicant: 'Applicant 1',
      'Job title': 'DIRECTOR',
      "Employer's Name": 'CHEM-PLUS LTD',
      "Employer's Address": 'TRIOLET',
      'Industry Sector': 'Wholesale Trade',
      'Gross Annual Salary (MUR)': '664800',
      'Employment Status': 'Permanent',
      Probation: 'No',
      'Contract Expiry Date': '',
      'Please specify, if others': '',
      'Length of service with current employer': '6',
      'If self employed, time in business': '',
      'Previous Employer (if < 6 months with current)': '',
      'Timespan of previous employment': ''
    },
    ApplicantsBankingDetails: {
      'Absa branch where account is held': 'GRAND BAIE',
      'Current account number': '1952910',
      'Savings account number': '1035454',
      'Other Bank where account is held': 'AfrAsia Bank Limited',
      'Type of accounts held': 'Current',
      'Time Account(s) held with your main bankers': 'More than 5 years',
      'Frequency of salary payments': 'Monthly',
      'Salary paid to Bank ?': 'Yes'
    },
    ANCILLARY_FACILITIES: {
      'Name of Lender': 'ABSA BANK MAURITIUS',
      'Facility Type': 'Equity Loan/Home Loan',
      'Account Number': '1658532',
      'Original Loan Amount': '5000000',
      'Interest Rate': '5.6',
      'Duration in months': '',
      'Monthly Repayment': '39681',
      'Stressed loan repayment': '0',
      'Expiry Date': '2034/10/01',
      'Outstanding Amount': '3989912',
      'Refinancing Amt from loan proceeds': '0',
      'Amt to be refinanced from own funds': '0',
      'Credit commitments to be kept': '0',
      'Amount in Arrears': '0',
      'Remaining tenor': '0'
    },
    MONTHLY_BUDGET_PLANNER: {
      Applicant: 'Applicant 1',
      'Basic Salary': '220,000',
      'Fixed Income': '0',
      'Variable Income': '0',
      '70% of Variable Income': '0.00',
      'Gross Income': '220,000.00',
      Rent: '0',
      'Existing Loan Repayment': '39,681',
      'Hire Purchase Repayment': '0',
      'Card Expenses': '5,600',
      'Overdraft Expenses': '0',
      'Other Expenses': '',
      'Total Expenses': '',
      'Disposable Income': '',
      'Loan Amount': convertAmountToWords(Number('8,176,000'.replaceAll(',',''))),
      'Interest Rate': '6.15',
      'Duration in months': '204',
      'Loan Amortisation': '64,709.10',
      'Stressed Loan Amortisation': '74,174.04',
      'Stressed Existing Loan Repayment': '29,760.75',
      'Loan DSR': '47.45',
      'Loan and Revolving DSR': '50.00',
      'Stressed Loan DSR': '47.24',
      'Stressed Loan and Revolving DSR': '49.79'
    },
    GuarantorDetails: {
      Name: '',
      Address: '',
      Occupation: '',
      'Contact Details': '',
      'Relationship to Borrower': ''
    },
    INDICATIVE_CHARGES: {
      'Facility fee': '50000',
      'Registration dues': '54200',
      'Stamp fees': '0',
      'Notary fees': '0',
      'Security charges': '1500',
      'Search fees per individual': '150',
      'Search fees per Guarantor': '150',
      'Indicative Valuation fee': '0',
      TOTAL: '106000.00'
    },
    ProjectCost: {
      'Cost of land': '7414000',
      'Cost of construction': '0',
      'Cost of other projects': '0',
      'Total cost of projects': '7414000.00'
    },
    LoanAmount: {
      'Land acquisition': '5,189,800',
      Construction: '0',
      'Repay loan Absa': '0',
      'Repay loan Non Absa': '0',
      'Registration fee': '0',
      'Facility fee': '0',
      'Other projects': '2,986,200',
      'Total loan amount': '8,176,000.00'
    },
    INSURANCE_COVER_1: {
      'Name of Insurance company': 'Assigning own insurance',
      'Type of  Insurance': 'Life',
      'Applicant Amount': '8176000',
      Frequency: 'Monthly',
      'Insurance Premium': '0'
    },
    securityFixed_FloatingCharge: {
      'Property registered in the name of': 'Borrower',
      'Description of property': 'Property situated at Beau Plan',
      'Valuation Report held': '',
      'Date of Valuation': '',
      "Valuer's Name": '',
      'Charge Amount': '0',
      Location: 'Beau Plan',
      'Estimated Value of Land or Property': '7414000',
      'Estimated Renovation Costs': '0',
      'Estimated Construction Costs': '0',
      'Total Value of Property': '7414000'
    },
    PrecedentDataString: [
      '1. The Bank Reserves the right to review and re-assess the terms and conditions of the loan or rescind the whole agreement prior to drawdown of the loan should the bank be made aware of any adverse information surrounding the Borrower’s current situation.',
      '2. Written undertaking from the Borrower’s employer to remit monthly salary to a transactional account held with the Bank.  [Existing Salary Pledge]',
      '3. Evidence of outstanding balance to be provided.',
      '4. The Bank reserves the right to uplift the deposit given as security, without prior notice should the loan repayment fall in arrears',
      '5. Assignment of life insurance cover to be provided'
    ],
    TypeOfSecurity: '"Fixed and Floating Charge"',
    DocsToBeSubmittedStr: 'A site/location plan by a sworn land surveyor., ',
    draftDeedSaleAmount: '8,176,000',
    ResidentialMarketValueAmount: '8,176,000',
    TotalContribution: '2,224,200',
    PaymentFromLoanProceedsAmount: convertAmountToWords('5,189,800'),
    PaymentFromContributionAmount: '2,224,200',
    ContributionForLand: '2,224,200',
    ContributionforConstructionAmount: '',
    ContributionForOtherProjectsAmount: ''
}

module.exports = retail_mortgage_sample_data;