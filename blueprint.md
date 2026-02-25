# Project Blueprint

## Overview
The goal is to build a **Real-time** "Car Recommendation & Maintenance Cost Simulator based on Annual Salary".
The focus is on simplicity, immediate feedback (real-time updates), and engagement.

## Target Audience
-   Males in their 10s-40s.
-   People interested in buying a car but worried about maintenance costs.

## Core Features (Updated v2)
1.  **Real-time Interaction:**
    -   No "Submit" button. Results update instantly as the user types.
    -   **Visual Monitor:** Starts with "Walking/Public Transport" and evolves to better cars as budget increases.
2.  **Enhanced Inputs:**
    -   **Salary & Cash:** Basic financial inputs.
    -   **Mileage Calculator:** Input "Daily One-way Distance" & "Days/Week" -> Automatically calculates Monthly Mileage.
3.  **Logic & Data:**
    -   **Expanded Car List:** Include specific popular models (Avante, Sonata, Grandeur, Genesis, Sorrento, Carnival, etc.).
    -   **Smart Recommendation:** Recommend the "Best Fit" car based on a safe financial ratio (e.g., Price <= Salary * 0.6 + Cash).
    -   **Cost Simulation:** Detailed breakdown of Installment, Insurance, Tax, Fuel, Maintenance.
4.  **UI/UX:**
    -   **Centered Layout:** Improved readability and focus.
    -   **Visual Feedback:** Graphs and dynamic text update instantly.
    -   **Share Button:** Native Web Share API or Link Copy.

## Implementation Plan
1.  **HTML:** Refactor for a centered, card-based layout. Add the "Monitor" section and Mileage Calculator inputs.
2.  **CSS:** Modern, clean aesthetics. Better spacing, fonts, and "Dashboard" feel.
3.  **JS:**
    -   Event listeners on `input`.
    -   `calculateMonthlyMileage()` function.
    -   `recommendCar()` logic based on financial health.
    -   `render()` function to update DOM efficiently.
