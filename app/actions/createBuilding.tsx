"use server"

import prisma from "../db";
import { redirect } from "next/navigation";

export default async function createBuilding(data: FormData) {


  const name = data.get("building-name")?.valueOf();

  const city = data.get("building-city")?.valueOf();

  const status = data.get("building-status")?.valueOf();

  const is_centrally_air_conditioned = data
    .get("building-facility-centrally-air-conditioned")
    ?.valueOf();
  const has_security = data.get("building-facility-security")?.valueOf();
  const has_escalators = data.get("building-facility-escalators")?.valueOf();
  const has_food_court = data.get("building-facility-food-court")?.valueOf();

  const has_entertainment_area = data
    .get("building-facility-entertainment-area")
    ?.valueOf();

  const has_none = data.get("building-facility-none")?.valueOf();

  const type_mixed_use = data.get("building-type-mixed-use")?.valueOf();

  const type_retail = data.get("building-type-retail")?.valueOf();

  const type_offices = data.get("building-type-offices")?.valueOf();

  const type_apartments = data.get("building-type-apartments")?.valueOf();

  const type_other = data.get("building-type-other")?.valueOf();

  const zone = data.get("zone")?.valueOf();

  const area = data.get("area")?.valueOf();

  const address = data.get("address")?.valueOf();

  const plot_size = parseInt(data.get("plot-size")?.valueOf() as string);

  const construction_area = parseInt(data.get("construction-area")?.valueOf() as string);

  const construction_year = parseInt(data.get("construction-year")?.valueOf() as string);

  const launch_year = parseInt(data.get("launch-year")?.valueOf() as string);

  const builder_name = data.get("builder-name")?.valueOf();

  const rank = data.get("building-rank")?.valueOf();

  const total_floors = parseInt(data.get("total-floors")?.valueOf() as string);

  const parking_floors = parseInt(data.get("parking-floors")?.valueOf() as string);

  const apartment_floors_count = parseInt(data.get("apartment-floors-count")?.valueOf() as string);

  const apartments_count = parseInt(data.get("apartments-count")?.valueOf() as string);

  const apartments_studio = data.get("apartments-studio")?.valueOf();

  const apartments_has_type_1_bed = data.get("apartments-has-type-1-bed")?.valueOf();

  const apartments_has_type_2_bed = data
    .get("apartments-has-type-2-bed")
    ?.valueOf();

  const apartments_has_type_3_bed = data
    .get("apartments-has-type-3-bed")
    ?.valueOf();

  const apartments_has_type_4_bed = data
    .get("apartments-has-type-4-bed")
    ?.valueOf();

  const apartments_has_type_5_bed = data
    .get("apartments-has-type-5-bed")
    ?.valueOf();

  const apartments_has_type_duplex = data
    .get("apartments-has-type-duplex")
    ?.valueOf();

  const has_furnished = data
    .get("has-furnished")
    ?.valueOf();

  const has_semi_furnished = data
    .get("has-semi-furnished")
    ?.valueOf();

  const has_service_apartments = data
    .get("has-service-apartments")
    ?.valueOf();

  const has_hotel_suites_apartments = data
    .get("has-hotel-suites-apartments")
    ?.valueOf();

  const apartment_has_type_penthouse = data
    .get("apartment-has-type-penthouse")
    ?.valueOf();

  const apartment_has_servant_quarter = data
    .get("apartment-has-servant-quarter")
    ?.valueOf();

  const apartments_maintenance_fee = parseInt(data
    .get("apartments-maintenance-fee")
    ?.valueOf() as string);

  const retail_floors_count = parseInt(data.get("retail-floors-count")?.valueOf() as string);

  const retail_floors_shops_count = parseInt(data
    .get("retail-floors-shops-count")
    ?.valueOf() as string);

  const retail_floors_maintenance_fee = parseInt(data.get("retail-floors-maintenance-fee")?.valueOf() as string);
  const retail_floors_brands = data.get("retail-floors-brands-type")?.valueOf();

  const has_fashion_health = data.get("has-fashion-health")?.valueOf();

  const has_electronics_appliancecs = data.get("has-electronics-appliancecs")?.valueOf();

  const has_home_living = data.get("has-home-living")?.valueOf();

  const has_restaurants_courts = data.get("has-restaurants-courts")?.valueOf();

  const has_bakery_ice = data.get("has-bakery-ice")?.valueOf();

  const has_grocery_supermarkets = data.get("has-grocery-supermarkets")?.valueOf();

  const has_banks_atm = data.get("has-banks-atm")?.valueOf();

  const has_real_estate = data.get("has-real-estate")?.valueOf();

  const has_labs_pharmacies = data.get("has-labs-pharmacies")?.valueOf();

  const has_play_fitness = data.get("has-play-fitness")?.valueOf();
  
  const has_swimming_pool = data.get("has-swimming-pool")?.valueOf();

  const has_cinema = data.get("has-cinema")?.valueOf();

  const office_floors_count = parseInt(data.get("office-floors-count")?.valueOf() as string);

  const offices_count = parseInt(data.get("offices-count")?.valueOf() as string);

  const office_maintenance_fee = parseInt(data.get("office-maintenance-fee")?.valueOf() as string);

  // const survey_date = new Date(data.get("survey-date")?.valueOf() as string);
  const survey_date = (new Date(data.get("survey-date")?.valueOf() as string)).toISOString().substring(0, 10);


  const surveyor_name = data.get("surveyor-name")?.valueOf();

  const building_survery_remarks = data
    .get("building-survery-remarks")
    ?.valueOf();

  const building_draft = data.get("building-draft")?.valueOf();



  if (typeof name !== "string" || name.length === 0) {
    throw new Error("Invalid name");
  }


  // if(typeof city !== "string" || city.length === 0){
  //     throw new Error ("Invalid city")
  // }

  const created_building :any = await prisma.buildings.create({
    data: {
      name: name,
      city: city as string,
      status: status as string,
      is_centrally_air_conditioned: is_centrally_air_conditioned as string,
      has_security: has_security as string,
      has_escalators: has_escalators as string,
      has_food_court: has_food_court as string,
      has_entertainment_area: has_entertainment_area as string,
      has_none: has_none as string,
      type_mixed_use: type_mixed_use as string,
      type_retail: type_retail as string,
      type_offices: type_offices as string,
      type_apartments: type_apartments as string,
      type_other: type_other as string,
      zone: zone as string,
      area: area as string,
      address: address as string,
      plot_size: plot_size,
      construction_area: construction_area,
      construction_year: construction_year,
      launch_year: launch_year,
      builder_name: builder_name as string,
      building_rank: rank as string,
      total_floors: total_floors,
      parking_floors: parking_floors,
      apartment_floors: apartment_floors_count,
      apartments_count: apartments_count,
      apartments_studio: apartments_studio as string,
      apartments_has_type_1_bed: apartments_has_type_1_bed as string,
      apartments_has_type_2_bed: apartments_has_type_2_bed as string,
      apartments_has_type_3_bed: apartments_has_type_3_bed as string,
      apartments_has_type_4_bed: apartments_has_type_4_bed as string,
      apartments_has_type_5_bed: apartments_has_type_5_bed as string,
      apartments_has_type_duplex: apartments_has_type_duplex as string,
      apartments_has_type_penthouse: apartment_has_type_penthouse as string,
      has_furnished: has_furnished as string,
      has_semi_furnished: has_semi_furnished as string,
      has_service_apartments: has_service_apartments as string,
      has_hotel_suites_apartments: has_hotel_suites_apartments as string,
      apartments_has_servant_quarter: apartment_has_servant_quarter as string,
      apartments_maintenance_fee: apartments_maintenance_fee,
      retail_floors_count: retail_floors_count,
      retail_floors_shops_count: retail_floors_shops_count,
      retail_floors_maintenance_fee: retail_floors_maintenance_fee,
      retail_floors_brands: retail_floors_brands as string,
      has_fashion_health: has_fashion_health as string,
      has_electronics_appliancecs: has_electronics_appliancecs as string,
      has_home_living: has_home_living as string,
      has_restaurants_courts: has_restaurants_courts as string,
      has_bakery_ice: has_bakery_ice as string,
      has_grocery_supermarkets: has_grocery_supermarkets as string,
      has_banks_atm: has_banks_atm as string,
      has_real_estate: has_real_estate as string,
      has_labs_pharmacies: has_labs_pharmacies as string,
      has_play_fitness: has_play_fitness as string,
      has_swimming_pool: has_swimming_pool as string,
      has_cinema: has_cinema as string,
      office_floors_count: office_floors_count,
      offices_count: offices_count,
      office_maintenance_fee: office_maintenance_fee,
      survey_date: survey_date,
      surveyor_name: surveyor_name as string,
      building_survery_remarks: building_survery_remarks as string,
      building_draft: building_draft as string,
    },
  });

  // console.log("created_building")
  // console.log(created_building)

  created_building.building_id = created_building.id; // Copy the value of 'id' to 'building_id'
  delete created_building.id; // Remove the old 'id' key

  // console.log(created_building)

  const created_building_copy = await prisma.buildings_history.create({
    data: created_building
  })

  // console.log("created building ID")
  // console.log(created_building.building_id)

  
  redirect("/buildings/" + created_building.building_id);
}