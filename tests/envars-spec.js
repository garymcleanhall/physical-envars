'use strict';

const physical = {
  envars: require('../index')
}

describe('Physical Env Vars', () => {

  it('is ok when environment variable has any value', () => {
    let environmentVariable = 'MY_ENV_VAR'
    process.env[environmentVariable] = 'SOMETHING'
    let envarsResult = physical.envars.check(environmentVariable)
    expect(envarsResult.isOk).toBe(true)
  })

  it('is not ok when environment variable is undefined', () => {
    let environmentVariable = 'RANDOM_UNSET_ENVAR_ABCXYZ'
    let envarsResult = physical.envars.check(environmentVariable)
    expect(envarsResult.isOk).toBe(false)
  })

})