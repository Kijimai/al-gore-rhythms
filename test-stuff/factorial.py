def factorial(num):
    if num == 1:
        return 1
    return num * factorial(num - 1)

twelve_result = factorial(3)
print(twelve_result)