      const words = [
        { english: "abandon", turkish: "terk etmek" },
        { english: "abate", turkish: "azaltmak" },
        { english: "abhor", turkish: "nefret etmek" },
        { english: "ability", turkish: "yetenek" },
        { english: "abound", turkish: "bolluk içinde olmak" },
        { english: "abrupt", turkish: "ani" },
        { english: "absence", turkish: "yokluk" },
        { english: "absolute", turkish: "mutlak" },
        { english: "absorb", turkish: "emmek" },
        { english: "abstain", turkish: "kaçınmak" },
        { english: "abundant", turkish: "bol" },
        { english: "abuse", turkish: "kötüye kullanmak" },
        { english: "academic", turkish: "akademik" },
        { english: "accelerate", turkish: "hızlanmak" },
        { english: "accentuate", turkish: "vurgulamak" },
        { english: "acceptance", turkish: "kabul" },
        { english: "accessible", turkish: "erişilebilir" },
        { english: "accommodate", turkish: "yer sağlamak" },
        { english: "accompany", turkish: "eşlik etmek" },
        { english: "accomplish", turkish: "başarmak" },
        { english: "accord", turkish: "anlaşma" },
        { english: "accountable", turkish: "sorumlu" },
        { english: "accumulate", turkish: "biriktirmek" },
        { english: "accurate", turkish: "doğru" },
        { english: "accustomed", turkish: "alışkın" },
        { english: "ache", turkish: "ağrı" },
        { english: "acknowledge", turkish: "kabul etmek" },
        { english: "acquaint", turkish: "tanımak" },
        { english: "acquire", turkish: "edinmek" },
        { english: "acquisition", turkish: "edinim" },
        { english: "activate", turkish: "etkinleştirmek" },
        { english: "active", turkish: "aktif" },
        { english: "adapt", turkish: "uyum sağlamak" },
        { english: "adequate", turkish: "yeterli" },
        { english: "adhere", turkish: "yapışmak" },
        { english: "adjacent", turkish: "bitişik" },
        { english: "adjoin", turkish: "bitiştirmek" },
        { english: "adjust", turkish: "ayarlamak" },
        { english: "administration", turkish: "idare" },
        { english: "admirable", turkish: "hayranlık uyandıran" },
        { english: "admission", turkish: "giriş" },
        { english: "admit", turkish: "kabul etmek" },
        { english: "adopt", turkish: "benimsemek" },
        { english: "adore", turkish: "hayran olmak" },
        { english: "advance", turkish: "ileri" },
        { english: "adventure", turkish: "macera" },
        { english: "adverse", turkish: "olumsuz" },
        { english: "advisable", turkish: "tavsiye edilir" },
        { english: "advise", turkish: "tavsiye etmek" },
        { english: "advocate", turkish: "savunmak" },
        { english: "aesthetic", turkish: "estetik" },
        { english: "affection", turkish: "sevgi" },
        { english: "affiliate", turkish: "bağlı olmak" },
        { english: "affirm", turkish: "doğrulamak" },
        { english: "afflict", turkish: "rahatsız etmek" },
        { english: "afford", turkish: "maddi gücü yetmek" },
        { english: "aforementioned", turkish: "yukarıda sözü edilen" },
        { english: "afraid", turkish: "korkmuş" },
        { english: "aftermath", turkish: "sonuç" },
        { english: "against", turkish: "karşı" },
        { english: "ageless", turkish: "yaşlanmayan" },
        { english: "aggravate", turkish: "kötüleştirmek" },
        { english: "aggressive", turkish: "saldırgan" },
        { english: "agile", turkish: "çevik" },
        { english: "agitate", turkish: "kışkırtmak" },
        { english: "agreeable", turkish: "uyumlu" },
        { english: "agriculture", turkish: "tarım" },
        { english: "ahead", turkish: "önünde" },
        { english: "aid", turkish: "yardım" },
        { english: "aim", turkish: "amaç" },
        { english: "aircraft", turkish: "uçak" },
        { english: "airtight", turkish: "hava geçirmez" },
        { english: "alarming", turkish: "endişe verici" },
        { english: "alien", turkish: "yabancı" },
        { english: "alike", turkish: "benzer" },
        { english: "alive", turkish: "canlı" },
        { english: "allege", turkish: "iddia etmek" },
        { english: "alleviate", turkish: "hafifletmek" },
        { english: "allocate", turkish: "ayırmak" },
        { english: "allowance", turkish: "harçlık" },
        { english: "allude", turkish: "ima etmek" },
        { english: "ally", turkish: "müttefik" },
        { english: "aloof", turkish: "soğuk" },
        { english: "alter", turkish: "değiştirm" },
        { english: "apple", turkish: "elma" },
        { english: "book", turkish: "kitap" },
        { english: "house", turkish: "ev" },
        { english: "car", turkish: "araba" },
        { english: "animal", turkish: "hayvan" },
        { english: "answer", turkish: "cevap" },
        { english: "baby", turkish: "bebek" },
        { english: "bag", turkish: "çanta" },
        { english: "ball", turkish: "top" },
        { english: "bank", turkish: "banka" },
        { english: "bathroom", turkish: "banyo" },
        { english: "beach", turkish: "plaj" },
        { english: "bear", turkish: "ayı" },
        { english: "beautiful", turkish: "güzel" },
        { english: "bed", turkish: "yatak" },
        { english: "bedroom", turkish: "yatak odası" },
        { english: "beer", turkish: "bira" },
        { english: "begin", turkish: "başlamak" },
        { english: "bell", turkish: "zil" },
        { english: "big", turkish: "büyük" },
        { english: "bird", turkish: "kuş" },
        { english: "black", turkish: "siyah" },
        { english: "blue", turkish: "mavi" },
        { english: "boat", turkish: "tekne" },
        { english: "body", turkish: "vücut" },
        { english: "bone", turkish: "kemik" },
        { english: "book", turkish: "kitap" },
        { english: "bottle", turkish: "şişe" },
        { english: "box", turkish: "kutu" },
        { english: "boy", turkish: "erkek çocuk" },
        { english: "bread", turkish: "ekmek" },
        { english: "break", turkish: "kırmak" },
        { english: "breakfast", turkish: "kahvaltı" },
        { english: "brother", turkish: "erkek kardeş" },
        { english: "brown", turkish: "kahverengi" },
        { english: "build", turkish: "inşa etmek" },
        { english: "bus", turkish: "otobüs" },
        { english: "butter", turkish: "tereyağı" },
        { english: "buy", turkish: "satın almak" },
        { english: "cake", turkish: "pasta" },
        { english: "camera", turkish: "kamera" },
        { english: "camp", turkish: "kamp" },
        { english: "car", turkish: "araba" },
        { english: "cat", turkish: "kedi" },
        { english: "catch", turkish: "yakalamak" },
        { english: "chair", turkish: "sandalye" },
        { english: "cheese", turkish: "peynir" },
        { english: "chicken", turkish: "tavuk" },
        { english: "child", turkish: "çocuk" },
        { english: "chocolate", turkish: "çikolata" },
        { english: "cinema", turkish: "sinema" },
        { english: "city", turkish: "şehir" },
        { english: "class", turkish: "sınıf" },
        { english: "clean", turkish: "temiz" },
        { english: "close", turkish: "kapatmak" },
        { english: "coffee", turkish: "kahve" },
        { english: "cold", turkish: "soğuk" },
        { english: "color", turkish: "renk" },
        { english: "come", turkish: "gelmek" },
        { english: "computer", turkish: "bilgisayar" },
        { english: "cook", turkish: "yemek pişirmek" },
        { english: "cool", turkish: "serin" },
        { english: "country", turkish: "ülke" },
        { english: "cow", turkish: "inek" },
        { english: "cup", turkish: "fincan" },
        { english: "cut", turkish: "kesmek" },
        { english: "dance", turkish: "dans" },
        { english: "day", turkish: "gün" },
        { english: "dear", turkish: "sevgili" },
        { english: "desk", turkish: "çalışma masası" },
        { english: "die", turkish: "ölmek" },
        { english: "dinner", turkish: "akşam yemeği" },
        { english: "dog", turkish: "köpek" },
        { english: "door", turkish: "kapı" },
        { english: "dream", turkish: "rüya" },
        { english: "dress", turkish: "elbise" },
        { english: "drink", turkish: "içmek" },
        { english: "drive", turkish: "sürmek" },
        { english: "ear", turkish: "kulak" },
        { english: "eat", turkish: "yemek" },
        { english: "egg", turkish: "yumurta" },
        { english: "eight", turkish: "sekiz" },
        { english: "elephant", turkish: "fil" },
        { english: "email", turkish: "e-posta" },
        { english: "end", turkish: "son" },
        { english: "evening", turkish: "akşam" },
        { english: "eye", turkish: "göz" },
        { english: "face", turkish: "yüz" },
        { english: "family", turkish: "aile" },
        { english: "farm", turkish: "çiftlik" },
        { english: "father", turkish: "baba" },
        { english: "fish", turkish: "balık" },
        { english: "five", turkish: "beş" },
        { english: "flower", turkish: "çiçek" },
        { english: "food", turkish: "yiyecek" },
        { english: "apple", turkish: "elma" },
        { english: "book", turkish: "kitap" },
        { english: "house", turkish: "ev" },
        { english: "car", turkish: "araba" },
        { english: "animal", turkish: "hayvan" },
        { english: "answer", turkish: "cevap" },
        { english: "baby", turkish: "bebek" },
        { english: "bag", turkish: "çanta" },
        { english: "ball", turkish: "top" },
        { english: "bank", turkish: "banka" },
        { english: "bathroom", turkish: "banyo" },
        { english: "beach", turkish: "plaj" },
        { english: "bear", turkish: "ayı" },
        { english: "beautiful", turkish: "güzel" },
        { english: "bed", turkish: "yatak" },
        { english: "bedroom", turkish: "yatak odası" },
        { english: "beer", turkish: "bira" },
        { english: "begin", turkish: "başlamak" },
        { english: "bell", turkish: "zil" },
        { english: "big", turkish: "büyük" },
        { english: "bird", turkish: "kuş" },
        { english: "black", turkish: "siyah" },
        { english: "blue", turkish: "mavi" },
        { english: "boat", turkish: "tekne" },
        { english: "body", turkish: "vücut" },
        { english: "bone", turkish: "kemik" },
        { english: "book", turkish: "kitap" },
        { english: "bottle", turkish: "şişe" },
        { english: "box", turkish: "kutu" },
        { english: "boy", turkish: "erkek çocuk" },
        { english: "bread", turkish: "ekmek" },
        { english: "break", turkish: "kırmak" },
        { english: "breakfast", turkish: "kahvaltı" },
        { english: "brother", turkish: "erkek kardeş" },
        { english: "brown", turkish: "kahverengi" },
        { english: "build", turkish: "inşa etmek" },
        { english: "bus", turkish: "otobüs" },
        { english: "butter", turkish: "tereyağı" },
        { english: "buy", turkish: "satın almak" },
        { english: "cake", turkish: "pasta" },
        { english: "camera", turkish: "kamera" },
        { english: "camp", turkish: "kamp" },
        { english: "car", turkish: "araba" },
        { english: "cat", turkish: "kedi" },
        { english: "catch", turkish: "yakalamak" },
        { english: "chair", turkish: "sandalye" },
        { english: "cheese", turkish: "peynir" },
        { english: "chicken", turkish: "tavuk" },
        { english: "child", turkish: "çocuk" },
        { english: "chocolate", turkish: "çikolata" },
        { english: "cinema", turkish: "sinema" },
        { english: "city", turkish: "şehir" },
        { english: "class", turkish: "sınıf" },
        { english: "clean", turkish: "temiz" },
        { english: "close", turkish: "kapatmak" },
        { english: "coffee", turkish: "kahve" },
        { english: "cold", turkish: "soğuk" },
        { english: "color", turkish: "renk" },
        { english: "come", turkish: "gelmek" },
        { english: "computer", turkish: "bilgisayar" },
        { english: "cook", turkish: "yemek pişirmek" },
        { english: "cool", turkish: "serin" },
        { english: "country", turkish: "ülke" },
        { english: "cow", turkish: "inek" },
        { english: "cup", turkish: "fincan" },
        { english: "cut", turkish: "kesmek" },
        { english: "dance", turkish: "dans" },
        { english: "day", turkish: "gün" },
        { english: "dear", turkish: "sevgili" },
        { english: "desk", turkish: "çalışma masası" },
        { english: "die", turkish: "ölmek" },
        { english: "dinner", turkish: "akşam yemeği" },
        { english: "dog", turkish: "köpek" },
        { english: "door", turkish: "kapı" },
        { english: "dream", turkish: "rüya" },
        { english: "dress", turkish: "elbise" },
        { english: "drink", turkish: "içmek" },
        { english: "drive", turkish: "sürmek" },
        { english: "ear", turkish: "kulak" },
        { english: "eat", turkish: "yemek" },
        { english: "egg", turkish: "yumurta" },
        { english: "eight", turkish: "sekiz" },
        { english: "elephant", turkish: "fil" },
        { english: "email", turkish: "e-posta" },
        { english: "end", turkish: "son" },
        { english: "evening", turkish: "akşam" },
        { english: "eye", turkish: "göz" },
        { english: "face", turkish: "yüz" },
        { english: "family", turkish: "aile" },
        { english: "farm", turkish: "çiftlik" },
        { english: "father", turkish: "baba" },
        { english: "fish", turkish: "balık" },
        { english: "five", turkish: "beş" },
        { english: "flower", turkish: "çiçek" },
        { english: "food", turkish: "yiyecek" },
        { english: "foot", turkish: "ayak" },
        { english: "forest", turkish: "orman" },
        { english: "four", turkish: "dört" },
        { english: "friend", turkish: "arkadaş" },
        { english: "fun", turkish: "eğlence" },
        { english: "game", turkish: "oyun" },
        { english: "garden", turkish: "bahçe" },
        { english: "girl", turkish: "kız çocuk" },
        { english: "give", turkish: "vermek" },
        { english: "glass", turkish: "cam" },
        { english: "go", turkish: "gitmek" },
        { english: "good", turkish: "iyi" },
        { english: "goodbye", turkish: "hoşça kal" },
        { english: "grandfather", turkish: "dede" },
        { english: "grandmother", turkish: "büyükanne" },
        { english: "green", turkish: "yeşil" },
        { english: "guitar", turkish: "gitar" },
        { english: "hair", turkish: "saç" },
        { english: "hand", turkish: "el" },
        { english: "happy", turkish: "mutlu" },
        { english: "hat", turkish: "şapka" },
        { english: "head", turkish: "baş" },
        { english: "hear", turkish: "duymak" },
        { english: "hello", turkish: "merhaba" },
        { english: "help", turkish: "yardım etmek" },
        { english: "here", turkish: "burada" },
        { english: "hi", turkish: "merhaba" },
        { english: "hill", turkish: "tepe" },
        { english: "home", turkish: "ev" },
        { english: "horse", turkish: "at" },
        { english: "hospital", turkish: "hastane" },
        { english: "hot", turkish: "sıcak" },
        { english: "hotel", turkish: "otel" },
      ];
      let timerInterval;
      let score = 0;
      let secondsLeft = 60; // 1 dakika
      let wrongAttempts = 0;
      // Kelime seçimi ve oyunun başlaması için butonlara erişim
      const startButton = document.getElementById("startButton");
      const resetButton = document.getElementById("resetButton");
      // Skoru ve zamanlayıcıyı gösteren alanlara erişim
      const scoreDisplay = document.getElementById("score");
      const timerDisplay = document.getElementById("timer");
      // Soruyu ve seçenekleri gösteren alanlara erişim
      const questionDisplay = document.getElementById("question");
      const optionsContainer = document.getElementById("options");
      // HTML'deki yanlış sayısını gösteren alanı seçin
      const wrongAttemptsDisplay = document.getElementById("wrongAttempts");

      // Kelime seçme fonksiyonu
      function selectWord() {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
      }
      // Soru ve seçenekleri güncelleyen fonksiyon
      function updateQuestion() {
        const word = selectWord();
        const options = [word.turkish]; // Doğru cevabı ilk sıraya koy
        while (options.length < 4) {
          const randomWord = selectWord().turkish;
          if (!options.includes(randomWord)) {
            options.push(randomWord);
          }
        }
        shuffleArray(options); // Seçenekleri karıştır
        renderQuestion(word, options);
      }
      // Karıştırma fonksiyonu
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
      // Oyunu başlatan fonksiyon
      function startGame() {
        startButton.disabled = true; // Başlat butonunu devre dışı bırak
        resetButton.disabled = false; // Sıfırla butonunu etkinleştir
        updateQuestion(); // İlk soruyu göster
        timerInterval = setInterval(updateTimer, 1000); // Timer'ı başlat
      }
      // Zamanlayıcıyı güncelleyen fonksiyon
      function updateTimer() {
        secondsLeft--;
        if (secondsLeft <= 0) {
          clearInterval(timerInterval);
          endGame();
        } else {
          timerDisplay.textContent = formatTime(secondsLeft);
        }
      }
      // Zaman formatını ayarlayan yardımcı fonksiyon
      function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
          .toString()
          .padStart(2, "0")}`;
      }
      // Oyunu bitiren fonksiyon
      function endGame() {
        startButton.disabled = false; // Başlat butonunu etkinleştir
        resetButton.disabled = true; // Sıfırla butonunu devre dışı bırak

        alert(
          `Oyun bitti! Toplam skor: ${score} Toplam yanlış: ${wrongAttempts}`
        );

        score = 0; // Skoru sıfırla
        secondsLeft = 60; // Zamanlayıcıyı sıfırla
        wrongAttempts = 0; // Yanlış deneme sayısını sıfırla

        scoreDisplay.textContent = 0;
        wrongAttemptsDisplay.textContent = 0;
        timerDisplay.textContent = formatTime(secondsLeft); // Zamanlayıcıyı güncelle,

        questionDisplay.textContent = " "; // Soruyu ekrandan kaldır
        optionsContainer.innerHTML = ""; // Seçenekleri ekrandan kaldır
      }
      // Yanlış sayısını gösteren fonksiyon
      function updateWrongAttemptsDisplay() {
        wrongAttemptsDisplay.textContent = `Yanlış: ${wrongAttempts}`;
      }

      // Cevabın doğruluğunu kontrol eden fonksiyon
      function checkAnswer(selectedOption, correctAnswer) {
        if (selectedOption === correctAnswer) {
          score++;
          scoreDisplay.textContent = `Score: ${score}`;
        } else {
          wrongAttempts++;
          wrongAttemptsDisplay.textContent = `Wrong: ${wrongAttempts}`; // Yanlış sayısını güncelle
          if (wrongAttempts >= 7) {
            clearInterval(timerInterval);
            endGame();
            return; // 7 yanlış hakkı olduğunda oyun biter
          }
        }
        updateQuestion(); // Yeni bir soru göster
      }
      // Soruyu ve seçenekleri ekrana render eden fonksiyon
      function renderQuestion(word, options) {
        questionDisplay.textContent = `İngilizcesi "${word.english}" olan kelimenin Türkçe karşılığı hangisidir?`;
        optionsContainer.innerHTML = ""; // Seçenekleri temizle
        options.forEach((option) => {
          const optionElement = document.createElement("div");
          optionElement.classList.add("option");
          optionElement.textContent = option;
          optionElement.addEventListener("click", () => {
            checkAnswer(option, word.turkish);
          });
          optionsContainer.appendChild(optionElement);
        });
      }
      // Başlat butonuna tıklama olayı
      startButton.addEventListener("click", startGame);
      // Sıfırla butonuna tıklama olayı
      //resetButton.addEventListener("click", resetButtonF);

      const resetButtonF = () => {
        clearInterval(timerInterval);
        secondsLeft = 60;
        timerDisplay.textContent = formatTime(secondsLeft);
        startButton.disabled = false;
        resetButton.disabled = true;

        score = 0;
        wrongAttempts = 0; // Yanlış deneme sayısını sıfırla

        scoreDisplay.textContent = `Score: ${score}`;
        wrongAttemptsDisplay.textContent = `wrong: ${wrongAttempts}`;
        questionDisplay.textContent = ""; // Soruyu ekrandan kaldır
        optionsContainer.innerHTML = ""; // Seçenekleri ekrandan kaldır
      };

      resetButton.addEventListener("click", resetButtonF);

      // Sayfa yüklendiğinde timer'ı başlat
      window.onload = () => {
        timerDisplay.textContent = formatTime(secondsLeft);
      };
    
