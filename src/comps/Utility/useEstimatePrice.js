export default function useEstimatePrice({ course } = {}) {
  const sessionsObj = course.specs.find((obj) => obj.label === "جلسات");
  const sessionsNumber =
    sessionsObj && !isNaN(parseInt(sessionsObj.describe))
      ? parseInt(sessionsObj.describe)
      : 0;
  const coursePrice = course.publicLink ? course.price : course.privatePrice;
  const estimatedPrice = sessionsNumber * coursePrice;
  return estimatedPrice;
}
