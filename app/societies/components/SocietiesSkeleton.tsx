"use client";

import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function SocietiesSkeleton() {
  // Create an array of skeleton rows
  const skeletonRows = Array.from({ length: 5 }, (_, i) => i);

  return (
    <Table className="table text-base">
      <TableHeader>
        <TableRow className="">
          <TableHead>
            <div className="text-lg">Societies Names</div>
          </TableHead>
          <TableHead>
            <div className="text-lg">Location</div>
          </TableHead>
          <TableHead>
            <div className="text-lg">Project Status</div>
          </TableHead>
          <TableHead>
            <div className="text-lg">Grade</div>
          </TableHead>
          <TableHead>
            <div className="text-lg">Size (Acres)</div>
          </TableHead>
          <TableHead>
            <div className="text-lg">Occupancy</div>
          </TableHead>
          <TableHead className="flex justify-between">
            <div className="text-lg mt-2">Action</div>
            <Skeleton className="h-10 w-28 rounded-md" />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {skeletonRows.map((row) => (
          <TableRow key={row} className="">
            <TableCell>
              <Skeleton className="h-6 w-48" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-6 w-32" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-6 w-24" />
            </TableCell>
            <TableCell className="text-center">
              <Skeleton className="h-6 w-12 mx-auto" />
            </TableCell>
            <TableCell className="text-center">
              <Skeleton className="h-6 w-16 mx-auto" />
            </TableCell>
            <TableCell className="text-center">
              <Skeleton className="h-6 w-12 mx-auto" />
            </TableCell>
            <TableCell>
              <div className="flex justify-around gap-2">
                <div className="flex gap-4">
                  <Skeleton className="h-10 w-20" />
                </div>
                <Skeleton className="h-10 w-28" />
                <Skeleton className="h-10 w-20" />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

// Usage with React Suspense:
// <Suspense fallback={<SocietiesTableSkeleton />}>
//   <SocietiesTable data={data} />
// </Suspense>