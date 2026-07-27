# PrimePOS User Guide — Web Documentation (Bootstrap 5)

A user documentation site for **PrimePOS**, a point-of-sale and business
accounting system by Reoprime Solutions. It walks users through every
module of the app — sales, inventory, purchases, expenses, accounting,
reports, and more — with step-by-step guides, reference pages, and
screenshots pulled straight from the live product.

## About this project

- **41 documentation topics** across 11 modules, organized in a
  collapsible sidebar (with a second level of nesting for report types
  and their specific examples, e.g. Sales Reports → Cashier Clearance
  Report, Items Sales Report, etc.)
- **Two content types per page**: step-by-step walkthroughs for
  procedures (e.g. "Make a Sale"), and reference grids for
  browse-anytime pages (e.g. "Dashboard," "Settings")
- **Screenshots auto-attach** to each page by matching filenames to
  topic IDs — no code changes needed to add one
- **Light/dark theme**, remembered per visitor
- **Fully responsive** — the sidebar becomes a slide-in mobile menu below
  tablet width
- **No build step** — plain HTML/CSS/JS on top of Bootstrap 5.3, loaded
  from a CDN. Open `index.html` and it runs.

Built collaboratively between the PrimePOS team and Claude, refined over
several rounds of feedback on structure, content, and UI.

A static documentation site for PrimePOS, built on Bootstrap 5.3. No build
tools, no npm install — just files you open and edit directly.

```
primepos-site-bootstrap/
├── index.html              ← page shell (rarely needs editing)
├── css/
│   └── custom.css          ← brand colors + theme styling on top of Bootstrap
├── js/
│   ├── data.js               ✏️ EDIT THIS to add/change topics & text
│   ├── icons.js               (the icon set + which icon each section uses)
│   ├── app.js                 (sidebar, routing, tabs — rarely needs editing)
│   └── theme.js                (light/dark theme switcher)
└── assets/
    └── screenshots/          🖼️ DROP SCREENSHOTS HERE
```

---

## 1. Opening it in VS Code

1. Unzip the project.
2. VS Code → **File → Open Folder…** → select the unzipped folder.
3. Right-click `index.html` → **Open with Live Server** (install the
   "Live Server" extension by Ritwick Dey first if you don't have it).
   Your browser opens the site and auto-refreshes whenever you save a file.

(You can also just double-click `index.html` to open it directly in a
browser — Live Server just makes the screenshot auto-detection more
reliable.)

---

## 2. Adding a screenshot — no code editing required

Every topic has an `id` (see `js/data.js`, e.g. `"id": "new-purchase"`).
The site automatically looks for an image at:

```
assets/screenshots/<id>.jpg   (also tries .jpeg and .png)
```

To add the screenshot for **New Purchase**: name the file
`new-purchase.jpg` and drop it into `assets/screenshots/`. Refresh the
page and open that topic — the screenshot appears automatically at the
top of the page, above the guide. No screenshot yet for a topic just
shows a friendly placeholder instead of breaking.

**Current topic IDs:**

| Module | Topic | Screenshot filename |
|---|---|---|
| Getting Started | Log In | `login.jpg` |
| Getting Started | Dashboard | `dashboard.jpg` |
| Items & Inventory | Register an Item | `item-registration.jpg` |
| Items & Inventory | Item List | `item-list.jpg` |
| Items & Inventory | Stock Manager | `stock-manager.jpg` |
| Items & Inventory | Categories, Brands & UOM | `categories-brands-uom.jpg` |
| Items & Inventory | Issued/Damaged | `issued-damaged.jpg` |
| Items & Inventory | Price Change Log | `price-change-log.jpg` |
| Items & Inventory | Stock Conversion | `stock-conversion.jpg` |
| Purchases | New Purchase | `new-purchase.jpg` |
| Purchases | Purchase List | `purchase-list.jpg` |
| Purchases | Purchase Return | `purchase-return.jpg` |
| Sales | Make a Sale | `sales-pos.jpg` |
| Sales | Sales List | `sales-list.jpg` |
| Sales | Sales Return | `sales-return.jpg` |
| Sales | Cancelled Sales List | `cancelled-sales-list.jpg` |
| Suppliers & Customers | Suppliers | `suppliers.jpg` |
| Suppliers & Customers | Customers | `customers.jpg` |
| Expenses | Record an Expense | `new-expense.jpg` |
| Expenses | Expense List | `expense-list.jpg` |
| Accounting | Accounting | `accounting-overview.jpg` |
| Accounting | Profit & Loss Report | `profit-loss.jpg` |
| Documents | Documents/Files | `documents.jpg` |
| Reports | Reports | `reports.jpg` |
| Users & Access | User Management | `user-management.jpg` |
| Settings | Settings | `settings.jpg` |

---

## 3. Adding a brand new topic or module

Open `js/data.js`. It's a list of groups, each containing topics. Copy an
existing topic object, change `id`, `title`, `tagline`, `nav`, `intro`,
and `content`, and it appears in the sidebar automatically — grouped
under whichever `group` you set (or create a new group with
`{ group: "...", items: [...] }`).

Field reference:

| Field | What it does |
|---|---|
| `id` | Unique slug. Used for the URL and to match screenshot filenames. Lowercase, hyphens only. |
| `title` | Page title |
| `tagline` | Short italic subtitle under the title |
| `type` | `"steps"` for a numbered walkthrough, or `"grid"` for feature cards |
| `nav` | The in-app breadcrumb shown in the "Navigation" box |
| `intro` | One paragraph explaining what the page/module is for |
| `content` | Array of `{title, desc}` — the steps or grid cards |
| `tip` | Optional green callout |
| `note` | Optional yellow callout |
| `common` | Optional array of strings for a "Common issues" list |

---

## 4. Theme, sidebar, and layout behavior

- **Theme toggle** (sun/moon icons, top-right of header): switches between
  the brand light theme and a dark theme. The choice is remembered in the
  browser between visits.
- **Sidebar categories** are click-to-expand — clicking a category name
  reveals its topics underneath; clicking again collapses it.
- **Mobile**: below tablet width, the sidebar becomes a slide-in menu,
  opened with the hamburger icon in the header.
- **Search box** (header, desktop only) filters topics live and expands
  any matching category automatically.

---

## 5. Publishing it live

This folder can be hosted anywhere that serves static files, no build
step required:

- **Netlify** — drag and drop the folder onto app.netlify.com/drop
- **GitHub Pages** — push to a repo, enable Pages in settings
- **Vercel** — drag-and-drop import or the `vercel` CLI
- Any standard web host — upload via FTP/cPanel, keeping the folder
  structure intact

The site loads Bootstrap 5.3 from a CDN (`cdnjs.cloudflare.com`), so an
internet connection is needed the first time each visitor loads it.
