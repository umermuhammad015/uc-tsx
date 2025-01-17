"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"
import FetchBuildingChart from "./fetchBuildingChart"
// const chartData = [
//     { month: "January", desktop: 186, mobile: 80 },
//     { month: "February", desktop: 305, mobile: 200 },
//     { month: "March", desktop: 237, mobile: 120 },
//     { month: "April", desktop: 73, mobile: 190 },
//     { month: "May", desktop: 209, mobile: 130 },
//     { month: "June", desktop: 214, mobile: 140 },
// ]

const chartConfig = {
    count: {
        label: "Count",
        color: "hsl(var(--chart-1))",
        
    },
    
} satisfies ChartConfig

// Define the type for the chart data
type ChartDataItem = {
    city: string;
    count: number;
  };

export default function BuildingChart() {

    const [chartData, setChartData] = useState<ChartDataItem[]>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await FetchBuildingChart();
                console.log("FetchBuildingChart Data")
                console.log(response)
                setChartData(response);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <Card>
            <CardHeader>
                <CardTitle>City Counts</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="city"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 10)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar dataKey="count" fill="var(--color-count)" radius={4} />
                        {/* <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} /> */}
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    
                </div>
            </CardFooter>
        </Card>
    )
}
