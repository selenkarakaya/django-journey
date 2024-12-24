def sayHello(name):
    name = f"Hello {name}"
    return name


def count(A, B):
    total = A+B
    ext = B-A
    name = sayHello("selen")
    return total, name, ext


numSum = count(4, 6)
print(numSum)


def addOneToNum(num):
    num += 1
    return num


print(addOneToNum(7))
