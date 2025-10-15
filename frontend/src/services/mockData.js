// Mock data service for frontend-only implementation

let mockOffers = [];

export const submitOffer = async (offerData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newOffer = {
        id: Date.now().toString(),
        ...offerData,
        timestamp: new Date().toISOString()
      };
      mockOffers.push(newOffer);
      console.log('Mock offer submitted:', newOffer);
      console.log('All offers:', mockOffers);
      resolve(newOffer);
    }, 800);
  });
};

export const getOffers = () => {
  return mockOffers;
};