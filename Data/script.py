import csv
import psycopg2

# Connexion à la base de données PostgreSQL
conn = psycopg2.connect(
    dbname="cinema_db",
    user="postgres",
    password="1234",
    host="localhost",
    port="5432"
)
cursor = conn.cursor()


# Création de la table si elle n'existe pas
# cursor.execute('''
#     CREATE TABLE IF NOT EXISTS cinemas (
#         id SERIAL PRIMARY KEY,
#         nom TEXT,
#         adresse TEXT,
#         code_insee TEXT,
#         commune TEXT,
#         population_commune FLOAT,
#         dep TEXT,
#         ecrans INT,
#         fauteuils INT,
#         entrees_2022 FLOAT,
#         entrees_2021 FLOAT,
#         evolution_entrees FLOAT,
#         multiplexe TEXT,
#         latitude FLOAT,
#         longitude FLOAT
#     );
# ''')
# conn.commit()


# Lecture et insertion des données du fichier CSV
with open("etablissements-cinematographiques.csv", "r", encoding="utf-8") as file:
    reader = csv.reader(file, delimiter=';')
    next(reader)  # Ignorer l'en-tête
    for row in reader:
        cursor.execute('''
            INSERT INTO cinemas (
                nom, region, adresse, code_insee, commune, population_commune, dep,
                ecrans, fauteuils, entrees_2022, entrees_2021,
                evolution_entrees, multiplexe, latitude, longitude
            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        ''', (
             row[2],row[3], row[4], row[5], row[6], float(row[7]) if row[7] else None, row[8],
            int(float(row[13])) if row[13] else None, int(float(row[14])) if row[14] else None,
            float(row[17]) if row[17] else None, float(row[18]) if row[18] else None,
            float(row[19]) if row[19] else None, row[26],
            float(row[37]) if row[37] else None, float(row[38]) if row[38] else None
        ))

# Valider et fermer la connexion
conn.commit()
cursor.close()
conn.close()

print("Importation terminée avec succès !")
