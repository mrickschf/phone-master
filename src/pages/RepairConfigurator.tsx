import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Wrench, ChevronRight } from "lucide-react";
import appleLogo from "../assets/logos/apple-logo.webp";
import samsungLogo from "../assets/logos/samsung-logo.webp";
import huaweiLogo from "../assets/logos/huawei-logo.webp";

type Brand = "apple" | "samsung" | "huawei";
type RepairType = "screen" | "battery" | "camera" | "frontCamera" | "charging";

interface RepairOption {
  id: RepairType;
  label: string;
  price: number;
  duration: string;
}

const repairPrices: Record<
  Brand,
  Record<string, Record<RepairType, { price: number; duration: string }>>
> = {
  apple: {
    // ── iPhone 16 ──────────────────────────────────────────
    "iPhone 16 Pro Max": {
      screen: { price: 469, duration: "1h" },
      battery: { price: 109, duration: "30min" },
      camera: { price: 149, duration: "45min" },
      frontCamera: { price: 99, duration: "45min" },
      charging: { price: 129, duration: "45min" },
    },
    "iPhone 16 Pro": {
      screen: { price: 349, duration: "1h" },
      battery: { price: 109, duration: "30min" },
      camera: { price: 139, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 119, duration: "45min" },
    },
    "iPhone 16 Plus": {
      screen: { price: 339, duration: "1h" },
      battery: { price: 99, duration: "30min" },
      camera: { price: 119, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 119, duration: "45min" },
    },
    "iPhone 16": {
      screen: { price: 229, duration: "1h" },
      battery: { price: 99, duration: "30min" },
      camera: { price: 109, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 109, duration: "45min" },
    },
    // ── iPhone 15 ──────────────────────────────────────────
    "iPhone 15 Pro Max": {
      screen: { price: 429, duration: "1h" },
      battery: { price: 89, duration: "30min" },
      camera: { price: 129, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 119, duration: "45min" },
    },
    "iPhone 15 Pro": {
      screen: { price: 359, duration: "1h" },
      battery: { price: 89, duration: "30min" },
      camera: { price: 119, duration: "45min" },
      frontCamera: { price: 79, duration: "45min" },
      charging: { price: 109, duration: "45min" },
    },
    "iPhone 15 Plus": {
      screen: { price: 199, duration: "1h" },
      battery: { price: 79, duration: "30min" },
      camera: { price: 99, duration: "45min" },
      frontCamera: { price: 79, duration: "45min" },
      charging: { price: 99, duration: "45min" },
    },
    "iPhone 15": {
      screen: { price: 259, duration: "1h" },
      battery: { price: 89, duration: "30min" },
      camera: { price: 99, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 109, duration: "45min" },
    },
    // ── iPhone 14 ──────────────────────────────────────────
    "iPhone 14 Pro Max": {
      screen: { price: 389, duration: "1h" },
      battery: { price: 79, duration: "30min" },
      camera: { price: 119, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 99, duration: "45min" },
    },
    "iPhone 14 Pro": {
      screen: { price: 349, duration: "1h" },
      battery: { price: 79, duration: "30min" },
      camera: { price: 119, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 89, duration: "45min" },
    },
    "iPhone 14 Plus": {
      screen: { price: 189, duration: "1h" },
      battery: { price: 69, duration: "30min" },
      camera: { price: 99, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 89, duration: "45min" },
    },
    "iPhone 14": {
      screen: { price: 169, duration: "1h" },
      battery: { price: 89, duration: "30min" },
      camera: { price: 119, duration: "45min" },
      frontCamera: { price: 79, duration: "45min" },
      charging: { price: 79, duration: "45min" },
    },
    // ── iPhone 13 ──────────────────────────────────────────
    "iPhone 13 Pro Max": {
      screen: { price: 279, duration: "1h" },
      battery: { price: 79, duration: "30min" },
      camera: { price: 119, duration: "45min" },
      frontCamera: { price: 69, duration: "45min" },
      charging: { price: 79, duration: "45min" },
    },
    "iPhone 13 Pro": {
      screen: { price: 239, duration: "1h" },
      battery: { price: 79, duration: "30min" },
      camera: { price: 119, duration: "45min" },
      frontCamera: { price: 69, duration: "45min" },
      charging: { price: 79, duration: "45min" },
    },
    "iPhone 13 Mini": {
      screen: { price: 149, duration: "1h" },
      battery: { price: 69, duration: "30min" },
      camera: { price: 89, duration: "45min" },
      frontCamera: { price: 69, duration: "45min" },
      charging: { price: 79, duration: "45min" },
    },
    "iPhone 13": {
      screen: { price: 139, duration: "1h" },
      battery: { price: 69, duration: "30min" },
      camera: { price: 89, duration: "45min" },
      frontCamera: { price: 69, duration: "45min" },
      charging: { price: 79, duration: "45min" },
    },
    // ── iPhone 12 ──────────────────────────────────────────
    "iPhone 12 Pro Max": {
      screen: { price: 149, duration: "1h" },
      battery: { price: 59, duration: "30min" },
      camera: { price: 69, duration: "45min" },
      frontCamera: { price: 69, duration: "45min" },
      charging: { price: 69, duration: "45min" },
    },
    "iPhone 12 Pro": {
      screen: { price: 119, duration: "1h" },
      battery: { price: 59, duration: "30min" },
      camera: { price: 69, duration: "45min" },
      frontCamera: { price: 69, duration: "45min" },
      charging: { price: 69, duration: "45min" },
    },
    "iPhone 12 Mini": {
      screen: { price: 129, duration: "1h" },
      battery: { price: 59, duration: "30min" },
      camera: { price: 69, duration: "45min" },
      frontCamera: { price: 69, duration: "45min" },
      charging: { price: 69, duration: "45min" },
    },
    "iPhone 12": {
      screen: { price: 119, duration: "1h" },
      battery: { price: 59, duration: "30min" },
      camera: { price: 79, duration: "45min" },
      frontCamera: { price: 69, duration: "45min" },
      charging: { price: 79, duration: "45min" },
    },
    // ── iPhone 11 ──────────────────────────────────────────
    "iPhone 11 Pro Max": {
      screen: { price: 149, duration: "1h" },
      battery: { price: 59, duration: "30min" },
      camera: { price: 69, duration: "45min" },
      frontCamera: { price: 69, duration: "45min" },
      charging: { price: 79, duration: "45min" },
    },
    "iPhone 11 Pro": {
      screen: { price: 119, duration: "1h" },
      battery: { price: 49, duration: "30min" },
      camera: { price: 69, duration: "45min" },
      frontCamera: { price: 69, duration: "45min" },
      charging: { price: 69, duration: "45min" },
    },
    "iPhone 11": {
      screen: { price: 79, duration: "1h" },
      battery: { price: 49, duration: "30min" },
      camera: { price: 59, duration: "45min" },
      frontCamera: { price: 69, duration: "45min" },
      charging: { price: 69, duration: "45min" },
    },
    // ── iPhone X/XS/XR ────────────────────────────────────
    "iPhone XS Max": {
      screen: { price: 139, duration: "1h" },
      battery: { price: 49, duration: "30min" },
      camera: { price: 79, duration: "45min" },
      frontCamera: { price: 69, duration: "45min" },
      charging: { price: 79, duration: "45min" },
    },
    "iPhone XS": {
      screen: { price: 99, duration: "1h" },
      battery: { price: 49, duration: "30min" },
      camera: { price: 79, duration: "45min" },
      frontCamera: { price: 69, duration: "45min" },
      charging: { price: 69, duration: "45min" },
    },
    "iPhone XR": {
      screen: { price: 79, duration: "1h" },
      battery: { price: 49, duration: "30min" },
      camera: { price: 79, duration: "45min" },
      frontCamera: { price: 69, duration: "45min" },
      charging: { price: 69, duration: "45min" },
    },
    "iPhone X": {
      screen: { price: 99, duration: "1h" },
      battery: { price: 49, duration: "30min" },
      camera: { price: 79, duration: "45min" },
      frontCamera: { price: 69, duration: "45min" },
      charging: { price: 69, duration: "45min" },
    },
  },
  samsung: {
    "Galaxy S24 Ultra": {
      screen: { price: 429, duration: "1h" },
      battery: { price: 79, duration: "30min" },
      camera: { price: 149, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 89, duration: "45min" },
    },
    "Galaxy S24+": {
      screen: { price: 449, duration: "1h" },
      battery: { price: 79, duration: "30min" },
      camera: { price: 129, duration: "45min" },
      frontCamera: { price: 99, duration: "45min" },
      charging: { price: 79, duration: "45min" },
    },
    "Galaxy S24": {
      screen: { price: 349, duration: "1h" },
      battery: { price: 79, duration: "30min" },
      camera: { price: 139, duration: "45min" },
      frontCamera: { price: 99, duration: "45min" },
      charging: { price: 79, duration: "45min" },
    },
    "Galaxy S23 Ultra": {
      screen: { price: 399, duration: "1h" },
      battery: { price: 79, duration: "30min" },
      camera: { price: 159, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 89, duration: "45min" },
    },
    "Galaxy S23+": {
      screen: { price: 259, duration: "1h" },
      battery: { price: 79, duration: "30min" },
      camera: { price: 129, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 89, duration: "45min" },
    },
    "Galaxy S23": {
      screen: { price: 259, duration: "1h" },
      battery: { price: 79, duration: "30min" },
      camera: { price: 149, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 89, duration: "45min" },
    },
    "Galaxy S23 FE": {
      screen: { price: 249, duration: "1h" },
      battery: { price: 69, duration: "30min" },
      camera: { price: 79, duration: "45min" },
      frontCamera: { price: 69, duration: "45min" },
      charging: { price: 79, duration: "45min" },
    },
    "Galaxy S22 Ultra": {
      screen: { price: 279, duration: "1h" },
      battery: { price: 79, duration: "30min" },
      camera: { price: 139, duration: "45min" },
      frontCamera: { price: 99, duration: "45min" },
      charging: { price: 89, duration: "45min" },
    },
    "Galaxy S22+": {
      screen: { price: 239, duration: "1h" },
      battery: { price: 79, duration: "30min" },
      camera: { price: 149, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 89, duration: "45min" },
    },
    "Galaxy S22": {
      screen: { price: 189, duration: "1h" },
      battery: { price: 79, duration: "30min" },
      camera: { price: 149, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 89, duration: "45min" },
    },
    "Galaxy S21 Ultra": {
      screen: { price: 209, duration: "1h" },
      battery: { price: 69, duration: "30min" },
      camera: { price: 159, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 89, duration: "45min" },
    },
    "Galaxy S21+": {
      screen: { price: 179, duration: "1h" },
      battery: { price: 69, duration: "30min" },
      camera: { price: 129, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 89, duration: "45min" },
    },
    "Galaxy S21": {
      screen: { price: 169, duration: "1h" },
      battery: { price: 69, duration: "30min" },
      camera: { price: 149, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 89, duration: "45min" },
    },
    "Galaxy S21 FE": {
      screen: { price: 169, duration: "1h" },
      battery: { price: 69, duration: "30min" },
      camera: { price: 79, duration: "45min" },
      frontCamera: { price: 69, duration: "45min" },
      charging: { price: 79, duration: "45min" },
    },
    "Galaxy S20 Ultra": {
      screen: { price: 209, duration: "1h" },
      battery: { price: 59, duration: "30min" },
      camera: { price: 99, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 79, duration: "45min" },
    },
    "Galaxy S20+": {
      screen: { price: 279, duration: "1h" },
      battery: { price: 59, duration: "30min" },
      camera: { price: 149, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 89, duration: "45min" },
    },
    "Galaxy S20": {
      screen: { price: 249, duration: "1h" },
      battery: { price: 59, duration: "30min" },
      camera: { price: 89, duration: "45min" },
      frontCamera: { price: 79, duration: "45min" },
      charging: { price: 79, duration: "45min" },
    },
    "Galaxy S20 FE": {
      screen: { price: 129, duration: "1h" },
      battery: { price: 59, duration: "30min" },
      camera: { price: 99, duration: "45min" },
      frontCamera: { price: 79, duration: "45min" },
      charging: { price: 79, duration: "45min" },
    },
    "Galaxy S20 FE 5G": {
      screen: { price: 139, duration: "1h" },
      battery: { price: 59, duration: "30min" },
      camera: { price: 109, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 89, duration: "45min" },
    },
  },
  huawei: {
    "P50 Pro": {
      screen: { price: 369, duration: "1h" },
      battery: { price: 89, duration: "30min" },
      camera: { price: 109, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 79, duration: "45min" },
    },
    "P40 Pro+": {
      screen: { price: 329, duration: "1h" },
      battery: { price: 79, duration: "30min" },
      camera: { price: 109, duration: "45min" },
      frontCamera: { price: 89, duration: "45min" },
      charging: { price: 69, duration: "45min" },
    },
    "P40 Pro": {
      screen: { price: 279, duration: "1h" },
      battery: { price: 79, duration: "30min" },
      camera: { price: 99, duration: "45min" },
      frontCamera: { price: 79, duration: "45min" },
      charging: { price: 69, duration: "45min" },
    },
    P40: {
      screen: { price: 119, duration: "1h" },
      battery: { price: 79, duration: "30min" },
      camera: { price: 89, duration: "45min" },
      frontCamera: { price: 69, duration: "45min" },
      charging: { price: 59, duration: "45min" },
    },
    "P40 Lite": {
      screen: { price: 89, duration: "1h" },
      battery: { price: 79, duration: "30min" },
      camera: { price: 79, duration: "45min" },
      frontCamera: { price: 59, duration: "45min" },
      charging: { price: 49, duration: "45min" },
    },
    "P30 Pro": {
      screen: { price: 139, duration: "1h" },
      battery: { price: 39, duration: "30min" },
      camera: { price: 89, duration: "45min" },
      frontCamera: { price: 69, duration: "45min" },
      charging: { price: 59, duration: "45min" },
    },
    P30: {
      screen: { price: 119, duration: "1h" },
      battery: { price: 39, duration: "30min" },
      camera: { price: 79, duration: "45min" },
      frontCamera: { price: 59, duration: "45min" },
      charging: { price: 49, duration: "45min" },
    },
    "P30 Lite": {
      screen: { price: 89, duration: "1h" },
      battery: { price: 39, duration: "30min" },
      camera: { price: 69, duration: "45min" },
      frontCamera: { price: 49, duration: "45min" },
      charging: { price: 49, duration: "45min" },
    },
    "P30 Lite New Edition": {
      screen: { price: 89, duration: "1h" },
      battery: { price: 39, duration: "30min" },
      camera: { price: 69, duration: "45min" },
      frontCamera: { price: 49, duration: "45min" },
      charging: { price: 49, duration: "45min" },
    },
    "P20 Pro": {
      screen: { price: 99, duration: "1h" },
      battery: { price: 39, duration: "30min" },
      camera: { price: 69, duration: "45min" },
      frontCamera: { price: 49, duration: "45min" },
      charging: { price: 49, duration: "45min" },
    },
    P20: {
      screen: { price: 89, duration: "1h" },
      battery: { price: 39, duration: "30min" },
      camera: { price: 59, duration: "45min" },
      frontCamera: { price: 49, duration: "45min" },
      charging: { price: 49, duration: "45min" },
    },
    "P20 lite": {
      screen: { price: 89, duration: "1h" },
      battery: { price: 39, duration: "30min" },
      camera: { price: 59, duration: "45min" },
      frontCamera: { price: 49, duration: "45min" },
      charging: { price: 49, duration: "45min" },
    },
  },
};

const RepairConfigurator = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"brand" | "model" | "repair">("brand");
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [, setSelectedRepair] = useState<RepairType | null>(null);

  const brands = [
    { id: "apple", name: "Apple", logo: appleLogo },
    { id: "samsung", name: "Samsung", logo: samsungLogo },
    { id: "huawei", name: "Huawei", logo: huaweiLogo },
  ];

  const models = {
    apple: [
      "iPhone 16 Pro Max",
      "iPhone 16 Pro",
      "iPhone 16 Plus",
      "iPhone 16",
      "iPhone 15 Pro Max",
      "iPhone 15 Pro",
      "iPhone 15 Plus",
      "iPhone 15",
      "iPhone 14 Pro Max",
      "iPhone 14 Pro",
      "iPhone 14 Plus",
      "iPhone 14",
      "iPhone 13 Pro Max",
      "iPhone 13 Pro",
      "iPhone 13 Mini",
      "iPhone 13",
      "iPhone 12 Pro Max",
      "iPhone 12 Pro",
      "iPhone 12 Mini",
      "iPhone 12",
      "iPhone 11 Pro Max",
      "iPhone 11 Pro",
      "iPhone 11",
      "iPhone XS Max",
      "iPhone XS",
      "iPhone XR",
      "iPhone X",
    ],
    samsung: [
      "Galaxy S24 Ultra",
      "Galaxy S24+",
      "Galaxy S24",
      "Galaxy S23 Ultra",
      "Galaxy S23+",
      "Galaxy S23",
      "Galaxy S23 FE",
      "Galaxy S22 Ultra",
      "Galaxy S22+",
      "Galaxy S22",
      "Galaxy S21 Ultra",
      "Galaxy S21+",
      "Galaxy S21",
      "Galaxy S21 FE",
      "Galaxy S20 Ultra",
      "Galaxy S20+",
      "Galaxy S20",
      "Galaxy S20 FE",
      "Galaxy S20 FE 5G",
    ],
    huawei: [
      "P50 Pro",
      "P40 Pro+",
      "P40 Pro",
      "P40",
      "P40 Lite",
      "P30 Pro",
      "P30",
      "P30 Lite",
      "P30 Lite New Edition",
      "P20 Pro",
      "P20",
      "P20 lite",
    ],
  };

  const getRepairOptions = () => {
    if (!selectedModel || !selectedBrand) return [];
    const modelPrices = repairPrices[selectedBrand][selectedModel];
    if (!modelPrices) {
      return [
        {
          id: "screen" as RepairType,
          label: "Écran cassé",
          price: 199,
          duration: "1h",
        },
        {
          id: "battery" as RepairType,
          label: "Batterie",
          price: 69,
          duration: "30min",
        },
        {
          id: "camera" as RepairType,
          label: "Caméra arrière",
          price: 99,
          duration: "45min",
        },
        {
          id: "frontCamera" as RepairType,
          label: "Caméra avant",
          price: 79,
          duration: "45min",
        },
        {
          id: "charging" as RepairType,
          label: "Port de charge",
          price: 79,
          duration: "45min",
        },
      ];
    }
    const options: RepairOption[] = [
      {
        id: "screen",
        label: "Écran cassé",
        price: modelPrices.screen.price,
        duration: modelPrices.screen.duration,
      },
      {
        id: "battery",
        label: "Batterie",
        price: modelPrices.battery.price,
        duration: modelPrices.battery.duration,
      },
    ];
    if (modelPrices.camera)
      options.push({
        id: "camera",
        label: "Caméra arrière",
        price: modelPrices.camera.price,
        duration: modelPrices.camera.duration,
      });
    if (modelPrices.frontCamera)
      options.push({
        id: "frontCamera",
        label: "Caméra avant",
        price: modelPrices.frontCamera.price,
        duration: modelPrices.frontCamera.duration,
      });
    if (modelPrices.charging)
      options.push({
        id: "charging",
        label: "Port de charge",
        price: modelPrices.charging.price,
        duration: modelPrices.charging.duration,
      });
    return options;
  };

  const handleBrandSelect = (brand: Brand) => {
    setSelectedBrand(brand);
    setStep("model");
  };
  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
    setStep("repair");
  };
  const handleRepairSelect = (repairType: RepairType) => {
    setSelectedRepair(repairType);
    navigate("/booking");
  };

  return (
    <>
      <Helmet>
        <title>Configurateur de Réparation - Estimation Devis | Phone Master</title>
        <meta
          name="description"
          content="Trouvez le prix de votre réparation smartphone. Sélectionnez votre marque, modèle et type de problème. Devis instantané, sans engagement."
        />
        <link rel="canonical" href="https://www.phone-master.fr/repair" />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-12 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div
              className={`flex items-center ${step === "brand" ? "text-[#c7e5c6]" : "text-gray-500"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${step === "brand" ? "bg-[#c7e5c6] text-white" : "bg-gray-200"}`}
              >
                1
              </div>
              <span className="ml-2">Marque</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <div
              className={`flex items-center ${step === "model" ? "text-[#c7e5c6]" : "text-gray-500"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${step === "model" ? "bg-[#c7e5c6] text-white" : "bg-gray-200"}`}
              >
                2
              </div>
              <span className="ml-2">Modèle</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <div
              className={`flex items-center ${step === "repair" ? "text-[#c7e5c6]" : "text-gray-500"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${step === "repair" ? "bg-[#c7e5c6] text-white" : "bg-gray-200"}`}
              >
                3
              </div>
              <span className="ml-2">Réparation</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          {step === "brand" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Choisissez votre marque
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {brands.map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => handleBrandSelect(brand.id as Brand)}
                    className="flex flex-col items-center justify-center p-6 border-2 rounded-lg hover:border-[#c7e5c6] hover:bg-blue-50 transition-colors"
                  >
                    <img
                      src={brand.logo}
                      alt={`Logo ${brand.name}`}
                      className="w-16 h-16 mb-4 object-contain"
                    />
                    <span className="text-lg font-medium">{brand.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === "model" && selectedBrand && (
            <div>
              <button
                onClick={() => setStep("brand")}
                className="text-[#c7e5c6] mb-4 flex items-center hover:underline"
              >
                <ChevronRight className="w-4 h-4 rotate-180 mr-1" />
                Retour
              </button>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Choisissez votre modèle
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {models[selectedBrand].map((model) => (
                  <button
                    key={model}
                    onClick={() => handleModelSelect(model)}
                    className="flex items-center justify-between p-4 border-2 rounded-lg hover:border-[#c7e5c6] hover:bg-blue-50 transition-colors"
                  >
                    <span className="text-lg">{model}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === "repair" && selectedModel && (
            <div>
              <button
                onClick={() => setStep("model")}
                className="text-[#c7e5c6] mb-4 flex items-center hover:underline"
              >
                <ChevronRight className="w-4 h-4 rotate-180 mr-1" />
                Retour
              </button>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Que souhaitez-vous réparer sur votre {selectedModel} ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getRepairOptions().map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleRepairSelect(option.id)}
                    className="flex items-center justify-between p-4 border-2 rounded-lg hover:border-[#c7e5c6] hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <Wrench className="w-6 h-6 text-[#c7e5c6] mr-3" />
                      <div>
                        <div className="text-lg font-medium">
                          {option.label}
                        </div>
                        <div className="text-sm text-gray-500">
                          Durée : {option.duration}
                        </div>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-[#c7e5c6]">
                      {option.price}€
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500 mt-6">
                ✅ Déplacement gratuit · 🔒 Garantie 6 mois · 📍 Toute la
                Gironde
              </p>
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  );
};

export default RepairConfigurator;
