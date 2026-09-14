# Release checklist

## Automated readiness
- [ ] `npm ci && npm run check` passes on the release commit.
- [ ] `EXPO_PUBLIC_USE_REAL_SERVICES=true npm run validate:env` passes in the protected production environment.
- [ ] Package, Expo app version, iOS build number and Android version code are incremented.
- [ ] Dependency audit has no critical production finding.
- [ ] Database migrations were applied and verified in staging before production.

## Security and data
- [ ] Supabase RLS is tested with two isolated users; blocked users cannot discover or message each other.
- [ ] Private avatar access, report/block flows, account deletion and retention behavior are verified.
- [ ] No service-role, SMS, push or selfie-provider secret is bundled in the Expo client or committed.
- [ ] Privacy policy, terms, age gate, consent copy and store data-safety declarations are approved.

## Mobile release
- [ ] Phone auth, realtime messaging, notifications and selfie verification pass on physical iOS and Android devices.
- [ ] Location-denied, notification-denied, offline and provider-failure paths are tested.
- [ ] Store screenshots, descriptions, support URL and review notes are current.
- [ ] Staged EAS builds are installed and smoke-tested; production promotion requires explicit approval.

## Rollout and recovery
- [ ] Supabase backup/PITR and migration rollback procedure are verified.
- [ ] Crash/uptime monitoring, abuse escalation and owner contacts are active.
- [ ] Phased rollout, rollback criteria and previous signed binaries are available.
- [ ] Release tag and GitHub release notes are created from the verified main commit.
