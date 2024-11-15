"use client";

import Image from "next/image";

export const MaintenanceServicesSection = () => {
  return (
    <section className="px-res py-20 text-typography">
      <h2 className="font-semibold text-xl mb-5">Maintenance Services</h2>
      <div className="flex flex-col lg:gap-10 lg:flex-row">
        <div className="flex-1 flex flex-col justify-center gap-5 text-2xl md:text-3xl lg:text-2xl xl:text-4xl border-t-8 border-y-primary py-5 lg:border-b-8">
          <p className="dev-leading-wide">
            Keep your car in top shape with our affordable and professional
            services, from oil changes to brake repairs.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={"/maintenance-services.jpg"}
            width={500}
            height={500}
            alt="cars"
            className="aspect-[1.4] object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};
