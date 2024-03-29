const API_VERSION = 'v1'

async function httpGetPlanets() {
  const response = await fetch(`${API_VERSION}/planets`)
  // Load planets and return as JSON.
  return await response.json()
}

async function httpGetLaunches() {
  const response = await fetch(`${API_VERSION}/launches`)
  const fetchedLaunches = await response.json()

  return await fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber
  })
}

async function httpSubmitLaunch(launch) {
  try {

    return await fetch(`${API_VERSION}/launches`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(launch),
    })
  } catch (err) {
    return {
      ok: false
    }
  }
    // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_VERSION}/launches/${id}`, {
      method: 'delete'
    })
  } catch (err) {
    return {
      ok: false,
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};