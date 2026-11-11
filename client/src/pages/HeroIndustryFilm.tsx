import { useEffect, useRef, useState } from "react";
import factoryLine from "@/assets/industry/factory-line.jpg";

const clips = [
  "/industry-videos/plant-aerial.mp4",
  "/industry-videos/agri-farm.mp4",
  "/industry-videos/warehouse-tablet.mp4",
  "/industry-videos/workforce-tablet.mp4",
  "/industry-videos/workforce-punch.mp4",
  "/industry-videos/repair-equipment.mp4",
  "/industry-videos/metro.mp4",
  "/industry-videos/stadium.mp4",
] as const;

const PHARMA = "/industry-videos/pharma-lab.mp4";

const HOLD_MS = 12000;
const SAMPLE_W = 48;
const SAMPLE_H = 27;

function waitForFrame(el: HTMLVideoElement, src: string) {
  return new Promise<void>((resolve) => {
    const done = () => {
      el.removeEventListener("canplay", done);
      resolve();
    };
    if (el.getAttribute("src") !== src) el.src = src;
    if (el.readyState >= 3 && el.getAttribute("src") === src) {
      resolve();
      return;
    }
    el.addEventListener("canplay", done);
    el.play().catch(() => undefined);
  });
}

let sampleCanvas: HTMLCanvasElement | null = null;
let sampleCtx: CanvasRenderingContext2D | null = null;

function lumaFrom(source: CanvasImageSource, sw: number, sh: number) {
  if (!sw || !sh) return null;
  try {
    if (!sampleCanvas) {
      sampleCanvas = document.createElement("canvas");
      sampleCanvas.width = SAMPLE_W;
      sampleCanvas.height = SAMPLE_H;
      sampleCtx = sampleCanvas.getContext("2d", { willReadFrequently: true });
    }
    if (!sampleCtx) return null;
    sampleCtx.drawImage(source, 0, 0, sw * 0.5, sh * 0.5, 0, 0, SAMPLE_W, SAMPLE_H);
    const { data } = sampleCtx.getImageData(0, 0, SAMPLE_W, SAMPLE_H);
    let sum = 0;
    const step = 16;
    for (let i = 0; i < data.length; i += step) {
      sum += 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
    }
    return sum / (data.length / step) / 255;
  } catch {
    return null;
  }
}

export function HeroIndustryFilm({ workflow }: { workflow?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const aRef = useRef<HTMLVideoElement>(null);
  const bRef = useRef<HTMLVideoElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const indexRef = useRef(0);
  const slotRef = useRef(0);
  const [on, setOn] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const a = aRef.current;
    const b = bRef.current;
    if (!a || !b) return;

    let timer = 0;
    let cancelled = false;
    const layers = [a, b];
    const speed = workflow === "speed";

    const cutTo = async (src: string) => {
      const nextSlot = 1 - slotRef.current;
      await waitForFrame(layers[nextSlot], src);
      if (cancelled) return;
      layers[nextSlot].play().catch(() => undefined);
      slotRef.current = nextSlot;
      setOn(nextSlot);
    };

    const arm = () => {
      timer = window.setTimeout(() => { void advance(); }, HOLD_MS);
    };

    const advance = async () => {
      if (speed) return;
      const next = (indexRef.current + 1) % clips.length;
      await cutTo(clips[next]);
      indexRef.current = next;
      if (!cancelled) arm();
    };

    if (speed) {
      void cutTo(PHARMA);
    } else {
      void cutTo(clips[indexRef.current]).then(() => {
        if (!cancelled) arm();
      });
    }

    const onVis = () => {
      layers.forEach((el) => {
        if (document.hidden) el.pause();
        else el.play().catch(() => undefined);
      });
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVis);
      layers.forEach((el) => el.pause());
    };
  }, [reduce, workflow]);

  useEffect(() => {
    const lead = rootRef.current?.closest(".es-lead-film");
    if (!lead) return;
    let tone: "light" | "dark" = "dark";
    lead.classList.remove("is-light");

    const apply = (next: "light" | "dark") => {
      if (next === tone) return;
      tone = next;
      lead.classList.toggle("is-light", next === "light");
    };

    const sample = () => {
      if (reduce) {
        const img = imgRef.current;
        if (!img?.naturalWidth) return;
        const luma = lumaFrom(img, img.naturalWidth, img.naturalHeight);
        if (luma == null) return;
        if (luma > 0.52) apply("light");
        else if (luma < 0.4) apply("dark");
        return;
      }
      const video = on === 0 ? aRef.current : bRef.current;
      if (!video || video.readyState < 2 || !video.videoWidth) return;
      const luma = lumaFrom(video, video.videoWidth, video.videoHeight);
      if (luma == null) return;
      if (luma > 0.52) apply("light");
      else if (luma < 0.4) apply("dark");
    };

    sample();
    const id = window.setInterval(sample, 240);
    return () => {
      window.clearInterval(id);
      lead.classList.remove("is-light");
    };
  }, [on, reduce]);

  return (
    <div className="es-hero-film" aria-hidden="true" ref={rootRef}>
      {reduce ? (
        <img ref={imgRef} src={factoryLine} alt="" />
      ) : (
        <>
          <video ref={aRef} className={on === 0 ? "is-on" : undefined} muted playsInline loop preload="auto" />
          <video ref={bRef} className={on === 1 ? "is-on" : undefined} muted playsInline loop preload="auto" />
        </>
      )}
    </div>
  );
}
