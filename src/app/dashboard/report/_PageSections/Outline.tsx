import { Icons } from "@/components/Icons"
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
   
  const topics = [
    {
      title: "Employee Training Programs",
      embed: <Icons.Close/>,	
      identify:	<Icons.CheckCheck/>,
      mitigate:	<Icons.Check/>,
      track: <Icons.CheckCheck/>,
      communicate: <Icons.Close/>,
      remediate: <Icons.CheckCheck/>,
    },
    {
      title: "Board Accountability",
      embed: <Icons.CheckCheck/>,	
      identify:	null,
      mitigate:	null,
      track: null,
      communicate: <Icons.Close/>,
      remediate: null,
    },
    {
      title: "Fair Labor Practices",
      embed: <Icons.Close/>,	
      identify:	<Icons.CheckCheck/>,
      mitigate:	null,
      track: null,
      communicate: null,
      remediate: null,
    },
    {
      title: "Water Conservation",
      embed: <Icons.CheckCheck/>,	
      identify:	<Icons.CheckCheck/>,
      mitigate:	<Icons.Check/>,
      track: <Icons.CheckCheck/>,
      communicate: <Icons.Close/>,
      remediate: <Icons.Close/>,
    },
    // {
    //   invoice: "INV005",
    //   paymentStatus: "Paid",
    //   totalAmount: "$550.00",
    //   paymentMethod: "PayPal",
    // },
    // {
    //   invoice: "INV006",
    //   paymentStatus: "Pending",
    //   totalAmount: "$200.00",
    //   paymentMethod: "Bank Transfer",
    // },
    // {
    //   invoice: "INV007",
    //   paymentStatus: "Unpaid",
    //   totalAmount: "$300.00",
    //   paymentMethod: "Credit Card",
    // },
  ]
   
  export function Outline() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]"></TableHead>
            <TableHead>Embed</TableHead>
            <TableHead>Identify</TableHead>
            <TableHead>Mitigate</TableHead>
            <TableHead>Track</TableHead>
            <TableHead className="w-[160px]">Communicate</TableHead>
            <TableHead>Remediate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {topics.map((topics) => (
            <TableRow key={topics.title}>
              <TableCell className="font-medium">{topics.title}</TableCell>
              <TableCell>{topics.embed}</TableCell>
              <TableCell>{topics.identify}</TableCell>
              <TableCell>{topics.mitigate}</TableCell>
              <TableCell>{topics.track}</TableCell>
              <TableCell className="w-[160px]">{topics.communicate}</TableCell>
              <TableCell>{topics.remediate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }