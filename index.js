function distanceFromHqInBlocks(location) {
    const hqLocation = 42; // Assuming HQ is at block 42
    return Math.abs(location - hqLocation); 

  }

  function distanceFromHqInBlocks(location) {
  const hqLocation = 42; // Headquarters is at block 42
  return Math.abs(location - hqLocation); // Absolute difference
}

function distanceFromHqInBlocks(location) {
    const hqLocation = 42; // Headquarters is at block 42
    return Math.abs(location - hqLocation); // Absolute difference in blocks
  }
  
  function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location); // Get distance in blocks
    return blocks * 264; // Convert blocks to feet
  }
  
  function distanceFromHqInBlocks(location) {
  const hqLocation = 42; // Headquarters is at block 42
  return Math.abs(location - hqLocation); // Calculate absolute block difference
}

function distanceTravelledInFeet(start, destination) {
  const distanceInBlocks = Math.abs(destination - start); // Absolute block difference
  return distanceInBlocks * 264; // Convert blocks to feet
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = Math.abs(destination - start) * 264;

    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        const chargeableDistance = distanceInFeet - 400;
        return chargeableDistance * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

// Export the function (see step 2)




  
