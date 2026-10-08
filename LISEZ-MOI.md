# EMG Scolarité — APK Android via GitHub

## 1. Mettre le projet sur GitHub
1. Crée un dépôt sur github.com (bouton **New**), par exemple `emg-scolarite`. Privé de préférence.
2. Clique sur **uploading an existing file** et glisse **tout le contenu** de ce dossier (y compris le dossier caché `.github`).
   - Si le dossier `.github` n'est pas envoyé, crée le fichier `.github/workflows/build-apk.yml` à la main via **Add file › Create new file** et colles-y le contenu fourni.
3. Valide avec **Commit changes**.

## 2. Récupérer l'APK
1. Onglet **Actions** du dépôt : la compilation démarre toute seule (5 à 10 minutes).
   Sinon : **Build APK** › **Run workflow**.
2. Quand la coche verte apparaît, ouvre l'exécution, descends jusqu'à **Artifacts** et télécharge **EMG-Scolarite-APK** (un zip contenant `app-debug.apk`).
3. Envoie l'APK sur le téléphone et installe-le (autorise « sources inconnues » si Android le demande).

## 3. Mettre à jour l'application
Remplace `www/index.html` par la nouvelle version du fichier de l'app (sur GitHub : **www › index.html › crayon**, ou **Add file › Upload files**), puis valide. Un nouvel APK est compilé automatiquement.
