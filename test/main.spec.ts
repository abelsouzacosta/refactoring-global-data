import { distanceTravelled } from "../src/main";

describe("Distance Travelled", () => {
  let scenario = {
    primaryForce: 1500,
    secondaryForce: 3000,
    mass: 100,
    delay: 80,
  };

  it("should return a valid result if secondary time equals to zero", () => {
    let result = distanceTravelled(scenario, 80);

    expect(result).toEqual(48000);
  });

  it("should retyurn a valid result if secondary time is higher than zero", () => {
    let result = distanceTravelled(scenario, 90);

    expect(result).toEqual(62250);
  });
});
