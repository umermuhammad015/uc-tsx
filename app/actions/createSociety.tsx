"use server";

import { redirect } from "next/navigation";
import prisma from "../db";

export default async function createSociety(data: FormData) {
  
    // const societies_survey_date = new Date(data.get("societies-survey-date")?.valueOf() as string);
    const societies_survey_date = (new Date(data.get("societies-survey-date")?.valueOf() as string)).toISOString().substring(0,10);
  
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
  
    const societies_grade = data.get("societies-grade")?.valueOf();
    console.log("🚀 ~ createsocieties ~ societies_grade:", societies_grade)
  
    const societies_occupancy = data.get("societies-occupancy")?.valueOf();
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
  
    const total_plots_commercial = parseInt(data.get("total-plots-commercial")?.valueOf() as string);
    console.log("🚀 ~ createsocieties ~ total_plots_commercial:", total_plots_commercial)
  
    const plot_sizes_commercial = parseInt(data.get("plot-sizes-commercial")?.valueOf() as string);
    console.log("🚀 ~ createsocieties ~ plot_sizes_commercial:", plot_sizes_commercial)
  
    const societies_total_apartments = parseInt(data.get("societies-total-apartments")?.valueOf() as string);
    console.log("🚀 ~ createsocieties ~ societies_total_apartments:", societies_total_apartments)
  
    const societies_apartment_size = parseInt(data.get("societies-apartment-size")?.valueOf() as string);
    console.log("🚀 ~ createsocieties ~ societies_apartment_size:", societies_apartment_size)
  
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
  
    const apartments_price = parseInt(data.get("apartments-price")?.valueOf() as string);
    console.log("🚀 ~ createsocieties ~ apartments_price:", apartments_price)
  
    const apartments_monthly_rent = parseInt(data.get("apartments-monthly-rent")?.valueOf() as string);
    console.log("🚀 ~ createsocieties ~ apartments_monthly_rent:", apartments_monthly_rent)
  
    const payment_terms = data.get("payment-terms")?.valueOf();
    console.log("🚀 ~ createsocieties ~ payment_terms:", payment_terms)
  
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
  
    const features_type_gated_community = data.get("features-type-gated-community")?.valueOf();
    console.log("🚀 ~ createsocieties ~ features_type_gated_community:", features_type_gated_community)
  
    const utilities_type_underground_electrification = data.get("utilities-type-underground-electrification")?.valueOf();
    console.log("🚀 ~ createsocieties ~ utilities_type_underground_electrification:", utilities_type_underground_electrification)
  
    const utilities_type_gas = data.get("utilities-type-gas")?.valueOf();
    console.log("🚀 ~ createsocieties ~ utilities_type_gas:", utilities_type_gas)
  
    const utilities_type_water = data.get("utilities-type-water")?.valueOf();
    console.log("🚀 ~ createsocieties ~ utilities_type_water:", utilities_type_water)
  
    const utilities_type_security = data.get("utilities-type-security")?.valueOf();
    console.log("🚀 ~ createsocieties ~ utilities_type_security:", utilities_type_security)
  
    const developer_name = data.get("developer-name")?.valueOf();
    console.log("🚀 ~ createsocieties ~ developer_name:", developer_name)
  
    const contact_no = data.get("contact-no")?.valueOf();
    console.log("🚀 ~ createsocieties ~ contact_no:", contact_no)
  
    const societies_survery_remarks = data.get("societies-survery-remarks")?.valueOf();
    console.log("🚀 ~ createsocieties ~ societies_survery_remarks:", societies_survery_remarks)
  
  
  
  
  
    // if (typeof name !== "string" || name.length === 0) {
    //   throw new Error("Invalid name");
    // }
  
    // if(typeof city !== "string" || city.length === 0){
    //     throw new Error ("Invalid city")
    // }
  
    await prisma.societies.create({
      data: {
        survey_date: societies_survey_date,
        city: societies_city as string,
        type: societies_project_type as string,
        name: soceity_project_name as string,
        zone: societies_zone as string,
        address: societies_address as string,
        blocks: societies_blocks as string,
        grade: societies_grade as string,
        occupancy: societies_occupancy as string,
        area: societies_area as string,
        population: societies_population,
        launch_year: societies_launch_year,
        total_plots_residential: total_plots_residential,
        plot_sizes_residential: plot_sizes_residential,
        total_plots_commercial: total_plots_commercial,
        plot_sizes_commercial: plot_sizes_commercial,
        total_apartments: societies_total_apartments,
        societies_apartment_size: societies_apartment_size,
        plot_size: societies_plot_size,
        plot_price: societies_plot_price,
        vilas_size: vilas_size,
        vilas_price: vilas_price,
        vilas_monthly_rent: vilas_monthly_rent,
        commercial_plot_size: commercial_plot_size,
        commercial_plot_price: commercial_plot_price,
        apartment_size: apartment_size,
        apartments_price: apartments_price,
        apartments_monthly_rent: apartments_monthly_rent,
        payment_terms: payment_terms as string,
        features_type_parks: features_type_parks as string,
        features_type_school: features_type_school as string,
        features_type_university: features_type_university as string,
        features_type_hospital: features_type_hospital as string,
        features_type_commercial_market: features_type_commercial_market as string,
        features_type_zoo: features_type_zoo as string,
        features_type_food_arena: features_type_food_arena as string,
        features_type_gated_community: features_type_gated_community as string,
        utilities_type_underground_electrification: utilities_type_underground_electrification as string,
        utilities_type_gas: utilities_type_gas as string,
        utilities_type_water: utilities_type_water as string,
        utilities_type_security: utilities_type_security as string,
        developer_name: developer_name as string,
        contact_no: contact_no as string,
        survery_remarks: societies_survery_remarks as string
  
      },
    });
  
    // console.log("Hi")
  
    redirect("/societies");
  }