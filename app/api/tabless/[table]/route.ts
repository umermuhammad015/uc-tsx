
import { NextRequest} from "next/server";
import * as XLSX from "xlsx";
import { prisma } from "@/app/db"


export async function GET(
  request: NextRequest
) {

  const { searchParams } = new URL(request.url);

  // const file_format = searchParams.get("format");
  const search_string = searchParams.get("search_string") || undefined;
  const city = searchParams.get("city") || undefined;
  const building_status = searchParams.get("building_status") || undefined;
  const survey_from_date = searchParams.get("survey_from_date") || undefined;
  const survey_to_date = searchParams.get("survey_to_date") || undefined;

  console.log("search");
  console.log(search_string);


  try {


    const prisma_query = {
      where: {
        city: city === "All" ? undefined : city,
        survey_date: {
          gte: survey_from_date,
          lte: survey_to_date,
        },
        status: building_status === "All" ? undefined : building_status,
      },
    };



    const file = await prisma.buildings.findMany(prisma_query)

    const worksheet = XLSX.utils.json_to_sheet(file)
    const workbook = XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(workbook, worksheet, "MySheet")

    const buf = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" })

    return new Response(buf, {
        status: 200,
        headers: {
            'Content-Disposition': `attachment; filename="${"Building"}.xlsx"`,
            'Content-Type': 'application/vnd.ms-excel',
        }
    })

  } catch (e) {
    if (e instanceof Error) {
      console.error(e);
      return new Response(e.message, {
        status: 400,
      });
    }
  }
}
