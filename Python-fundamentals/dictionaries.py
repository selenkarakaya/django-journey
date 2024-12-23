# A Dictionary is a collection which is unordered, changeable and indexed. No duplicate members.

# Simple dict

person = {"first_name": "Selen", "last_name": "Karakaya", "age": 29}
# Using a constructor
# person = dict(first_name='John', last_name='Doe',age=30)

# Access value
print(person['first_name'])
print(person.get('last_name'))

# Add key/value
person["phone"] = "555-55-55"

# Get keys
print(person.keys())

# Get values
print(person.values())

# Get items
print(person.items())

# Make copy
person2 = person.copy()
person2['city'] = 'Boston'

# Remove item
del (person2["age"])
person2.pop("phone")

# Clear
person.clear()

# Get length
print(len(person2))


# List of dict
people = [
    {'name': 'Martha', 'age': 40},
    {'name': 'Bob', 'age': 20}
]
print(people[1]['name'])
