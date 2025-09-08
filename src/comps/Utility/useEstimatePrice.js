export default function useEstimatePrice({ course }) {
  const sessionsObj = course.specs.find((obj) => obj.label === "جلسات");
  const sessionsNumber = parseInt(sessionsObj.describe);
  const coursePrice = course.publicLink ? course.price : course.privatePrice;
  const estimatedPrice = sessionsNumber * coursePrice;
  return estimatedPrice;
}
