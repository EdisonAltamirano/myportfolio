"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react";

const initialChartData = [
  { month: "January", views: 186 },
  { month: "February", views: 305 },
  { month: "March", views: 237 },
  { month: "April", views: 173 },
  { month: "May", views: 209 },
  { month: "June", views: 250 },
]

const chartConfig = {
  views: {
    label: "Page Views",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function AnalyticsChart() {
  const [isClient, setIsClient] = useState(false);
  const [chartData, setChartData] = useState(initialChartData);

  useEffect(() => {
    setIsClient(true);
    // Simulate fetching data or dynamic updates
    // For now, just using initial data, but you could update it here
    // Example:
    // const interval = setInterval(() => {
    //   setChartData(prevData => prevData.map(d => ({...d, views: d.views + Math.floor(Math.random() * 10) - 5 })));
    // }, 5000);
    // return () => clearInterval(interval);
  }, []);

  if (!isClient) {
    // Render a placeholder or nothing on the server to avoid hydration mismatch
    return <div className="h-[200px] w-full bg-muted rounded-lg animate-pulse" />;
  }
  
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Site Analytics</CardTitle>
        <CardDescription>Monthly Page Views (Mock Data)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart accessibilityLayer data={chartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                stroke="hsl(var(--muted-foreground))"
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                cursor={{ fill: 'hsl(var(--muted))', radius: 4 }}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="views" fill="var(--color-views)" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
