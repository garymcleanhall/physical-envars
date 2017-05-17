'use strict';

const physical = {
  envars: require('../index')
}

function testAsync(runAsync) {
  return (done) => {
    runAsync().then(done, error => {
      fail(error)
      done()
    })
  }
}

describe('Physical Env Vars', () => {

  it('is ok when environment variable has any value', testAsync(async () => {
    let environmentVariable = 'MY_ENV_VAR'
    process.env[environmentVariable] = 'SOMETHING'
    let envarsResult = await physical.envars.check(environmentVariable)
    expect(envarsResult.isOk).toBe(true)
  }))

  it('is not ok when environment variable is undefined', testAsync(async () => {
    let environmentVariable = 'RANDOM_UNSET_ENVAR_ABCXYZ'
    let envarsResult = await physical.envars.check(environmentVariable)
    expect(envarsResult.isOk).toBe(false)
  }))

})