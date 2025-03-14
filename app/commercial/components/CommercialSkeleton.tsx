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

export function CommercialSkeleton() {
  // Create an array of skeleton rows
  const skeletonRows = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="mt-4">
      <Table className="table text-base">
        <TableHeader>
          <TableRow className="">
            <TableHead>
              <div className="text-lg">Commercial Zone Name</div>
            </TableHead>
            <TableHead>
              <div className="text-lg">Location</div>
            </TableHead>
            <TableHead>
              <div className="text-lg">Grade</div>
            </TableHead>
            <TableHead>
              <div className="text-lg">Area (Acres)</div>
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
                <Skeleton className="h-6 w-16" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-6 w-20" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-6 w-16" />
              </TableCell>
              <TableCell>
                <div className="flex">
                  <div className="flex gap-4">
                    <Skeleton className="h-10 w-20" />
                    <Skeleton className="h-10 w-28" />
                    <Skeleton className="h-10 w-20" />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      {/* Pagination skeleton */}
      <div className="mt-6 flex justify-center">
        <Skeleton className="h-10 w-96" />
      </div>
    </div>
  );
}

// Usage with React Suspense:
// <Suspense fallback={<CommercialZoneTableSkeleton />}>
//   <CommercialZoneTable data={data} />
// </Suspense>