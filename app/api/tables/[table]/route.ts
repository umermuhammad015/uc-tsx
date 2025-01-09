// import { type NextRequest } from "next/server";
import { NextRequest, NextResponse } from "next/server";
import * as XLSX from "xlsx";
import { useSearchParams } from "next/navigation";

import prisma from "@/app/db";

// For loading example data
import { promises as fs } from "fs";
import { format } from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: { table: string } }
) {
  // Check auth & permission here
  console.log("helo");

  // const searchParams = request.nextUrl.searchParams;
  const { searchParams } = new URL(request.url);

  const file_format = searchParams.get("format");
  // const search_string = searchParams.get("search") || undefined;
  const city = searchParams.get("city") || undefined;
  const project_type = searchParams.get("project_type") || undefined;
  const society_grade = searchParams.get("society_grade") || undefined;
  const survey_from_date = searchParams.get("survey_from_date") || undefined;
  const survey_to_date = searchParams.get("survey_to_date") || undefined;

  // console.log("search");
  // console.log(search);
  // console.log(project_type)
  // console.log(file_format)

  try {
    // const { table } = params;

    // if (!table) throw new Error("Table name required");

    // Pseudo-code steps:
    // 1. GET all table names from db

    // 2. Find the table that matches the param

    // 3. If table name doesn't exist, throw error

    // 4. If it does exist, use the matching table name
    // for the proper case
    // const tableName = "Todos";

    //
    // Loading example data
    const file = await prisma.societies.findMany({
      where: {
        // OR: [
        //   {
        //     name: {
        //       contains: search_string,
        //       mode: "insensitive",
        //     },
        //   },
        //   {
        //     city: {
        //       contains: search_string,
        //       mode: "insensitive",
        //     },
        //   },
        // ],
        city: city as string,
        type: project_type as string,
        grade: society_grade as string,
        survey_date: {
          gte: survey_from_date,
          lte: survey_to_date,
        },
      },
    });

    // const prisma_query: any = {
    //   where: {
    //     OR: [
    //       {
    //         name: {
    //           contains: search_string,
    //           mode: "insensitive",
    //         },
    //       },
    //       {
    //         city: {
    //           contains: search_string,
    //           mode: "insensitive",
    //         },
    //       },
    //     ],
    //     // city: city === "" ? undefined : city,
    //     city: city === "All" ? undefined : city,
    //     survey_date: {
    //       gte: survey_from_date,
    //       lte: survey_to_date,
    //     },
    //     developer_name: developer === "" ? undefined : developer,
    //     grade: society_grade === "All" ? undefined : society_grade,
    //     type: project_type === "All" ? undefined : project_type,
    //   },
    //   orderBy: {
    //     name: "asc",
    //   },
    // };

    // const jsonTableData = JSON.parse(file);

    // console.log(jsonTableData)
    // console.log(file)

    const worksheet = XLSX.utils.json_to_sheet(file);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "MySheet");

    const buf = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    return new Response(buf, {
      status: 200,
      headers: {
        "Content-Disposition": `attachment; filename="${"Societies"}.xlsx"`,
        "Content-Type": "application/vnd.ms-excel",
      },
    });

    // const worksheet = XLSX.utils.json_to_sheet(file);

    // const csv = XLSX.utils.sheet_to_csv(worksheet, {
    //   forceQuotes: true,
    // });

    // return new Response(csv, {
    //   status: 200,
    //   headers: {
    //     "Content-Disposition": `attachment; filename="Socities.csv"`,
    //     "Content-Type": "text/csv",
    //   },
    // });

    //     const jsonTableData = JSON.parse(file);

    //     console.log(jsonTableData);

    // const worksheet = XLSX.utils.json_to_sheet(jsonTableData);

    // if (format === "csv") {
    //   const csv = XLSX.utils.sheet_to_csv(worksheet, {
    //     forceQuotes: true,
    //   });

    //   return new Response(csv, {
    //     status: 200,
    //     headers: {
    //       "Content-Disposition": `attachment; filename="${tableName}.csv"`,
    //       "Content-Type": "text/csv",
    //     },
    //   });
    // } else if (format === "txt") {
    //   // tab-separated values

    //   const txt = XLSX.utils.sheet_to_txt(worksheet, {
    //     forceQuotes: true,
    //   });

    //   return new Response(txt, {
    //     status: 200,
    //     headers: {
    //       "Content-Disposition": `attachment; filename="${tableName}.txt"`,
    //       "Content-Type": "text/csv",
    //     },
    //   });
    // } else if (format === "xlsx") {
    //   const workbook = XLSX.utils.book_new();

    //   XLSX.utils.book_append_sheet(workbook, worksheet, "MySheet");

    //   const buf = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    //   return new Response(buf, {
    //     status: 200,
    //     headers: {
    //       "Content-Disposition": `attachment; filename="${tableName}.xlsx"`,
    //       "Content-Type": "application/vnd.ms-excel",
    //     },
    //   });
    // } else if (format === "json") {
    //   return Response.json(jsonTableData);
    // } else {
    //   const html = XLSX.utils.sheet_to_html(worksheet);

    //   return new Response(html, {
    //     status: 200,
    //     headers: {
    //       "Content-Type": "text/html",
    //     },
    //   });
    // }
  } catch (e) {
    if (e instanceof Error) {
      console.error(e);
      return new Response(e.message, {
        status: 400,
      });
    }
  }
}
