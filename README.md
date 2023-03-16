# mongo-db-demo
Test amaçlı demo mağaza yönetim app'i

## Kurulum

`example.env` dosyasının ismini `.env` olarak değiştirilip değerlerin uygun şekilde doldurulduğundan emin olunuz.
> Bazı işlemler MongoDB Transaction içermesi sebebi ile kullanacağınız MongoDB nin cluster özelliğine sahip olduğundan emin olunuz.

Projenin bulunduğu klasörde `npm install` ve daha sonra `node index.js` komutlarını çalıştırarak app ayağa kaldırılabilir.
> Yapılacak olan değişikliklerin izlenmesi (hot reload) için `npm run dev` komutu kullanılabilir.

## Kullanılan Paketler

- express
- dotenv
- joi
- mongoose
- nodemon (Geliştirme amaçlı)
- swagger-ui-express

## Döküman

Requestlerin detay ve testini kapsayan `swagger-ui-express` kütüphanesi ile hazırlanmış `/docs` üzerinden dökümana erişilebilir.
