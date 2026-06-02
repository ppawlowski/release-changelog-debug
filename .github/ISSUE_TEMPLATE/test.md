---
name: Release Checklist
about: Task to complete for a release
title: 'Release:'
labels: ''
---

# Responsibilities

## Release Manager 
- Perform all of the tasks to the end of **Phase Three**, ticking each checkbox as they go
- Update the `#dept-engineering` channel on slack with progress to ensure team members are aware of the status and have the chance to flag any issues.
- Close this release issue once all checks are complete



# Process

## Prior to Release Day

- [ ] Ensure that the latest FlowFuse Helm chart version has been used to deploy FlowFuse Cloud on both environments
  - compare currently deployed ([staging](https://github.com/FlowFuse/CloudProject/blob/main/.github/workflows/flowfuse.yaml#L32) and [production](https://github.com/FlowFuse/CloudProject/blob/main/.github/workflows/flowfuse.yaml#L57)) version with the [last released one](https://github.com/FlowFuse/helm/releases)
  - create a [change request](https://github.com/FlowFuse/CloudProject/issues/new/choose) in CloudProject repo to update the version if necessary

## Release Day (insert date here)

The full release process is documented here: https://flowfuse.com/handbook/engineering/release/

- [ ] Ensure you have all pre-requisites installed defined [here](https://flowfuse.com/handbook/engineering/releases/process/#setup) in the Handbook
- [ ] Once the release is ready to start, start a huddle in `#dept-engineering` channel on slack to allow others follow the process

### Phase One

Merge the auto-generated release PRs for the repositories listed below and confirm that the resulting npm/Docker publications and downstream `nr-launcher` bump PRs have been merged. These repos are no longer fully "unmanaged" — a dedicated workflow opens a Release pull request automatically; the release manager only needs to review and merge it (and, where applicable, also merge the follow-up PR it triggers in `nr-launcher`).

- [ ] Check that all items have been verified on the development board
- [ ] Ensure https://github.com/flowfuse/usage-ping-collector has been updated, if necessary
- [ ] Review and merge the open Release PR in each of the repositories below (skip a repo if no Release PR is open — it means nothing has changed since the last release, or someone has already merged the Release PR before the release manager got to it).

   **nr-launcher dependencies** (once the Release PR is merged, a pull request bumping the dependency version is opened in the `nr-launcher` repository — merge it as well before releasing `nr-launcher` in Phase Two):

   - [ ] `flowfuse/nr-assistant` [🔗](https://github.com/FlowFuse/nr-assistant/pulls?q=is%3Apr+label%3A%22autorelease%3A+pending%22)
   - [ ] `flowfuse/nr-project-nodes` [🔗](https://github.com/FlowFuse/nr-project-nodes/pulls?q=is%3Apr+label%3A%22autorelease%3A+pending%22)
   - [ ] `flowfuse/nr-file-nodes` [🔗](https://github.com/FlowFuse/nr-file-nodes/pulls?q=is%3Apr+label%3A%22autorelease%3A+pending%22)
   - [ ] `flowfuse/nr-mqtt-nodes` [🔗](https://github.com/FlowFuse/nr-mqtt-nodes/pulls?q=is%3Apr+label%3A%22autorelease%3A+pending%22)
   - [ ] `flowfuse/nr-tables-nodes` [🔗](https://github.com/FlowFuse/nr-tables-nodes/pulls?q=is%3Apr+label%3A%22autorelease%3A+pending%22)
   - [ ] `flowfuse/nr-subflow-export` [🔗](https://github.com/FlowFuse/nr-subflow-export/pulls?q=is%3Apr+label%3A%22autorelease%3A+pending%22)

   **Standalone packages**:

   - [ ] `flowfuse/nr-tools-plugin` [🔗](https://github.com/FlowFuse/nr-tools-plugin/pulls?q=is%3Apr+label%3A%22autorelease%3A+pending%22)
   - [ ] `flowfuse/nr-mcp-server-nodes` [🔗](https://github.com/FlowFuse/nr-mcp-server-nodes/pulls?q=is%3Apr+label%3A%22autorelease%3A+pending%22)
   - [ ] `flowfuse/mqtt-schema-agent` [🔗](https://github.com/FlowFuse/mqtt-schema-agent/pulls?q=is%3Apr+label%3A%22autorelease%3A+pending%22)
   - [ ] `flowfuse/verdaccio-ff-auth` [🔗](https://github.com/FlowFuse/verdaccio-ff-auth/pulls?q=is%3Apr+label%3A%22autorelease%3A+pending%22)
   - [ ] `flowfuse/device-agent` [🔗](https://github.com/FlowFuse/device-agent/pulls?q=is%3Apr+label%3A%22autorelease%3A+pending%22)

- [ ] Verify that all dependency version bump pull requests opened in the [`flowfuse/nr-launcher`](https://github.com/FlowFuse/nr-launcher/pulls?q=is%3Apr+is%3Aopen+%22chore%3A+bump%22) repository have been merged before `nr-launcher` itself is released in Phase Two.
- [ ] Verify that the helm/node-red-container Dockerfiles point to the [latest Node-RED releases](https://www.npmjs.com/package/node-red?activeTab=versions) (e.g. 4.1.0)
- [ ] Verify that helm [install-device-cache.sh](https://github.com/FlowFuse/helm/blob/main/flowforge-container/install-device-cache.sh) include the latest Node-RED release (e.g. 4.1.0)
- [ ] Verify that docker-compose [install-device-cache.sh](https://github.com/FlowFuse/docker-compose/blob/main/flowforge-docker/install-device-cache.sh) include the latest Node-RED release (e.g. 4.1.0)

Post to #dept-engineering on Slack that you've got this far.

### Phase Two

FlowFuse release process.

The `create-release` script in the [`admin`](https://github.com/FlowFuse/admin) repo will walk you through the release process for each of the **Managed Repositories** listed below, but for reference, they are listed in the order in which they must be released.

Follow the prompts in the script and check-off each item in this list as you make progress.

- [ ] Ensure that you have checked out the latest version of the [`admin`](https://github.com/FlowFuse/admin) repo to ensure you have the most up to date scripts
- [ ] Run `./create-release 2.x.y` from the `admin` directory to start the process.


#### What the `create-release` process will do for each item in the **Managed Repositories** list
1. Check for and present a list or outstanding PRs. These should be viewed and actioned or skipped accordingly before continuing.
2. Download the repository, update the `package.json` version number, update the change log and publish a release PR which will need to be reviewed before continuing.
3. Creating draft release for you to inspect before continuing.
4. Convert the draft release into a release.

#### Managed Repositories

- https://github.com/flowfuse/nr-launcher
    - [ ] Complete
- https://github.com/flowfuse/file-server
    - [ ] Complete
- https://github.com/flowfuse/driver-localfs
    - [ ] Complete
- https://github.com/flowfuse/driver-k8s
    - [ ] Complete
- https://github.com/flowfuse/driver-docker
    - [ ] Complete
- https://github.com/flowfuse/flowfuse
    - [ ] Complete
- https://github.com/flowfuse/installer
    - [ ] Complete
- https://github.com/flowfuse/helm
    - [ ] New versions of `flowforge/node-red` is present on [dockerhub](https://hub.docker.com/r/flowforge/node-red/tags)
        - Enter the release version number `x.y.z` in the search box and verify expected versions of Node-RED are published
    - [ ] New version `flowforge/file-server` is present on [dockerhub](https://hub.docker.com/r/flowforge/file-server/tags)
        - release version number `x.y.z` should be present
    - [ ] New version `flowforge/forge-k8s` is present on [dockerhub](https://hub.docker.com/r/flowforge/forge-k8s/tags)
        - release version number `x.y.z` should be present
    - [ ] Complete
- [ ] https://github.com/flowfuse/docker-compose (Tests expected to fail as containers not built yet)
    - [ ] New version `flowforge/forge-docker` is present on [dockerhub](https://hub.docker.com/r/flowforge/forge-docker/tags)
        - release version number `x.y.z` should be present
    - [ ] Complete

> :warning: **Before Digital Ocean Droplet or AWS-AMI packages can be published, the Release Action for helm and docker-compose need to complete. The release script will tell you when to wait and links to what you need to monitor.**: 

- [ ] https://github.com/flowfuse/digital-ocean-droplet
    - [ ] Update release on Digital Ocean Marketplace - this step can only be done by Nick or Ben currently
    - [ ] Complete
- [ ] https://github.com/flowfuse/aws-ami
    - [ ] Update release on AWS Marketplace
    - [ ] Complete
    
- [ ] Update the Node-RED stacks on the production FlowFuse Cloud platform
    - This can be monitored in [CloudProject → actions → runs](https://github.com/FlowFuse/CloudProject/actions/runs)

Post to #dept-engineering on Slack that you've got this far.

### Phase Three

Once everything has been published, the next phase is to ensure Production is full updated. Our CI/CD
process means Production will be automatically updated, however there may be manual configuration tasks
required specific to the release.

 - [ ] Confirm that stacks on FlowFuse Cloud production have been updated to the new release [🔗](https://app.flowfuse.com/admin/stacks).
    - This should be actioned by a member of Engineering team.
    - Check stack's `Name` and `Container location` contains the new version number
 - [ ] Check for any open change requests related to this release. Follow-up with their assignees/originators to get them applied
 
Post to #dept-engineering that you've got this far.

### Post-Release (Non-Engineering)

Release publication tasks (blog post, social media, in-app notification, etc.) are tracked separately in the [FlowFuse/product release tracking issue](https://github.com/FlowFuse/product/issues?q=is%3Aissue+is%3Aopen+%22Release%22).

## Day after release
- [ ] Update [this issue template with missing items](https://github.com/flowfuse/admin/edit/main/.github/ISSUE_TEMPLATE/release.md)
- [ ] Create a new release template for the next release
    - [ ] Assign to the next release manager
