"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface DocumentFiltersProps {
  onFilterChange: (filters: {
    search: string;
    category: string;
    dateRange: string;
  }) => void;
}

export function DocumentFilters({ onFilterChange }: DocumentFiltersProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [dateRange, setDateRange] = useState("all");

  const handleSearchChange = (value: string) => {
    setSearch(value);
    onFilterChange({ search: value, category, dateRange });
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    onFilterChange({ search, category: value, dateRange });
  };

  const handleDateRangeChange = (value: string) => {
    setDateRange(value);
    onFilterChange({ search, category, dateRange: value });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search documents..."
            className="pl-8"
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>
        <Select value={category} onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="pleadings">Pleadings</SelectItem>
            <SelectItem value="evidence">Evidence</SelectItem>
            <SelectItem value="orders">Orders</SelectItem>
            <SelectItem value="judgments">Judgments</SelectItem>
          </SelectContent>
        </Select>
        <Select value={dateRange} onValueChange={handleDateRangeChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Date Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Time</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
            <SelectItem value="year">This Year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Filter className="h-3.5 w-3.5" />
          <span>Filters</span>
        </Button>
        {category !== "all" && (
          <Badge
            variant="secondary"
            className="cursor-pointer"
            onClick={() => handleCategoryChange("all")}
          >
            {category} ×
          </Badge>
        )}
        {dateRange !== "all" && (
          <Badge
            variant="secondary"
            className="cursor-pointer"
            onClick={() => handleDateRangeChange("all")}
          >
            {dateRange} ×
          </Badge>
        )}
      </div>
    </div>
  );
}
