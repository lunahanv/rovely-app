# Production setup

1. Create separate Supabase staging/production projects and run `supabase db push`.
2. Enable Phone Auth and configure a supported SMS provider. Never expose service-role/SMS secrets to Expo.
3. Configure values from `.env.example`; mock mode remains the default. Enable real services only after staging validation.
4. Create an EAS project and configure APNs/FCM credentials for Expo Notifications/builds.
5. Implement the selected live-selfie vendor behind `SelfieVerificationProvider`; vendor secrets belong in a Supabase Edge Function.
6. Verify RLS using two authenticated test users and generate signed avatar URLs.

External blockers: Supabase URL/anon key, SMS account, EAS/APNs/FCM credentials, and selfie-vendor credentials. Use separate GitHub Environments/Secrets for staging and production.
