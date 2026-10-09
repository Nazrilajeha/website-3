"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Droplets,
  Sprout,
  Hourglass,
  ArrowRight,
  ArrowDown,
  Menu,
  X,
  MapPin,
  Clock,
  Compass,
  UtensilsCrossed,
  BookOpen,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("story");

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1A1C1B]">
      {/* =========================================================================
          HEADER & NAVBAR
      ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#E8E8E6]">
        <div className="max-w-[1240px] mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="text-[13px] tracking-[0.24em] uppercase font-medium hover:text-[#894D1C] transition-colors"
          >
            ATELIER SOLACE
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wide text-[#6B6864]">
            <a href="#hero" className="hover:text-[#1A1C1B] transition-colors">
              Story
            </a>
            <a href="#menu" className="hover:text-[#1A1C1B] transition-colors">
              Menu
            </a>
            <a href="#philosophy" className="hover:text-[#1A1C1B] transition-colors">
              Philosophy
            </a>
            <a href="#find-us" className="hover:text-[#1A1C1B] transition-colors">
              Find Us
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#find-us"
              className="hidden sm:inline-flex items-center justify-center text-[11px] tracking-widest uppercase px-4 py-2 rounded-full border border-[#D8C2B6] hover:border-[#1A1C1B] hover:bg-[#F4F4F2] transition-all text-[#1A1C1B]"
            >
              Book a Table
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-[#1A1C1B] hover:text-[#894D1C] transition-colors focus:outline-none"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          MOBILE FULLSCREEN MENU DRAWER
      ========================================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAFAF8] flex flex-col justify-between p-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between h-14 border-b border-[#E8E8E6]">
            <span className="text-[12px] tracking-[0.24em] uppercase font-medium">
              ATELIER SOLACE
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#1A1C1B] focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 my-auto text-center font-serif">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl text-[#1A1C1B] hover:text-[#894D1C] transition-colors"
            >
              Story
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl text-[#1A1C1B] hover:text-[#894D1C] transition-colors"
            >
              Menu
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl text-[#1A1C1B] hover:text-[#894D1C] transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#find-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl text-[#1A1C1B] hover:text-[#894D1C] transition-colors"
            >
              Find Us
            </a>

            <div className="pt-6 w-full max-w-xs font-sans">
              <a
                href="#find-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-3 text-center bg-[#894D1C] text-white text-[12px] uppercase tracking-widest rounded transition-opacity hover:opacity-90"
              >
                Book a Table
              </a>
            </div>
          </div>

          <div className="text-center py-4 border-t border-[#E8E8E6] text-[11px] text-[#6B6864] tracking-wider uppercase">
            © 2025 Atelier Solace
          </div>
        </div>
      )}

      {/* =========================================================================
          MAIN CONTENT
      ========================================================================= */}
      <main className="flex-1 pt-16">
        {/* SECTION 1: HERO */}
        <section
          id="hero"
          className="max-w-[1240px] mx-auto px-6 lg:px-12 py-12 lg:py-24 min-h-[calc(100vh-4rem)] flex flex-col justify-between"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center my-auto">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#6B6864] mb-4">
                Est. 2021 · SoHo Sanctuary
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1C1B] font-normal tracking-tight leading-[1.1] mb-5">
                Coffee, unhurried.
              </h1>
              <p className="text-[#6B6864] text-base sm:text-lg max-w-md font-light leading-relaxed">
                Specialty coffee. A place to stay.
              </p>

              {/* Architectural details (Desktop only for minimal mobile view) */}
              <div className="hidden sm:flex items-center gap-10 mt-14 pt-8 border-t border-[#E8E8E6]">
                <div>
                  <span className="block text-[11px] uppercase tracking-widest text-[#6B6864]">
                    Single Origin
                  </span>
                  <span className="text-sm font-medium text-[#1A1C1B] mt-0.5 block">
                    Guangdong · Yirgacheffe
                  </span>
                </div>
                <div className="w-px h-8 bg-[#E8E8E6]" />
                <div>
                  <span className="block text-[11px] uppercase tracking-widest text-[#6B6864]">
                    Water Spec
                  </span>
                  <span className="text-sm font-medium text-[#1A1C1B] mt-0.5 block">
                    93.2°C · 70 ppm TDS
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] aspect-[4/5] bg-[#EEEEEC] overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
                  alt="A delicate speckled ceramic artisan cup filled with warm flat white coffee on weathered rustic oak wood tabletop"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[11px] text-[#1A1C1B]/70 bg-[#FAFAF8]/90 backdrop-blur-sm px-3 py-1.5 tracking-wider">
                  <span>TABLE N° 04</span>
                  <span className="tabular-nums">08:42 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll cue (desktop) */}
          <div className="hidden sm:flex items-center justify-between pt-8 border-t border-[#E8E8E6] text-[11px] tracking-widest text-[#6B6864] uppercase">
            <span>Atelier Solace · Mercer &amp; Prince</span>
            <a
              href="#philosophy"
              className="inline-flex items-center gap-2 hover:text-[#1A1C1B] transition-colors"
            >
              <span>Scroll to explore</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* SECTION 2: PHILOSOPHY */}
        <section
          id="philosophy"
          className="w-full bg-[#FFFFFF] py-20 lg:py-32 border-y border-[#E8E8E6]"
        >
          <div className="max-w-[720px] mx-auto px-6 text-center">
            <span className="text-[11px] tracking-[0.24em] text-[#6B6864] uppercase mb-4 block">
              What We Believe
            </span>
            <blockquote className="font-serif italic text-3xl sm:text-4xl text-[#1A1C1B] font-normal leading-snug mb-6">
              “Good coffee asks for your time.”
            </blockquote>
            <p className="text-[#6B6864] text-sm sm:text-base leading-relaxed mb-16 font-light max-w-lg mx-auto">
              We abandon haste in pursuit of clarity. Every brew ratio, pour cadence, and vessel is considered to preserve the honest character of the bean.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left pt-6 border-t border-[#E8E8E6]">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-8 h-8 flex items-center justify-center text-[#894D1C] mb-3">
                  <Droplets className="w-5 h-5" />
                </div>
                <h3 className="text-xs tracking-wider uppercase font-medium text-[#1A1C1B] mb-1.5">
                  Slow Pour
                </h3>
                <p className="text-xs text-[#6B6864] leading-relaxed hidden sm:block">
                  Calibrated extractions pulled with measured patience.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-8 h-8 flex items-center justify-center text-[#894D1C] mb-3">
                  <Sprout className="w-5 h-5" />
                </div>
                <h3 className="text-xs tracking-wider uppercase font-medium text-[#1A1C1B] mb-1.5">
                  Origin First
                </h3>
                <p className="text-xs text-[#6B6864] leading-relaxed hidden sm:block">
                  Direct-trade micro-lots honoring transparent farm provenance.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-8 h-8 flex items-center justify-center text-[#894D1C] mb-3">
                  <Hourglass className="w-5 h-5" />
                </div>
                <h3 className="text-xs tracking-wider uppercase font-medium text-[#1A1C1B] mb-1.5">
                  No Rush
                </h3>
                <p className="text-xs text-[#6B6864] leading-relaxed hidden sm:block">
                  A quiet sanctuary for contemplative mornings and unhurried thoughts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: MENU PREVIEW */}
        <section
          id="menu"
          className="max-w-[1000px] mx-auto px-6 py-20 lg:py-28"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-5 border-b border-[#E8E8E6]">
            <div>
              <span className="text-[11px] tracking-[0.24em] text-[#6B6864] uppercase block mb-1.5">
                On The Menu
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1C1B] font-normal">
                Daily Selections
              </h2>
            </div>
            <span className="text-xs text-[#6B6864] mt-2 sm:mt-0 font-light">
              Roasted on Tuesdays in Red Hook. Ground fresh to 600 microns.
            </span>
          </div>

          {/* Minimal row items */}
          <div className="divide-y divide-[#E8E8E6]">
            <div className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 group hover:bg-[#F4F4F2]/50 px-2 transition-colors">
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="text-xs text-[#6B6864] tracking-widest tabular-nums w-6">
                  01
                </span>
                <span className="font-serif text-lg sm:text-xl text-[#1A1C1B]">
                  Yirgacheffe Pour-Over
                </span>
                <span className="text-xs text-[#6B6864] font-light hidden sm:inline">
                  Bergamot, jasmine blossom, stone fruit
                </span>
              </div>
              <div className="flex items-center gap-4 sm:ml-auto justify-between sm:justify-end">
                <span className="text-[11px] text-[#6B6864] uppercase tracking-widest hidden sm:inline">
                  Washed · 2100m
                </span>
                <span className="text-sm sm:text-base font-medium text-[#894D1C] tabular-nums">
                  $7.50
                </span>
              </div>
            </div>

            <div className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 group hover:bg-[#F4F4F2]/50 px-2 transition-colors">
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="text-xs text-[#6B6864] tracking-widest tabular-nums w-6">
                  02
                </span>
                <span className="font-serif text-lg sm:text-xl text-[#1A1C1B]">
                  Kyoto 16-Hour Cold Drip
                </span>
                <span className="text-xs text-[#6B6864] font-light hidden sm:inline">
                  Carved clear sphere, cacao nib, maple
                </span>
              </div>
              <div className="flex items-center gap-4 sm:ml-auto justify-between sm:justify-end">
                <span className="text-[11px] text-[#6B6864] uppercase tracking-widest hidden sm:inline">
                  Slow Gravity
                </span>
                <span className="text-sm sm:text-base font-medium text-[#894D1C] tabular-nums">
                  $8.00
                </span>
              </div>
            </div>

            <div className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 group hover:bg-[#F4F4F2]/50 px-2 transition-colors">
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="text-xs text-[#6B6864] tracking-widest tabular-nums w-6">
                  03
                </span>
                <span className="font-serif text-lg sm:text-xl text-[#1A1C1B]">
                  Oat Velvet Flat White
                </span>
                <span className="text-xs text-[#6B6864] font-light hidden sm:inline">
                  Double ristretto, microfoam texture
                </span>
              </div>
              <div className="flex items-center gap-4 sm:ml-auto justify-between sm:justify-end">
                <span className="text-[11px] text-[#6B6864] uppercase tracking-widest hidden sm:inline">
                  Minor Figures · 6oz
                </span>
                <span className="text-sm sm:text-base font-medium text-[#894D1C] tabular-nums">
                  $6.00
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-start">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#1A1C1B] hover:text-[#894D1C] transition-colors py-1"
            >
              <span>Full Menu</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        {/* SECTION 4: STORY */}
        <section className="w-full bg-[#F4F4F2] py-20 lg:py-28 border-t border-[#E8E8E6]">
          <div className="max-w-[1000px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] bg-[#EEEEEC] overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
                  alt="Barista hands pouring hot water into a coffee dripper"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-[11px] tracking-[0.24em] text-[#6B6864] uppercase mb-4 block">
                Our Essence
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1C1B] font-normal leading-tight mb-6">
                Crafted in Stillness.
              </h2>
              <p className="text-sm sm:text-base text-[#6B6864] leading-relaxed font-light mb-8">
                We opened Atelier Solace as a counterweight to urgency. Here, heat, mineral water, and single-origin coffee meet in deliberate harmony.
              </p>

              <div className="space-y-3 pt-6 border-t border-[#E8E8E6] text-xs text-[#6B6864]">
                <div className="flex justify-between items-center py-1">
                  <span className="font-medium text-[#1A1C1B]">Curated Ceramics</span>
                  <span>Handmade by Hasami Porcelain</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-medium text-[#1A1C1B]">Acoustic Balance</span>
                  <span>Analog ambient soundscape</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-medium text-[#1A1C1B]">Seating Policy</span>
                  <span>Device-free front salon</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: FIND US */}
        <section
          id="find-us"
          className="max-w-[900px] mx-auto px-6 py-20 lg:py-28"
        >
          <div className="text-center mb-12">
            <span className="text-[11px] tracking-[0.24em] text-[#6B6864] uppercase mb-2 block">
              Location &amp; Hours
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1C1B] font-normal">
              Visit the Atelier
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-10 border-b border-[#E8E8E6]">
            <div>
              <span className="text-[11px] tracking-widest uppercase text-[#6B6864] mb-2 block">
                Address
              </span>
              <p className="font-serif text-xl text-[#1A1C1B] leading-snug mb-1">
                142 Mercer Street
                <br />
                SoHo, New York, NY 10012
              </p>
              <span className="text-xs text-[#6B6864] mt-1 block">
                Corner of Prince Street · Cobblestone district
              </span>
            </div>

            <div>
              <span className="text-[11px] tracking-widest uppercase text-[#6B6864] mb-2 block">
                Operating Hours
              </span>
              <div className="space-y-2 text-sm text-[#1A1C1B]">
                <div className="flex justify-between py-1 border-b border-[#E8E8E6]">
                  <span className="text-[#6B6864] font-light">Monday – Friday</span>
                  <span className="font-medium tabular-nums">07:00 – 17:00</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E8E8E6]">
                  <span className="text-[#6B6864] font-light">Saturday – Sunday</span>
                  <span className="font-medium tabular-nums">08:00 – 18:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Map Visual */}
          <div className="mt-8 w-full h-44 sm:h-56 bg-[#EEEEEC] rounded overflow-hidden relative border border-[#E8E8E6] flex items-end p-4">
            <div className="absolute inset-0 bg-[radial-gradient(#d8c2b6_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
            <div className="relative z-10 bg-[#FAFAF8]/95 backdrop-blur-sm px-4 py-3 flex items-center justify-between w-full max-w-sm rounded border border-[#E8E8E6] shadow-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#894D1C]" />
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-[#1A1C1B] block">
                    Atelier Solace · SoHo
                  </span>
                  <span className="text-[11px] text-[#6B6864]">
                    40.7251° N, 73.9984° W
                  </span>
                </div>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-wider text-[#894D1C] hover:text-[#1A1C1B] transition-colors"
              >
                Directions →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================================
          FOOTER
      ========================================================================= */}
      <footer className="w-full bg-[#FAFAF8] border-t border-[#E8E8E6] py-10 pb-24 md:pb-10">
        <div className="max-w-[1240px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 flex-wrap justify-center text-xs">
            <span className="tracking-[0.2em] uppercase font-medium text-[#1A1C1B]">
              ATELIER SOLACE
            </span>
            <span className="text-[#E8E8E6] hidden md:inline">·</span>
            <div className="flex items-center gap-6 text-[#6B6864]">
              <a href="#hero" className="hover:text-[#1A1C1B] transition-colors">
                Story
              </a>
              <a href="#menu" className="hover:text-[#1A1C1B] transition-colors">
                Menu
              </a>
              <a href="#philosophy" className="hover:text-[#1A1C1B] transition-colors">
                Philosophy
              </a>
              <a href="#find-us" className="hover:text-[#1A1C1B] transition-colors">
                Find Us
              </a>
            </div>
          </div>
          <div className="text-xs text-[#6B6864]">
            © 2025 Atelier Solace. All rights reserved.
          </div>
        </div>
      </footer>

      {/* =========================================================================
          MOBILE BOTTOM NAVIGATION (App-like feel as in mockup)
      ========================================================================= */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAFAF8]/95 backdrop-blur-md border-t border-[#E8E8E6] px-4 py-2 flex justify-around items-center">
        <a
          href="#hero"
          onClick={() => setActiveTab("story")}
          className={`flex flex-col items-center justify-center py-1 px-3 text-[11px] transition-colors ${
            activeTab === "story" ? "text-[#894D1C] font-medium" : "text-[#6B6864]"
          }`}
        >
          <BookOpen className="w-4 h-4 mb-1" />
          <span>Story</span>
        </a>
        <a
          href="#menu"
          onClick={() => setActiveTab("menu")}
          className={`flex flex-col items-center justify-center py-1 px-3 text-[11px] transition-colors ${
            activeTab === "menu" ? "text-[#894D1C] font-medium" : "text-[#6B6864]"
          }`}
        >
          <UtensilsCrossed className="w-4 h-4 mb-1" />
          <span>Menu</span>
        </a>
        <a
          href="#philosophy"
          onClick={() => setActiveTab("philosophy")}
          className={`flex flex-col items-center justify-center py-1 px-3 text-[11px] transition-colors ${
            activeTab === "philosophy" ? "text-[#894D1C] font-medium" : "text-[#6B6864]"
          }`}
        >
          <Compass className="w-4 h-4 mb-1" />
          <span>Essence</span>
        </a>
        <a
          href="#find-us"
          onClick={() => setActiveTab("find-us")}
          className={`flex flex-col items-center justify-center py-1 px-3 text-[11px] transition-colors ${
            activeTab === "find-us" ? "text-[#894D1C] font-medium" : "text-[#6B6864]"
          }`}
        >
          <MapPin className="w-4 h-4 mb-1" />
          <span>Visit</span>
        </a>
      </nav>
    </div>
  );
}
