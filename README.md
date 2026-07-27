![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)
![status](https://img.shields.io/badge/status-active-brightgreen)

# PrimePOS User Guide

**Official documentation website** for PrimePOS — a point-of-sale and
business accounting system by Reoprime Solutions. Built for Reoprime's
customers and support team, walking users through every module in the
app with step-by-step guides, reference pages, and screenshots pulled
directly from the live product.

Covers everything from making a sale at the counter to generating a
Profit & Loss report — no need to contact support for the basics.

## What It Does

1. Organizes **41 documentation topics across 11 modules** in a
   collapsible sidebar, so any feature is a couple of clicks away
2. Splits content into two types: **step-by-step walkthroughs** for
   procedures (e.g. "Make a Sale," "New Purchase") and **reference
   pages** for things you browse rather than follow in order (e.g.
   "Dashboard," "Settings")
3. Nests report types with their specific examples — e.g. **Sales
   Reports** expands to show Cashier Clearance Report, Items Sales
   Report, Sales Payment Report, and more
4. Shows a **real screenshot of the actual PrimePOS screen** at the top
   of every guide it has one for
5. Switches between **light and dark themes**, remembered per visitor
6. Adapts to mobile with a **slide-in navigation menu**

## Tech Stack

Plain HTML, CSS, and JavaScript — no framework build step, no npm
install. Layout and components are built on **Bootstrap 5.3**, loaded
from a CDN.

## Structure

```
primepos-site-bootstrap/
├── index.html
├── css/custom.css
├── js/
│   ├── data.js       
│   ├── icons.js
│   ├── app.js
│   └── theme.js
├── assets/screenshots/
└── EDITING_GUIDE.md   ← how to add content, screenshots, or new pages
```



## About

Maintained by the PrimePOS team. Built and refined collaboratively with
Claude across multiple rounds of content and design feedback.
