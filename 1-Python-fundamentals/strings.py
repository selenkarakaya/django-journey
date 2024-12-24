# Strings in python are surrounded by either single or double quotation marks. Let's look at string formatting and some string methods

name = "Selennur"
age = 29
# Concatenate

print("Hello I am " + name + " and I am " + str(age))

# String Formatting

# Arguments by position
print("{}, {}, {}".format("a", "b", "c"))
print("{1}, {2}, {0}".format("a", "b", "c"))

# Arguments by name
print("My name is {name} and I am {age}".format(name=name, age=age))

# F-string
print(f"My name is {name} and I am {age}")

# String Methods

s = "Hello There World"

# Capitalize first letter

print(s.capitalize())

# Uppercase & lowercase & swap Case

print(s.upper())
print(s.lower())
print(s.swapcase())

# Get length

print(len(s))


# Replace
print(s.replace("World", "everyone"))

# Count
sub = "H"
print(s.count("W"))

# Starts with
print(s.startswith("Hello"))

# Ends with
print(s.endswith("World"))

# Split into a list

print(s.split())
print(len(s.split()))

# Find position
print(s.find("r"))

# is all alphanumeric & alphabetic & numeric

print(s.isalnum())
print(s.isalpha())
print(s.isnumeric())
