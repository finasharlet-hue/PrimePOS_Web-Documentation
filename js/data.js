const DOCS = [
  {
    group: "Getting Started",
    items: [
      {
        id: "login",
        title: "Log In",
        tagline: "Access your PrimePOS account",
        type: "steps",
        nav: "Login  &gt;  Sign In",
        intro: "Every session starts at the PrimePOS login screen. Sign in with the username and password issued by your administrator to access your system.",
        content: [
          { title: "Enter your username", desc: "Type the username issued to you by your administrator." },
          { title: "Enter your password", desc: "Type your PrimePOS password. Use “Forgot Password?” if you’ve forgotten it." },
          { title: "Click Sign In", desc: "Select Sign In to open your dashboard." }
        ],
        tip: "Bookmark your PrimePOS login page for quick access at the start of each shift."
      },
      {
        id: "dashboard",
        title: "Dashboard",
        tagline: "Monitor your business at a glance",
        type: "grid",
        nav: "Dashboard  &gt;  Overview",
        intro: "The dashboard is the first screen you see after signing in. It gives a real-time overview of sales, inventory, customers, suppliers and expenses so you can make faster, informed decisions.",
        content: [
          { title: "Purchase Due", desc: "Total accounts payable to suppliers." },
          { title: "Sales Due", desc: "Total accounts receivable from customers." },
          { title: "Today's Sales", desc: "Sales recorded for the current date." },
          { title: "Expense Amount", desc: "Expenses recorded for the month." },
          { title: "Customers", desc: "Number of registered customers." },
          { title: "Suppliers", desc: "Number of registered suppliers." },
          { title: "Items/Products", desc: "Total number of items registered." },
          { title: "Sales Invoice", desc: "Total invoices generated for the month." }
        ]
      }
    ]
  },
  {
    group: "Items & Inventory",
    items: [
      {
        id: "item-registration",
        title: "Register an Item",
        tagline: "Add and organize products with ease",
        type: "steps",
        nav: "Items/Products  &gt;  New Item",
        intro: "Use this module to add a new product to the system, capturing branch, item name, category, unit of measure, tax category, and purchase and retail prices.",
        content: [
          { title: "Fill in item details", desc: "Set the branch, item name, category, unit of measure and tax category." },
          { title: "Set stock tracking", desc: "Set Manage Stock to Yes for physical items you want tracked in inventory, or No for services." },
          { title: "Set an alert quantity", desc: "Add a reorder alert quantity so you're notified before you run out of stock." },
          { title: "Save the item", desc: "Click Save once all the necessary information has been captured." }
        ],
        tip: "Set an alert quantity for every item so you're notified before you run out of stock.",
        note: "Set Manage Stock to Yes for physical items you want tracked in inventory, or No for services."
      },
      {
        id: "item-list",
        title: "Item List",
        tagline: "View and manage product inventory",
        type: "steps",
        nav: "Items/Products  &gt;  Item List",
        intro: "This module displays every product registered in the system, giving quick access to product information so you can manage inventory and keep accurate records.",
        content: [
          { title: "Edit item details", desc: "Update any field captured during item registration." },
          { title: "View item profile", desc: "See full details and stock history for the item." },
          { title: "Delete the item", desc: "Remove an item that's no longer needed." }
        ]
      },
      {
        id: "stock-manager",
        title: "Stock Manager",
        tagline: "View available stock at a glance",
        type: "steps",
        nav: "Items/Products  &gt;  Stock Manager",
        intro: "Stock Manager shows available stock organized by item name, category, unit of measure, stock on hand, reorder level, cost, retail, wholesale and promo price, taxed items, and expiry dates.",
        content: [
          { title: "View available stock", desc: "See stock levels for every item at a glance, organized by category and unit of measure." },
          { title: "Adjust stock", desc: "Add to or reduce an item's stock quantity directly from this screen." },
          { title: "Update price", desc: "Update an item's cost, retail, wholesale, or promo price." }
        ]
      },
      {
        id: "categories-brands-uom",
        title: "Categories, Brands & UOM",
        tagline: "Organize how products are grouped, branded, and sold",
        type: "grid",
        nav: "Items/Products  &gt;  Categories, Brands, UOM",
        intro: "These three settings control how products are grouped and displayed throughout PrimePOS.",
        noScreenshot: true,
        content: [
          { title: "Categories", desc: "How products are grouped — for example toothpaste, dairy, or soft drinks." },
          { title: "Brands", desc: "How items are grouped by manufacturer — for example Colgate, Brookside, or Mirinda." },
          { title: "UOM (Unit of Measure)", desc: "How products are sold — for example pieces, boxes, kilograms, or grams." }
        ]
      },
      {
        id: "issued-damaged",
        title: "Issued/Damaged",
        tagline: "Track stock that's damaged or issued for production",
        type: "steps",
        nav: "Items/Products  &gt;  Issued/Damaged",
        intro: "This module records products that are not in good shape, or that have been issued for use in production.",
        content: [
          { title: "Open Issued/Damaged", desc: "Go to Items/Products and select Issued/Damaged." },
          { title: "Click Add Record", desc: "Start a new issued or damaged stock entry." },
          { title: "Select branch and status", desc: "Choose Damaged for products that are not in good shape, or Issued for products used in production." }
        ]
      },
      {
        id: "price-change-log",
        title: "Price Change Log",
        tagline: "Track price updates over time",
        type: "steps",
        nav: "Items/Products  &gt;  Price Change Log",
        intro: "The Price Change Log shows a history of items whose prices have been updated, so you can track how pricing has changed over time.",
        noScreenshot: true,
        content: [
          { title: "Open the Price Change Log", desc: "Go to Items/Products and select Price Change Log to see every recorded price update." }
        ]
      },
      {
        id: "stock-conversion",
        title: "Stock Conversion",
        tagline: "Sell the same item in more than one form",
        type: "steps",
        nav: "Items/Products  &gt;  Stock Conversion",
        intro: "Stock Conversion is used when an item is sold in two different forms — for example a box of milk and an individual packet of milk — by converting stock from a parent item into smaller child items.",
        content: [
          { title: "Open the item list", desc: "Go to Items/Products and open Item List." },
          { title: "Open the item profile", desc: "On the parent item's Action dropdown, select Item Profile." },
          { title: "Create a child item", desc: "In the Action column, select Create Child, then choose the item to convert." },
          { title: "Set conversion quantities", desc: "Enter the quantity to convert, the quantity to produce, and the control quantity — how many child items one parent produces." },
          { title: "Confirm the conversion", desc: "Select Yes to \"Want to break one parent now\" to complete the conversion." }
        ]
      }
    ]
  },
  {
    group: "Purchases",
    items: [
      {
        id: "new-purchase",
        title: "New Purchase",
        tagline: "Record and track supplier purchases",
        type: "steps",
        nav: "Purchase  &gt;  New Purchase",
        intro: "Use this module to record purchases from suppliers — select or register a supplier, enter purchase details, record payment information, and save the transaction.",
        content: [
          { title: "Select or register a supplier", desc: "Choose an existing supplier or register a new one directly from this screen." },
          { title: "Add items to the purchase", desc: "Enter each item being purchased along with quantity and cost." },
          { title: "Choose the purchase status", desc: "Set the status to Ordered or Received depending on whether stock has arrived." },
          { title: "Record payment", desc: "Enter the amount paid, payment type and voucher number if applicable." },
          { title: "Save the purchase", desc: "Click Save once you've captured the necessary information." }
        ],
        note: "When creating a purchase, select the correct status. Ordered means items have been ordered but not received — stock level does not increase. Received means items have arrived — stock level increases."
      },
      {
        id: "purchase-list",
        title: "Purchase List",
        tagline: "Review and manage all purchase transactions",
        type: "steps",
        nav: "Purchase  &gt;  Purchase List",
        intro: "This module displays every purchase transaction recorded in the system, along with the supplier name.",
        content: [
          { title: "View purchase", desc: "Open the full details of a recorded purchase." },
          { title: "View payment", desc: "See the payment history for a purchase." },
          { title: "Pay accounts payable", desc: "Settle an outstanding balance owed to a supplier." },
          { title: "Purchase return", desc: "Return part or all of a purchase back to the supplier." },
          { title: "Cancel purchase", desc: "Cancel a purchase transaction entirely." }
        ]
      },
      {
        id: "purchase-return",
        title: "Purchase Return",
        tagline: "Return products back to a supplier",
        type: "steps",
        nav: "Purchase  &gt;  Purchase Return",
        intro: "Purchase Return records products that were bought from a supplier but sent back — for example because the wrong items arrived, or because they weren't in good shape.",
        content: [
          { title: "Open the purchase list", desc: "Go to Purchase and select Purchase List." },
          { title: "Start the return (unpaid purchase)", desc: "On the Action dropdown, select Purchase Return." },
          { title: "Start the return (paid purchase)", desc: "Open View Payment on the purchase, delete the payment, and the Purchase Return option becomes available on the Action dropdown." },
          { title: "Enter return details", desc: "Indicate the item name, quantity to return, receipt reference number, and reason for the return." }
        ]
      }
    ]
  },
  {
    group: "Sales",
    items: [
      {
        id: "sales-pos",
        title: "Make a Sale",
        tagline: "Process sales quickly and accurately",
        type: "steps",
        nav: "Sales  &gt;  POS",
        intro: "Use this guide when serving a customer at the POS counter. Scan or search items, adjust quantities and prices, apply discounts, assign customers, place transactions on hold, accept payments and print receipts.",
        content: [
          { title: "Open Sales / POS", desc: "From the main menu, open the sales screen." },
          { title: "Add items", desc: "Scan a barcode or search and select the item. Confirm the quantity." },
          { title: "Review the basket", desc: "Check items, quantities, prices, and any authorised discount before payment." },
          { title: "Take payment", desc: "Select the payment method and enter the amount received where required." },
          { title: "Complete the sale", desc: "Confirm the transaction and print or share the customer receipt." }
        ],
        tip: "Use the barcode scanner or the F10 shortcut to add items to the cart faster than searching by name.",
        note: "Sales default to the walk-in customer. Use Type Cust (F7) to attach a registered customer instead.",
        common: ["An item cannot be found in search.", "The barcode scanner does not respond.", "The receipt printer does not print."]
      },
      {
        id: "sales-list",
        title: "Sales List",
        tagline: "Monitor and review sales transactions",
        type: "steps",
        nav: "Sales  &gt;  Sales List",
        intro: "The Sales List gives a record of every sale processed through the system. Search, filter, review, print, return, or cancel sales — useful for tracking sales history, verifying payments, and retrieving transaction documents.",
        content: [
          { title: "View sales", desc: "Open the full details of a recorded sale." },
          { title: "View payments", desc: "See the payment history for a sale." },
          { title: "Sales return", desc: "Process a return for part or all of a sale." },
          { title: "Cancel sale", desc: "Cancel a sale transaction entirely." }
        ],
        tip: "Use the search box to instantly find an invoice by number or customer name."
      },
      {
        id: "sales-return",
        title: "Sales Return",
        tagline: "Record products returned by a customer",
        type: "steps",
        nav: "Sales  &gt;  Sales Return",
        intro: "Sales Return records products that were sold to a customer but then returned.",
        content: [
          { title: "Open the sales list", desc: "Go to Sales and select Sales List." },
          { title: "Start the return", desc: "On the Action dropdown for the sale, select Sales Return." },
          { title: "Enter the return details", desc: "Indicate the quantity to return and the condition the items are in." },
          { title: "Finish the return", desc: "Indicate the receipt reference number, whether to issue a refund, and the reason for the return." }
        ]
      },
      {
        id: "cancelled-sales-list",
        title: "Cancelled Sales List",
        tagline: "Review sales that have been voided",
        type: "steps",
        nav: "Sales  &gt;  Sales List",
        intro: "The Cancelled Sales List shows sales that have been voided, typically because the customer returned every item on the invoice.",
        content: [
          { title: "Open the sales list", desc: "Go to Sales and select Sales List." },
          { title: "Cancel the sale", desc: "On the Action dropdown for the sale, select Cancel Sale." },
          { title: "Enter cancellation details", desc: "Indicate the invoice date, receipt reference number, whether to issue a refund, and the reason for cancellation." }
        ]
      }
    ]
  },
  {
    group: "Suppliers & Customers",
    items: [
      {
        id: "suppliers",
        title: "Suppliers",
        tagline: "Organize supplier records",
        type: "steps",
        nav: "Suppliers  &gt;  New Supplier",
        intro: "Register and manage supplier information — capture the supplier's name, contact details, and payment information.",
        content: [
          { title: "Enter supplier details", desc: "Capture the supplier name, phone number and email." },
          { title: "Add payment details", desc: "Add M-Pesa till/paybill or bank account details for payments." },
          { title: "Save the supplier", desc: "Click Save once you've captured all necessary information." }
        ]
      },
      {
        id: "customers",
        title: "Customers",
        tagline: "Organize customer records",
        type: "steps",
        nav: "Customers  &gt;  New Customer",
        intro: "Register and manage customer information, capturing essential contact and account details.",
        content: [
          { title: "Enter customer details", desc: "Capture the customer's name, phone number, and address." },
          { title: "Set a credit limit", desc: "Add an opening balance and credit limit if the customer buys on credit." },
          { title: "Save the customer", desc: "Click Save once you've captured all necessary information." }
        ]
      }
    ]
  },
  {
    group: "Expenses",
    items: [
      {
        id: "new-expense",
        title: "Record an Expense",
        tagline: "Track and control business expenses",
        type: "steps",
        nav: "Expenses  &gt;  New Expense",
        intro: "Use this module to record a business expense.",
        content: [
          { title: "Choose category and account", desc: "Select the expense category and the paying account." },
          { title: "Enter the amount", desc: "Add the expense amount and, if applicable, a voucher number." },
          { title: "Save the expense", desc: "Click Save once you've captured all the necessary information." }
        ]
      },
      {
        id: "expense-list",
        title: "Expense List",
        tagline: "View, search and manage recorded expenses",
        type: "steps",
        nav: "Expenses  &gt;  Expense List",
        intro: "View every expense recorded in the system, add a bill or expense, and review payments and approval status.",
        content: [
          { title: "Record a direct expense", desc: "Use New Direct Expense to record an expense that is paid immediately." },
          { title: "Add a bill or expense", desc: "Use Add Bill/Expense to record an expense that can be paid later." },
          { title: "Review payment status", desc: "Check whether each expense is marked Paid or Unpaid." }
        ],
        tip: "Use the search box to locate records by category and reference number."
      }
    ]
  },
  {
    group: "Accounting",
    items: [
      {
        id: "accounting-overview",
        title: "Accounting",
        tagline: "Manage financial accounts, transactions and business reports",
        type: "grid",
        nav: "Main Menu  &gt;  Accounting",
        intro: "The Accounting module is a centralized place to manage the organisation's financial records — record transactions, manage accounts, track balances, and generate key reports such as Profit & Loss, Balance Sheet and Trial Balance.",
        noScreenshot: true,
        content: [
          { title: "Accounts Type", desc: "The main account categories — Asset, Liability, Equity, Income, Expense." },
          { title: "Sub-Accounts Type", desc: "Finer sub-categories under each account type." },
          { title: "Chart of Accounts", desc: "The full list of accounts, organized by type." },
          { title: "Accounts Balances", desc: "Ledger statements across the chart of accounts." },
          { title: "Money", desc: "View, make and receive payments." },
          { title: "Journal Entry", desc: "Manual debit/credit entries into the ledger." },
          { title: "Profit & Loss", desc: "Income against expenses for the selected period." },
          { title: "Balance Sheet", desc: "Assets, liabilities and equity at a point in time." },
          { title: "Trial Balance", desc: "Confirms total debits equal total credits." },
          { title: "Combined GL", desc: "Every financial transaction, grouped by account." },
          { title: "Customer Balances", desc: "Customer account statements." },
          { title: "Supplier Balances", desc: "Supplier account statements." }
        ]
      },
      {
        id: "profit-loss",
        title: "Profit & Loss Report",
        tagline: "Example accounting report",
        type: "steps",
        nav: "Accounting  &gt;  Profit and Loss",
        intro: "Generate a Profit & Loss report for any date range to see revenue against expenses and the resulting net profit.",
        content: [
          { title: "Pick a date range", desc: "Set the From Date and To Date for the period you want to review." },
          { title: "Click Show", desc: "Generate the report for the selected period." },
          { title: "Export if needed", desc: "Use Export PDF or Export Excel to save or share the report." }
        ],
        note: "Most accounting reports are generated by filtering dates. A negative net profit means expenses exceeded income for the selected period.",
        tip: "Set up your chart of accounts correctly before recording transactions, and check reports regularly to review financial performance."
      },
      {
        id: "balance-sheet",
        title: "Balance Sheet",
        tagline: "Example accounting report",
        type: "steps",
        nav: "Accounting  &gt;  Balance Sheet",
        intro: "The Balance Sheet shows the business's assets, liabilities, and equity as of a specific date.",
        content: [
          { title: "Pick a date", desc: "Set the date you want the balance sheet generated for." },
          { title: "Click Show", desc: "Generate the balance sheet for that date." },
          { title: "Export if needed", desc: "Use Export PDF or Export Excel to save or share the report." }
        ]
      },
      {
        id: "trial-balance",
        title: "Trial Balance",
        tagline: "Example accounting report",
        type: "steps",
        nav: "Accounting  &gt;  Trial Balance",
        intro: "The Trial Balance confirms that total debits equal total credits across every account, for a selected period.",
        content: [
          { title: "Pick a date range", desc: "Set the From Date and To Date for the period you want to review." },
          { title: "Click Show", desc: "Generate the trial balance for the selected period." },
          { title: "Export if needed", desc: "Use Export PDF or Export Excel to save or share the report." }
        ]
      }
    ]
  },
  {
    group: "Documents",
    items: [
      {
        id: "documents",
        title: "Documents/Files",
        tagline: "Store and manage business documents",
        type: "steps",
        nav: "Documents/Files  &gt;  New File",
        intro: "Upload and manage important business documents within the system.",
        content: [
          { title: "Choose a file category", desc: "Select the category the document belongs to, for easy retrieval later." },
          { title: "Upload the file", desc: "Give it a title and browse to the file on your device." },
          { title: "Set an expiry date", desc: "Add an expiry date for licenses and certificates so you never miss a renewal." },
          { title: "Save the file", desc: "Click Save to store the document." }
        ],
        note: "Organize files by category for easy retrieval.",
        tip: "Set an expiry date on licenses and certificates so you never miss a renewal."
      }
    ]
  },
  {
    group: "Reports",
    items: [
      {
        id: "reports",
        title: "Reports",
        tagline: "Every report in one place",
        type: "grid",
        nav: "Main Menu  &gt;  Reports",
        intro: "The Reports module is a centralized location for generating and viewing every business report PrimePOS offers.",
        noScreenshot: true,
        content: [
          { title: "Summary Reports", desc: "Total sales, revenue collected, number of transactions, refunds and voids." },
          { title: "Tax Reports", desc: "Overview of all taxes collected or applicable over a selected period." },
          { title: "Sales Reports", desc: "All sales transactions over a period, including items sold, payment methods and totals." },
          { title: "Purchase Reports", desc: "A comprehensive record of all purchases made over a selected period." },
          { title: "Stock/Products Reports", desc: "Inventory information such as stock levels and movement." },
          { title: "Expense Report", desc: "All recorded business expenses." },
          { title: "Suppliers Report", desc: "Supplier transactions, purchase history and balances." },
          { title: "Customer Reports", desc: "Customer purchases, history and balances." },
          { title: "Loyalty Points Report", desc: "Loyalty points earned and redeemed." },
          { title: "Expired Items Report", desc: "Flags stock that has passed its expiry date." },
          { title: "User Logs", desc: "Records what each user did, and when." },
          { title: "Audit Trail Report", desc: "A full trail of changes made across the system." }
        ]
      },
      {
        subgroup: "Summary Reports",
        items: [
          {
            id: "summary-daily-report",
            title: "Summary Daily Report",
            tagline: "Example summary report",
            type: "steps",
            nav: "Reports  &gt;  Summary Reports  &gt;  Summary Daily Report",
            intro: "The Summary Daily Report shows a daily sales summary, including total sales paid and due, payment methods (cash, M-Pesa, etc.), accounts receivable, and payments made to suppliers and other expenses.",
            content: [
              { title: "Open Summary Reports", desc: "Go to Reports and select Summary Reports." },
              { title: "Pick a date", desc: "Choose the day you want the summary for." },
              { title: "View the summary", desc: "Review sales, payment methods, receivables, and payments made for that day." }
            ]
          },
          {
            id: "z-report",
            title: "Z-Report",
            tagline: "Example summary report",
            type: "steps",
            nav: "Reports  &gt;  Summary Reports  &gt;  Z-Report",
            intro: "The Z-Report shows daily sales and totals, daily purchases and totals, expenditure, and consumable items for a selected day.",
            content: [
              { title: "Open Summary Reports", desc: "Go to Reports and select Summary Reports." },
              { title: "Select Z-Report", desc: "Choose the Z-Report view." },
              { title: "Pick a date", desc: "Choose the day you want the report for, then review sales, purchases, expenditure and consumables." }
            ]
          }
        ]
      },
      {
        subgroup: "Tax Reports",
        items: [
          {
            id: "vat-report",
            title: "VAT Report",
            tagline: "Example tax report",
            type: "steps",
            nav: "Reports  &gt;  Tax Reports  &gt;  VAT Report",
            intro: "The VAT Report shows VAT calculations for purchases made, sales posted, and expenses recorded, and gives the net VAT that is due to be remitted.",
            content: [
              { title: "Open Tax Reports", desc: "Go to Reports and select Tax Reports." },
              { title: "Pick a date range", desc: "Set the From Date and To Date for the period you want to review." },
              { title: "Review the net VAT", desc: "Check the net VAT figure, which is the amount to be remitted." }
            ]
          }
        ]
      },
      {
        subgroup: "Sales Reports",
        items: [
          {
            id: "cashier-clearance-report",
            title: "Cashier Clearance Report",
            tagline: "Example sales report",
            type: "steps",
            nav: "Reports  &gt;  Sales Reports  &gt;  Cashier Clearance Report",
            intro: "The Cashier Clearance Report provides a summary of every transaction processed by a cashier during a specific period or shift.",
            content: [
              { title: "Open Sales Reports", desc: "Go to Reports and select Sales Reports." },
              { title: "Select the cashier and shift", desc: "Choose the cashier and the period or shift you want to review." },
              { title: "Review the summary", desc: "Check the total transactions processed by that cashier for the selected period." }
            ]
          },
          {
            id: "sales-report",
            title: "Sales Report",
            tagline: "Example sales report",
            type: "steps",
            nav: "Reports  &gt;  Sales Reports  &gt;  Sales Report",
            intro: "The Sales Report shows a detailed breakdown of each sale made, per invoice.",
            content: [
              { title: "Open Sales Reports", desc: "Go to Reports and select Sales Reports." },
              { title: "Pick a date range", desc: "Set the From Date and To Date for the period you want to review." },
              { title: "Review each invoice", desc: "Check the detailed breakdown for every sale made in that period." }
            ]
          },
          {
            id: "sales-report-employee",
            title: "Sales Report by Employee",
            tagline: "Example sales report",
            type: "steps",
            nav: "Reports  &gt;  Sales Reports  &gt;  Sales Report by Employee",
            intro: "This report shows a detailed breakdown of each sale made, per invoice, grouped by the employee who made the sale.",
            content: [
              { title: "Open Sales Reports", desc: "Go to Reports and select Sales Reports." },
              { title: "Select this report", desc: "Choose the Sales Report by Employee view." },
              { title: "Review sales per employee", desc: "Check which employee made each sale, and the details per invoice." }
            ]
          },
          {
            id: "items-sales-report",
            title: "Items Sales Report",
            tagline: "Example sales report",
            type: "steps",
            nav: "Reports  &gt;  Sales Reports  &gt;  Items Sales Report",
            intro: "The Items Sales Report shows which products were sold during a selected period, how many units were sold, the value of those sales, and who made the sales.",
            content: [
              { title: "Open Sales Reports", desc: "Go to Reports and select Sales Reports." },
              { title: "Pick a date range", desc: "Set the From Date and To Date for the period you want to review." },
              { title: "Review items sold", desc: "Check units sold, sales value, and who made each sale." }
            ]
          },
          {
            id: "sales-payment-report",
            title: "Sales Payment Report",
            tagline: "Example sales report",
            type: "steps",
            nav: "Reports  &gt;  Sales Reports  &gt;  Sales Payment Report",
            intro: "The Sales Payment Report shows all payments received from customers during a selected period, including how each sale was paid, the payment amount, and a summary of all payments made.",
            content: [
              { title: "Open Sales Reports", desc: "Go to Reports and select Sales Reports." },
              { title: "Pick a date range", desc: "Set the From Date and To Date for the period you want to review." },
              { title: "Review payments received", desc: "Check how each sale was paid and the summary of all payments." }
            ]
          }
        ]
      },
      {
        subgroup: "Purchase Reports",
        items: [
          {
            id: "purchase-report",
            title: "Purchase Report",
            tagline: "Example purchase report",
            type: "steps",
            nav: "Reports  &gt;  Purchase Reports  &gt;  Purchase Report",
            intro: "The Purchase Report is a comprehensive record of all purchases made over a selected period.",
            content: [
              { title: "Open Purchase Reports", desc: "Go to Reports and select Purchase Reports." },
              { title: "Pick a date range", desc: "Set the From Date and To Date for the period you want to review." },
              { title: "Review the purchases", desc: "Check every purchase recorded for that period." }
            ]
          },
          {
            id: "item-purchase-report",
            title: "Item Purchase Report",
            tagline: "Example purchase report",
            type: "steps",
            nav: "Reports  &gt;  Purchase Reports  &gt;  Item Purchase Report",
            intro: "The Item Purchase Report shows exactly what items were bought, in what quantities, at what unit cost, and the total spend per item.",
            content: [
              { title: "Open Purchase Reports", desc: "Go to Reports and select Purchase Reports." },
              { title: "Select this report", desc: "Choose the Item Purchase Report view." },
              { title: "Review spend per item", desc: "Check quantities, unit cost, and total spend for each item purchased." }
            ]
          }
        ]
      },
      {
        subgroup: "Stock Reports",
        items: [
          {
            id: "stock-report",
            title: "Stock Report",
            tagline: "Example stock report",
            type: "steps",
            nav: "Reports  &gt;  Stock Reports  &gt;  Stock Report",
            intro: "The Stock Report shows current stock levels for every item, along with their cost, retail, wholesale, and promo prices.",
            content: [
              { title: "Open Stock Reports", desc: "Go to Reports and select Stock Reports." },
              { title: "Review current stock", desc: "Check stock levels and pricing for every item." }
            ]
          },
          {
            id: "item-ledger",
            title: "Item Ledger",
            tagline: "Example stock report",
            type: "steps",
            nav: "Reports  &gt;  Stock Reports  &gt;  Item Ledger",
            intro: "The Item Ledger gives a detailed transaction history for each item.",
            content: [
              { title: "Open Stock Reports", desc: "Go to Reports and select Stock Reports." },
              { title: "Select an item", desc: "Choose the item you want the transaction history for." },
              { title: "Review the ledger", desc: "Check every recorded transaction for that item." }
            ]
          },
          {
            id: "item-valuations",
            title: "Item Valuations",
            tagline: "Example stock report",
            type: "steps",
            nav: "Reports  &gt;  Stock Reports  &gt;  Item Valuations",
            intro: "Item Valuations shows the total value of stock grouped by category, along with cost and selling price, and the resulting profit or loss.",
            content: [
              { title: "Open Stock Reports", desc: "Go to Reports and select Stock Reports." },
              { title: "Select Item Valuations", desc: "Choose the Item Valuations view." },
              { title: "Review value by category", desc: "Check total stock value, cost, selling price, and profit or loss per category." }
            ]
          }
        ]
      }
    ]
  },
  {
    group: "Users & Access",
    items: [
      {
        id: "user-management",
        title: "User Management",
        tagline: "Control user access and permissions",
        type: "steps",
        nav: "User Management  &gt;  New User",
        intro: "Administrators can create and manage user roles by assigning specific permissions to different system modules.",
        content: [
          { title: "Open the roles list", desc: "Go to User Management to see every role currently set up." },
          { title: "Create or edit a role", desc: "Add a new role, or use the Action dropdown to edit an existing one." },
          { title: "Assign permissions", desc: "Add or remove permissions for the modules this role should access." },
          { title: "Save the role", desc: "Save your changes so they apply to any user assigned this role." }
        ],
        note: "The Action dropdown lets administrators modify the details of an existing role, and add or remove permissions."
      }
    ]
  },
  {
    group: "Settings",
    items: [
      {
        id: "settings",
        title: "Settings",
        tagline: "Configure PrimePOS to fit your business",
        type: "grid",
        nav: "Main Menu  &gt;  Settings",
        intro: "Configure and maintain the system's operational settings — company information, branches, taxes, security settings and database backup.",
        noScreenshot: true,
        content: [
          { title: "Company Profile", desc: "Manage the organisation's basic information." },
          { title: "Manage Branch", desc: "Add and manage the branches/stations in your business." },
          { title: "Site Settings", desc: "Configure general site settings such as currency, site name and logo." },
          { title: "Tax List", desc: "Define the tax rates used across sales and purchases." },
          { title: "Salutation", desc: "Manage title options (Mr, Mrs, Dr, etc.) used in forms." },
          { title: "Progress Status", desc: "Manage the status labels used to track order progress." },
          { title: "Places", desc: "Manage the locations available for customers and deliveries." },
          { title: "Currency List", desc: "Manage the currencies available in the system." },
          { title: "Change Password", desc: "Update your own login password." },
          { title: "Audit Trail", desc: "A full trail of changes made across the system." },
          { title: "Database Backup", desc: "Create and manage backups of your business data." }
        ]
      }
    ]
  }
];
