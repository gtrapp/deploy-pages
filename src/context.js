const core = require('@actions/core')

// Load variables from Actions runtime
module.exports = {
  runTimeUrl: process.env.ACTIONS_RUNTIME_URL,
  workflowRun: process.env.GITHUB_RUN_ID,
  runTimeToken: process.env.ACTIONS_RUNTIME_TOKEN,
  repositoryNwo: process.env.GITHUB_REPOSITORY,
  buildVersion: process.env.GITHUB_SHA,
  buildActor: process.env.GITHUB_ACTOR,
  actionsId: process.env.GITHUB_ACTION,
  actionsPath: process.env.GITHUB_ACTION_PATH,
  githubToken: core.getInput('token')
}
