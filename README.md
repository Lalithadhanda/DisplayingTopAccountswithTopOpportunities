🎯 Business Requirement

Display the Top 10 Accounts based on Annual Revenue (Ascending Order)

When an Account is selected:

Show the Top 5 related Opportunities

Sort Opportunities by Amount (Descending Order)

Display Opportunities in a separate LWC component

Ensure smooth user interaction and clean UI rendering

🛠️ Solution Approach
🔹 Component 1: Account List (Parent / Controller Component)

Fetches Account records using Apex

Displays:

Account Name

Annual Revenue

Sorted by Annual Revenue (Low → High)

On Account click:

Sends selected Account Id to child component

🔹 Component 2: Opportunity List (Child Component)

Receives selected Account Id

Fetches related Opportunities

Displays:

Opportunity Name

Amount

Close Date

Stage

Shows Top 5 Opportunities sorted by Amount (High → Low)

🧩 Key Features

Lightning Web Components (LWC)

Parent → Child communication

Dynamic UI rendering based on user selection

Apex-driven data retrieval

Clean separation of concerns

Scalable and reusable component design

🧪 Technologies Used

Salesforce Lightning Web Components (LWC)

Apex Classes

Salesforce SOQL

Lightning Data Table

Salesforce Lightning Design System (SLDS)

📂 Component Structure
lwc/
├── accountList
│   ├── accountList.html
│   ├── accountList.js
│   ├── accountList.js-meta.xml
│
├── opportunityList
│   ├── opportunityList.html
│   ├── opportunityList.js
│   ├── opportunityList.js-meta.xml

apex/
├── AccountController.cls
├── OpportunityController.cls

▶️ Demo

🎥 A short demo video is attached in the repository showcasing:
<img width="1920" height="935" alt="Screenshot (26)" src="https://github.com/user-attachments/assets/e4904fa8-d0af-4e71-bd22-f1873a495f0f" />
<img width="1920" height="922" alt="Screenshot (25)" src="https://github.com/user-attachments/assets/fde2c48b-1bd2-419c-bf32-180658618f5a" />


Account selection

Dynamic Opportunity loading

Component interaction in Salesforce UI

🚀 Learning Outcomes

Improved understanding of LWC component communication

Hands-on experience with real-time data rendering

Practical usage of Apex + LWC integration

Building scalable, user-focused UI components in Salesforce
