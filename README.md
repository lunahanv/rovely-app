# Rovely

Denizli lansmanlı, izinli konuma dayalı iOS/Android dating MVP’si. Expo + React Native + TypeScript.

## Çalıştırma

```bash
npm install
npm start
npm run check
```

Mock OTP: `123456`. Mock akışta `Ece` ile beğeni karşılıklı eşleşme üretir.

## MVP kapsamı

- Profil, 18+ onayı, telefon ve canlı selfie doğrulama durumları
- İzinli konum adaptörü; 1–50 km yarıçap (varsayılan 50 km)
- Kesin koordinat gösterilmez; kartlarda yalnızca yuvarlanmış yaklaşık mesafe
- Beğen/geç, karşılıklı eşleşme ve iki tarafın mesaj başlatabildiği sohbet taslağı
- Engelleme/şikâyet adaptörü ve konuma göre keşfedilme kontrolü
- Tip güvenliği, ESLint, Jest ve GitHub Actions CI

## Mimari ve güvenlik

UI yalnızca domain modelleri ile adaptör arayüzlerine bağlıdır. Harici anahtar bulunmadığı için `src/services/adapters.ts` güvenli mock sağlar. Konum izni reddedilirse koordinat alınmaz. Üretimde ham koordinatlar istemciye/profile payload’ına dönmemeli; backend’de şifreli, kısa ömürlü ve erişim kontrollü tutulmalı, mesafe sorgusu sunucu tarafında yapılmalıdır. Log/analytics’e koordinat, telefon veya selfie yazılmamalıdır.

## Üretim için zorunlu entegrasyonlar

1. Kimlik/auth ve veritabanı backend’i (örn. Supabase/Firebase veya özel API), row-level authorization ve rate limiting.
2. SMS OTP sağlayıcısı; abuse/fraud limiti ve telefon numarası şifreleme.
3. Gerçek liveness + yaş/kimlik doğrulama sağlayıcısı; açık rıza, saklama/silme politikası ve KVKK uyumu.
4. Güvenli medya depolama, içerik moderasyonu, engel/şikâyet inceleme paneli ve acil güvenlik süreci.
5. Push notifications, gerçek zamanlı sohbet, spam önleme ve kullanıcı silme/veri indirme akışları.
6. Apple/Google geliştirici hesapları, bundle kimlikleri, gizlilik politikası, kullanım koşulları ve mağaza yaş derecelendirmesi.
7. EAS project bağlantısı ve yalnızca GitHub Environments secrets üzerinden `EXPO_TOKEN`/sağlayıcı sırları. Sırlar repoya eklenmemelidir.

Bu repo üretim yayını değildir; doğrulama ve eşleşme verileri mock’tur.
