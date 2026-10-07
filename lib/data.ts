
export const subjects = [
  { code: "ACC-101", title: "Financial Accounting", note: "Journal → ledger → trial balance" },
  { code: "TAX-201", title: "Income Tax Basics", note: "Taxable vs. exempt income" },
  { code: "ACC-210", title: "Cost Accounting", note: "Job, process & variance costing" },
  { code: "TAX-220", title: "VAT & Indirect Tax", note: "Input vs. output tax" },
  { code: "ACC-230", title: "Managerial Accounting", note: "CVP, budgeting, break-even" },
  { code: "ACC-240", title: "Audit Fundamentals", note: "Assurance, controls, evidence" },
] as const;

export const formulas = [
  {
    code: "EQ-01",
    title: "Accounting Equation",
    formula: "Assets = Liabilities + Equity",
    tip: "Every transaction touches at least two accounts. If it doesn't balance, hunt the missing side first.",
    rows: [["Assets", "Resources owned"], ["Liabilities", "Obligations owed"], ["Equity", "Owner's residual claim"]],
  },
  {
    code: "TX-02",
    title: "Taxable Income",
    formula: "Taxable = Gross Income − Deductions − Exemptions",
    tip: "Classify first: exempt, deductible, or taxable. Most lost marks come from skipping this step.",
    rows: [["Gross income", "All inflows"], ["Deductions", "Allowed expenses"], ["Exemptions", "Statutory carve-outs"]],
  },
  {
    code: "VT-03",
    title: "VAT Payable",
    formula: "VAT Payable = Output VAT − Input VAT",
    tip: "Negative result means a refund / carry-forward. Always state which one the question asks for.",
    rows: [["Output VAT", "Collected on sales"], ["Input VAT", "Paid on purchases"], ["Net", "Remit to tax office"]],
  },
  {
    code: "CV-04",
    title: "Break-Even Point",
    formula: "BEP (units) = Fixed Costs ÷ (Price − Variable Cost)",
    tip: "The denominator is the contribution margin per unit. Write it out as its own line for partial credit.",
    rows: [["Fixed costs", "Constant per period"], ["Variable cost", "Scales with units"], ["Contribution", "Price − variable cost"]],
  },
] as const;
