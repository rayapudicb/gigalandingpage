import agricultureField from "@/assets/industry/agriculture-field.jpg";
import architectureWorkshop from "@/assets/industry/architecture-workshop.jpg";
import colleaguesReview from "@/assets/industry/colleagues-review.jpg";
import constructionSite from "@/assets/industry/construction-site.jpg";
import energyNetwork from "@/assets/industry/energy-network.jpg";
import engineeringTeam from "@/assets/industry/engineering-team.jpg";
import evidenceSignoff from "@/assets/industry/evidence-signoff.jpg";
import factoryLine from "@/assets/industry/factory-line.jpg";
import fieldCrew from "@/assets/industry/field-crew.jpg";
import healthcareFacility from "@/assets/industry/healthcare-facility.jpg";
import industrialEngineer from "@/assets/industry/industrial-engineer.jpg";
import labScientist from "@/assets/industry/lab-scientist.jpg";
import plantInstruments from "@/assets/industry/plant-instruments.jpg";
import retailCommerce from "@/assets/industry/retail-commerce.jpg";
import transportDepot from "@/assets/industry/transport-depot.jpg";
import venueEvent from "@/assets/industry/venue-event.jpg";

export type SolutionPhoto = { src: string; alt: string };

export const photoByPath: Record<string, SolutionPhoto> = {
  "/gigaops": { src: factoryLine, alt: "A plant floor GigaOps is built to run — the building, the bays and the work in one place" },
  "/gigaops/maintenance": { src: industrialEngineer, alt: "Maintenance technician reviewing work on a plant-floor tablet" },
  "/gigaops/workforce": { src: fieldCrew, alt: "A supervisor walking a crew through the work in front of them" },
  "/gigaops/inventory": { src: transportDepot, alt: "Warehouse aisle with palletised stock ready to issue" },
  "/gigaops/manufacturing": { src: factoryLine, alt: "A production hall where work, people and equipment share one record" },
  "/gigaops/procurement": { src: transportDepot, alt: "Stores inventory waiting on a reservation" },
  "/gigaops/iot": { src: plantInstruments, alt: "An operations desk where condition and place are already on screens" },
  "/gigaops/geospatial": { src: energyNetwork, alt: "A distributed asset sitting on a real place" },
  "/gigaops/documents": { src: evidenceSignoff, alt: "A marked-up job pack — the evidence that has to travel with the work" },
  "/gigaops/analytics": { src: plantInstruments, alt: "Measures taken from the operating record, opened at the desk" },
  "/gigaops/automation": { src: engineeringTeam, alt: "Engineers configuring how a site should run" },
  "/products/speed": { src: labScientist, alt: "Scientist at a desk screening a chemistry route before it reaches the plant" },
  "/products/mypint": { src: retailCommerce, alt: "A retail floor where a purchase can become a governed reward" },
  "/products/nyr": { src: venueEvent, alt: "A local venue where people gather for a listed event" },
  "/products/swappy": { src: venueEvent, alt: "A venue pass that still needs a governed exchange trail" },
  "/products/gigacrm": { src: colleaguesReview, alt: "A pipeline conversation with a next date on the record" },
  "/products/gigaai": { src: engineeringTeam, alt: "Assisted operations designed on the same record, not a second system" },
  "/industries/manufacturing": { src: factoryLine, alt: "A manufacturing hall: work, people and equipment on one floor" },
  "/industries/retail": { src: retailCommerce, alt: "A retail floor where store stock and crew have to move together" },
  "/industries/pharma": { src: labScientist, alt: "Desk-side process work before chemistry is politically locked" },
  "/industries/energy": { src: energyNetwork, alt: "A generation asset on a network that still needs a crew and a work order" },
  "/industries/transport": { src: transportDepot, alt: "A depot aisle: vehicles, bays and parts in one place" },
  "/industries/construction": { src: constructionSite, alt: "A construction deck where the job pack has to survive the site" },
  "/industries/healthcare": { src: healthcareFacility, alt: "A clinical space that is only usable if the equipment is ready" },
  "/industries/agriculture": { src: agricultureField, alt: "Field operations where the window is short and the machine has to run" },
  "/industries/sports": { src: venueEvent, alt: "A venue at night that still has to be staffed and ready at doors" },
};

export const careerHero = {
  src: engineeringTeam,
  alt: "Engineers at a board working through the record a site will actually run",
};

export const careerLife = {
  src: fieldCrew,
  alt: "A site supervisor with a tablet walking a crew through the work in front of them",
};

export const consultingPhoto = {
  src: architectureWorkshop,
  alt: "A working session over the site map, the pack and the tools you want to keep",
};

export const consultingCapabilityPhotos = {
  architecture: { src: evidenceSignoff, alt: "Marking the operating architecture on the job pack before anything is configured" },
  industries: { src: factoryLine, alt: "A plant hall — the first industry pack, and the pattern every other site follows" },
  customisation: { src: engineeringTeam, alt: "Configuring how the site runs without forking the product" },
  lifecycle: { src: fieldCrew, alt: "Walking the site with the crew who will write to the live record" },
  ai: { src: colleaguesReview, alt: "Designing the next action on the GigaOps record, with the people who will use it" },
};

export const frontlinePhoto = {
  src: industrialEngineer,
  alt: "A technician on the plant floor writing to the operating record from a tablet",
};
