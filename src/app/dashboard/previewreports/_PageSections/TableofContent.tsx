import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
   
  const invoices = [
    {
      invoice: "Overview",
      paymentStatus: "Carbon Footprint",
      totalAmount: "Community Engagement",
      paymentMethod: "Risk Management",
      test: "-",
      test2: "ESG Goals",
      test3: "-"
    },
    {
      invoice: "Purpose of ESG Report",
      paymentStatus: "Sustainable Financing",
      totalAmount: "Diversity and Inclusion",
      paymentMethod: "Ethical Business Practices",
      test: "-",
      test2: "Innovation and Adaptation",
      test3: "-"
    },
    {
      invoice: "Governance Structure",
      paymentStatus: "-",
      totalAmount: "Employee Well-Being",
      paymentMethod: "-",
      test: "-",
      test2: "-",
      test3: "-"
    },
    {
      invoice: "Key Achievement",
      paymentStatus: "-",
      totalAmount: "-",
      paymentMethod: "-",
      test: "-",
      test2: "-",
      test3: "-"
    },
    {
      invoice: "Future Commitments",
      paymentStatus: "-",
      totalAmount: "-",
      paymentMethod: "-",
      test: "-",
      test2: "-",
      test3: "-"
    },
  ]
   
  export function TableofContent() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Introduction</TableHead>
            <TableHead>Environmental Initiatives</TableHead>
            <TableHead>Social Responsibility</TableHead>
            <TableHead>Governance and Ethics</TableHead>
            <TableHead>Data and Metrics</TableHead>
            <TableHead>Future Roadmap</TableHead>
            <TableHead className="text-right">Conclusion</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
              <TableCell>{invoice.test}</TableCell>
              <TableCell>{invoice.test2}</TableCell>
              <TableCell>{invoice.test3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }