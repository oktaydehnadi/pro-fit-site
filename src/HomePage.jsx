import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Dumbbell, Contact, Star } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 space-y-10">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Pro-Fit Wellness Solutions</h1>
        <p className="text-lg max-w-xl mx-auto">
          Personalized fitness & nutrition coaching. Engineer your health with precision.
        </p>
        <Button className="text-lg px-6 py-2">Get Started</Button>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent>
            <Dumbbell className="w-8 h-8" />
            <h2 className="text-xl font-semibold">Training Programs</h2>
            <p>Custom workout plans tailored to your goals and schedule.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Contact className="w-8 h-8" />
            <h2 className="text-xl font-semibold">Nutrition Coaching</h2>
            <p>Macro-based meal guidance with flexible food logging support.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CalendarDays className="w-8 h-8" />
            <h2 className="text-xl font-semibold">Bi-weekly Follow-ups</h2>
            <p>One-on-one sessions to adjust plans, review progress, and motivate.</p>
          </CardContent>
        </Card>
      </section>

      {/* Intake Form Section */}
      <section className="bg-gray-100 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Client Intake Form</h2>
        <iframe
          src="https://form.jotform.com/your-form-id"
          width="100%"
          height="600"
          className="rounded"
          title="Client Intake Form"
        ></iframe>
      </section>

      {/* Booking Section */}
      <section className="bg-gray-50 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Book Your Appointment</h2>
        <iframe
          src="https://calendly.com/your-calendly-link"
          width="100%"
          height="600"
          className="rounded"
          title="Booking"
        ></iframe>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent>
              <Star className="w-6 h-6 text-yellow-400" />
              <p>“Working with Oktay changed my life. His tailored plan helped me lose 10kg and gain confidence.”</p>
              <p className="text-sm text-gray-500">– Sarah D.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Star className="w-6 h-6 text-yellow-400" />
              <p>“Professional, precise, and inspiring. I’ve never felt more motivated to stick to a plan.”</p>
              <p className="text-sm text-gray-500">– Marc B.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
