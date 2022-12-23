// @ts-nocheck

// todo: [refactor] - variable acc has more than one responsibility
// it receives two values along the code so it has more than one, actually two
// responsibilities, so it must be replaced for two variables with one responsibility each

// change the name of the variable until the first reassingment
// make the variable immutable
// repeat cycle
export function distanceTravelled(scenario, time) {
  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass;
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime;

  let secondaryTime = time - scenario.delay;

  if (secondaryTime > 0) {
    let primaryVelocity = primaryAcceleration * scenario.delay;
    let acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;

    result +=
      primaryVelocity * secondaryTime +
      0.5 * acc * secondaryTime * secondaryTime;
  }

  return result;
}
