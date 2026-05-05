/**
 * Helper d'analytique pour Google Tag Manager (GTM-KJZRQ62H).
 *
 * Pousse des événements dans le dataLayer pour que GTM puisse les transmettre
 * à GA4 et déclencher les conversions.
 *
 * Sécurisé pour le SSR (vite-react-ssg) : ne fait rien côté serveur.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

type DataLayerEvent = {
  event: string;
  [key: string]: unknown;
};

/**
 * Pousse un événement générique dans le dataLayer.
 * Sans effet en SSR (typeof window === 'undefined').
 */
export function pushEvent(payload: DataLayerEvent): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/**
 * Tracke un clic sur le numéro de téléphone (lien <a href="tel:...">).
 * @param source — page ou composant d'où vient le clic (ex: "home_hero", "navbar", "service_page_ecran_iphone_bordeaux")
 */
export function trackCallClick(source: string): void {
  pushEvent({
    event: "call_click",
    call_source: source,
    phone_number: "0635175711",
  });
}

/**
 * Tracke une soumission de formulaire réussie.
 * @param formId — identifiant du formulaire (ex: "contact", "booking")
 * @param details — informations additionnelles (ex: { service: "ecran-iphone", city: "Bordeaux" })
 */
export function trackFormSubmit(formId: string, details: Record<string, unknown> = {}): void {
  pushEvent({
    event: "form_submit",
    form_id: formId,
    ...details,
  });
}

/**
 * Tracke un clic sur l'email (lien <a href="mailto:...">).
 */
export function trackEmailClick(source: string): void {
  pushEvent({
    event: "email_click",
    email_source: source,
  });
}

/**
 * Tracke une action de prise de RDV (clic sur "Prendre rendez-vous").
 */
export function trackBookingClick(source: string): void {
  pushEvent({
    event: "booking_click",
    booking_source: source,
  });
}
