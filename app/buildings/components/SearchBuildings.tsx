async function getSearchedBuildings() {

    const searchParams = useSearchParams()
  
    const search = searchParams.get('search')
    
    // Get building information
    const building = await prisma.buildings.findUnique({
      where: {
        name: search
      },
    });
  
    return (building)
  
  }