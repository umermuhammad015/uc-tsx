async function GetSearchedBuildings() {

    const searchParams = useSearchParams()
  
    const search = searchParams.get('search')
    
    // Get building information
    const building = await prisma.buildings.findUnique({
      where: {
        name: search as string
      },
    });
  
    return (building)
  
  }