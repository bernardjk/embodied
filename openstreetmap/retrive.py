import overpy
import json

api = overpy.Overpass()

query = """
(
  node["building"]["name"](34.0400,-118.4570,34.0738,-118.4360);
  way["building"]["name"](34.0400,-118.4570,34.0738,-118.4360);
);
out center;
"""
result = api.query(query)

buildings = []

for way in result.ways:
    building_name = way.tags.get("name", "N/A")
    latitude = float(way.center_lat)
    longitude = float(way.center_lon)
    buildings.append({
        "name": building_name,
        "coordinates": {
            "latitude": latitude,
            "longitude": longitude
        }
    })

for node in result.nodes:
    building_name = node.tags.get("name", "N/A")
    latitude = float(node.lat)
    longitude = float(node.lon)
    buildings.append({
        "name": building_name,
        "coordinates": {
            "latitude": latitude,
            "longitude": longitude
        }
    })

with open('ucla_buildings.json', 'w') as json_file:
    json.dump(buildings, json_file, indent=4)

print("Building data has been successfully saved to ucla_buildings.json")