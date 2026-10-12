export const aiResponses: Record<string, string> = {
  bronze:
    "The Bronze Age and West African brass collections in the Linkay archive feature over 140 cataloged masterworks, prominently including the 16th-century Benin Bronze Oba plaques. These pieces showcase advanced lost-wax casting metallurgy. In our Digital Twin viewer, you can inspect their 1.8M polygon micro-relief with PBR surface reflections.",

  tour:
    "Here is your recommended 2-hour virtual museum expedition:\n1. 00:00 - 00:30: Ancient Egypt Hall (Electrum Diadems & Royal Sarcophagi)\n2. 00:30 - 01:10: African Dynasties Gallery (Benin Bronzes & Ashanti Gold)\n3. 01:10 - 01:40: Axum Stele & Tigray Monoliths in 360° VR\n4. 01:40 - 02:00: Cosmic Observatory Archeo-Astronomy Dome simulation.",

  "1200 bce":
    "Artifacts dating to approximately 1200 BCE in our collection include the Pharaoh's Ceremonial Crown of the Late New Kingdom (Amenhotep dynasty transition), Nubian electrum signet rings, and early Mycenaean trade amphora shards verified with radiocarbon dating (AMS C-14 ±25 BP).",

  token:
    "The LTM (Linkay Thinktank Museum) token powers the decentralized museum economy. It unlocks premium WebXR spatial galleries, verifies sovereign bidders in private auctions, and offers staking rewards up to 19.3% APY funded through protocol licensing fees.",

  auction:
    "Our Private Auction Engine provides verifiable smart contract escrow for museum-grade physical masterworks and 1:1 certified digital twin NFTs. All participants undergo Tier 1-3 provenance accreditation before submitting on-chain bids.",

  physica:
    "Physica represents our smart physical museum infrastructure. Every exhibit pedestal features sub-second RFID and NFC sensors, connected to edge compute nodes that maintain optimal microclimate temperature (20.5°C) and relative humidity (45%).",

  default:
    "Greetings! I am the Linkay Thinktank AI Museum Guide. I can walk you through artifact histories, generate customized WebXR tour routes, inspect on-chain cryptographic provenance hashes, or guide you through the LTM token economy. What would you like to explore?",
};

export function getAIResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, response] of Object.entries(aiResponses)) {
    if (key !== "default" && lower.includes(key)) {
      return response;
    }
  }
  return aiResponses.default;
}
