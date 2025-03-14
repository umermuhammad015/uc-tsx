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

export function BuildingSkeleton() {
  // Create an array of skeleton rows
  const skeletonRows = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="mt-4">
      <Table className="table text-base">
        <TableHeader>
          <TableRow className="">
            <TableHead>
              <div className="text-lg">Building Names</div>
            </TableHead>
            <TableHead>
              <div className="text-lg">Location</div>
            </TableHead>
            <TableHead>
              <div className="text-lg">Building Type</div>
            </TableHead>
            <TableHead>
              <div className="text-lg">Plot Size</div>
            </TableHead>
            <TableHead>
              <div className="text-lg">Constructed Area</div>
            </TableHead>
            <TableHead className="flex justify-between">
              <div className="text-lg mt-2">Actions</div>
              <Skeleton className="h-10 w-28 rounded-md" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {skeletonRows.map((row) => (
            <TableRow key={row} className="">
              <TableCell>
                <Skeleton className="h-6 w-40" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-6 w-28" />
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-20" />
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Skeleton className="h-6 w-20 ml-auto" />
              </TableCell>
              <TableCell className="text-right">
                <Skeleton className="h-6 w-20 ml-auto" />
              </TableCell>
              <TableCell>
                <div className="flex justify-around">
                  <div className="flex gap-4">
                    <Skeleton className="h-10 w-20" />
                    <Skeleton className="h-10 w-40" />
                    <Skeleton className="h-10 w-20" />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-6 flex justify-center">
        <Skeleton className="h-10 w-96" />
      </div>
    </div>
  );
}

// You can use this with React Suspense like:
// <Suspense fallback={<BuildingTableSkeleton />}>
//   <BuildingTable data={data} />
// </Suspense>