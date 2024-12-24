class User:
    # Constructor
    def __init__(self, name, email, age):
        self.name = name
        self.email = email
        self.age = age
        self.balance = 0
        self.increment = 0
        self.decrement = 0

    def set_increment(self, increment):
        self.increment = increment
        self.update_balance()

    def set_decrement(self, decrement):
        self.decrement = decrement
        self.update_balance()

    def update_balance(self):
        self.balance += self.increment - self.decrement
        self.increment = 0
        self.decrement = 0
        return self.balance

    # Greet the user

    def greeting(self):
        return (f"My name is {self.name}, I am {self.age} years old, "
                f"my balance is {self.balance}, increment is {
                    self.increment}, "
                f"and decrement is {self.decrement}.")


# Create a new user
user1 = User("Alice", "alice@example.com", 25)


user1.set_increment(100)
user1.set_decrement(30)

print(user1.greeting())
