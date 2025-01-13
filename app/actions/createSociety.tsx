"use server";

import { redirect } from "next/navigation";
import prisma from "../db";

export default async function createSociety(data: FormData) {

  // const societies_survey_date = new Date(data.get("societies-survey-date")?.valueOf() as string);
  const societies_survey_date = (new Date(data.get("societies-survey-date")?.valueOf() as string)).toISOString().substring(0, 10);

  console.log(societies_survey_date)

  const societies_city = data.get("societies-city")?.valueOf();
  console.log(societies_city)
  const societies_project_type = data.get("societies-project-type")?.valueOf();
  console.log("🚀 ~ createsocieties ~ societies_project_type:", societies_project_type)

  const soceity_project_name = data.get("soceity-project-name")?.valueOf();
  console.log("🚀 ~ createsocieties ~ soceity_project_name:", soceity_project_name)

  const societies_zone = data.get("societies-zone")?.valueOf();
  console.log("🚀 ~ createsocieties ~ societies_zone:", societies_zone)

  const societies_address = data.get("societies-address")?.valueOf();
  console.log("🚀 ~ createsocieties ~ societies_address:", societies_address)

  const societies_blocks = data.get("societies-blocks")?.valueOf();
  console.log("🚀 ~ createsocieties ~ societies_blocks:", societies_blocks)

  const societies_phase = data.get("societies-phase")?.valueOf();
  console.log("🚀 ~ createsocieties ~ societies_blocks:", societies_blocks)

  const societies_grade = data.get("societies-grade")?.valueOf();
  console.log("🚀 ~ createsocieties ~ societies_grade:", societies_grade)

  const societies_occupancy = data.get("societies-occupancy")?.valueOf() as string;
  console.log("🚀 ~ createsocieties ~ societies_occupancy:", societies_occupancy)

  const societies_area = data.get("societies-area")?.valueOf();
  console.log("🚀 ~ createsocieties ~ societies_area:", societies_area)

  const societies_population = parseInt(data.get("societies-population")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ societies_population:", societies_population)

  const societies_launch_year = parseInt(data.get("societies-launch-year")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ societies_launch_year:", societies_launch_year)

  const total_plots_residential = parseInt(data.get("total-plots-residential")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ total_plots_residential:", total_plots_residential)

  const plot_sizes_residential = parseInt(data.get("plot-sizes-residential")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ plot_sizes_residential:", plot_sizes_residential)

  const plot_sizes_residential_87_5 = data.get("plot-sizes-residential-87-5")?.valueOf();
  console.log("🚀 ~ createsocieties ~ plot_sizes_residential_87_5:", plot_sizes_residential_87_5)

  const plot_sizes_residential_125 = data.get("plot-sizes-residential-125")?.valueOf();
  console.log("🚀 ~ createsocieties ~ plot_sizes_residential_125:", plot_sizes_residential_125)

  const plot_sizes_residential_200 = data.get("plot-sizes-residential-200")?.valueOf();
  console.log("🚀 ~ createsocieties ~ plot_sizes_residential_200:", plot_sizes_residential_200)

  const plot_sizes_residential_250 = data.get("plot-sizes-residential-250")?.valueOf();
  console.log("🚀 ~ createsocieties ~ plot_sizes_residential_250:", plot_sizes_residential_250)

  const plot_sizes_residential_300 = data.get("plot-sizes-residential-300")?.valueOf();
  console.log("🚀 ~ createsocieties ~ plot_sizes_residential_300:", plot_sizes_residential_300)

  const plot_sizes_residential_400 = data.get("plot-sizes-residential-400")?.valueOf();
  console.log("🚀 ~ createsocieties ~ plot_sizes_residential_400:", plot_sizes_residential_400)

  const plot_sizes_residential_500 = data.get("plot-sizes-residential-500")?.valueOf();
  console.log("🚀 ~ createsocieties ~ plot_sizes_residential_500:", plot_sizes_residential_500)

  const plot_sizes_residential_600 = data.get("plot-sizes-residential-600")?.valueOf();
  console.log("🚀 ~ createsocieties ~ plot_sizes_residential_600:", plot_sizes_residential_600)

  const plot_sizes_residential_800 = data.get("plot-sizes-residential-800")?.valueOf();
  console.log("🚀 ~ createsocieties ~ plot_sizes_residential_800:", plot_sizes_residential_800)

  const plot_sizes_residential_1000 = data.get("plot-sizes-residential-1000")?.valueOf();
  console.log("🚀 ~ createsocieties ~ plot_sizes_residential_1000:", plot_sizes_residential_1000)

  const plot_sizes_residential_2000 = data.get("plot-sizes-residential-2000")?.valueOf();
  console.log("🚀 ~ createsocieties ~ plot_sizes_residential_2000:", plot_sizes_residential_2000)

  const total_plots_commercial = parseInt(data.get("total-plots-commercial")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ total_plots_commercial:", total_plots_commercial)

  const plot_sizes_commercial = parseInt(data.get("plot-sizes-commercial")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ plot_sizes_commercial:", plot_sizes_commercial)

  const plot_sizes_commercial_87_5 = data.get("plot-sizes-commercial-87-5")?.valueOf();
  console.log("🚀 ~ createsocieties ~ plot_sizes_commercial_87_5:", plot_sizes_commercial_87_5)

  const plot_sizes_commercial_100 = data.get("plot-sizes-commercial-100")?.valueOf();
  console.log("🚀 ~ createsocieties ~ plot_sizes_commercial_100:", plot_sizes_commercial_100)

  const plot_sizes_commercial_125 = data.get("plot-sizes-commercial-125")?.valueOf();
  console.log("🚀 ~ createsocieties ~ plot_sizes_commercial_125:", plot_sizes_commercial_125)

  const plot_sizes_commercial_200 = data.get("plot-sizes-commercial-200")?.valueOf();
  console.log("🚀 ~ createsocieties ~ plot_sizes_commercial_200:", plot_sizes_commercial_200)

  const plot_sizes_commercial_250 = data.get("plot-sizes-commercial-250")?.valueOf();
  console.log("🚀 ~ createsocieties ~ plot_sizes_commercial_250:", plot_sizes_commercial_250)

  const plot_sizes_commercial_500 = data.get("plot-sizes-commercial-500")?.valueOf();
  console.log("🚀 ~ createsocieties ~ plot_sizes_commercial_500:", plot_sizes_commercial_500)

  const plot_sizes_commercial_1000 = data.get("plot-sizes-commercial-1000")?.valueOf();
  console.log("🚀 ~ createsocieties ~ plot_sizes_commercial_1000:", plot_sizes_commercial_1000)

  const plot_sizes_commercial_2000 = data.get("plot-sizes-commercial-2000")?.valueOf();
  console.log("🚀 ~ createsocieties ~ plot_sizes_commercial_2000:", plot_sizes_commercial_2000)

  const societies_total_apartments = parseInt(data.get("societies-total-apartments")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ societies_total_apartments:", societies_total_apartments)

  const societies_apartment_size = parseInt(data.get("societies-apartment-size")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ societies_apartment_size:", societies_apartment_size)

  const apartment_studio = data.get("apartment-studio")?.valueOf();
  console.log("🚀 ~ createsocieties ~ apartment_studio:", apartment_studio)

  const apartment_one_bad = data.get("apartment-one-bad")?.valueOf();
  console.log("🚀 ~ createsocieties ~ apartment_one_bad:", apartment_one_bad)

  const apartment_two_bad = data.get("apartment-two-bad")?.valueOf();
  console.log("🚀 ~ createsocieties ~ apartment_two_bad:", apartment_two_bad)

  const apartment_three_bad = data.get("apartment-three-bad")?.valueOf();
  console.log("🚀 ~ createsocieties ~ apartment_three_bad:", apartment_three_bad)

  const apartment_four_bad = data.get("apartment-four-bad")?.valueOf();
  console.log("🚀 ~ createsocieties ~ apartment_four_bad:", apartment_four_bad)

  const apartment_five_bad = data.get("apartment-five-bad")?.valueOf();
  console.log("🚀 ~ createsocieties ~ apartment_five_bad:", apartment_five_bad)

  const apartment_penthouse = data.get("apartment-penthouse")?.valueOf();
  console.log("🚀 ~ createsocieties ~ apartment_penthouse:", apartment_penthouse)

  const apartment_duplex = data.get("apartment-duplex")?.valueOf();
  console.log("🚀 ~ createsocieties ~ apartment_duplex:", apartment_duplex)

  const societies_plot_size = parseInt(data.get("societies-plot-size")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ societies_plot_size:", societies_plot_size)

  const societies_plot_price = parseInt(data.get("societies-plot-price")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ societies_plot_price:", societies_plot_price)

  const vilas_size = parseInt(data.get("vilas-size")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ vilas_size:", vilas_size)

  const vilas_price = parseInt(data.get("vilas-price")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ vilas_price:", vilas_price)

  const vilas_monthly_rent = parseInt(data.get("vilas-monthly-rent")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ vilas_monthly_rent:", vilas_monthly_rent)

  const commercial_plot_size = parseInt(data.get("commercial-plot-size")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ commercial_plot_size:", commercial_plot_size)

  const commercial_plot_price = parseInt(data.get("commercial-plot-price")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ commercial_plot_price:", commercial_plot_price)

  const apartment_size = parseInt(data.get("apartment-size")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ apartment_size:", apartment_size)

  const min_apartments_price = parseInt(data.get("min-apartments-price")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ min_apartments_price:", min_apartments_price)

  const max_apartments_price = parseInt(data.get("max-apartments-price")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ max_apartments_price:", max_apartments_price)

  const min_apartments_monthly_rent = parseInt(data.get("min-apartments-monthly-rent")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ min_apartments_monthly_rent:", min_apartments_monthly_rent)

  const max_apartments_monthly_rent = parseInt(data.get("max-apartments-monthly-rent")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ max_apartments_monthly_rent:", max_apartments_monthly_rent)

  const payment_terms = data.get("payment-terms")?.valueOf();
  console.log("🚀 ~ createsocieties ~ payment_terms:", payment_terms)

  const instalment_total_amount = parseInt(data.get("instalment-total-amount")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ instalment_total_amount:", instalment_total_amount)

  const instalment_down_payment = parseInt(data.get("instalment-down-payment")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ instalment_down_payment:", instalment_down_payment)

  const instalment_possession_Amount = parseInt(data.get("instalment-possession-Amount")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ instalment_possession_Amount:", instalment_possession_Amount)

  const instalment_period = parseInt(data.get("instalment-period")?.valueOf() as string);
  console.log("🚀 ~ createsocieties ~ instalment_period:", instalment_period)

  const features_type_parks = data.get("features-type-parks")?.valueOf();
  console.log("🚀 ~ createsocieties ~ features_type_parks:", features_type_parks)

  const features_type_school = data.get("features-type-school")?.valueOf();
  console.log("🚀 ~ createsocieties ~ features_type_school:", features_type_school)

  const features_type_university = data.get("features-type-university")?.valueOf();
  console.log("🚀 ~ createsocieties ~ features_type_university:", features_type_university)

  const features_type_hospital = data.get("features-type-hospital")?.valueOf();
  console.log("🚀 ~ createsocieties ~ features_type_hospital:", features_type_hospital)

  const features_type_commercial_market = data.get("features-type-commercial-market")?.valueOf();
  console.log("🚀 ~ createsocieties ~ features_type_commercial_market:", features_type_commercial_market)

  const features_type_zoo = data.get("features-type-zoo")?.valueOf();
  console.log("🚀 ~ createsocieties ~ features_type_zoo:", features_type_zoo)

  const features_type_food_arena = data.get("features-type-food-arena")?.valueOf();
  console.log("🚀 ~ createsocieties ~ features_type_food_arena:", features_type_food_arena)

  const features_type_college = data.get("features-type-college")?.valueOf();
  console.log("🚀 ~ createsocieties ~ features_type_college:", features_type_college)

  const features_type_graveyard = data.get("features-type-graveyard")?.valueOf();
  console.log("🚀 ~ createsocieties ~ features_type_graveyard:", features_type_graveyard)

  const features_type_masjid = data.get("features-type-masjid")?.valueOf();
  console.log("🚀 ~ createsocieties ~ features_type_masjid:", features_type_masjid)

  const features_type_community_club = data.get("features-type-community-club")?.valueOf();
  console.log("🚀 ~ createsocieties ~ features_type_community_club:", features_type_community_club)

  const features_type_grid_station = data.get("features-type-grid-station")?.valueOf();
  console.log("🚀 ~ createsocieties ~ features_type_grid_station:", features_type_grid_station)

  const features_type_gated_community = data.get("features-type-gated-community")?.valueOf();
  console.log("🚀 ~ createsocieties ~ features_type_gated_community:", features_type_gated_community)

  const utilities_type_underground_electrification = data.get("utilities-type-underground-electrification")?.valueOf();
  console.log("🚀 ~ createsocieties ~ utilities_type_underground_electrification:", utilities_type_underground_electrification)

  const utilities_type_gas = data.get("utilities-type-gas")?.valueOf();
  console.log("🚀 ~ createsocieties ~ utilities_type_gas:", utilities_type_gas)

  const utilities_type_water = data.get("utilities-type-water")?.valueOf();
  console.log("🚀 ~ createsocieties ~ utilities_type_water:", utilities_type_water)

  const utilities_type_utilities_electricity = data.get("utilities-type-utilities-electricity")?.valueOf();
  console.log("🚀 ~ createsocieties ~ utilities_type_utilities_electricity:", utilities_type_utilities_electricity)

  const utilities_type_drainage = data.get("utilities-type-drainage")?.valueOf();
  console.log("🚀 ~ createsocieties ~ utilities_type_drainage:", utilities_type_drainage)

  const developer_name = data.get("developer-name")?.valueOf();
  console.log("🚀 ~ createsocieties ~ developer_name:", developer_name)

  const contact_no = data.get("contact-no")?.valueOf();
  console.log("🚀 ~ createsocieties ~ contact_no:", contact_no)

  const societies_survery_remarks = data.get("societies-survery-remarks")?.valueOf();
  console.log("🚀 ~ createsocieties ~ societies_survery_remarks:", societies_survery_remarks)

  const societies_draft = data.get("societies-draft")?.valueOf();





  // if (typeof name !== "string" || name.length === 0) {
  //   throw new Error("Invalid name");
  // }

  // if(typeof city !== "string" || city.length === 0){
  //     throw new Error ("Invalid city")
  // }

  const created_society: any = await prisma.societies.create({
    data: {
      survey_date: societies_survey_date,
      city: societies_city as string,
      type: societies_project_type as string,
      name: soceity_project_name as string,
      zone: societies_zone as string,
      address: societies_address as string,
      blocks: societies_blocks as number,
      phase: societies_phase as number,
      grade: societies_grade as string,
      occupancy: societies_occupancy as string,
      area: societies_area as number,
      population: societies_population,
      launch_year: societies_launch_year,
      total_plots_residential: total_plots_residential,
      plot_sizes_residential: plot_sizes_residential,
      plot_sizes_residential_87_5: plot_sizes_residential_87_5 as string,
      plot_sizes_residential_125: plot_sizes_residential_125 as string,
      plot_sizes_residential_200: plot_sizes_residential_200 as string,
      plot_sizes_residential_250: plot_sizes_residential_250 as string,
      plot_sizes_residential_300: plot_sizes_residential_300 as string,
      plot_sizes_residential_400: plot_sizes_residential_400 as string,
      plot_sizes_residential_500: plot_sizes_residential_500 as string,
      plot_sizes_residential_600: plot_sizes_residential_600 as string,
      plot_sizes_residential_800: plot_sizes_residential_800 as string,
      plot_sizes_residential_1000: plot_sizes_residential_1000 as string,
      plot_sizes_residential_2000: plot_sizes_residential_2000 as string,
      total_plots_commercial: total_plots_commercial,
      plot_sizes_commercial: plot_sizes_commercial,
      plot_sizes_commercial_87_5: plot_sizes_commercial_87_5 as string,
      plot_sizes_commercial_100: plot_sizes_commercial_100 as string,
      plot_sizes_commercial_125: plot_sizes_commercial_125 as string,
      plot_sizes_commercial_200: plot_sizes_commercial_200 as string,
      plot_sizes_commercial_250: plot_sizes_commercial_250 as string,
      plot_sizes_commercial_500: plot_sizes_commercial_500 as string,
      plot_sizes_commercial_1000: plot_sizes_commercial_1000 as string,
      plot_sizes_commercial_2000: plot_sizes_commercial_2000 as string,
      total_apartments: societies_total_apartments,
      societies_apartment_size: societies_apartment_size,
      apartment_studio: apartment_studio as string,
      apartment_one_bad: apartment_one_bad as string,
      apartment_two_bad: apartment_two_bad as string,
      apartment_three_bad: apartment_three_bad as string,
      apartment_four_bad: apartment_four_bad as string,
      apartment_five_bad: apartment_five_bad as string,
      apartment_penthouse: apartment_penthouse as string,
      apartment_duplex: apartment_duplex as string,
      plot_size: societies_plot_size,
      plot_price: societies_plot_price,
      vilas_size: vilas_size,
      vilas_price: vilas_price,
      vilas_monthly_rent: vilas_monthly_rent,
      commercial_plot_size: commercial_plot_size,
      commercial_plot_price: commercial_plot_price,
      apartment_size: apartment_size,
      min_apartments_price: min_apartments_price,
      max_apartments_price: max_apartments_price,
      min_apartments_monthly_rent: min_apartments_monthly_rent,
      max_apartments_monthly_rent: max_apartments_monthly_rent,
      payment_terms: payment_terms as string,
      instalment_total_amount: instalment_total_amount,
      instalment_down_payment: instalment_down_payment,
      instalment_possession_Amount: instalment_possession_Amount,
      instalment_period: instalment_period,
      features_type_parks: features_type_parks as string,
      features_type_school: features_type_school as string,
      features_type_university: features_type_university as string,
      features_type_hospital: features_type_hospital as string,
      features_type_commercial_market: features_type_commercial_market as string,
      features_type_zoo: features_type_zoo as string,
      features_type_college: features_type_college as string,
      features_type_graveyard: features_type_graveyard as string,
      features_type_masjid: features_type_masjid as string,
      features_type_community_club: features_type_community_club as string,
      features_type_grid_station: features_type_grid_station as string,
      features_type_food_arena: features_type_food_arena as string,
      features_type_gated_community: features_type_gated_community as string,
      utilities_type_underground_electrification: utilities_type_underground_electrification as string,
      utilities_type_gas: utilities_type_gas as string,
      utilities_type_water: utilities_type_water as string,
      utilities_type_utilities_electricity: utilities_type_utilities_electricity as string,
      utilities_type_drainage: utilities_type_drainage as string,
      developer_name: developer_name as string,
      contact_no: contact_no as number,
      survery_remarks: societies_survery_remarks as string,
      societies_draft: societies_draft as string,

    },
  });

  created_society.society_id = created_society.id; // Copy the value of 'id' to 'building_id'
  delete created_society.id; // Remove the old 'id' key

  // console.log(created_society)

  const created_society_copy = await prisma.societies_history.create({
    data: created_society
  })

  // console.log("created_society ID")
  // console.log(created_society.society_id)

  // console.log("created_society")
  // console.log(created_society)

  // redirect("/societies/" + created_society.id);
  // redirect("/societies");
  redirect("/societies/" + created_society.society_id);
}