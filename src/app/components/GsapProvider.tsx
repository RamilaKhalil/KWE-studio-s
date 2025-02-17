"use client"; // Ensure it's a client component
import { useGsapAnimations } from "../hooks/useGsapAnimations";

export default function GsapProvider() {
  useGsapAnimations();
  return null; // This component only runs the effect, no UI needed
}
