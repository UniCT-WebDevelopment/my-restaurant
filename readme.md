# Progetto Pizzeria

Questo è un progetto Laravel per la gestione di una pizzeria.

## Requisiti

Prima di iniziare, assicurati di aver soddisfatto i seguenti requisiti:

- [XAMPP](https://www.apachefriends.org/index.html) con PHP versione 8.2.4
- [Composer](https://getcomposer.org/download/) versione 2.5.8

## Installazione

1. Scarica e installa XAMPP con PHP versione 8.2.4 dal seguente link: [Download XAMPP](https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.2.4/)

2. Scarica e installa Composer versione 2.5.8 dal seguente link: [Download Composer](https://getcomposer.org/download/)

3. Apri XAMPP e avvia i servizi Apache e MySQL.

4. Importa il database:
   - Prendi il file SQL del database "pizzeria.sql".
   - Accedi a PHPMyAdmin (solitamente http://localhost/phpmyadmin).
   - Crea un nuovo database chiamato "pizzeria".
   - Seleziona il database "pizzeria" e fai clic sulla scheda "Importa".
   - Carica il file SQL precedentemente scaricato e avvia l'importazione.

5. Clona questo repository o scarica il codice sorgente.

6. Apri il terminale nella directory del progetto e esegui il comando:
`composer update`

7. Assicurati che il file `.env` sia correttamente configurato con i dati del database:
```php
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=pizzeria
DB_USERNAME=root
DB_PASSWORD=
```

8. Genera la chiave dell'applicazione:
`php artisan key:generate`

9. Configura le credenziali del database nel file `.env`.

10. Esegui le migrazioni per creare le tabelle del database:
 ```
 php artisan migrate
 ```

11. Avvia il server locale di Laravel:
 ```
 php artisan serve
 ```

12. Ora puoi accedere all'applicazione tramite il browser all'indirizzo [http://localhost:8000](http://localhost:8000).

## Utilizzo

- Accedi all'applicazione e inizia a gestire i prodotti, gli ordini e le consegne.

## Autore
Giuseppe Pisasale


