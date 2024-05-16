    // Array of USA state names
    const states = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
        'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
        'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
        'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    // Function to get current time for a state
    function getCurrentTime(state) {
        const currentTime = new Date().toLocaleTimeString('en-US', { timeZone: `America/${state}` });
        return `${state}: ${currentTime}`;
    }

    // Display current time for all USA states in a div element
    const displayDiv = document.getElementById('display');
    states.forEach(state => {
        const currentTime = getCurrentTime(state);
        const stateTimeElement = document.createElement('p');
        stateTimeElement.textContent = currentTime;
        displayDiv.appendChild(stateTimeElement);
    });

    // Function to get current time zone for a state
    function getCurrentTimeZone(state) {
        const timeZone = new Date().toLocaleTimeString('en-US', { timeZoneName: 'short', timeZone: `America/${state}` }).split(' ')[2];
        return timeZone;
    }

    // Display current time and time zone for all USA states in a div element
    states.forEach(state => {
        const currentTime = getCurrentTime(state);
        const timeZone = getCurrentTimeZone(state);
        const stateTimeElement = document.createElement('p');
        stateTimeElement.textContent = `${currentTime} (${timeZone})`;
        displayDiv.appendChild(stateTimeElement);
    });
    // Function to get current time for Pakistan
    function getCurrentTimePakistan() {
        const currentTime = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi' });
        return `Pakistan: ${currentTime}`;
    }

    // Display current time for Pakistan in a div element
    const pakistanTimeElement = document.createElement('p');
    pakistanTimeElement.textContent = getCurrentTimePakistan();
    displayDiv.appendChild(pakistanTimeElement);

    // Function to detect number of states and cities
    function detectNumberOfStatesAndCities() {
        const numberOfStates = states.length;
        let numberOfCities = 0;

        states.forEach(state => {
            numberOfCities += getCitiesByState(state).length;
        });

        return `Number of states: ${numberOfStates}, Number of cities: ${numberOfCities}`;
    }

    // Function to get cities by state
    function getCitiesByState(stateCode) {
        switch (stateCode) {
            case 'AL':
                return ['205', '251', '256', '334'];
            case 'AK':
                return ['907'];
            case 'AZ':
                return ['480', '520', '602', '623', '928'];
            case 'AR':
                return ['479', '501', '870'];
            case 'CA':
                return ['209', '213', '310', '323', '408', '415', '424', '510', '530', '559', '562', '619', '626', '650', '661', '707', '714', '760', '805', '818', '831', '858', '909', '916', '925', '949', '951'];
            case 'CO':
                return ['303', '719', '720', '970'];
            case 'CT':
                return ['203', '860'];
            case 'DE':
                return ['302'];
            case 'DC':
                return ['202'];
            case 'FL':
                return ['689', '239', '305', '321', '352', '386', '407', '561', '727', '754', '772', '786', '813', '850', '863', '904', '941', '954'];
            case 'GA':
                return ['762', '229', '404', '478', '678', '706', '770', '912'];
            case 'HI':
                return ['808'];
            case 'ID':
                return ['208'];
            case 'IL':
                return ['730', '779', '217', '224', '309', '312', '447', '618', '630', '708', '773', '815', '847'];
            case 'IN':
                return ['219', '260', '317', '574', '765', '812'];
            case 'IA':
                return ['319', '515', '563', '641', '712'];
            case 'KS':
                return ['316', '620', '785', '913'];
            case 'KY':
                return ['270', '502', '606', '859'];
            case 'LA':
                return ['225', '318', '337', '504', '985'];
            case 'ME':
                return ['207'];
            case 'MD':
                return ['240', '301', '410', '443'];
            case 'MA':
                return ['339', '351', '413', '508', '617', '774', '781', '857', '978'];
            case 'MI':
                return ['231', '248', '269', '313', '517', '586', '616', '734', '810', '906', '947', '989'];
            case 'MN':
                return ['218', '320', '507', '612', '651', '763', '952'];
            case 'MS':
                return ['228', '601', '662'];
            case 'MO':
                return ['769', '314', '417', '573', '636', '660', '816'];
            case 'MT':
                return ['406'];
            case 'NE':
                return ['308', '402'];
            case 'NV':
                return ['702', '775'];
            case 'NH':
                return ['603'];
            case 'NJ':
                return ['201', '551', '609', '732', '848', '856', '862', '908', '973'];
            case 'NM':
                return ['505', '575'];
            case 'NY':
                return ['212', '315', '347', '516', '518', '585', '607', '631', '646', '716', '718', '845', '914', '917'];
            case 'NC':
                return ['252', '336', '704', '828', '910', '919', '980'];
            case 'ND':
                return ['701'];
            case 'OH':
                return ['216', '234', '330', '419', '440', '513', '567', '614', '740', '937'];
            case 'OK':
                return ['405', '580', '918'];
            case 'OR':
                return ['503', '541', '971'];
            case 'PA':
                return ['215', '267', '412', '484', '570', '610', '717', '724', '814', '878'];
            case 'RI':
                return ['401'];
            case 'SC':
                return ['803', '843', '864'];
            case 'SD':
                return ['605'];
            case 'TN':
                return ['423', '615', '731', '865', '901', '931'];
            case 'TX':
                return ['210', '214', '254', '281', '325', '361', '409', '430', '432', '469', '512', '682', '713', '806', '817', '830', '832', '903', '915', '936', '940', '956', '972', '979'];
            case 'UT':
                return ['435', '801'];
            case 'VT':
                return ['802'];
            case 'VA':
                return ['276', '434', '540', '571', '703', '757', '804'];
            case 'WA':
                return ['206', '253', '360', '425', '509'];
            case 'WV':
                return ['681', '304'];
            case 'WI':
                return ['262', '414', '608', '715', '920'];
            case 'WY':
                return ['307'];
            case 'AS':
                return ['684'];
            case 'GU':
                return ['671'];
            case 'MP':
                return ['670'];
            case 'PR':
                return ['787', '939'];
            case 'UM':
                return ['808'];
            case 'VI':
                return ['340'];
            default:
                return [];
        }
    }

    // Function to display state names
    function displayStateNames() {
        const stateInput = document.querySelector('.state-us');
        const stateSelect = document.createElement('select');
        states.forEach(state => {
            const stateOption = document.createElement('option');
            stateOption.value = state;
            stateOption.textContent = state;
            stateSelect.appendChild(stateOption);
        });
        stateInput.appendChild(stateSelect);
    }

    // Call the function to display state names
    displayStateNames();

    // Call the function to display state names
    displayStateNames();

    // Call the function to detect number of states and cities
    const numberOfStatesAndCities = detectNumberOfStatesAndCities();
    console.log(numberOfStatesAndCities);
    // Get a reference to the HTML element where you want to display the state names
    const container = document.getElementById('container');

    // Iterate over the states array
    states.forEach(state => {
        // Create a new paragraph element for each state
        const paragraph = document.createElement('p');

        // Set the text content of the paragraph to the state name
        paragraph.textContent = state;

        // Append the paragraph to the container
        container.appendChild(paragraph);
    });


    // Function to get all USA bank names
    function getAllUsaBanks() {
        return [
            'Bank of America',
            'JPMorgan Chase',
            'Wells Fargo',
            'Citigroup',
            'Goldman Sachs',
            'Morgan Stanley',
            'U.S. Bancorp',
            'PNC Financial Services',
            'TD Bank',
            'Capital One',
            'HSBC Bank USA',
            'SunTrust Banks',
            'American Express',
            'BB&T',
            'Charles Schwab',
            'Discover Financial Services',
            'Fifth Third Bank',
            'Ally Financial',
            'KeyBank',
            'Regions Financial',
            'Santander Bank',
            'State Street Corporation',
            'Union Bank',
            'Citizens Financial Group',
            'BBVA USA',
            'Huntington Bancshares',
            'Comerica',
            'Zions Bancorporation',
            'First Republic Bank',
            'BMO Harris Bank',
            'Synovus',
            'Northern Trust',
            'M&T Bank',
            'First Horizon Bank',
            'CIT Group',
            'Peoples United Financial',
            'Frost Bank',
            'SVB Financial Group',
            'East West Bank',
            'Webster Bank',
            'New York Community Bancorp',
            'First Citizens BancShares',
            'Western Alliance Bancorporation',
            'Wintrust Financial',
            'Signature Bank',
            'Cathay Bank',
            'BankUnited',
            'PacWest Bancorp',
            'Texas Capital Bancshares',
            'Bank OZK',
            'First Hawaiian Bank',
            'BOK Financial',
            'Commerce Bancshares',
            'Associated Banc-Corp',
            'United Bankshares',
            'First Midwest Bancorp',
            'Columbia Banking System',
            'South State Corporation',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cathay General Bancorp',
            'BankUnited',
            'PacWest Bancorp',
            'Texas Capital Bancshares',
            'Bank OZK',
            'First Hawaiian Bank',
            'BOK Financial',
            'Commerce Bancshares',
            'Associated Banc-Corp',
            'United Bankshares',
            'First Midwest Bancorp',
            'Columbia Banking System',
            'South State Corporation',
            'Bank of Hawaii',
            'Bank of the Ozarks',
            'First National Bank Alaska',
            'First Financial Bankshares',
            'Old National Bank',
            'Chemical Bank',
            'UMB Financial',
            'Investors Bancorp',
            'Prosperity Bancshares',
            'Hancock Whitney',
            'First Interstate BancSystem',
            'Bank of the West',
            'Cullen/Frost Bankers',
            'FirstBank Holding Company',
            'First Financial Bancorp',
            'First Merchants Corporation',
            'Bank of New York Mellon',
            'First Commonwealth Bank',
            'Trustmark Corporation',
            'Renasant Corporation',
            'Cadence Bancorporation',
            'First National of Nebraska'
        ];
        // Function to display all USA bank names in a dropdown selection imran Niaz SaGa JS laibraries

        function displayAllUsaBanks() {
            const bankInput = document.querySelector('.bank-us');

            const searchInput = document.createElement('input');
            searchInput.type = 'text';
            searchInput.placeholder = 'Search banks...';
            searchInput.id = 'searchInput';

            const bankSelect = document.createElement('select');
            bankSelect.id = 'bankSelect';

            bankInput.appendChild(searchInput);
            bankInput.appendChild(bankSelect);

            const usaBanks = getAllUsaBanks();
            populateSelect(bankSelect, usaBanks);

            searchInput.addEventListener('input', () => filterBanks(searchInput.value, usaBanks, bankSelect));
            bankSelect.addEventListener('change', displayOutside);
        }

        function populateSelect(selectElement, options) {
            selectElement.innerHTML = ''; // Clear previous options
            options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                selectElement.appendChild(optionElement);
            });
        }

        function filterBanks(query, allBanks, selectElement) {
            const filteredBanks = allBanks.filter(bank => bank.toLowerCase().includes(query.toLowerCase()));
            populateSelect(selectElement, filteredBanks);
        }


        function displayOutside() {
            const bankSelect = document.querySelector('.bank-us select');
            const selectedBank = bankSelect.value;
            const displayOutsideElement = document.querySelector('.display-outside');
            displayOutsideElement.textContent = `Selected Bank: ${selectedBank}`;
        }

        document.addEventListener('DOMContentLoaded', displayAllUsaBanks);
    }
