# Les données
- https://data.culture.gouv.fr/explore/dataset/etablissements-cinematographiques/export/?refine.region_administrative=BRETAGNE&refine.multiplexe=OUI

## Configuration
- Installation de postgre et postgis (avec Stack Builder )
- Dans la base de données "CREATE EXTENSION postgis;"


## Documentation
- https://docs.snowflake.com/sql-reference/functions-geospatial


## Exemple de requête
- Sélection la distance entre deux géométrie (Attention: Passer les géométries en type géography pour avoir le résultat en mètre)   
SELECT ST_Distance(Geography(ST_GeomFromText('POINT(-4.4860088 48.3905283)', 4326)), Geography(geom))
FROM cinemas