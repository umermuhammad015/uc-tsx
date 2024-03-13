import { useSearchParams } from "next/navigation";

async function GetSearchedSocieties() {

    const searchParams = useSearchParams()
  
    const search = searchParams.get('search')
    
    // Get building information
    const societies = await prisma.societies.findUnique({
      where: {
        name: search
      },
    });
  
    return (societies)
  
  }