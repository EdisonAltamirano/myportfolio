"use client";

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  level: number;
}

interface D3SkillChartProps {
  skills: Skill[];
  className?: string;
}

export function D3SkillChart({ skills, className }: D3SkillChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set up dimensions
    const margin = { top: 20, right: 50, bottom: 40, left: 120 }; // Increased right margin for labels
    const containerWidth = svgRef.current.parentElement?.clientWidth || 600;
    const width = containerWidth - margin.left - margin.right;
    const height = Math.max(400, skills.length * 50); // Dynamic height based on number of skills

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr("width", "100%")
      .attr("height", height + margin.top + margin.bottom)
      .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create scales
    const y = d3.scaleBand()
      .domain(skills.map(d => d.name))
      .range([0, height])
      .padding(0.3);

    const x = d3.scaleLinear()
      .domain([0, 100])
      .range([0, width]);

    // Add background grid lines
    const gridLines = [0, 20, 40, 60, 80, 100];
    gridLines.forEach(value => {
      svg.append("line")
        .attr("x1", x(value))
        .attr("y1", 0)
        .attr("x2", x(value))
        .attr("y2", height)
        .style("stroke", "hsl(var(--border))")
        .style("stroke-width", 0.5)
        .style("stroke-dasharray", "4,4");

      svg.append("text")
        .attr("x", x(value))
        .attr("y", height + 20)
        .attr("text-anchor", "middle")
        .style("fill", "hsl(var(--muted-foreground))")
        .style("font-size", "12px")
        .text(value + "%");
    });

    // Add skill names
    svg.selectAll(".skill-name")
      .data(skills)
      .enter()
      .append("text")
      .attr("class", "skill-name")
      .attr("x", -10)
      .attr("y", d => y(d.name)! + y.bandwidth() / 2)
      .attr("text-anchor", "end")
      .attr("dominant-baseline", "middle")
      .style("fill", "hsl(var(--foreground))")
      .style("font-size", "14px")
      .text(d => d.name);

    // Add bars
    const bars = svg.selectAll(".skill-bar")
      .data(skills)
      .enter()
      .append("g")
      .attr("class", "skill-bar");

    // Add bar backgrounds
    bars.append("rect")
      .attr("x", 0)
      .attr("y", d => y(d.name)!)
      .attr("width", width)
      .attr("height", y.bandwidth())
      .style("fill", "hsl(var(--muted))")
      .style("rx", 4);

    // Add bar fills with animation
    bars.append("rect")
      .attr("x", 0)
      .attr("y", d => y(d.name)!)
      .attr("width", 0) // Start with 0 width
      .attr("height", y.bandwidth())
      .style("fill", "hsl(var(--primary))")
      .style("rx", 4)
      .transition()
      .duration(1000)
      .ease(d3.easeCubicOut)
      .attr("width", d => x(d.level));

    // Add percentage labels with background for better visibility
    bars.append("g")
      .attr("class", "percentage-label")
      .each(function(d) {
        const g = d3.select(this);
        const text = g.append("text")
          .attr("x", x(d.level) + 10)
          .attr("y", y(d.name)! + y.bandwidth() / 2)
          .attr("dominant-baseline", "middle")
          .style("fill", "hsl(var(--foreground))")
          .style("font-size", "12px")
          .style("opacity", 0)
          .text(`${d.level}%`);

        // Add background rectangle for the text
        const bbox = (text.node() as SVGTextElement).getBBox();
        g.insert("rect", "text")
          .attr("x", x(d.level) + 8)
          .attr("y", y(d.name)! + y.bandwidth() / 2 - bbox.height / 2)
          .attr("width", bbox.width + 4)
          .attr("height", bbox.height)
          .attr("rx", 2)
          .style("fill", "hsl(var(--background))")
          .style("opacity", 0);

        // Animate both the background and text
        g.selectAll("*")
          .transition()
          .duration(1000)
          .delay(500)
          .style("opacity", 1);
      });

    // Add hover effects
    const tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background-color", "hsl(var(--background))")
      .style("border", "1px solid hsl(var(--border))")
      .style("padding", "8px")
      .style("border-radius", "4px")
      .style("font-size", "12px")
      .style("pointer-events", "none")
      .style("box-shadow", "0 2px 4px rgba(0,0,0,0.1)");

    bars.on("mouseover", function(event: MouseEvent, d: Skill) {
      d3.select(this).select("rect:last-child")
        .style("fill", "hsl(var(--primary)/0.8)");

      tooltip
        .style("visibility", "visible")
        .html(`<strong>${d.name}</strong><br/>Proficiency: ${d.level}%`);
    })
    .on("mousemove", function(event: MouseEvent) {
      tooltip
        .style("top", (event.pageY - 10) + "px")
        .style("left", (event.pageX + 10) + "px");
    })
    .on("mouseout", function() {
      d3.select(this).select("rect:last-child")
        .style("fill", "hsl(var(--primary))");

      tooltip.style("visibility", "hidden");
    });

  }, [skills]);

  return (
    <div className={cn("flex justify-center items-center w-full", className)}>
      <svg ref={svgRef} className="w-full h-full" />
    </div>
  );
} 